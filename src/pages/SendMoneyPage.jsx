import React, { useState } from 'react';
import useUserInfo from '../hooks/useUserInfo';
import useAxiosSecure from '../hooks/useAxiosSecure';

const SendMoneyPage = () => {
  const { user } = useUserInfo(); // Authenticated user's info
  const axiosSecure = useAxiosSecure();

  const [formData, setFormData] = useState({
    recipientMobile: '',
    amount: '',
    pin: '',
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

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
  
    // Validate pin
    if (!/^\d{5}$/.test(formData.pin)) {
      setError('Pin must be exactly 5 digits');
      return;
    }
  
    try {
      const response = await axiosSecure.post('/sendMoney', {
        recipientMobile: formData.recipientMobile,
        amount: parseFloat(formData.amount),
        pin: formData.pin,
      });
  
      setSuccess(response.data.message || 'Money sent successfully!');
      setFormData({ recipientMobile: '', amount: '', pin: '' });
    } catch (err) {
      // Handle errors without logging out
      if (err.response?.status === 404) {
        setError('Recipient not found!');
      } else if (err.response?.status === 400) {
        setError(err.response?.data?.message || 'Transaction failed. Please try again.');
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
  
      // Ensure the user session isn't cleared on specific errors
      if (err.response?.status === 401) {
        // Optional: Handle session expiry here if necessary
        // Example: redirect to login or show session expired message
      }
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-[#e4c8a2] text-[#560106] rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Send Money</h2>

        {error && <p className="text-red-600 text-center mb-4">{error}</p>}
        {success && <p className="text-green-600 text-center mb-4">{success}</p>}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-1">Recipient Mobile</label>
            <input
              type="text"
              name="recipientMobile"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#560106] focus:border-[#560106] outline-none transition-all"
              placeholder="Recipient's mobile number"
              value={formData.recipientMobile}
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
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#560106] text-white font-medium py-2.5 rounded-lg transition-colors"
          >
            Send Money
          </button>
        </form>
      </div>
    </div>
  );
};

export default SendMoneyPage;