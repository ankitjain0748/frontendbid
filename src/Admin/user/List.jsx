import React, { useEffect, useState } from 'react';
import SideBarAdmin from '../components/AdminSideBar';
import Header from '../components/Header';
import Listing from '../Api/Listing';
import AdminLayout from '../Layout/AdminLayout';
import moment from 'moment';

const UserListTable = () => {

  const [users, setUsers] = useState([

  ]);

  console.log("users",users)

  const fetchData = () => {
    const main = new Listing();
    const response = main.userList();
    response
      .then((res) => {
        if (res.data) {
          setUsers(res.data.data);
        } else {
        }
      }).catch((error) => {
        console.log("error", error);
      });
  }

  useEffect(() => {
    fetchData()
  }, []);


  const toggleUserStatus = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, status: user.status === "Active" ? "Inactive" : "Active" } : user
      )
    );
  };
  return (
    <AdminLayout>

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
                    {user.phone} ({user.username})
                  </a>
                </td>
                <td className="border border-gray-300 p-2">
                  <a href={`https://wa.me/${user.phone}`} target="blank">
                    <i className="mdi mdi-whatsapp"></i>
                  </a>
                </td>
                <td className="border border-gray-300 p-2">
                  {user.mobile} <a href={`tel:${user.mobile}`}><i className="mdi mdi-cellphone-iphone"></i></a>
                </td>
                <td className="border border-gray-300 p-2">{user.amount}</td>
                <td className="border border-gray-300 p-2">{
                moment(user.created_at).format("DD MMM YYYY")
                }</td>
                <td className="border border-gray-300 p-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id={`softstatus${index + 1}`}
                      className="hidden"
                      checked={user.user_status === 'active'}
                    // onChange={() => handleStatusChange(user.id)}
                    />
                    <label
                      htmlFor={`softstatus${index + 1}`}
                      className="cursor-pointer select-none"
                    >
                      {user.user_status}
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
    </AdminLayout>

  );
};

export default UserListTable;
