import React from 'react';

const UserNotifications = () => {
  // Sample notifications data
  const notifications = [
    { id: 1, message: 'Your balance has been updated.', time: '2025-02-13 10:30 AM' },
    { id: 2, message: 'New update available for the app.', time: '2025-02-12 4:15 PM' },
    { id: 3, message: 'Password changed successfully.', time: '2025-02-11 2:00 PM' },
  ];

  return (
    <section className="min-h-screen w-11/12 mx-auto py-10">
      <h1 className="text-[#560106] font-extrabold text-4xl mb-6">Notifications</h1>
      <div className="bg-[#e4c8a2] p-6 rounded-lg shadow-lg">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="border-b border-[#560106] py-4 last:border-b-0"
          >
            <p className="text-lg text-[#560106] font-medium">{notification.message}</p>
            <p className="text-sm text-gray-600">{notification.time}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UserNotifications;
