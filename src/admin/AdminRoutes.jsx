import { Routes, Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import AdminLayout from './components/AdminLayout'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Services from './pages/Services'
import Testimonials from './pages/Testimonials'
import FAQ from './pages/FAQ'
import Blog from './pages/Blog'
import Messages from './pages/Messages'
import Subscribers from './pages/Subscribers'
import Bookings from './pages/Bookings'
import Clients from './pages/Clients'
import Invoices from './pages/Invoices'
import Pages from './pages/Pages'
import Navigation from './pages/Navigation'
import SEO from './pages/SEO'
import Media from './pages/Media'
import Settings from './pages/Settings'
import ActivityLog from './pages/ActivityLog'
import Users from './pages/Users'
import Leads from './pages/Leads'
import GroqKeys from './pages/GroqKeys'

function AdminPage({ children }) {
  return <AdminLayout>{children}</AdminLayout>
}

export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="/admin/login" element={<Login />} />
      <Route path="/admin" element={<PrivateRoute><AdminPage><Dashboard /></AdminPage></PrivateRoute>} />
      <Route path="/admin/dashboard" element={<PrivateRoute><AdminPage><Dashboard /></AdminPage></PrivateRoute>} />
      <Route path="/admin/projects" element={<PrivateRoute><AdminPage><Projects /></AdminPage></PrivateRoute>} />
      <Route path="/admin/services" element={<PrivateRoute><AdminPage><Services /></AdminPage></PrivateRoute>} />
      <Route path="/admin/testimonials" element={<PrivateRoute><AdminPage><Testimonials /></AdminPage></PrivateRoute>} />
      <Route path="/admin/faq" element={<PrivateRoute><AdminPage><FAQ /></AdminPage></PrivateRoute>} />
      <Route path="/admin/blog" element={<PrivateRoute><AdminPage><Blog /></AdminPage></PrivateRoute>} />
      <Route path="/admin/messages" element={<PrivateRoute><AdminPage><Messages /></AdminPage></PrivateRoute>} />
      <Route path="/admin/subscribers" element={<PrivateRoute><AdminPage><Subscribers /></AdminPage></PrivateRoute>} />
      <Route path="/admin/bookings" element={<PrivateRoute><AdminPage><Bookings /></AdminPage></PrivateRoute>} />
      <Route path="/admin/clients" element={<PrivateRoute><AdminPage><Clients /></AdminPage></PrivateRoute>} />
      <Route path="/admin/leads" element={<PrivateRoute><AdminPage><Leads /></AdminPage></PrivateRoute>} />
      <Route path="/admin/invoices" element={<PrivateRoute><AdminPage><Invoices /></AdminPage></PrivateRoute>} />
      <Route path="/admin/pages" element={<PrivateRoute><AdminPage><Pages /></AdminPage></PrivateRoute>} />
      <Route path="/admin/navigation" element={<PrivateRoute><AdminPage><Navigation /></AdminPage></PrivateRoute>} />
      <Route path="/admin/seo" element={<PrivateRoute><AdminPage><SEO /></AdminPage></PrivateRoute>} />
      <Route path="/admin/media" element={<PrivateRoute><AdminPage><Media /></AdminPage></PrivateRoute>} />
      <Route path="/admin/settings" element={<PrivateRoute><AdminPage><Settings /></AdminPage></PrivateRoute>} />
      <Route path="/admin/groq-keys" element={<PrivateRoute><AdminPage><GroqKeys /></AdminPage></PrivateRoute>} />
      <Route path="/admin/activity" element={<PrivateRoute><AdminPage><ActivityLog /></AdminPage></PrivateRoute>} />
      <Route path="/admin/users" element={<PrivateRoute><AdminPage><Users /></AdminPage></PrivateRoute>} />
    </Routes>
  )
}
