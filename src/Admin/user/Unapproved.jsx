import React, { useEffect, useState } from "react";
import AdminLayout from "../Layout/AdminLayout";
import Listing from "../Api/Listing";
import moment from "moment";
import { FaWhatsapp } from "react-icons/fa";

const Unapproved = () => {


  const [users, setUsers] = useState([

  ]);

  console.log("users", users)

  const fetchData = () => {
    const main = new Listing();
    const response = main.userListStatus();
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
  return (
    <AdminLayout>
      <div className="table-responsive">
        <div className="w-full dataTables_wrapper dt-bootstrap4">
          <div className="flex flex-wrap mb-4">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <label className="inline-flex items-center">
                Show
                <select
                  name="userList_length"
                  className="ml-2 border border-gray-300 rounded-md p-1"
                >
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
                entries
              </label>
            </div>
            <div className="w-full md:w-1/2 text-right">
              <label className="inline-flex items-center">
                Search:
                <input
                  type="search"
                  className="ml-2 border border-gray-300 rounded-md p-1"
                  placeholder=""
                />
              </label>
            </div>
          </div>
          <div className="w-full">
            <table className="min-w-full bg-white table-auto border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2">#</th>
                  <th className="border border-gray-300 p-2">Member Name</th>
                  <th className="border border-gray-300 p-2">Whatsapp</th>
                  <th className="border border-gray-300 p-2">Mobile No</th>
                  <th className="border border-gray-300 p-2">Wallet Balance</th>
                  <th className="border border-gray-300 p-2">Date</th>
                  <th className="border border-gray-300 p-2">Status</th>
                  <th className="border border-gray-300 p-2">Option</th>
                </tr>
              </thead>
              <tbody>
                {/* Example Data Rows */}
                {users.map((user, index) => (
                  <tr key={user.id} className={`${index % 2 === 0 ? "bg-gray-100" : ""}`}>
                    <td className="border border-gray-300 p-2">{user.id}</td>
                    <td className="border border-gray-300 p-2">
                      <a
                        href={`view-user.php?member_id=${user.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {user.username}
                      </a>
                    </td>
                    <td className="border border-gray-300 p-2">
                      <a
                        href={`https://wa.me/${user.phone}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex  flex-wrap justify-center"
                      >
                        <FaWhatsapp className="text-center" size={24} />
                      </a>
                    </td>
                    <td className="border border-gray-300 p-2">
                      {user.phone}{" "}
                      <a href={`tel:${user.phone}`}>
                      </a>
                    </td>
                    <td className="border border-gray-300 p-2">{user.amount}</td>
                    <td className="border border-gray-300 p-2">{
                      moment(user.created_at).format("DD MMM YYYY")
                    }</td>
                    <td className="border border-gray-300 p-2">
                      <div className="checkbox_select">
                        <input
                          type="checkbox"
                          id={`softstatus${user.id}`}
                          className="hidden"
                          onChange={() => console.log(`Status changed for user ${user.id}`)}
                        />
                        <label htmlFor={`softstatus${user.id}`}>{user.user_status}</label>
                      </div>
                    </td>
                    <td className="border border-gray-300 p-2">
                      <a
                        href={`view-user.php?member_id=${user.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="mdi mdi-eye font-size-18"></i>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div>Showing 1 to 4 of 4 entries</div>
            <ul className="pagination flex">
              <li className="mr-1">
                <a href="#" className="p-2 border border-gray-300 rounded-md">
                  Previous
                </a>
              </li>
              <li className="mr-1">
                <a href="#" className="p-2 border border-gray-300 rounded-md active">
                  1
                </a>
              </li>
              <li>
                <a href="#" className="p-2 border border-gray-300 rounded-md">
                  Next
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Unapproved;
