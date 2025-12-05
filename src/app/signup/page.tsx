'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const res = await fetch('/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    })

    if (res.ok) {
      alert('Check your email to confirm your account!')
      router.push('/login')
    } else {
      const data = await res.json()
      alert(data.error || 'Something went wrong')
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-gray-900 p-12 rounded-3xl max-w-md w-full">
        <h2 className="text-4xl text-white mb-8 text-center">Create your Ennovly account</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-4 rounded-xl bg-gray-800 text-white"
          />
          <input
            type="password"
            placeholder="Password (min 6 chars)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            className="w-full p-4 rounded-xl bg-gray-800 text-white"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-xl font-bold disabled:opacity-50"
          >
            {loading ? 'Creating account...' : 'Sign Up Free'}
          button>
        form>

        <p className="mt-6 text-center text-gray-400">
          Already have an account?{' '}
          <a href="/login" className="text-blue-400 hover:underline">Log ina>
        p>
      div>
    div>
  )
}