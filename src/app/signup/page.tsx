'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase'

export default function SignUpPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const supabase = createClient()

  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: `${location.origin}/dashboard` },
    })
    if (error) alert(error.message)
    else alert('Check your email to confirm!')
    setLoading(false)
  }

  const handleGoogleSignUp = () => {
    supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    })
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="bg-gray-900 p-10 rounded-3xl max-w-md w-full">
        <h2 className="text-4xl text-white text-center mb-8">Join Ennovly Free</h2>

        <button
          onClick={handleGoogleSignUp}
          className="w-full py-4 mb-6 bg-white text-black rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-gray-100 transition"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-.85 2.09-2.59 2.09v3.25h4.2c2.46-2.26 3.87-5.59 3.87-9.6z"/>
            <path fill="#34A853" d="M12 23c3.24 0 5.95-1.08 7.93-2.93l-4.2-3.25c-1.14.77-2.6 1.23-3.73 1.23-2.86 0-5.28-1.93-6.15-4.53H1.47v3.3C3.43 20.92 7.3 23 12 23z"/>
            <path fill="#FBBC05" d="M5.85 14.47c-.21-.63-.33-1.3-.33-2s.12-1.37.33-2v-3.3H1.47c-.66 1.32-1.04 2.82-1.04 4.3 0 1.48.38 2.98 1.04 4.3l4.38-3.3z"/>
            <path fill="#EA4335" d="M12 4.77c1.77 0 3.36.61 4.61 1.8l3.45-3.45C17.95.92 15.24 0 12 0 7.3 0 3.43 2.08 1.47 5.38l4.38 3.3C6.72 5.93 9.14 4.77 12 4.77z"/>
          </svg>
          Continue with Google
        </button>

        <div className="text-center text-gray-500 mb-6">or</div>

        <form onSubmit={handleEmailSignUp} className="space-y-6">
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required className="w-full p-4 rounded-xl bg-gray-800 text-white" />
          <input type="password" placeholder="Password (6+ chars)" value={password} onChange={e => setPassword(e.target.value)} required minLength={6} className="w-full p-4 rounded-xl bg-gray-800 text-white" />
          <button type="submit" disabled={loading} className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-xl font-bold">
            {loading ? 'Creating...' : 'Sign Up Free'}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-400">
          Already have an account? <a href="/login" className="text-blue-400 hover:underline">Log in</a>
        </p>
      </div>
    </div>
  )
}