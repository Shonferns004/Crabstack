import { useState, useEffect } from 'react'
import { api } from '../api'
import { SkeletonCard } from '../../components/Skeleton'

export default function Dashboard() {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    Promise.all([
      api.get('/projects').catch(() => []),
      api.get('/contacts?unread=true').catch(() => []),
      api.get('/subscribers').catch(() => []),
      api.get('/bookings').catch(() => []),
      api.get('/services').catch(() => []),
      api.get('/testimonials').catch(() => []),
      api.get('/blog').catch(() => []),
      api.get('/clients').catch(() => []),
    ]).then(([projects, contacts, subscribers, bookings, services, testimonials, blog, clients]) => {
      setStats({
        projects: Array.isArray(projects) ? projects.length : 0,
        messages: Array.isArray(contacts) ? contacts.length : 0,
        subscribers: Array.isArray(subscribers) ? subscribers.length : 0,
        bookings: Array.isArray(bookings) ? bookings.length : 0,
        services: Array.isArray(services) ? services.length : 0,
        testimonials: Array.isArray(testimonials) ? testimonials.length : 0,
        blog: Array.isArray(blog) ? blog.length : 0,
        clients: Array.isArray(clients) ? clients.length : 0,
      })
    }).finally(() => setLoading(false))
  }, [])

  const cards = [
    { label: 'Projects', key: 'projects', icon: 'folder', color: 'text-blue-400' },
    { label: 'Unread Messages', key: 'messages', icon: 'mail', color: 'text-green-400' },
    { label: 'Subscribers', key: 'subscribers', icon: 'subscriptions', color: 'text-purple-400' },
    { label: 'Bookings', key: 'bookings', icon: 'calendar_month', color: 'text-yellow-400' },
    { label: 'Services', key: 'services', icon: 'build', color: 'text-pink-400' },
    { label: 'Testimonials', key: 'testimonials', icon: 'format_quote', color: 'text-orange-400' },
    { label: 'Blog Posts', key: 'blog', icon: 'article', color: 'text-cyan-400' },
    { label: 'Clients', key: 'clients', icon: 'groups', color: 'text-indigo-400' },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {loading ? (
          Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)
        ) : stats ? (
          cards.map(card => (
            <div key={card.label} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex items-center gap-4">
              <span className={`material-symbols-outlined text-3xl ${card.color}`}>{card.icon}</span>
              <div>
                <div className="text-3xl font-bold">{stats[card.key]}</div>
                <div className="text-zinc-500 text-sm">{card.label}</div>
              </div>
            </div>
          ))
        ) : null}
      </div>
    </div>
  )
}
