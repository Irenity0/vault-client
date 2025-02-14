import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAxiosPublic from '../hooks/useAxiosPublic';


const RegisterPage = () => {
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const [formData, setFormData] = useState({
    name: '',
    pin: '',
    mobileNumber: '',
    email: '',
    accountType: '',
    nid: '',
  });

  const [error, setError] = useState(null);

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
    // Validation for pin (5 digits) and NID (10 digits)
    if (formData.pin.length !== 5 || !/^\d{5}$/.test(formData.pin)) {
      setError('Pin must be a 5-digit number.');
      return;
    }

    if (formData.nid.length !== 10 || !/^\d{10}$/.test(formData.nid)) {
      setError('NID must be a 10-digit number.');
      return;
    }

    try {
      const response = await axiosPublic.post('/register', formData);
      console.log(response.data);
      // Redirect to login after successful registration
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-[#e4c8a2] text-[#560106] rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        {error && <p className="text-red-600 text-center mb-4">{error}</p>}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#560106] focus:border-[#560106] outline-none transition-all"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#560106] focus:border-[#560106] outline-none transition-all"
              placeholder="your@email.com"
              value={formData.email}
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
            <label className="block text-sm font-medium mb-1">Role</label>
            <select
              name="role"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#560106] focus:border-[#560106] outline-none transition-all"
              value={formData.role}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Role</option>
              <option value="user">User</option>
              <option value="agent">Agent</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">NID (10 digits)</label>
            <input
              type="text"
              name="nid"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#560106] focus:border-[#560106] outline-none transition-all"
              placeholder="Your NID"
              value={formData.nid}
              onChange={handleInputChange}
              required
              maxLength={10}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#560106] text-white font-medium py-2.5 rounded-lg transition-colors"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          Already have an account?{' '}
          <Link className="text-[#560106] hover:text-[#560106] font-bold underline" to="/login">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;