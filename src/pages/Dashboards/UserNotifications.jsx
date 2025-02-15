import React, { useState, useEffect } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const UserNotifications = () => {
  const [notifications, setNotifications] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axiosSecure.get('/notifications');
        console.log(response.data.notifications); // Now it should work as expected
        setNotifications(response.data.notifications); // Set notifications correctly
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchNotifications();
  }, [axiosSecure]);

  return (
    <section className="min-h-screen w-11/12 mx-auto py-10">
      <h1 className="text-[#560106] font-extrabold text-4xl mb-6">Notifications</h1>
      <div className="bg-[#e4c8a2] p-6 rounded-lg shadow-lg">
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <div
              key={notification._id} // Assuming _id is unique for each notification
              className="border-b border-[#560106] py-4 last:border-b-0"
            >
              <p className="text-lg text-[#560106] font-medium">{notification.message}</p>
              <p className="text-sm text-gray-600">{new Date(notification.timestamp).toLocaleString()}</p>
            </div>
          ))
        ) : (
          <p>No notifications available.</p>
        )}
      </div>
    </section>
  );
};

export default UserNotifications;