import { Navigate, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useAdmin } from '../context/AdminContext';
import AdminHero from './admin/AdminHero';
import AdminContent from './admin/AdminContent';
import AdminMembers from './admin/AdminMembers';
import AdminAddMember from './admin/AdminAddMember';
import AdminMessages from './admin/AdminMessages';
import '../styles/Admin.css';

export function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAdmin();
  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }
  return children;
}

export function AdminLayout() {
  const { logout } = useAdmin();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-brand">
          <h2>JCI Admin</h2>
        </div>
        <nav className="admin-nav">
          <Link to="/admin">Dashboard</Link>
          <Link to="/admin/hero">Hero Slider</Link>
          <Link to="/admin/content">Page Content</Link>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Link to="/admin/members">Members</Link>
            <Link to="/admin/members/add" style={{ paddingLeft: '32px', fontSize: '0.85rem', marginTop: '-4px' }}>+ Add Member</Link>
          </div>
          <Link to="/admin/messages">Messages</Link>
        </nav>
        <div className="admin-sidebar-footer">
          <button onClick={handleLogout} className="btn-logout">Logout</button>
          <Link to="/" className="btn-view-site">View Site</Link>
        </div>
      </aside>
      <main className="admin-main">
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/hero" element={<AdminHero />} />
          <Route path="/content" element={<AdminContent />} />
          <Route path="/members" element={<AdminMembers />} />
          <Route path="/members/add" element={<AdminAddMember />} />
          <Route path="/messages" element={<AdminMessages />} />
        </Routes>
      </main>
    </div>
  );
}

function AdminDashboard() {
  const { siteData } = useAdmin();
  return (
    <div className="admin-page">
      <h1>Dashboard Overview</h1>
      <div className="admin-stats-grid">
        <div className="admin-stat-card">
          <h3>Total Members</h3>
          <p className="stat-number">{siteData.members.length}</p>
        </div>
        <div className="admin-stat-card">
          <h3>Active Sliders</h3>
          <p className="stat-number">{siteData.heroSlides.length}</p>
        </div>
        <div className="admin-stat-card">
          <h3>New Messages</h3>
          <p className="stat-number">{siteData.contactMessages.filter(m => !m.read).length}</p>
        </div>
      </div>
    </div>
  );
}
