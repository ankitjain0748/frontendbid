import React from 'react';

function SelectGame() {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title text-lg font-semibold mb-4">Select Game</h4>
        <form name="gameSrchFrm" method="post">
          <div className="flex gap-4">
            {/* Result Date */}
            <div className="form-group w-1/6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Result Date</label>
              <div className="date-picker">
                <input
                  required
                  className="form-control digits border rounded-md p-2 w-full"
                  type="date"
                  defaultValue="2024-10-03"
                  name="betdate"
                  id="betdate"
                />
              </div>
            </div>

            {/* Game Name */}
            <div className="form-group w-1/6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Game Name</label>
              <select
                required
                className="form-control select2 border rounded-md p-2 w-full"
                name="market_id"
                id="marketid"
              >
                <option value="">Select Name</option>
                <option value="25">GALI</option>
                <option value="26">FARIDABAD</option>
                <option value="29">DESAWAR</option>
                <option value="31">GAZIYABAAD</option>
                <option value="32">Delhi bajar</option>
                <option value="33">Shri Ganesh</option>
              </select>
            </div>

            {/* Number */}
            <div className="form-group w-1/6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Number</label>
              <select
                required
                className="form-control select2 border rounded-md p-2 w-full"
                name="number"
                id="number"
              >
                <option value="">Select Number</option>
                {[...Array(100).keys()].map((num) => (
                  <option key={num} value={num < 10 ? `0${num}` : num}>
                    {num < 10 ? `0${num}` : num}
                  </option>
                ))}
              </select>
            </div>

            {/* Declare Result Button */}
            <div className="form-group w-1/6">
              <label className="block text-sm font-medium text-gray-700 mb-1">&nbsp;</label>
              <button
                type="submit"
                className="btn btn-primary bg-blue-500 text-white font-semibold py-2 px-4 w-full rounded-md"
                name="update"
                id="update"
              >
                Declare Result
              </button>
            </div>

            {/* Declare Allot Button */}
            <div className="form-group w-1/6">
              <label className="block text-sm font-medium text-gray-700 mb-1">&nbsp;</label>
              <button
                type="submit"
                className="btn btn-primary bg-blue-500 text-white font-semibold py-2 px-4 w-full rounded-md"
                name="update-allot"
                id="update-allot"
              >
                Declare Allot
              </button>
            </div>

            {/* Winner List Button */}
            <div className="form-group w-1/6">
              <label className="block text-sm font-medium text-gray-700 mb-1">&nbsp;</label>
              <button
                type="button"
                className="btn btn-primary bg-blue-500 text-white font-semibold py-2 px-4 w-full rounded-md"
              >
                Winner List
              </button>
            </div>
          </div>

          {/* Error Message */}
          <div className="form-group w-full mt-4">
            <div id="error" className="text-red-500 text-sm"></div>
          </div>
        </form>
      </div>
    </div>


  );
}

export default SelectGame;


