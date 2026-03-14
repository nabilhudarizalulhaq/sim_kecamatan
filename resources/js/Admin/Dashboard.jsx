import React from 'react';

const AdminDashboard = () => {
    return (
        <div style={{ padding: '2rem' }}>
            <h1>Admin Dashboard</h1>
            <div style={{
                display: 'flex',
                gap: '2rem',
                marginTop: '2rem',
                flexWrap: 'wrap'
            }}>
                <div style={{
                    background: '#f5f5f5',
                    padding: '1.5rem',
                    borderRadius: '8px',
                    minWidth: '200px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                }}>
                    <h2>Users</h2>
                    <p>Manage user accounts and permissions.</p>
                </div>
                <div style={{
                    background: '#f5f5f5',
                    padding: '1.5rem',
                    borderRadius: '8px',
                    minWidth: '200px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                }}>
                    <h2>Posts</h2>
                    <p>Review and publish posts.</p>
                </div>
                <div style={{
                    background: '#f5f5f5',
                    padding: '1.5rem',
                    borderRadius: '8px',
                    minWidth: '200px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                }}>
                    <h2>Settings</h2>
                    <p>Configure website settings.</p>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;