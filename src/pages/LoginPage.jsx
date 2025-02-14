import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAxiosPublic from '../hooks/useAxiosPublic';

const LoginPage = () => {

  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  // State to store form input values
  const [formData, setFormData] = useState({
    mobileNumber: '',
    pin: '',
    role: 'user', // Default to 'user' for normal users, 'admin' can be set manually
  });

  // State for errors
  const [error, setError] = useState(null);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosPublic.post('/login', formData);

      // Check for errors regarding multiple logins for users/agents
      if (response?.data?.message === 'You are already logged in from another device!') {
        setError('You are already logged in from another device!');
        return;
      }

      // Store the JWT token in localStorage or in state
      localStorage.setItem('token', response.data.token);

      // Redirect to the dashboard or homepage after successful login
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-[#e4c8a2] text-[#560106] rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>

        {error && <p className="text-red-600 text-center mb-4">{error}</p>}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-1">Mobile Number</label>
            <input
              type="text"
              name="mobileNumber"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#560106] focus:border-[#560106] outline-none transition-all"
              placeholder="Your Mobile Number"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Pin (5 digits)</label>
            <input
              type="text"
              name="pin"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#560106] focus:border-[#560106] outline-none transition-all"
              placeholder="12345"
              value={formData.pin}
              onChange={handleInputChange}
              required
              maxLength={5}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#560106] text-white font-medium py-2.5 rounded-lg transition-colors"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          Don't have an account?{' '}
          <Link className="text-[#560106] hover:text-[#560106] font-bold underline" to="/register">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
