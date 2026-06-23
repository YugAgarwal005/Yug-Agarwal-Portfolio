import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#020617] text-white flex flex-col items-center justify-center p-6 text-center">
          <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            <div className="absolute top-[20%] left-[20%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px]" />
          </div>
          <div className="max-w-md p-10 rounded-[3rem] border border-white/5 bg-white/5 backdrop-blur-3xl space-y-6 shadow-2xl">
            <div className="size-16 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mx-auto text-3xl font-black">
              ⚠️
            </div>
            <h1 className="text-3xl font-black tracking-tighter">Something went wrong</h1>
            <p className="text-slate-400 text-sm leading-relaxed">
              An unexpected interface error was encountered. Click below to return home.
            </p>
            <button
              onClick={() => {
                window.location.href = '/';
              }}
              className="w-full h-12 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-all shadow-lg active:scale-95"
            >
              Return Home
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
