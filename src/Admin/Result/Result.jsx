import SelectGame from "./SelectGame";
import GameResultHistory from "./GameResultHistory";
import WinMember from "./WinMember";
import AdminLayout from "../Layout/AdminLayout";
import Listing from "../Api/Listing";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";


function Result() {

    const [loading, setLoading] = useState(false);
    const [listing, setListing] = useState([]);

    const fetchMarketList = async () => {
        setLoading(true);
        try {
            const main = new Listing();
            const response = await main.marketlist();
            console.log("responsefetchMarketList",response)
            setListing(response?.data?.data);
        } catch (error) {
            console.error(error);
            toast.error(error?.response?.data?.data)
        } finally {
            setLoading(false);
        }
    };
    console.log("marketadd",listing)

    useEffect(() => {
        fetchMarketList();
    }, []);
    return (<>
        <AdminLayout>
                <div className="mb-5">
                    <SelectGame listing={listing} />
                </div>
                <div className="mb-5">
                    <WinMember />
                </div>
                <div className="mb-5">
                    <GameResultHistory />
                </div>
        </AdminLayout>
    </>);
}

export default Result;