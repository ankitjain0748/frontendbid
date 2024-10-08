import React, { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { CgGames } from "react-icons/cg";
import { TfiLayoutSlider } from "react-icons/tfi";


function SideBarAdmin() {
    const { pathname } = useLocation();

    const handleclick = () => {
        console.log("logout")
    };
    const [isOpen, SetIsopen] = useState(false);

    const [dropdowns, setDropdowns] = useState({
        link1: false,
        link2: false,
        link3: false,
    });

    const toggleDropdown = (link) => {
        setDropdowns((prevDropdowns) => ({
            ...prevDropdowns,
            [link]: !prevDropdowns[link],
        }));
    };

    return (<>
        <div className={`z-50 w-[260px] md:w-[304px] fixed lg:relative left-0 top-0 bottom-0 overflow-y-auto  lg:block bg-white ${isOpen ? 'block' : 'hidden'}`} >
            <div className="px-4 py-4 md:px-6 md:py-6 lg:px-[28px] lg:py-8">
                <div className='mb-5 md:mb-10 lg:mb-[53px] text-center'>
                    <img className="max-w-full block m-auto" src={"/Header/Logo.png"} alt='img' width="208" />
                </div>
                <h3 className="uppercase text-[#808080] px-[15px] text-sm font-semibold mb-2.5 lg:mb-3.5">Overview</h3>
                <ul className="space-y-3">
                    <li>
                        <Link to="/dashboard"
                            className={`px-[15px] flex flex-wrap items-center py-[7px] rounded-full text-base tracking-[-0.03em] font-medium hover:text-[#0367F7] ${pathname === "/dashboard" ? 'bg-[#0367F7] bg-opacity-10 text-[#0367F7]' : 'text-[#8D929A] '}`}
                        >
                            <svg className="inline align-middle mr-[4px]" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.4622 7.5V2.5H18.1289V7.5H11.4622ZM3.12891 10.8333V2.5H9.79557V10.8333H3.12891ZM11.4622 17.5V9.16667H18.1289V17.5H11.4622ZM3.12891 17.5V12.5H9.79557V17.5H3.12891Z" fill="currentColor" />
                            </svg>
                            Dashboard
                        </Link>
                    </li>


                    <li>
                        <Link to="/users-list"
                            className={`
capitalize px-[15px] flex flex-wrap items-center py-[7px] rounded-full text-base tracking-[-0.03em] font-medium hover:text-[#0367F7] ${pathname === "/users-list" ? 'bg-[#0367F7] bg-opacity-10 text-[#0367F7]' : 'text-[#8D929A] '}`}
                        >
                            <FaUser size={18} className="mr-2" />
                            User Managaement
                        </Link>
                    </li>

                    <li>
                        <Link to="/un-approved-users-list"
                            className={`
capitalize px-[15px] flex flex-wrap items-center py-[7px] rounded-full text-base tracking-[-0.03em] font-medium hover:text-[#0367F7] ${pathname === "/un-approved-users-list" ? 'bg-[#0367F7] bg-opacity-10 text-[#0367F7]' : 'text-[#8D929A] '}`}
                        >
                            <FaUser size={18} className="mr-2" />
                            User un approved
                        </Link>
                    </li>


                    <li>
                        <Link to="/results"
                            className={`
capitalize px-[15px] flex flex-wrap items-center py-[7px] rounded-full text-base tracking-[-0.03em] font-medium hover:text-[#0367F7] ${pathname === "/results"
                                    ? 'bg-[#0367F7] bg-opacity-10 text-[#0367F7]' : 'text-[#8D929A] '}`}
                        >
                            <FaUser size={18} className="mr-2" />
                            results management
                        </Link>
                    </li>

                    <li onClick={() => toggleDropdown('link2')}
                        className={`px-[15px] flex flex-wrap items-center py-[7px] rounded-full text-base tracking-[-0.03em] font-medium  hover:text-[#0367F7] ${pathname === "/admin/settings" ? 'bg-[#0367F7] bg-opacity-10 text-[#0367F7]' : 'text-[#8D929A] '}`}
                    >
                        <svg className="inline align-middle mr-[4px]" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.4622 7.5V2.5H18.1289V7.5H11.4622ZM3.12891 10.8333V2.5H9.79557V10.8333H3.12891ZM11.4622 17.5V9.16667H18.1289V17.5H11.4622ZM3.12891 17.5V12.5H9.79557V17.5H3.12891Z" fill="currentColor" />
                        </svg>
                        &nbsp; Dehli  Management
                        {dropdowns.link2 && (
                            <ul className="bg-white rounded-md mt-2 p-2">
                                <li>
                                    <Link to="/game-name" className="block px-4 py-2 text-[#8D929A]  hover:text-black">
                                        Game Name
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/game-rate" className="block px-4 py-2 text-[#8D929A]  hover:text-black">
                                        Game Rate
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/game-rate" className="block px-4 py-2 text-[#8D929A]  hover:text-black">
                                        Game Rate
                                    </Link>
                                </li>


                                <li>
                                    <Link to="/delhi-bet_allgame" className="block px-4 py-2 text-[#8D929A]  hover:text-black">
                                        Dehli bet AllGame
                                    </Link>
                                </li>


                                <li>
                                    <Link to="/betlist" className="block px-4 py-2 text-[#8D929A]  hover:text-black">
                                        bet list
                                    </Link>
                                </li>


                                <li>
                                    <Link to="/winning-report" className="block px-4 py-2 text-[#8D929A]  hover:text-black">
                                        winning report
                                    </Link>
                                </li>

                            </ul>
                        )}
                    </li>

                    <li onClick={() => toggleDropdown('link1')}
                        className={` px-[15px] flex flex-wrap items-center py-[7px] rounded-full text-base tracking-[-0.03em] font-medium  hover:text-[#0367F7] ${pathname === "/admin/settings" ? 'bg-[#0367F7] bg-opacity-10 text-[#0367F7]' : 'text-[#8D929A] '}`}
                    >
                        <CgGames size={18} className="mr-2" />
                        &nbsp; Game & Numbers
                        {dropdowns.link1 && (
                            <ul className="bg-white rounded-md mt-2 p-2">
                                <li>
                                    <Link to="/single-digit" className="block px-4 py-2 text-[#8D929A]  hover:text-black">
                                        Single Digit
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/jodi-digit" className="block px-4 py-2 text-[#8D929A]  hover:text-black">
                                        Jodi Digit
                                    </Link>
                                </li>

                            </ul>
                        )}
                    </li>



                    <li>
                        <Link to="/slider"
                            className={`
capitalize px-[15px] flex flex-wrap items-center py-[7px] rounded-full text-base tracking-[-0.03em] font-medium hover:text-[#0367F7] ${pathname === "/slider" ? 'bg-[#0367F7] bg-opacity-10 text-[#0367F7]' : 'text-[#8D929A] '}`}
                        >
                            <TfiLayoutSlider size={18} className="mr-2" />
                            Slider Management
                        </Link>
                    </li>
                    <li>
                        <Link to="/settings"
                            className={`
capitalize px-[15px] flex flex-wrap items-center py-[7px] rounded-full text-base tracking-[-0.03em] font-medium hover:text-[#0367F7] ${pathname === "/settings" ? 'bg-[#0367F7] bg-opacity-10 text-[#0367F7]' : 'text-[#8D929A] '}`}
                        >
                            <IoIosSettings size={18} className="mr-2" />
                            settings
                        </Link>
                    </li>


                    <li>
                        <button onClick={handleclick} className="px-[15px] flex flex-wrap items-center py-[7px]  rounded-full text-base tracking-[-0.03em] font-medium text-[#FF1B1B] hover:text-[#0367F7]">
                            <svg className="inline align-middle mr-[4px]" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.5 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H7.5" stroke="#FF1B1B" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M13.333 14.1663L17.4997 9.99967L13.333 5.83301" stroke="#FF1B1B" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M17.5 10H7.5" stroke="#FF1B1B" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                            Logout
                        </button>
                    </li>

                </ul>
            </div>
        </div>

    </>);
};
export default SideBarAdmin;