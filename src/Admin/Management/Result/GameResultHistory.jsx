import React from 'react';

const GameResultHistory = () => {
  return (
    <div className="card-body">
      <h4 className="card-title text-lg font-bold mb-4">Game Result History</h4>
      <div className="table-responsive">
        <table className="min-w-full table-auto border-collapse border border-gray-300" id="list-table">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border border-gray-300">#</th>
              <th className="py-2 px-4 border border-gray-300">Game Name</th>
              <th className="py-2 px-4 border border-gray-300">Open Pana</th>
              <th className="py-2 px-4 border border-gray-300">Open Action</th>
              <th className="py-2 px-4 border border-gray-300">Close Pana</th>
              <th className="py-2 px-4 border border-gray-300">Close Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Placeholder for game results */}
            {/* You can map through your data here */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GameResultHistory;
