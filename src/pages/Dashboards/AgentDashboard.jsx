import React, { useState } from 'react';

const AgentDashboard = () => {
  const [isBlurred, setIsBlurred] = useState(true);

  const toggleBlur = () => {
    setIsBlurred((prev) => !prev);
  };

  const handleRecharge = () => {
    console.log('btn clicked');
  };

  return (
    <section className="h-[38rem] w-11/12 mx-auto py-10">
      <h1 className="text-[#560106] font-extrabold text-4xl mr-4">
        Balance Inquiry:  
        <span
          className={`cursor-pointer ${isBlurred ? 'blur' : ''} ml-4`}
          onClick={toggleBlur}
        >
          $$$$
        </span>
      </h1>
      <br />
      <button
        className="btn bg-[#560106] text-white py-2 px-6 rounded-md hover:bg-[#7a0811] transition-colors"
        onClick={handleRecharge}
      >
        Balance Recharge: 100,000
      </button>
    </section>
  );
};

export default AgentDashboard;
