import React, { useState } from 'react';

const UserListTable = () => {

  const [users, setUsers] = useState([
    {
      id: 162,
      name: "Lakhan",
      mobile: "9414682217",
      walletBalance: 5,
      date: "2024-08-07 13:34:41",
      status: "Active",
    },
    {
      id: 161,
      name: "rk",
      mobile: "7737706622",
      walletBalance: 5,
      date: "2024-08-07 10:40:15",
      status: "Active",
    },
    // Add more user objects as needed
  ]);

  const toggleUserStatus = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, status: user.status === "Active" ? "Inactive" : "Active" } : user
      )
    );
  };
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 p-2 text-left">#</th>
            <th className="border border-gray-300 p-2 text-left">Member Name</th>
            <th className="border border-gray-300 p-2 text-left">Whatsapp</th>
            <th className="border border-gray-300 p-2 text-left">Mobile No</th>
            <th className="border border-gray-300 p-2 text-left">Wallet Balance</th>
            <th className="border border-gray-300 p-2 text-left">Date</th>
            <th className="border border-gray-300 p-2 text-left">Status</th>
            <th className="border border-gray-300 p-2 text-left">Option</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="border border-gray-300 p-2">{index + 1}</td>
              <td className="border border-gray-300 p-2">
                <a href={`view-user.php?member_id=${user.member_id}`} target="_blank" rel="noopener noreferrer">
                  {user.mobile} ({user.name})
                </a>
              </td>
              <td className="border border-gray-300 p-2">
                <a href={`https://wa.me/${user.mobile}`} target="blank">
                  <i className="mdi mdi-whatsapp"></i>
                </a>
              </td>
              <td className="border border-gray-300 p-2">
                {user.mobile} <a href={`tel:${user.mobile}`}><i className="mdi mdi-cellphone-iphone"></i></a>
              </td>
              <td className="border border-gray-300 p-2">{user.walletBalance}</td>
              <td className="border border-gray-300 p-2">{user.date}</td>
              <td className="border border-gray-300 p-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id={`softstatus${index + 1}`}
                    className="hidden"
                    checked={user.status === 'Active'}
                    // onChange={() => handleStatusChange(user.id)}
                  />
                  <label
                    htmlFor={`softstatus${index + 1}`}
                    className="cursor-pointer select-none"
                  >
                    {user.status}
                  </label>
                </div>
              </td>
              <td className="border border-gray-300 p-2">
                <a href={`view-user.php?member_id=${user.member_id}`} target="_blank" rel="noopener noreferrer">
                  <i className="mdi mdi-eye text-lg"></i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserListTable;
