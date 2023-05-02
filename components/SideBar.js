import { forwardRef } from "react";
import Link from "next/link";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
  MdThumbsUpDown,
  MdAlarm
} from "react-icons/md";
import { HiOutlineHome,HiChatAlt2 } from "react-icons/hi";

import { CgProfile } from "react-icons/cg";
import { FaRegComments,FaClipboardList,FaClock,FaEnvelope,FaMapMarkerAlt } from "react-icons/fa";
import { BiMessageSquareDots } from "react-icons/bi";
import swiftly from "./assets/swiftly.png";
import Image from "next/image"
import { BiHourglass,BiDish } from "react-icons/bi";
import { useRouter } from "next/router";

const SideBar = forwardRef(({ showNav }, ref) => {
  const router = useRouter();

  return (
    <div ref={ref} className="fixed w-56 h-full bg-white shadow-sm">
    <Disclosure as="nav">
      <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
        <GiHamburgerMenu
          className="block md:hidden h-6 w-6"
          aria-hidden="true"
        />
      </Disclosure.Button>
      {/* Button Nav */}
      <div className="p-6 w-1/2 h-screen mt-0  bg-white z-20 fixed top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
        <div className="flex flex-col justify-start item-center mb-20">
          <Link href="/">
          <Image src={swiftly} alt="SwiftlyBox" width={350} height={70}/>
          </Link>
          <div className=" my-4 border-b border-gray-100 pb-4 ">
            <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <HiOutlineHome className="text-2xl text-gray-600 group-hover:text-white " />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                Dashboard
              </h3>
            </div>
            <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <BiHourglass className="text-2xl text-gray-600 group-hover:text-white " />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                Orders
              </h3>
            </div>
            <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <BiDish className="text-2xl text-gray-600 group-hover:text-white " />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
              Food Catalogue
              </h3>
            </div>
            <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <HiChatAlt2 className="text-2xl text-gray-600 group-hover:text-white " />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                Comments
              </h3>
            </div>
            <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <MdThumbsUpDown className="text-2xl text-gray-600 group-hover:text-white " />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                Reviews
              </h3>
            </div>
            <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 border-left rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <FaClipboardList className="text-2xl text-gray-600 group-hover:text-white " />
              <Link href="blog">
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                Blog
              </h3>
              </Link>
            </div>
          </div>
          {/* Business Account */}
          <div className="pt-20">
            <div className="flex items-center justify-between">
              <div className="flex">
                <div className=" bg-gray-200 p-2 mr-3 hover:bg-green-400" style={{borderRadius:"10px"}}>
                  <MdAlarm size={20} />
                </div>
                <div className="rounded-full bg-gray-200 p-2 mr-3 hover:bg-green-400" style={{borderRadius:"10px"}}>
                  <FaMapMarkerAlt size={20} />
                </div>
                <div className="rounded-full bg-gray-200 p-2 hover:bg-green-400" style={{borderRadius:"10px"}}>
                  <FaEnvelope size={20} />
                </div>
              </div>
            </div>
            <hr className="h-px mt-3 bg-gray-200 border-0 dark:bg-gray-700"/>
            <div className="flex items-center mt-4">
            <Image src="https://images.pexels.com/photos/2679501/pexels-photo-2679501.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Business" width="60" height="60" className="rounded-full w-12 h-12 mr-4"/>
              <div>
                <p className="font-bold text-sm">Business Account</p>
                <p>View Account</p>
              </div>
            </div>
            </div>

        </div>
      </div>
    </Disclosure>
  </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
