import React, { useState } from 'react';
import './YourIssues.css';

const YourIssues = () => {
  const [email, setEmail] = useState('');
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setComplaints([]);

    try {
      const res = await fetch(`http://localhost:5000/api/complaints/email/${encodeURIComponent(email)}`);
      if (!res.ok) throw new Error("Could not fetch complaints");

      const data = await res.json();
      setComplaints(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="your-issues-container">
      <h2 className="your-issues-header">Track Your Reported Issues</h2>
      <p className="your-issues-subtext">Enter your email to view submitted issues:</p>

      <form className="email-input-box" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p style={{ textAlign: 'center' }}>Loading...</p>}
      {error && <p className="error">{error}</p>}

      <div className="complaints-list">
        {!loading && !error && complaints.length === 0 ? (
          <p style={{ textAlign: 'center', fontStyle: 'italic' }}>No complaints found.</p>
        ) : (
          complaints.map((issue) => (
            <div className="issue-card" key={issue.id}>
              <img src={issue.image_url} alt={issue.title} className="issue-thumbnail" />
              
              <div className="issue-details">
                <h3>{issue.title}</h3>
                <p>{issue.description}</p>
                <p><strong>Status:</strong> {issue.status}</p>
                <p><strong>Location:</strong> {issue.addressline1}, {issue.city}</p>
                <p><strong>Category:</strong> {issue.category}</p>
                <div className="status-badge">{issue.status}</div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default YourIssues;
