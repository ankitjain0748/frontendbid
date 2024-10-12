import React from 'react';
import SideBarAdmin from '../components/AdminSideBar';
import Header from '../components/Header';

const AddGameRates = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to the API)
    console.log('Form submitted');
  };

  return (
    <div className="md:flex flex-wrap bg-[#F5F6FB] items-start">
      <div className="w-[304px] flex-shrink-0">
        <SideBarAdmin />
      </div>
      {/* right sidebar */}
      <div className="flex-grow">
        <Header title={"Game Rate"} />
        {/* Overview */}
        <div className="px-4 py-2 lg:px-10 lg:py-2.5">

          <div className="container mx-auto p-4">
            <h4 className="text-lg font-semibold mb-4">Add Games Rate</h4>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input type="hidden" name="game_rate_id" value="1" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-group">
                  <label className="block text-sm font-medium">Single Digit</label>
                  <input className="form-control mt-1 block w-full p-2 border rounded" type="text" name="game_amount[]" defaultValue="100" />
                  <input type="hidden" name="id[]" value="1" />
                </div>

                <div className="form-group">
                  <label className="block text-sm font-medium">Mumbai Jodi</label>
                  <input className="form-control mt-1 block w-full p-2 border rounded" type="text" name="game_amount[]" defaultValue="1000" />
                  <input type="hidden" name="id[]" value="2" />
                </div>

                <div className="form-group">
                  <label className="block text-sm font-medium">Single Pana</label>
                  <input className="form-control mt-1 block w-full p-2 border rounded" type="text" name="game_amount[]" defaultValue="1500" />
                  <input type="hidden" name="id[]" value="3" />
                </div>

                <div className="form-group">
                  <label className="block text-sm font-medium">Double Pana</label>
                  <input className="form-control mt-1 block w-full p-2 border rounded" type="text" name="game_amount[]" defaultValue="3000" />
                  <input type="hidden" name="id[]" value="4" />
                </div>

                <div className="form-group">
                  <label className="block text-sm font-medium">Triple Pana</label>
                  <input className="form-control mt-1 block w-full p-2 border rounded" type="text" name="game_amount[]" defaultValue="7000" />
                  <input type="hidden" name="id[]" value="5" />
                </div>

                <div className="form-group">
                  <label className="block text-sm font-medium">HALF SANGAM</label>
                  <input className="form-control mt-1 block w-full p-2 border rounded" type="text" name="game_amount[]" defaultValue="10000" />
                  <input type="hidden" name="id[]" value="7" />
                </div>

                <div className="form-group">
                  <label className="block text-sm font-medium">FULL SANGAM</label>
                  <input className="form-control mt-1 block w-full p-2 border rounded" type="text" name="game_amount[]" defaultValue="100000" />
                  <input type="hidden" name="id[]" value="8" />
                </div>

                <div className="form-group">
                  <label className="block text-sm font-medium">Even/Odd</label>
                  <input className="form-control mt-1 block w-full p-2 border rounded" type="text" name="game_amount[]" defaultValue="10" />
                  <input type="hidden" name="id[]" value="9" />
                </div>

                <div className="form-group">
                  <label className="block text-sm font-medium">Dp Motors</label>
                  <input className="form-control mt-1 block w-full p-2 border rounded" type="text" name="game_amount[]" defaultValue="100" />
                  <input type="hidden" name="id[]" value="10" />
                </div>
              </div>

              <div className="mt-4">
                <button type="submit" className="btn btn-primary bg-blue-500 text-white font-semibold py-2 px-4 rounded">
                  Update
                </button>
              </div>

              <div className="form-group">
                <div id="error"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddGameRates;
