import { useEffect, useState } from "react";
import AdminLayout from "../Layout/AdminLayout";
import Listing from "../Api/Listing";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import Edit from "../components/Edit";
import Delete from "../components/Delete";

function Index() {
    const navigate = useNavigate();
    const [record, setRecord] = useState({
        name: "",
        open_time: "",
        close_time: "",
    });

    const handleInputs = (e) => {
        const { name, value } = e.target;
        setRecord((prevState) => ({ ...prevState, [name]: value }));
    };

    const [loading, setLoading] = useState(false);
    const [listing, setListing] = useState([]);

    const fetchMarketList = async () => {
        setLoading(true);
        try {
            const main = new Listing();
            const response = await main.marketlist();
            console.log(response);
            setLoading(false);
            setListing(response?.data?.data);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMarketList();
    }, []);

    async function handleForms(e) {
        e.preventDefault();
        if (loading) {
            return false;
        }
        setLoading(true);
        const main = new Listing();
        try {
            const response = await main.marketAdd(record);
            console.log("response", response);
            if (response?.data?.status === true) {
                toast.success(response.data.message);
            } else {
                toast.error(response.data.message);
            }
            setLoading(false);
        } catch (error) {
            console.log("error", error);
            setLoading(false);
        }
    }

    return (
        <>
            <AdminLayout>
                <div className="card bg-white p-6 shadow-lg rounded-lg">
                    <div className="card-body">
                        <h4 className="text-lg font-semibold mb-4 text-gray-800">Add Market</h4>
                        <form onSubmit={handleForms} className="space-y-4">
                            <div className="flex flex-wrap gap-4">
                                {/* Market Name */}
                                <div className="form-group w-full md:w-1/3">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Market Name
                                    </label>
                                    <input
                                        required
                                        className="form-control border border-gray-300 rounded-md p-2 w-full"
                                        type="text"
                                        name="name"
                                        value={record.name}
                                        onChange={handleInputs}
                                    />
                                </div>

                                {/* Open Time */}
                                <div className="form-group w-full md:w-1/3">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Open Time
                                    </label>
                                    <input
                                        required
                                        className="form-control border border-gray-300 rounded-md p-2 w-full"
                                        type="time"
                                        name="open_time"
                                        value={record.open_time}
                                        onChange={handleInputs}
                                    />
                                </div>

                                {/* Close Time */}
                                <div className="form-group w-full md:w-1/3">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Close Time
                                    </label>
                                    <input
                                        required
                                        className="form-control border border-gray-300 rounded-md p-2 w-full"
                                        type="time"
                                        name="close_time"
                                        value={record.close_time}
                                        onChange={handleInputs}
                                    />
                                </div>

                                {/* Add Market Button */}
                                <div className="form-group w-full md:w-1/3 flex items-end">
                                    <button
                                        type="submit"
                                        className="btn bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 w-full rounded-md"
                                    >
                                        {loading ? "Loading..." : "Add Market"}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="mt-8">
                    <div className="overflow-x-auto w-full">
                        <table className="min-w-full bg-white shadow-lg rounded-lg">
                            <thead>
                                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                    <th className="py-3 px-6 text-left">#</th>
                                    <th className="py-3 px-6 text-left">Market Name</th>
                                    <th className="py-3 px-6 text-left">Open Time</th>
                                    <th className="py-3 px-6 text-left">Close Time</th>
                                    <th className="py-3 px-6 text-left">Action</th>
                                    <th className="py-3 px-6 text-left">Delete</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600 text-sm font-light">
                                {loading ? (
                                    <Loading />
                                ) : listing && listing.length === 0 ? (
                                    <tr>
                                        <td className="py-3 px-6 text-center" colSpan="6">
                                            No data available
                                        </td>
                                    </tr>
                                ) : (
                                    listing.map((item, index) => (
                                        <tr
                                            key={index}
                                            className="border-b border-gray-200 hover:bg-gray-100"
                                        >
                                            <td className="py-3 px-6 text-left">{index + 1}</td>
                                            <td className="py-3 px-6 text-left">{item?.name}</td>
                                            <td className="py-3 px-6 text-left">{item?.open_time}</td>
                                            <td className="py-3 px-6 text-left">{item?.close_time}</td>
                                            <td className="py-3 px-6 text-left">
                                                <Edit />
                                            </td>
                                            <td className="py-3 px-6 text-left">
                                                <Delete />
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

            </AdminLayout>
        </>
    );
}

export default Index;
