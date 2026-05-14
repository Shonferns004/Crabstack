import { Navigate } from 'react-router-dom'

export default function PrivateRoute({ children }) {
  const token = localStorage.getItem('crabstack_token')
  if (!token) return <Navigate to="/admin/login" replace />
  return children
}
