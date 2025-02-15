import React, { useState } from 'react';
import useUserInfo from '../hooks/useUserInfo';
import useAxiosSecure from '../hooks/useAxiosSecure';

const CashOutPage = () => {
  const { user } = useUserInfo(); // Authenticated user's info
  const axiosSecure = useAxiosSecure();

  const [formData, setFormData] = useState({
    agentName: '',
    agentEmail: '',
    amount: '',
    pin: '',
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
  
    // Validate PIN format
    if (!/^\d{5}$/.test(formData.pin)) {
      setError('Pin must be exactly 5 digits');
      return;
    }
  
    try {
      const response = await axiosSecure.post('/cashOut', {
        agentName: formData.agentName,
        agentEmail: formData.agentEmail,
        amount: parseFloat(formData.amount),
        pin: formData.pin,
      });
  
      setSuccess(response.data.message || 'Cash-out successful!');
      setFormData({ agentName: '', agentEmail: '', amount: '', pin: '' });
    } catch (err) {
      console.error('Error response from backend:', err);  // Log the error response here
      if (err.response?.status === 404) {
        setError('Agent not found!');
      } else if (err.response?.status === 400) {
        setError(err.response?.data?.message || 'Cash-out failed. Please try again.');
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-[#e4c8a2] text-[#560106] rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Cash Out</h2>

        {error && <p className="text-red-600 text-center mb-4">{error}</p>}
        {success && <p className="text-green-600 text-center mb-4">{success}</p>}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-1">Agent Name</label>
            <input
              type="text"
              name="agentName"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#560106] focus:border-[#560106] outline-none transition-all"
              placeholder="Agent's Name"
              value={formData.agentName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Agent Email</label>
            <input
              type="email"
              name="agentEmail"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#560106] focus:border-[#560106] outline-none transition-all"
              placeholder="Agent's Email"
              value={formData.agentEmail}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Amount</label>
            <input
              type="number"
              name="amount"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#560106] focus:border-[#560106] outline-none transition-all"
              placeholder="Amount"
              value={formData.amount}
              onChange={handleInputChange}
              required
              min="1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Pin (5 digits)</label>
            <input
              type="number"
              name="pin"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#560106] focus:border-[#560106] outline-none transition-all"
              placeholder="12345"
              value={formData.pin}
              onChange={handleInputChange}
              required
              maxLength={5}
              min="0"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#560106] text-white font-medium py-2.5 rounded-lg transition-colors"
          >
            Cash Out
          </button>
        </form>
      </div>
    </div>
  );
};

export default CashOutPage;