import { Navigate } from 'react-router-dom'

export default function PrivateRoute({ children }) {
  const user = localStorage.getItem('crabstack_user')
  if (!user) return <Navigate to="/admin/login" replace />
  return children
}
