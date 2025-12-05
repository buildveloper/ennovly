import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function Dashboard() {
  const cookieStore = await cookies()

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookies().set(name, value, options)
            )
          } catch {
            // Ignore if called from Server Component (handled by middleware)
          }
        },
      },
    }
  )

  const { data: { session } } = await supabase.auth.getSession()

  if (!session) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-5xl font-black bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Welcome back, {session.user.email?.split('@')[0] || 'Dealer'}
          </h1>
          <form action="/auth/signout" method="post">
            <button className="px-6 py-3 bg-red-600 rounded-xl hover:bg-red-700 transition">Sign out</button>
          </form>
        </div>

        <div className="text-center py-20">
          <h2 className="text-4xl mb-8">Upload your first car → AI magic starts</h2>
          <button className="px-12 py-6 text-2xl bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl hover:scale-105 transition">
            Upload Photo
          </button>
        </div>
      </div>
    </div>
  )
}