import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

// Load grounding data
const loadGroundingData = () => {
  try {
    const summary = fs.readFileSync(path.join(process.cwd(), "me/summary.txt"), "utf-8");
    const linkedin = fs.readFileSync(path.join(process.cwd(), "me/linkedin.txt"), "utf-8");
    const projects = fs.readFileSync(path.join(process.cwd(), "content/projects.json"), "utf-8");
    return `
Resume/Summary:
${summary}

LinkedIn/Experience:
${linkedin}

Projects:
${projects}
`;
  } catch (e) {
    console.error("Error loading grounding data", e);
    return "Portfolio info not available.";
  }
};

const groundingContext = loadGroundingData();

// Initialize Resend
let resend = null;
if (process.env.RESEND_API_KEY) {
  resend = new Resend(process.env.RESEND_API_KEY);
}

// Function Declarations for Gemini
const captureLead = {
  name: "captureLead",
  parameters: {
    type: Type.OBJECT,
    description: "Capture user contact information for follow-up or lead generation.",
    properties: {
      name: { type: Type.STRING, description: "The name of the user." },
      email: { type: Type.STRING, description: "The email of the user." },
      message: { type: Type.STRING, description: "The message or inquiry from the user." },
    },
    required: ["name", "email"],
  },
};

// API Routes
app.post("/api/chat", async (req, res) => {
  const { messages } = req.body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Invalid messages" });
  }

  try {
    let geminiModel = process.env.GEMINI_MODEL || "gemini-3-flash-preview";
    const modelsToTry = [geminiModel];
    
    // Fallback chain with modern models to handle quota/demand issues
    const fallbacks = [
      "gemini-3.1-flash-lite",
      "gemini-flash-latest"
    ];
    for (const fb of fallbacks) {
      if (!modelsToTry.includes(fb)) {
        modelsToTry.push(fb);
      }
    }

    let lastError = null;
    let responseText = "";
    let successfulModel = "";

    for (const modelName of modelsToTry) {
      try {
        console.log(`[CHAT] Attempting with model: ${modelName}`);
        
        const chat = ai.chats.create({
          model: modelName,
          config: {
            systemInstruction: `You are the AI assistant for Yug Agarwal's portfolio. 
            Your goal is to answer questions about Yug's background, skills, and projects based on the provided context.
            If you don't know the answer, politely say so.
            If a user seems interested in working with Yug or hiring him, use the 'captureLead' tool to gather their contact info.
            Keep responses helpful, professional, and concise.

            Context about Yug:
            ${groundingContext}`,
            tools: [{ functionDeclarations: [captureLead] }],
          },
          history: messages.slice(0, -1).map((m) => ({
              role: m.role === 'assistant' ? 'model' : 'user',
              parts: [{ text: m.content }]
          }))
        });

        const result = await chat.sendMessage({ message: messages[messages.length - 1].content });
        const text = result.text;
        const functionCalls = result.functionCalls;

        if (functionCalls) {
          for (const fc of functionCalls) {
            if (fc.name === "captureLead") {
              const { name, email, message } = fc.args;
              console.log(`[LEAD CAPTURED] Name: ${name}, Email: ${email}, Message: ${message}`);
              
              if (resend && process.env.NOTIFY_EMAIL) {
                try {
                  await resend.emails.send({
                    from: process.env.RESEND_FROM || "onboarding@resend.dev",
                    to: process.env.NOTIFY_EMAIL,
                    subject: `New Lead from Portfolio: ${name}`,
                    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message || "N/A"}`,
                  });
                } catch (err) {
                  console.error("Failed to send email via Resend", err);
                }
              }
              return res.json({ message: "Thank you for reaching out! I've captured your details and Yug will get back to you soon." });
            }
          }
        }

        responseText = text;
        successfulModel = modelName;
        break; // Success, exit loop
      } catch (error) {
        lastError = error;
        const status = error.status || (error.message?.includes("429") ? 429 : error.message?.includes("503") ? 503 : error.message?.includes("404") ? 404 : 500);
        
        console.warn(`[CHAT] Model ${modelName} failed with status ${status}:`, error.message);
        
        // If it's a transient server error or quota issue, try next model
        if (status !== 429 && status !== 404 && status !== 503) {
          break;
        }
      }
    }

    if (successfulModel) {
      console.log(`[CHAT] Successfully responded with ${successfulModel}`);
      return res.json({ message: responseText });
    }

    // If we get here, all attempts failed
    const error = lastError;
    const isQuota = error.message?.includes("429") || error.status === 429;
    
    if (isQuota) {
      const retryMatch = error.message?.match(/retry in ([\d\.]+)s/);
      const waitTime = retryMatch ? `${Math.ceil(parseFloat(retryMatch[1]))}s` : "a few seconds";
      return res.status(429).json({ 
        error: `Quota exceeded for all available models. Please try again in ${waitTime}.` 
      });
    }

    res.status(error.status || 500).json({ error: error.message || "Failed to generate response" });
  } catch (outerError) {
    console.error("Critical Chat Error:", outerError);
    res.status(500).json({ error: "A critical error occurred." });
  }
});

// Vite middleware
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
