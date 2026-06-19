import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../../context/AdminContext';
import '../../styles/Admin.css';

export default function AdminAddMember() {
  const { siteData, updateSiteData } = useAdmin();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    location: '',
    joinDate: new Date().toISOString().split('T')[0],
    status: 'Active'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create new member
    const newMember = {
      id: Date.now(),
      ...formData
    };

    // Update site data
    const updatedMembers = [...(siteData.members || []), newMember];
    updateSiteData('members', updatedMembers);

    alert('Member added successfully!');
    navigate('/admin/members');
  };

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <h1>Add New Member</h1>
        <button type="button" onClick={() => navigate('/admin/members')} className="admin-btn-secondary">
          Cancel
        </button>
      </div>

      <div className="admin-card" style={{ maxWidth: '600px' }}>
        <form onSubmit={handleSubmit}>
          <div className="admin-form-group">
            <label>Full Name:</label>
            <input 
              type="text"
              name="name"
              className="admin-input" 
              value={formData.name} 
              onChange={handleChange} 
              placeholder="e.g., John Doe"
              required
            />
          </div>

          <div className="admin-form-group">
            <label>Location (Zone/City):</label>
            <input 
              type="text"
              name="location"
              className="admin-input" 
              value={formData.location} 
              onChange={handleChange} 
              placeholder="e.g., Zone 1"
              required
            />
          </div>

          <div className="admin-form-group">
            <label>Join Date:</label>
            <input 
              type="date"
              name="joinDate"
              className="admin-input" 
              value={formData.joinDate} 
              onChange={handleChange} 
              required
            />
          </div>

          <div className="admin-form-group">
            <label>Status:</label>
            <select 
              name="status"
              className="admin-input" 
              value={formData.status} 
              onChange={handleChange}
            >
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <div style={{ marginTop: '32px' }}>
            <button type="submit" className="admin-btn-primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '6px'}}><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              Create Member
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
