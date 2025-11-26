import React from 'react'
import AdminOptions from '../components/admin-options.tsx'

const AdminLandingPage: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: 'var(--color-bg-primary)',
        padding: '20px',
        color: 'var(--color-fg-primary)',
      }}
    >
      <h1>ARE THEY HERE</h1>
      <h2>Admin Landing Page</h2>
      <p>Welcome to the admin landing page.</p>
      <AdminOptions />
    </div>
  )
}

export default AdminLandingPage
