import React from 'react';

const WinMember = () => {
  return (
    <div className="card-body">
      <h4 className="card-title text-lg font-bold mb-4">Win Member</h4>
      <span id="deleteBetListMsg"></span>
      <div className="table-responsive">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <label className="mr-2">
              Show
              <select
                name="delhi-win-member_length"
                className="ml-2 custom-select custom-select-sm form-control form-control-sm"
              >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
              entries
            </label>
          </div>
          <div className="flex items-center">
            <label className="mr-2">
              Search:
              <input
                type="search"
                className="ml-2 form-control form-control-sm"
                placeholder=""
                aria-controls="delhi-win-member"
              />
            </label>
          </div>
        </div>
        <table className="min-w-full bg-white table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border-b-2 border-gray-300">#</th>
              <th className="py-2 px-4 border-b-2 border-gray-300">Member</th>
              <th className="py-2 px-4 border-b-2 border-gray-300">Game Name</th>
              <th className="py-2 px-4 border-b-2 border-gray-300">Bet Digit</th>
              <th className="py-2 px-4 border-b-2 border-gray-300">Bet Amount</th>
              <th className="py-2 px-4 border-b-2 border-gray-300">Edit Bet</th>
              <th className="py-2 px-4 border-b-2 border-gray-300">Delete Bet</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b" colSpan="7">
                No data available in table
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-between items-center mt-4">
          <div>
            Showing 0 to 0 of 0 entries
          </div>
          <div className="flex items-center">
            <button
              disabled
              className="page-link bg-gray-200 text-gray-500 px-3 py-1 rounded-md"
            >
              Previous
            </button>
            <button
              disabled
              className="page-link bg-gray-200 text-gray-500 px-3 py-1 rounded-md ml-2"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinMember;
