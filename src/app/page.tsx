export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="flex items-center justify-between px-8 py-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold">OmnexaAI</h1>

        <div className="space-x-6">
          <button>Pricing</button>
          <button>Login</button>
        </div>
      </nav>

      <section className="flex flex-col items-center justify-center text-center py-32 px-6">
        <h1 className="text-6xl font-bold max-w-4xl">
          Access Every Leading AI Model in One Place
        </h1>

        <p className="text-gray-400 text-xl mt-6 max-w-2xl">
          Chat with GPT, Claude, Gemini, DeepSeek and more through a single
          workspace.
        </p>

        <button className="mt-10 px-8 py-4 bg-white text-black rounded-xl font-semibold">
          Start Free
        </button>
      </section>

      <section className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Supported Models
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="border border-gray-800 rounded-xl p-6 text-center">
            GPT
          </div>

          <div className="border border-gray-800 rounded-xl p-6 text-center">
            Claude
          </div>

          <div className="border border-gray-800 rounded-xl p-6 text-center">
            Gemini
          </div>

          <div className="border border-gray-800 rounded-xl p-6 text-center">
            DeepSeek
          </div>
        </div>
      </section>
    </main>
  );
}