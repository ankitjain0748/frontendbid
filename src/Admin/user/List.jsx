import React, { useEffect, useState } from 'react';
import Listing from '../Api/Listing';
import AdminLayout from '../Layout/AdminLayout';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa";
import toast from 'react-hot-toast';


const UserListTable = () => {

  const [users, setUsers] = useState([

  ]);


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

  const [isActive, setIsActive] = useState(false);

  const toggleUserStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === "active" ? "inactive" : "active"; // Determine new status
    try {
      const main = new Listing();
      const response = await main.userStatus({ _id: id, user_status: newStatus });

      if (response.data) {
        toast.success(response?.data?.message)
        fetchData();
      } else {
        console.log("Failed to update user status.");
        toast.error(response?.data?.message)

      }
    } catch (error) {
      console.error("Error updating user status:", error);
    }
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
              <tr key={user._id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="border border-gray-300 p-2">{index + 1}</td>
                <td className="border border-gray-300 p-2 capitalize">
                  <Link to={`view-user.php?member_id=${user.member_id}`} target="_blank" rel="noopener noreferrer" className='capitalize'>
                    {user.username}
                  </Link>
                </td>
                <td className="border border-gray-300 p-2">
                  <Link to={`https://wa.me/${user.phone}`} target="blank">
                    <FaWhatsapp className="text-center" size={24} />
                  </Link>
                </td>
                <td className="border border-gray-300 p-2">
                  {user.phone}<Link to={`tel:${user.phone}`}><i className="mdi mdi-cellphone-iphone"></i></Link>
                </td>
                <td className="border border-gray-300 p-2">{user.amount}</td>
                <td className="border border-gray-300 p-2">{
                  moment(user.created_at).format("DD MMM YYYY")
                }</td>
                <td className="border border-gray-300 p-2">
                  <div className="flex items-center">
                    <button
                      onClick={() => toggleUserStatus(user._id, user.user_status)} // Pass current status and id
                      style={{
                        backgroundColor: user.user_status === "active" ? 'green' : 'red',
                        color: 'white',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                      }}
                    >
                      {user.user_status === "active" ? 'Active' : 'Inactive'}
                    </button>
                  </div>
                </td>

                <td className="border border-gray-300 p-2">
                  <Link to={`view-user.php?member_id=${user.member_id}`} target="_blank" rel="noopener noreferrer">
                    <i className="mdi mdi-eye text-lg"></i>
                  </Link>
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
