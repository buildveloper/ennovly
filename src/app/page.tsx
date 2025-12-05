export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center max-w-5xl">
        <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Ennovly
        </h1>
        <p className="mt-8 text-2xl md:text-4xl font-light text-gray-300">
          One car photo → Unlimited sales versions in seconds
        </p>
        <p className="mt-8 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Change colors • Fix damage • Swap rims • Luxury backgrounds • Instant WhatsApp share pages<br />
          Powered by an AI agent that understands exactly what you want.
        </p>

        <div className="mt-16">
          <button className="px-12 py-6 text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl hover:scale-105 transition shadow-2xl">
            Join Free Beta (1,000 spots)
          </button>
        </div>

        <p className="mt-20 text-gray-500">
          100% free for the first 1,000 dealerships • No credit card • 6 months
        </p>
      </div>

      {/* Floating AI bubble */}
      <div className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 p-5 rounded-full shadow-2xl cursor-pointer hover:scale-110 transition">
        <span className="text-white text-lg font-bold">🤖 Try the AI now</span>
      </div>
    </div>
  )
}