export default function TailwindTestPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center justify-center p-6 selection:bg-cyan-500 selection:text-slate-950">
      <div className="max-w-md w-full bg-slate-800 border border-slate-700 rounded-2xl p-8 shadow-2xl space-y-6 transform hover:scale-[1.02] transition-transform duration-300">
        
        {/* Header Section */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 mb-2 animate-pulse">
            ✓
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Tailwind CSS Live
          </h1>
          <p className="text-sm text-slate-400">
            If you see a dark card with gradients, styling is active.
          </p>
        </div>

        {/* Feature Grid Test */}
        <div className="grid grid-cols-2 gap-3 text-xs font-medium">
          <div className="p-3 bg-slate-900/50 rounded-lg border border-slate-700/50 text-center sm:text-left">
            🎨 Flex & Grid
          </div>
          <div className="p-3 bg-slate-900/50 rounded-lg border border-slate-700/50 text-center sm:text-left">
            ✨ Gradients
          </div>
        </div>

        {/* Interactivity & State Test */}
        <button className="w-full py-3 px-4 bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-slate-950 font-semibold rounded-xl shadow-lg shadow-emerald-500/20 transition-colors duration-200 cursor-pointer">
          Hover & Click Test
        </button>

      </div>
    </main>
  );
}
