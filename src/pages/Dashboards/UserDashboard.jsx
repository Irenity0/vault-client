import React, { useState } from 'react';

const UserDashboard = () => {
  const [isBlurred, setIsBlurred] = useState(true);

  const toggleBlur = () => {
    setIsBlurred((prev) => !prev);
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
    </section>
  );
};

export default UserDashboard;
