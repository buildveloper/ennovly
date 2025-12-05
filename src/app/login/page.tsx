import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default function Login() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-gray-900 p-12 rounded-3xl">
        <h2 className="text-4xl text-white mb-8">Sign in to Ennovly</h2>
        <form action="/auth/signin" method="post" className="space-y-6">
          <input name="email" placeholder="Email" type="email" required className="w-full p-4 rounded-xl bg-gray-800 text-white" />
          <input name="password" placeholder="Password" type="password" required className="w-full p-4 rounded-xl bg-gray-800 text-white" />
          <button type="submit" className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-xl font-bold">
            Sign in
          </button>
        </form>
        <div className="mt-6 text-center">
          <a href="/auth/google" className="text-blue-400">Or sign in with Google</a>
        </div>
      </div>
    </div>
  )
}