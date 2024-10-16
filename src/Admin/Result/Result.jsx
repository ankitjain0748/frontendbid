import SelectGame from "./SelectGame";
import GameResultHistory from "./GameResultHistory";
import WinMember from "./WinMember";
import AdminLayout from "../Layout/AdminLayout";
import Listing from "../Api/Listing";
import { useEffect, useState } from "react";


function Result() {

    const [loading, setLoading] = useState(false);
    const [listing, setListing] = useState([]);

    const fetchMarketList = async () => {
        setLoading(true);
        try {
            const main = new Listing();
            const response = await main.marketlist();
            setListing(response?.data?.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    console.log(listing)

    useEffect(() => {
        fetchMarketList();
    }, []);
    return (<>
        <AdminLayout>
            <div className="">
                <div className="mb-5">
                    <SelectGame listing={listing} />
                </div>
                <div className="mb-5">
                    <WinMember />
                </div>
                <div className="mb-5">
                    <GameResultHistory />
                </div>
            </div>
        </AdminLayout>
    </>);
}

export default Result;