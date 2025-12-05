import Link from 'next/link'

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

        <div className="mt-16 flex gap-8 justify-center flex-wrap">
          <Link href="/login"
            className="px-12 py-6 text-2xl font-bold bg-gray-800 rounded-2xl hover:bg-gray-700 transition">
            Log in
          </Link>
          <Link href="/signup"
            className="px-12 py-6 text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl hover:scale-105 transition">
            Sign Up Free
          </Link>
        </div>

        <p className="mt-20 text-gray-500">
          100% free for the first 1,000 dealerships • No card needed
        </p>
      </div>
    </div>
  )
}