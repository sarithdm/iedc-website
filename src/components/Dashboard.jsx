import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/users/profile', {
          headers: { Authorization: localStorage.getItem('token') },
        });
        setUser(data);
      } catch (error) {
        localStorage.removeItem('token');
        navigate('/login');
      }
    };

    fetchUserProfile();
  }, [navigate]);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Welcome, {user.username}</h2>
        <p>Your Role: {user.role}</p>
        {user.role === 'quality_lead' && <p>You can review quality checks.</p>}
        {user.role === 'event_lead' && <p>You can manage event approvals.</p>}
        {user.role === 'admin' && <p>You have full system access.</p>}
      </div>
    </div>
  );
};

export default Dashboard;
