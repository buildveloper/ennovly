import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'

export default async function Dashboard() {
  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  if (!session) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        <Link href="/login" className="text-3xl">Please log in →</Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-5xl font-black bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Welcome back
          </h1>
          <form action="/auth/signout" method="post">
            <button className="px-6 py-3 bg-red-600 rounded-xl">Sign out</button>
          </form>
        </div>

        <div className="text-center py-20">
          <h2 className="text-4xl mb-8">Upload your first car → AI magic starts</h2>
          <w className="px-12 py-6 text-2xl bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl">
            Upload Photo
          </w>
        </div>
      </div>
    </div>
  )
}