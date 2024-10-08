import SelectGame from "./SelectGame";
import GameResultHistory from "./GameResultHistory";
import WinMember from "./WinMember";
import SideBarAdmin from "../components/AdminSideBar";
import Header from "../components/Header";



function Result() {
    return (<>
        <div className="md:flex flex-wrap bg-[#F5F6FB] items-start">
            <div className="w-[304px] flex-shrink-0">
                <SideBarAdmin />
            </div>
            {/* right sidebar */}
            <div className="flex-grow">
                <Header title={"Result Managaement"} />
                {/* Overview */}
                <div className="px-4 py-2 lg:px-10 lg:py-2.5">

                    <SelectGame />
                    <WinMember />
                    <GameResultHistory />
                </div>
            </div>
        </div>
    </>);
}

export default Result;