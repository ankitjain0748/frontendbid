import React from 'react';
import SideBarAdmin from '../components/AdminSideBar';
import Header from '../components/Header';

const AdminForm = () => {
    return (
        <div className="md:flex flex-wrap bg-[#F5F6FB] items-start">
            <div className="w-[304px] flex-shrink-0">
                <SideBarAdmin />
            </div>
            {/* right sidebar */}
            <div className="flex-grow">
                <Header title={"Settings"} />
                {/* Overview */}
                <div className="px-4 py-2 lg:px-10 lg:py-2.5">

                    <div className="container mx-auto">
                        <div className="row clearfix">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {/* Name */}
                                <div>
                                    <label htmlFor="name" className="block font-medium mb-1">Name</label>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="form-control border rounded-md p-2 w-full"
                                            defaultValue="Admin"
                                            placeholder="Name"
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block font-medium mb-1">Email</label>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="form-control border rounded-md p-2 w-full"
                                            defaultValue="admin@globalsatta"
                                            placeholder="Email"
                                        />
                                    </div>
                                </div>

                                {/* Mobile */}
                                <div>
                                    <label htmlFor="mobile" className="block font-medium mb-1">Mobile</label>
                                    <div className="form-group">
                                        <input
                                            type="tel"
                                            id="mobile"
                                            name="mobile"
                                            className="form-control border rounded-md p-2 w-full"
                                            defaultValue="7850887870"
                                            placeholder="Mobile"
                                        />
                                    </div>
                                </div>

                                {/* Whatsapp Number */}
                                <div>
                                    <label htmlFor="whatsapp_number" className="block font-medium mb-1">Whatsapp Number</label>
                                    <div className="form-group">
                                        <input
                                            type="tel"
                                            id="whatsapp_number"
                                            name="whatsapp_number"
                                            className="form-control border rounded-md p-2 w-full"
                                            defaultValue="7850887870"
                                            placeholder="Whatsapp Number"
                                        />
                                    </div>
                                </div>

                                {/* Password */}
                                <div>
                                    <label htmlFor="password" className="block font-medium mb-1">Password</label>
                                    <div className="form-group">
                                        <input
                                            type="password"
                                            id="password"
                                            name="password"
                                            className="form-control border rounded-md p-2 w-full"
                                            defaultValue="Ashish6375"
                                            placeholder="Password"
                                        />
                                    </div>
                                </div>

                                {/* UPI ID */}
                                <div>
                                    <label htmlFor="upi_id" className="block font-medium mb-1">UPI ID</label>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            id="upi_id"
                                            name="upi_id"
                                            className="form-control border rounded-md p-2 w-full"
                                            defaultValue="merchant466969.augp@aubak"
                                            placeholder="UPI ID"
                                        />
                                    </div>
                                </div>

                                {/* Merchant ID */}
                                <div>
                                    <label htmlFor="merchant_code" className="block font-medium mb-1">Merchant ID</label>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            id="merchant_code"
                                            name="merchant_code"
                                            className="form-control border rounded-md p-2 w-full"
                                            placeholder="Merchant ID"
                                        />
                                    </div>
                                </div>

                                {/* Min Withdrawal Rate */}
                                <div>
                                    <label htmlFor="min_withdrawal_rate" className="block font-medium mb-1">Min Withdrawal Rate</label>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            id="min_withdrawal_rate"
                                            name="min_withdrawal_rate"
                                            className="form-control border rounded-md p-2 w-full"
                                            defaultValue="1000"
                                            placeholder="Min Withdrawal Rate"
                                        />
                                    </div>
                                </div>

                                {/* Min Deposit Rate */}
                                <div>
                                    <label htmlFor="min_deposit_rate" className="block font-medium mb-1">Min Deposit Rate</label>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            id="min_deposit_rate"
                                            name="min_deposit_rate"
                                            className="form-control border rounded-md p-2 w-full"
                                            defaultValue="1"
                                            placeholder="Min Deposit Rate"
                                        />
                                    </div>
                                </div>

                                {/* Minimum Bid Amount */}
                                <div>
                                    <label htmlFor="minimum_bid_money" className="block font-medium mb-1">Minimum Bid Amount</label>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            id="minimum_bid_money"
                                            name="minimum_bid_money"
                                            className="form-control border rounded-md p-2 w-full"
                                            defaultValue="10"
                                            placeholder="Minimum Bid Amount"
                                        />
                                    </div>
                                </div>

                                {/* Welcome Bonus */}
                                <div>
                                    <label htmlFor="welcome_bonus" className="block font-medium mb-1">Welcome Bonus</label>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            id="welcome_bonus"
                                            name="welcome_bonus"
                                            className="form-control border rounded-md p-2 w-full"
                                            defaultValue="05"
                                            placeholder="Welcome Bonus"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Update Button */}
                            <div className="form-group mt-4 text-right">
                                <button
                                    type="submit"
                                    name="updateadminone"
                                    className="btn btn-raised bg-blue-500 text-white font-semibold py-2 px-6 rounded-md"
                                >
                                    Update
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {/* Withdrawal On/Off */}
                                <div>
                                    <label htmlFor="is_withdrawalenable" className="block font-medium mb-1">
                                        Withdrawal On/Off
                                    </label>
                                    <div className="form-group">
                                        <select
                                            name="is_withdrawalenable"
                                            id="is_withdrawalenable"
                                            className="form-control border rounded-md p-2 w-full"
                                        >
                                            <option value="Activate">Activate</option>
                                            <option value="Deactivate">Close</option>
                                            <option value="Activate">Active</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Update Button */}
                            <div className="form-group mt-4 text-right">
                                <button
                                    type="submit"
                                    name="updatewithtime"
                                    className="btn btn-raised bg-blue-500 text-white font-semibold py-2 px-6 rounded-md"
                                >
                                    Update
                                </button>
                            </div>
                            {/* App Link */}
                            <div className="md:col-span-4">
                                <div className="form-group">
                                    <label htmlFor="app_link" className="block font-medium mb-1">
                                        App Link
                                    </label>
                                    <input
                                        className="form-control border rounded-md p-2 w-full"
                                        type="text"
                                        name="app_link"
                                        id="app_link"
                                        placeholder="Enter APP Link"
                                    />
                                </div>
                            </div>

                            {/* Share Message */}
                            <div className="md:col-span-8">
                                <div className="form-group">
                                    <label htmlFor="content" className="block font-medium mb-1">
                                        Share Message
                                    </label>
                                    <textarea
                                        className="form-control border rounded-md p-2 w-full"
                                        name="app_description"
                                        rows="4"
                                        id="content"
                                        defaultValue={`Best Online Matka App

Download Now 👇

https://play.google.com/store/apps/details?id=com.gblobl.app.com.official`}
                                    />
                                </div>
                            </div>

                            <div className="md:col-span-4">
                                <div className="form-group">
                                    <label htmlFor="app_link" className="block font-medium mb-1">
                                        Video Link
                                    </label>
                                    <input
                                        className="form-control border rounded-md p-2 w-full"
                                        type="text"
                                        name="app_link"
                                        id="app_link"
                                        placeholder="Enter Video Link"
                                    />
                                </div>
                            </div>

                            {/* Update Button */}
                            <div className="form-group mt-4 text-right">
                                <button
                                    type="submit"
                                    name="updateadminthree"
                                    className="btn bg-blue-500 text-white font-semibold py-2 px-6 rounded-md"
                                >
                                    Update
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminForm;
