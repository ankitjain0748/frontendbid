import { useState } from "react";
import { Link, useParams } from "react-router-dom";

function PhoneSideBar({ sideOpen, toggleSidebar }) {


    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const pathname = useParams();

    const handleclick = () => {
        console.log("logout")
    };
   
    return (<>
        <div className={`w-[300px] fixed top-0 overflow-y-auto py-3   cursor-pointer items-center  z-50 bg-white top-0 bottom-0 md:block`} >
        <div className="px-4 py-4 md:px-6 md:py-6 lg:px-[28px] lg:py-8">
                <div className='mb-5 md:mb-10 lg:mb-[53px] text-center'>
                    <img className="max-w-full block m-auto" src={"/Header/Logo.png"} alt='img' width="208" />
                </div>
                <h3 className="uppercase text-[#808080] px-[15px] text-sm font-semibold mb-2.5 lg:mb-3.5">Overview</h3>
                <ul className="space-y-3">
                    <li>
                        <Link href="/"
                            className={`px-[15px] flex flex-wrap items-center py-[7px] rounded-full text-base tracking-[-0.03em] font-medium hover:text-[#0367F7] ${pathname === "/" ? 'bg-[#0367F7] bg-opacity-10 text-[#0367F7]' : 'text-[#8D929A] '}`}
                        >
                            <svg className="inline align-middle mr-[4px]" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.4622 7.5V2.5H18.1289V7.5H11.4622ZM3.12891 10.8333V2.5H9.79557V10.8333H3.12891ZM11.4622 17.5V9.16667H18.1289V17.5H11.4622ZM3.12891 17.5V12.5H9.79557V17.5H3.12891Z" fill="currentColor" />
                            </svg>
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/principle"
                            className={`px-[15px] flex flex-wrap items-center py-[7px] rounded-full text-base tracking-[-0.03em] font-medium   text-[#0367F7] hover:text-[#0367F7] ${pathname === "/admin/principle" ? 'bg-[#0367F7] bg-opacity-10 text-[#0367F7]' : 'text-[#8D929A] '}`}
                        >
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="pathname(#clip0_464_1678)">
                                    <path d="M14.2732 10.8009H15.3276L15.6439 8.903H16.9091L15.9602 6.05619C15.6439 5.10726 15.2523 4.47463 14.3786 4.47463C13.5049 4.47463 13.1134 5.10726 12.7971 6.05619L12.6094 6.61853" stroke="#8D929A" strokeWidth="1.13" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M13.1113 2.57675C13.1113 2.74291 13.144 2.90744 13.2076 3.06094C13.2712 3.21445 13.3644 3.35393 13.4819 3.47142C13.5994 3.58891 13.7389 3.68211 13.8923 3.7457C14.0459 3.80928 14.2104 3.842 14.3766 3.842C14.5427 3.842 14.7072 3.80928 14.8607 3.7457C15.0143 3.68211 15.1537 3.58891 15.2712 3.47142C15.3887 3.35393 15.4819 3.21445 15.5455 3.06094C15.6091 2.90744 15.6418 2.74291 15.6418 2.57675C15.6418 2.4106 15.6091 2.24607 15.5455 2.09256C15.4819 1.93906 15.3887 1.79958 15.2712 1.68209C15.1537 1.5646 15.0143 1.4714 14.8607 1.40782C14.7072 1.34423 14.5427 1.3115 14.3766 1.3115C14.2104 1.3115 14.0459 1.34423 13.8923 1.40782C13.7389 1.4714 13.5994 1.5646 13.4819 1.68209C13.3644 1.79958 13.2712 1.93906 13.2076 2.09256C13.144 2.24607 13.1113 2.4106 13.1113 2.57675Z" stroke="#8D929A" strokeWidth="1.13" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M3.72773 10.8009H2.67336L2.35705 8.903H1.0918L2.04073 6.05619C2.35705 5.10726 2.74857 4.47463 3.6223 4.47463C4.49602 4.47463 4.88755 5.10726 5.20386 6.05619L5.39154 6.61853" stroke="#8D929A" strokeWidth="1.13" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2.35742 2.57675C2.35742 2.74291 2.39015 2.90744 2.45374 3.06094C2.51731 3.21445 2.61051 3.35393 2.72801 3.47142C2.84549 3.58891 2.98497 3.68211 3.13848 3.7457C3.29198 3.80928 3.45652 3.842 3.62267 3.842C3.78883 3.842 3.95335 3.80928 4.10686 3.7457C4.26037 3.68211 4.39985 3.58891 4.51734 3.47142C4.63483 3.35393 4.72802 3.21445 4.79161 3.06094C4.85519 2.90744 4.88792 2.74291 4.88792 2.57675C4.88792 2.24119 4.75462 1.91937 4.51734 1.68209C4.28006 1.44481 3.95824 1.3115 3.62267 1.3115C3.28711 1.3115 2.96528 1.44481 2.72801 1.68209C2.49072 1.91937 2.35742 2.24119 2.35742 2.57675Z" stroke="#8D929A" strokeWidth="1.13" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7.14648 4.63854C7.14648 5.13015 7.34177 5.60162 7.68939 5.94923C8.03698 6.29685 8.5085 6.49213 9.00005 6.49213C9.49167 6.49213 9.96311 6.29685 10.3108 5.94923C10.6584 5.60162 10.8536 5.13015 10.8536 4.63854C10.8536 4.14694 10.6584 3.67548 10.3108 3.32786C9.96311 2.98024 9.49167 2.78495 9.00005 2.78495C8.5085 2.78495 8.03698 2.98024 7.68939 3.32786C7.34177 3.67548 7.14648 4.14694 7.14648 4.63854Z" stroke="#8D929A" strokeWidth="1.13" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12.2438 10.6638C12.2438 9.80343 11.902 8.97828 11.2936 8.36998C10.6853 7.7616 9.86018 7.41981 8.99981 7.41981C8.13944 7.41981 7.31435 7.7616 6.70599 8.36998C6.09763 8.97828 5.75586 9.80343 5.75586 10.6638V12.0542H7.14623L7.60944 16.6885H10.3902L10.8534 12.0542H12.2438V10.6638Z" stroke="#8D929A" strokeWidth="1.13" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_464_1678">
                                        <rect width="18" height="18" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg> &nbsp; Manage Principle
                        </Link>
                    </li>

                    <li>
                        <Link href="/admin/director"
                            className={`px-[15px] flex flex-wrap items-center py-[7px] rounded-full text-base tracking-[-0.03em] font-medium   text-[#0367F7] hover:text-[#0367F7] ${pathname === "/admin/director" ? 'bg-[#0367F7] bg-opacity-10 text-[#0367F7]' : 'text-[#8D929A] '}`}
                        >
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="pathname(#clip0_464_1678)">
                                    <path d="M14.2732 10.8009H15.3276L15.6439 8.903H16.9091L15.9602 6.05619C15.6439 5.10726 15.2523 4.47463 14.3786 4.47463C13.5049 4.47463 13.1134 5.10726 12.7971 6.05619L12.6094 6.61853" stroke="#8D929A" strokeWidth="1.13" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M13.1113 2.57675C13.1113 2.74291 13.144 2.90744 13.2076 3.06094C13.2712 3.21445 13.3644 3.35393 13.4819 3.47142C13.5994 3.58891 13.7389 3.68211 13.8923 3.7457C14.0459 3.80928 14.2104 3.842 14.3766 3.842C14.5427 3.842 14.7072 3.80928 14.8607 3.7457C15.0143 3.68211 15.1537 3.58891 15.2712 3.47142C15.3887 3.35393 15.4819 3.21445 15.5455 3.06094C15.6091 2.90744 15.6418 2.74291 15.6418 2.57675C15.6418 2.4106 15.6091 2.24607 15.5455 2.09256C15.4819 1.93906 15.3887 1.79958 15.2712 1.68209C15.1537 1.5646 15.0143 1.4714 14.8607 1.40782C14.7072 1.34423 14.5427 1.3115 14.3766 1.3115C14.2104 1.3115 14.0459 1.34423 13.8923 1.40782C13.7389 1.4714 13.5994 1.5646 13.4819 1.68209C13.3644 1.79958 13.2712 1.93906 13.2076 2.09256C13.144 2.24607 13.1113 2.4106 13.1113 2.57675Z" stroke="#8D929A" strokeWidth="1.13" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M3.72773 10.8009H2.67336L2.35705 8.903H1.0918L2.04073 6.05619C2.35705 5.10726 2.74857 4.47463 3.6223 4.47463C4.49602 4.47463 4.88755 5.10726 5.20386 6.05619L5.39154 6.61853" stroke="#8D929A" strokeWidth="1.13" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2.35742 2.57675C2.35742 2.74291 2.39015 2.90744 2.45374 3.06094C2.51731 3.21445 2.61051 3.35393 2.72801 3.47142C2.84549 3.58891 2.98497 3.68211 3.13848 3.7457C3.29198 3.80928 3.45652 3.842 3.62267 3.842C3.78883 3.842 3.95335 3.80928 4.10686 3.7457C4.26037 3.68211 4.39985 3.58891 4.51734 3.47142C4.63483 3.35393 4.72802 3.21445 4.79161 3.06094C4.85519 2.90744 4.88792 2.74291 4.88792 2.57675C4.88792 2.24119 4.75462 1.91937 4.51734 1.68209C4.28006 1.44481 3.95824 1.3115 3.62267 1.3115C3.28711 1.3115 2.96528 1.44481 2.72801 1.68209C2.49072 1.91937 2.35742 2.24119 2.35742 2.57675Z" stroke="#8D929A" strokeWidth="1.13" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7.14648 4.63854C7.14648 5.13015 7.34177 5.60162 7.68939 5.94923C8.03698 6.29685 8.5085 6.49213 9.00005 6.49213C9.49167 6.49213 9.96311 6.29685 10.3108 5.94923C10.6584 5.60162 10.8536 5.13015 10.8536 4.63854C10.8536 4.14694 10.6584 3.67548 10.3108 3.32786C9.96311 2.98024 9.49167 2.78495 9.00005 2.78495C8.5085 2.78495 8.03698 2.98024 7.68939 3.32786C7.34177 3.67548 7.14648 4.14694 7.14648 4.63854Z" stroke="#8D929A" strokeWidth="1.13" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12.2438 10.6638C12.2438 9.80343 11.902 8.97828 11.2936 8.36998C10.6853 7.7616 9.86018 7.41981 8.99981 7.41981C8.13944 7.41981 7.31435 7.7616 6.70599 8.36998C6.09763 8.97828 5.75586 9.80343 5.75586 10.6638V12.0542H7.14623L7.60944 16.6885H10.3902L10.8534 12.0542H12.2438V10.6638Z" stroke="#8D929A" strokeWidth="1.13" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_464_1678">
                                        <rect width="18" height="18" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg> &nbsp; Manage Director
                        </Link>
                    </li>

                    <li>
                        <Link href="/admin/career"
                            className={`px-[15px] flex flex-wrap items-center py-[7px] rounded-full text-base tracking-[-0.03em] font-medium   text-[#0367F7] hover:text-[#0367F7] ${pathname === "/admin/career" ? 'bg-[#0367F7] bg-opacity-10 text-[#0367F7]' : 'text-[#8D929A] '}`}
                        >
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="pathname(#clip0_464_1678)">
                                    <path d="M14.2732 10.8009H15.3276L15.6439 8.903H16.9091L15.9602 6.05619C15.6439 5.10726 15.2523 4.47463 14.3786 4.47463C13.5049 4.47463 13.1134 5.10726 12.7971 6.05619L12.6094 6.61853" stroke="#8D929A" strokeWidth="1.13" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M13.1113 2.57675C13.1113 2.74291 13.144 2.90744 13.2076 3.06094C13.2712 3.21445 13.3644 3.35393 13.4819 3.47142C13.5994 3.58891 13.7389 3.68211 13.8923 3.7457C14.0459 3.80928 14.2104 3.842 14.3766 3.842C14.5427 3.842 14.7072 3.80928 14.8607 3.7457C15.0143 3.68211 15.1537 3.58891 15.2712 3.47142C15.3887 3.35393 15.4819 3.21445 15.5455 3.06094C15.6091 2.90744 15.6418 2.74291 15.6418 2.57675C15.6418 2.4106 15.6091 2.24607 15.5455 2.09256C15.4819 1.93906 15.3887 1.79958 15.2712 1.68209C15.1537 1.5646 15.0143 1.4714 14.8607 1.40782C14.7072 1.34423 14.5427 1.3115 14.3766 1.3115C14.2104 1.3115 14.0459 1.34423 13.8923 1.40782C13.7389 1.4714 13.5994 1.5646 13.4819 1.68209C13.3644 1.79958 13.2712 1.93906 13.2076 2.09256C13.144 2.24607 13.1113 2.4106 13.1113 2.57675Z" stroke="#8D929A" strokeWidth="1.13" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M3.72773 10.8009H2.67336L2.35705 8.903H1.0918L2.04073 6.05619C2.35705 5.10726 2.74857 4.47463 3.6223 4.47463C4.49602 4.47463 4.88755 5.10726 5.20386 6.05619L5.39154 6.61853" stroke="#8D929A" strokeWidth="1.13" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2.35742 2.57675C2.35742 2.74291 2.39015 2.90744 2.45374 3.06094C2.51731 3.21445 2.61051 3.35393 2.72801 3.47142C2.84549 3.58891 2.98497 3.68211 3.13848 3.7457C3.29198 3.80928 3.45652 3.842 3.62267 3.842C3.78883 3.842 3.95335 3.80928 4.10686 3.7457C4.26037 3.68211 4.39985 3.58891 4.51734 3.47142C4.63483 3.35393 4.72802 3.21445 4.79161 3.06094C4.85519 2.90744 4.88792 2.74291 4.88792 2.57675C4.88792 2.24119 4.75462 1.91937 4.51734 1.68209C4.28006 1.44481 3.95824 1.3115 3.62267 1.3115C3.28711 1.3115 2.96528 1.44481 2.72801 1.68209C2.49072 1.91937 2.35742 2.24119 2.35742 2.57675Z" stroke="#8D929A" strokeWidth="1.13" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7.14648 4.63854C7.14648 5.13015 7.34177 5.60162 7.68939 5.94923C8.03698 6.29685 8.5085 6.49213 9.00005 6.49213C9.49167 6.49213 9.96311 6.29685 10.3108 5.94923C10.6584 5.60162 10.8536 5.13015 10.8536 4.63854C10.8536 4.14694 10.6584 3.67548 10.3108 3.32786C9.96311 2.98024 9.49167 2.78495 9.00005 2.78495C8.5085 2.78495 8.03698 2.98024 7.68939 3.32786C7.34177 3.67548 7.14648 4.14694 7.14648 4.63854Z" stroke="#8D929A" strokeWidth="1.13" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12.2438 10.6638C12.2438 9.80343 11.902 8.97828 11.2936 8.36998C10.6853 7.7616 9.86018 7.41981 8.99981 7.41981C8.13944 7.41981 7.31435 7.7616 6.70599 8.36998C6.09763 8.97828 5.75586 9.80343 5.75586 10.6638V12.0542H7.14623L7.60944 16.6885H10.3902L10.8534 12.0542H12.2438V10.6638Z" stroke="#8D929A" strokeWidth="1.13" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_464_1678">
                                        <rect width="18" height="18" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg> &nbsp; Manage Career
                        </Link>
                    </li>

                    <li>
                        <Link href="/admin/fees"
                            className={`px-[15px] flex flex-wrap items-center py-[7px] rounded-full text-base tracking-[-0.03em] font-medium   text-[#0367F7] hover:text-[#0367F7] ${pathname === "/admin/fees" ? 'bg-[#0367F7] bg-opacity-10 text-[#0367F7]' : 'text-[#8D929A] '}`}
                        >
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="pathname(#clip0_464_1678)">
                                    <path d="M14.2732 10.8009H15.3276L15.6439 8.903H16.9091L15.9602 6.05619C15.6439 5.10726 15.2523 4.47463 14.3786 4.47463C13.5049 4.47463 13.1134 5.10726 12.7971 6.05619L12.6094 6.61853" stroke="#8D929A" strokeWidth="1.13" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M13.1113 2.57675C13.1113 2.74291 13.144 2.90744 13.2076 3.06094C13.2712 3.21445 13.3644 3.35393 13.4819 3.47142C13.5994 3.58891 13.7389 3.68211 13.8923 3.7457C14.0459 3.80928 14.2104 3.842 14.3766 3.842C14.5427 3.842 14.7072 3.80928 14.8607 3.7457C15.0143 3.68211 15.1537 3.58891 15.2712 3.47142C15.3887 3.35393 15.4819 3.21445 15.5455 3.06094C15.6091 2.90744 15.6418 2.74291 15.6418 2.57675C15.6418 2.4106 15.6091 2.24607 15.5455 2.09256C15.4819 1.93906 15.3887 1.79958 15.2712 1.68209C15.1537 1.5646 15.0143 1.4714 14.8607 1.40782C14.7072 1.34423 14.5427 1.3115 14.3766 1.3115C14.2104 1.3115 14.0459 1.34423 13.8923 1.40782C13.7389 1.4714 13.5994 1.5646 13.4819 1.68209C13.3644 1.79958 13.2712 1.93906 13.2076 2.09256C13.144 2.24607 13.1113 2.4106 13.1113 2.57675Z" stroke="#8D929A" strokeWidth="1.13" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M3.72773 10.8009H2.67336L2.35705 8.903H1.0918L2.04073 6.05619C2.35705 5.10726 2.74857 4.47463 3.6223 4.47463C4.49602 4.47463 4.88755 5.10726 5.20386 6.05619L5.39154 6.61853" stroke="#8D929A" strokeWidth="1.13" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2.35742 2.57675C2.35742 2.74291 2.39015 2.90744 2.45374 3.06094C2.51731 3.21445 2.61051 3.35393 2.72801 3.47142C2.84549 3.58891 2.98497 3.68211 3.13848 3.7457C3.29198 3.80928 3.45652 3.842 3.62267 3.842C3.78883 3.842 3.95335 3.80928 4.10686 3.7457C4.26037 3.68211 4.39985 3.58891 4.51734 3.47142C4.63483 3.35393 4.72802 3.21445 4.79161 3.06094C4.85519 2.90744 4.88792 2.74291 4.88792 2.57675C4.88792 2.24119 4.75462 1.91937 4.51734 1.68209C4.28006 1.44481 3.95824 1.3115 3.62267 1.3115C3.28711 1.3115 2.96528 1.44481 2.72801 1.68209C2.49072 1.91937 2.35742 2.24119 2.35742 2.57675Z" stroke="#8D929A" strokeWidth="1.13" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7.14648 4.63854C7.14648 5.13015 7.34177 5.60162 7.68939 5.94923C8.03698 6.29685 8.5085 6.49213 9.00005 6.49213C9.49167 6.49213 9.96311 6.29685 10.3108 5.94923C10.6584 5.60162 10.8536 5.13015 10.8536 4.63854C10.8536 4.14694 10.6584 3.67548 10.3108 3.32786C9.96311 2.98024 9.49167 2.78495 9.00005 2.78495C8.5085 2.78495 8.03698 2.98024 7.68939 3.32786C7.34177 3.67548 7.14648 4.14694 7.14648 4.63854Z" stroke="#8D929A" strokeWidth="1.13" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12.2438 10.6638C12.2438 9.80343 11.902 8.97828 11.2936 8.36998C10.6853 7.7616 9.86018 7.41981 8.99981 7.41981C8.13944 7.41981 7.31435 7.7616 6.70599 8.36998C6.09763 8.97828 5.75586 9.80343 5.75586 10.6638V12.0542H7.14623L7.60944 16.6885H10.3902L10.8534 12.0542H12.2438V10.6638Z" stroke="#8D929A" strokeWidth="1.13" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_464_1678">
                                        <rect width="18" height="18" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg> &nbsp; Manage Fees structure
                        </Link>
                    </li>

                    <li>
                        <Link href="/admin/inquiry"
                            className={`px-[15px] flex flex-wrap items-center py-[7px] rounded-full text-base tracking-[-0.03em] font-medium   text-[#0367F7] hover:text-[#0367F7] ${pathname === "/admin/inquiry" ? 'bg-[#0367F7] bg-opacity-10 text-[#0367F7]' : 'text-[#8D929A] '}`}
                        >
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="pathname(#clip0_464_1678)">
                                    <path d="M14.2732 10.8009H15.3276L15.6439 8.903H16.9091L15.9602 6.05619C15.6439 5.10726 15.2523 4.47463 14.3786 4.47463C13.5049 4.47463 13.1134 5.10726 12.7971 6.05619L12.6094 6.61853" stroke="#8D929A" strokeWidth="1.13" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M13.1113 2.57675C13.1113 2.74291 13.144 2.90744 13.2076 3.06094C13.2712 3.21445 13.3644 3.35393 13.4819 3.47142C13.5994 3.58891 13.7389 3.68211 13.8923 3.7457C14.0459 3.80928 14.2104 3.842 14.3766 3.842C14.5427 3.842 14.7072 3.80928 14.8607 3.7457C15.0143 3.68211 15.1537 3.58891 15.2712 3.47142C15.3887 3.35393 15.4819 3.21445 15.5455 3.06094C15.6091 2.90744 15.6418 2.74291 15.6418 2.57675C15.6418 2.4106 15.6091 2.24607 15.5455 2.09256C15.4819 1.93906 15.3887 1.79958 15.2712 1.68209C15.1537 1.5646 15.0143 1.4714 14.8607 1.40782C14.7072 1.34423 14.5427 1.3115 14.3766 1.3115C14.2104 1.3115 14.0459 1.34423 13.8923 1.40782C13.7389 1.4714 13.5994 1.5646 13.4819 1.68209C13.3644 1.79958 13.2712 1.93906 13.2076 2.09256C13.144 2.24607 13.1113 2.4106 13.1113 2.57675Z" stroke="#8D929A" strokeWidth="1.13" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M3.72773 10.8009H2.67336L2.35705 8.903H1.0918L2.04073 6.05619C2.35705 5.10726 2.74857 4.47463 3.6223 4.47463C4.49602 4.47463 4.88755 5.10726 5.20386 6.05619L5.39154 6.61853" stroke="#8D929A" strokeWidth="1.13" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2.35742 2.57675C2.35742 2.74291 2.39015 2.90744 2.45374 3.06094C2.51731 3.21445 2.61051 3.35393 2.72801 3.47142C2.84549 3.58891 2.98497 3.68211 3.13848 3.7457C3.29198 3.80928 3.45652 3.842 3.62267 3.842C3.78883 3.842 3.95335 3.80928 4.10686 3.7457C4.26037 3.68211 4.39985 3.58891 4.51734 3.47142C4.63483 3.35393 4.72802 3.21445 4.79161 3.06094C4.85519 2.90744 4.88792 2.74291 4.88792 2.57675C4.88792 2.24119 4.75462 1.91937 4.51734 1.68209C4.28006 1.44481 3.95824 1.3115 3.62267 1.3115C3.28711 1.3115 2.96528 1.44481 2.72801 1.68209C2.49072 1.91937 2.35742 2.24119 2.35742 2.57675Z" stroke="#8D929A" strokeWidth="1.13" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7.14648 4.63854C7.14648 5.13015 7.34177 5.60162 7.68939 5.94923C8.03698 6.29685 8.5085 6.49213 9.00005 6.49213C9.49167 6.49213 9.96311 6.29685 10.3108 5.94923C10.6584 5.60162 10.8536 5.13015 10.8536 4.63854C10.8536 4.14694 10.6584 3.67548 10.3108 3.32786C9.96311 2.98024 9.49167 2.78495 9.00005 2.78495C8.5085 2.78495 8.03698 2.98024 7.68939 3.32786C7.34177 3.67548 7.14648 4.14694 7.14648 4.63854Z" stroke="#8D929A" strokeWidth="1.13" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12.2438 10.6638C12.2438 9.80343 11.902 8.97828 11.2936 8.36998C10.6853 7.7616 9.86018 7.41981 8.99981 7.41981C8.13944 7.41981 7.31435 7.7616 6.70599 8.36998C6.09763 8.97828 5.75586 9.80343 5.75586 10.6638V12.0542H7.14623L7.60944 16.6885H10.3902L10.8534 12.0542H12.2438V10.6638Z" stroke="#8D929A" strokeWidth="1.13" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_464_1678">
                                        <rect width="18" height="18" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg> &nbsp; Enquiry
                        </Link>
                    </li>

                    <li className="text-[#8D929A]">
                        <Link href="/admin/settings"
                            className={`px-[15px] flex flex-wrap items-center py-[7px] rounded-full text-base tracking-[-0.03em] font-medium  hover:text-[#0367F7] ${pathname === "/admin/settings" ? 'bg-[#0367F7] bg-opacity-10 text-[#0367F7]' : 'text-[#8D929A] '}`}

                        >
                            <svg className="inline align-middle mr-[4px]" width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.6357 11.1455L15.918 10.656L15.9101 10.6516L15.6357 11.1455ZM15.1939 10.9L14.6393 10.792C14.5925 11.0322 14.7056 11.2751 14.9195 11.3939L15.1939 10.9ZM15.2921 10L15.8569 10.0141C15.8571 10.0047 15.8571 9.99531 15.8569 9.98593L15.2921 10ZM15.1939 9.1L14.9195 8.6061C14.7056 8.7249 14.5925 8.96783 14.6393 9.20796L15.1939 9.1ZM15.6357 8.85455L15.9101 9.34851L15.918 9.34395L15.6357 8.85455ZM16.7805 7.36367L17.3262 7.51015L17.3262 7.51002L16.7805 7.36367ZM16.5357 5.5L17.0251 5.21767L16.5357 5.5ZM15.0448 4.35525L14.8984 4.90095L14.8984 4.90095L15.0448 4.35525ZM13.1811 4.6L12.8988 4.1106C12.8942 4.11327 12.8896 4.11601 12.885 4.11881L13.1811 4.6ZM12.7557 4.86182L12.4044 5.30436C12.5906 5.45213 12.8494 5.46758 13.0518 5.34301L12.7557 4.86182ZM11.2011 3.94545H10.6361C10.6361 4.17363 10.7734 4.37942 10.9841 4.46709L11.2011 3.94545ZM6.29206 3.94545L6.50914 4.46709C6.71981 4.37942 6.85706 4.17363 6.85706 3.94545H6.29206ZM4.73755 4.86182L4.44143 5.34301C4.64387 5.46758 4.90264 5.45213 5.08882 5.30435L4.73755 4.86182ZM4.31209 4.6L4.60821 4.11881C4.60365 4.11601 4.59906 4.11327 4.59443 4.1106L4.31209 4.6ZM3.4046 4.29227L3.47818 3.73208L3.47816 3.73207L3.4046 4.29227ZM1.58913 4.77935L1.24505 4.3312L1.24504 4.33121L1.58913 4.77935ZM0.649827 6.4075L1.21001 6.48108L1.21002 6.48105L0.649827 6.4075ZM0.712794 7.36367L0.167092 7.51007L0.167095 7.51009L0.712794 7.36367ZM1.85755 8.85455L2.13989 8.36515L2.13989 8.36515L1.85755 8.85455ZM2.283 9.1L2.8419 9.18283C2.8759 8.95341 2.76624 8.72651 2.56534 8.6106L2.283 9.1ZM2.20118 10L1.63651 9.98071C1.63607 9.99357 1.63607 10.0064 1.63651 10.0193L2.20118 10ZM2.283 10.9L2.56534 11.3894C2.76624 11.2735 2.8759 11.0466 2.84189 10.8171L2.283 10.9ZM1.85755 11.1455L1.5752 10.6561L1.57519 10.6561L1.85755 11.1455ZM1.13689 11.7771L1.585 12.1212L1.58509 12.1211L1.13689 11.7771ZM0.712794 12.6363L1.25849 12.7828L1.2585 12.7827L0.712794 12.6363ZM2.44842 15.6448L2.30194 16.1905L2.30207 16.1905L2.44842 15.6448ZM4.31209 15.4L4.59442 15.8894C4.59906 15.8867 4.60365 15.884 4.60821 15.8812L4.31209 15.4ZM4.73755 15.1382L5.08879 14.6956C4.90261 14.5479 4.64386 14.5324 4.44143 14.657L4.73755 15.1382ZM6.29206 16.0545H6.85706C6.85706 15.8264 6.7198 15.6206 6.50913 15.5329L6.29206 16.0545ZM11.2011 16.0545L10.9841 15.5329C10.7734 15.6206 10.6361 15.8264 10.6361 16.0545H11.2011ZM12.7557 15.1382L13.0518 14.657C12.8494 14.5324 12.5906 14.5479 12.4045 14.6956L12.7557 15.1382ZM13.1811 15.4L12.885 15.8812C12.8896 15.884 12.8942 15.8867 12.8988 15.8894L13.1811 15.4ZM15.0448 15.6448L15.1912 16.1905L15.1913 16.1905L15.0448 15.6448ZM16.5357 14.5L17.0251 14.7823L16.5357 14.5ZM16.7805 12.6363L17.3262 12.49L17.3262 12.4899L16.7805 12.6363ZM15.9101 10.6516L15.4683 10.4061L14.9195 11.3939L15.3613 11.6394L15.9101 10.6516ZM15.7485 11.008C15.8122 10.6804 15.8486 10.3479 15.8569 10.0141L14.7272 9.98593C14.7205 10.2566 14.691 10.5262 14.6393 10.792L15.7485 11.008ZM15.8569 9.98593C15.8486 9.65209 15.8122 9.31964 15.7485 8.99204L14.6393 9.20796C14.691 9.47383 14.7205 9.74347 14.7272 10.0141L15.8569 9.98593ZM15.4683 9.5939L15.9101 9.34844L15.3613 8.36065L14.9195 8.6061L15.4683 9.5939ZM15.918 9.34395C16.6121 8.94356 17.1185 8.28389 17.3262 7.51015L16.2348 7.21719C16.1048 7.70165 15.7877 8.11456 15.3534 8.36514L15.918 9.34395ZM17.3262 7.51002C17.5337 6.73623 17.4254 5.91165 17.0251 5.21767L16.0463 5.78233C16.2969 6.21672 16.3647 6.73291 16.2348 7.21732L17.3262 7.51002ZM17.0251 5.21767C16.6247 4.52368 15.9651 4.01717 15.1912 3.80954L14.8984 4.90095C15.3828 5.03091 15.7957 5.34795 16.0463 5.78233L17.0251 5.21767ZM15.1912 3.80955C14.4175 3.60194 13.5928 3.71024 12.8988 4.1106L13.4635 5.0894C13.8979 4.83878 14.4141 4.77101 14.8984 4.90095L15.1912 3.80955ZM12.885 4.11881L12.4596 4.38063L13.0518 5.34301L13.4773 5.08119L12.885 4.11881ZM13.107 4.41928C12.5927 4.01109 12.0244 3.67609 11.4182 3.42382L10.9841 4.46709C11.4939 4.67926 11.9719 4.96103 12.4044 5.30436L13.107 4.41928ZM11.7661 3.94545V3.45455H10.6361V3.94545H11.7661ZM11.7661 3.45455C11.7661 2.65376 11.4481 1.8857 10.8818 1.3194L10.0828 2.11844C10.4371 2.47276 10.6361 2.95338 10.6361 3.45455H11.7661ZM10.8818 1.3194C10.3155 0.753124 9.54738 0.435 8.7466 0.435V1.565C9.24772 1.565 9.72844 1.7641 10.0828 2.11844L10.8818 1.3194ZM8.7466 0.435C7.94579 0.435 7.17781 0.753152 6.61156 1.3194L7.41059 2.11844C7.76496 1.76407 8.24553 1.565 8.7466 1.565V0.435ZM6.61156 1.3194C6.04533 1.88563 5.72706 2.65366 5.72706 3.45455H6.85706C6.85706 2.95347 7.0562 2.47283 7.41059 2.11844L6.61156 1.3194ZM5.72706 3.45455V3.94545H6.85706V3.45455H5.72706ZM6.07498 3.42382C5.4688 3.67609 4.90052 4.0111 4.38628 4.41929L5.08882 5.30435C5.52134 4.96102 5.99932 4.67926 6.50914 4.46709L6.07498 3.42382ZM5.03366 4.38063L4.60821 4.11881L4.01598 5.08119L4.44143 5.34301L5.03366 4.38063ZM4.59443 4.1106C4.2508 3.91236 3.87151 3.78375 3.47818 3.73208L3.33101 4.85245C3.57724 4.8848 3.81466 4.96531 4.02975 5.0894L4.59443 4.1106ZM3.47816 3.73207C3.08483 3.68043 2.68517 3.70675 2.30202 3.80955L2.59482 4.90095C2.83466 4.83661 3.08484 4.82013 3.33104 4.85246L3.47816 3.73207ZM2.30202 3.80955C1.91884 3.91235 1.5597 4.08962 1.24505 4.3312L1.93322 5.22749C2.1302 5.07625 2.355 4.96529 2.59482 4.90095L2.30202 3.80955ZM1.24504 4.33121C0.930397 4.57281 0.666395 4.87402 0.468148 5.21766L1.44694 5.78234C1.57103 5.56726 1.73628 5.37871 1.93323 5.22748L1.24504 4.33121ZM0.468148 5.21766C0.269907 5.56129 0.141286 5.94059 0.089636 6.33394L1.21002 6.48105C1.24235 6.23485 1.32285 5.99743 1.44694 5.78234L0.468148 5.21766ZM0.0896403 6.33391C0.0379686 6.72725 0.0642988 7.12692 0.167092 7.51007L1.2585 7.21727C1.19415 6.97743 1.17768 6.72726 1.21001 6.48108L0.0896403 6.33391ZM0.167095 7.51009C0.374715 8.28391 0.881219 8.94357 1.5752 9.34394L2.13989 8.36515C1.7055 8.11454 1.38846 7.70164 1.25849 7.21726L0.167095 7.51009ZM1.5752 9.34394L2.00066 9.58939L2.56534 8.6106L2.13989 8.36515L1.5752 9.34394ZM1.72411 9.01717C1.67679 9.33641 1.64753 9.65811 1.63651 9.98071L2.76585 10.0193C2.77542 9.73928 2.80082 9.46001 2.8419 9.18283L1.72411 9.01717ZM1.63651 10.0193C1.64753 10.3418 1.67679 10.6636 1.72411 10.9829L2.84189 10.8171C2.80082 10.5401 2.77542 10.2607 2.76585 9.98071L1.63651 10.0193ZM2.00066 10.4106L1.5752 10.6561L2.13989 11.6348L2.56534 11.3894L2.00066 10.4106ZM1.57519 10.6561C1.23162 10.8543 0.930373 11.1182 0.688688 11.4331L1.58509 12.1211C1.73627 11.9241 1.92475 11.759 2.13991 11.6348L1.57519 10.6561ZM0.68878 11.433C0.447177 11.7476 0.269888 12.1067 0.167084 12.49L1.2585 12.7827C1.32284 12.5429 1.43378 12.3181 1.585 12.1212L0.68878 11.433ZM0.167096 12.4899C-0.0405155 13.2637 0.067785 14.0883 0.468142 14.7823L1.44695 14.2177C1.19633 13.7832 1.12856 13.267 1.25849 12.7828L0.167096 12.4899ZM0.468142 14.7823C0.868535 15.4764 1.5282 15.9828 2.30194 16.1905L2.5949 15.0991C2.11044 14.9691 1.69753 14.652 1.44695 14.2177L0.468142 14.7823ZM2.30207 16.1905C3.07586 16.398 3.90045 16.2898 4.59442 15.8894L4.02976 14.9106C3.59537 15.1612 3.07918 15.229 2.59477 15.0991L2.30207 16.1905ZM4.60821 15.8812L5.03366 15.6194L4.44143 14.657L4.01598 14.9188L4.60821 15.8812ZM4.3863 15.5807C4.9005 15.9888 5.46877 16.3239 6.07499 16.5762L6.50913 15.5329C5.99934 15.3208 5.52136 15.0389 5.08879 14.6956L4.3863 15.5807ZM5.72706 16.0545V16.5455H6.85706V16.0545H5.72706ZM5.72706 16.5455C5.72706 17.3463 6.04532 18.1144 6.61156 18.6807L7.41059 17.8816C7.05621 17.5273 6.85706 17.0465 6.85706 16.5455H5.72706ZM6.61156 18.6807C7.17784 19.2469 7.94583 19.565 8.7466 19.565V18.435C8.24549 18.435 7.76493 18.236 7.41059 17.8816L6.61156 18.6807ZM8.7466 19.565C9.54734 19.565 10.3155 19.247 10.8818 18.6807L10.0828 17.8816C9.72847 18.2359 9.24776 18.435 8.7466 18.435V19.565ZM10.8818 18.6807C11.4481 18.1144 11.7661 17.3462 11.7661 16.5455H10.6361C10.6361 17.0466 10.4371 17.5273 10.0828 17.8816L10.8818 18.6807ZM11.7661 16.5455V16.0545H10.6361V16.5455H11.7661ZM11.4182 16.5762C12.0244 16.3239 12.5927 15.9888 13.1069 15.5807L12.4045 14.6956C11.9719 15.0389 11.4939 15.3208 10.9841 15.5329L11.4182 16.5762ZM12.4596 15.6194L12.885 15.8812L13.4773 14.9188L13.0518 14.657L12.4596 15.6194ZM12.8988 15.8894C13.5928 16.2897 14.4174 16.398 15.1912 16.1905L14.8984 15.0991C14.4141 15.229 13.8979 15.1612 13.4635 14.9106L12.8988 15.8894ZM15.1913 16.1905C15.9651 15.9828 16.6247 15.4764 17.0251 14.7823L16.0463 14.2177C15.7957 14.6521 15.3829 14.9691 14.8983 15.0991L15.1913 16.1905ZM17.0251 14.7823C17.4254 14.0883 17.5337 13.2637 17.3262 12.49L16.2348 12.7827C16.3647 13.267 16.2969 13.7832 16.0463 14.2177L17.0251 14.7823ZM17.3262 12.4899C17.1185 11.716 16.6121 11.0564 15.918 10.656L15.3534 11.6349C15.7878 11.8854 16.1048 12.2983 16.2348 12.7828L17.3262 12.4899ZM8.7466 10.2532C8.60684 10.2532 8.49342 10.1398 8.49342 10H7.36342C7.36342 10.7638 7.98276 11.3832 8.7466 11.3832V10.2532ZM8.49342 10C8.49342 9.8602 8.60681 9.74682 8.7466 9.74682V8.61682C7.98279 8.61682 7.36342 9.23606 7.36342 10H8.49342ZM8.7466 11.3832C9.51044 11.3832 10.1298 10.7638 10.1298 10H8.99979C8.99979 10.1398 8.88636 10.2532 8.7466 10.2532V11.3832ZM10.1298 10C10.1298 9.23606 9.51042 8.61682 8.7466 8.61682V9.74682C8.88639 9.74682 8.99979 9.8602 8.99979 10H10.1298Z" fill="currentColor" />
                            </svg>

                            Profile Settings
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
}

export default PhoneSideBar;