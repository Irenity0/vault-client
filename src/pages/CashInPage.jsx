import React, { useState } from 'react';

const CashInPage = () => {

  // State to store form input values
  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    amount: '',
    pin: '',
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
  
    // Check if the pin is exactly 5 digits and is a number
    if (!/^\d{5}$/.test(formData.pin)) {
        setError('Pin must be exactly 5 digits');
        return;
      }
  
    // Reset the error and proceed with form submission logic
    setError(null);
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
    <div className="max-w-md w-full bg-[#e4c8a2] text-[#560106] rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">User Cash In</h2>

      {error && <p className="text-red-600 text-center mb-4">{error}</p>}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium mb-1">User Name</label>
          <input
            type="text"
            name="userName"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#560106] focus:border-[#560106] outline-none transition-all"
            placeholder="User Name"
            value={formData.userName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">User Email</label>
          <input
            type="email"
            name="userEmail"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#560106] focus:border-[#560106] outline-none transition-all"
            placeholder="your@email.com"
            value={formData.userEmail}
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
            min="1" // or set other constraints like max
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
          Send Money
        </button>
      </form>
    </div>
  </div>
  );
};

export default CashInPage;
