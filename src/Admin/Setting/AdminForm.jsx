import React, { useState } from 'react';
import Listing from '../Api/Listing';
import toast from 'react-hot-toast';
import AdminLayout from '../Layout/AdminLayout';

const AdminForm = () => {
    const [Regs, setRegs] = useState({
        Profile_name: '',
        Upi_id: '',
        whatapps: '',
        phone: '',
        profile_email: '',
        marchant_id: '',
        min_widthrawal_rate: '',
        min_desposite_rate: '',
        min_bid_amount: '',
        welcome_bouns: '',
        Withrawal: '',
        App_link: '',
        message: '',
        Video_link: '',
        user_id: ''
    });

    const handleInputs = (e) => {
        const { name, value } = e.target;
        setRegs((prevState) => ({ ...prevState, [name]: value }));
    };

    const [loading, setLoading] = useState(false);

    const handleForms = async (e) => {
        e.preventDefault();
        if (loading) return;

        setLoading(true);

        const main = new Listing();
        try {
            const response = await main.userProfile(Regs); 
            if (response?.data?.status === true) {
                toast.success(response.data.message);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error("error", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AdminLayout>
            <div className="px-4 py-2 lg:px-10 lg:py-2.5">
                <form onSubmit={handleForms}>
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* Name */}
                            <div>
                                <label htmlFor="Profile_name" className="block font-medium mb-1">Name</label>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        id="Profile_name"
                                        name="Profile_name"
                                        className="form-control border rounded-md p-2 w-full"
                                        value={Regs.Profile_name}
                                        onChange={handleInputs}
                                        placeholder="Name"
                                    />
                                </div>
                            </div>

                            {/* UPI ID */}
                            <div>
                                <label htmlFor="Upi_id" className="block font-medium mb-1">UPI ID</label>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        id="Upi_id"
                                        name="Upi_id"
                                        className="form-control border rounded-md p-2 w-full"
                                        value={Regs.Upi_id}
                                        onChange={handleInputs}
                                        placeholder="UPI ID"
                                    />
                                </div>
                            </div>

                            {/* WhatsApp */}
                            <div>
                                <label htmlFor="whatapps" className="block font-medium mb-1">WhatsApp</label>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        id="whatapps"
                                        name="whatapps"
                                        className="form-control border rounded-md p-2 w-full"
                                        value={Regs.whatapps}
                                        onChange={handleInputs}
                                        placeholder="WhatsApp"
                                    />
                                </div>
                            </div>

                            {/* Phone */}
                            <div>
                                <label htmlFor="phone" className="block font-medium mb-1">Phone</label>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        id="phone"
                                        name="phone"
                                        className="form-control border rounded-md p-2 w-full"
                                        value={Regs.phone}
                                        onChange={handleInputs}
                                        placeholder="Phone"
                                    />
                                </div>
                            </div>

                            {/* Profile Email */}
                            <div>
                                <label htmlFor="profile_email" className="block font-medium mb-1">Profile Email</label>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        id="profile_email"
                                        name="profile_email"
                                        className="form-control border rounded-md p-2 w-full"
                                        value={Regs.profile_email}
                                        onChange={handleInputs}
                                        placeholder="Profile Email"
                                    />
                                </div>
                            </div>

                            {/* Merchant ID */}
                            <div>
                                <label htmlFor="marchant_id" className="block font-medium mb-1">Merchant ID</label>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        id="marchant_id"
                                        name="marchant_id"
                                        className="form-control border rounded-md p-2 w-full"
                                        value={Regs.marchant_id}
                                        onChange={handleInputs}
                                        placeholder="Merchant ID"
                                    />
                                </div>
                            </div>

                            {/* Min Withdrawal Rate */}
                            <div>
                                <label htmlFor="min_widthrawal_rate" className="block font-medium mb-1">Min Withdrawal Rate</label>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        id="min_widthrawal_rate"
                                        name="min_widthrawal_rate"
                                        className="form-control border rounded-md p-2 w-full"
                                        value={Regs.min_widthrawal_rate}
                                        onChange={handleInputs}
                                        placeholder="Min Withdrawal Rate"
                                    />
                                </div>
                            </div>

                            {/* Min Deposit Rate */}
                            <div>
                                <label htmlFor="min_desposite_rate" className="block font-medium mb-1">Min Deposit Rate</label>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        id="min_desposite_rate"
                                        name="min_desposite_rate"
                                        className="form-control border rounded-md p-2 w-full"
                                        value={Regs.min_desposite_rate}
                                        onChange={handleInputs}
                                        placeholder="Min Deposit Rate"
                                    />
                                </div>
                            </div>

                            {/* Minimum Bid Amount */}
                            <div>
                                <label htmlFor="min_bid_amount" className="block font-medium mb-1">Min Bid Amount</label>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        id="min_bid_amount"
                                        name="min_bid_amount"
                                        className="form-control border rounded-md p-2 w-full"
                                        value={Regs.min_bid_amount}
                                        onChange={handleInputs}
                                        placeholder="Min Bid Amount"
                                    />
                                </div>
                            </div>

                            {/* Welcome Bonus */}
                            <div>
                                <label htmlFor="welcome_bouns" className="block font-medium mb-1">Welcome Bonus</label>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        id="welcome_bouns"
                                        name="welcome_bouns"
                                        className="form-control border rounded-md p-2 w-full"
                                        value={Regs.welcome_bouns}
                                        onChange={handleInputs}
                                        placeholder="Welcome Bonus"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <div>
                                <label htmlFor="Withrawal" className="block font-medium mb-1">
                                    Withdrawal On/Off
                                </label>
                                <div className="form-group">
                                    <select
                                        name="Withrawal"
                                        id="Withrawal"
                                        className="form-control border rounded-md p-2 w-full"
                                        value={Regs.Withrawal}
                                        onChange={handleInputs}
                                    >
                                        <option value="Activate">Activate</option>
                                        <option value="Deactivate">Deactivate</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* App Link */}
                        <div className="form-group">
                            <label htmlFor="App_link" className="block font-medium mb-1">App Link</label>
                            <input
                                className="form-control border rounded-md p-2 w-full"
                                type="text"
                                name="App_link"
                                id="App_link"
                                value={Regs.App_link}
                                onChange={handleInputs}
                                placeholder="Enter App Link"
                            />
                        </div>

                        {/* Share Message */}
                        <div className="form-group">
                            <label htmlFor="message" className="block font-medium mb-1">Share Message</label>
                            <textarea
                                className="form-control border rounded-md p-2 w-full"
                                name="message"
                                id="message"
                                value={Regs.message}
                                onChange={handleInputs}
                                placeholder="Enter Message"
                            />
                        </div>

                        {/* Video Link */}
                        <div className="form-group">
                            <label htmlFor="Video_link" className="block font-medium mb-1">Video Link</label>
                            <input
                                className="form-control border rounded-md p-2 w-full"
                                type="text"
                                name="Video_link"
                                id="Video_link"
                                value={Regs.Video_link}
                                onChange={handleInputs}
                                placeholder="Enter Video Link"
                            />
                        </div>

                        {/* Update Button */}
                        <div className="form-group mt-4 text-right">
                            <button
                                type="submit"
                                disabled={loading}
                                className="btn btn-raised bg-blue-500 text-white font-semibold py-2 px-6 rounded-md"
                            >
                                {loading ? "Submitting..." : "Update"}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
};

export default AdminForm;
