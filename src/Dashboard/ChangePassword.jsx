import React from 'react'
import Sidebar from "../components/side-top-bar";
import { LuKeyRound, LuReplace } from "react-icons/lu";


const ChangePassword = () => {


  return (
    <Sidebar>
    <div className="h-screen p-6">
      <div className="mb-8 text-[#242E4D]">
      <h1 className="text-3xl font-semibold mb-4 flex gap-1">
      <LuKeyRound /> New Password</h1>
      <p classname="text-xl font-medium">Your new Password must be different from your previous password</p>
      </div>
      <form action="submit" className="text-[#242E4D] text-left rounded-lg shadow-sm p-6">
      <label htmlFor="Old-Password" className="block text-md font-semibold capitalize text-[#242E4D] mb-2">Old Password<br />
          <input type="password" name="old-password" id="" className="w-full md:w-2/5 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#242E4D]"/>
        </label>
        <label htmlFor="Password" className="block text-md font-semibold capitalize text-[#242E4D] mb-2">New Password<br />
          <input type="password" name="new-password" id="" className="w-full md:w-2/5 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#242E4D]"/>
        </label>
        <label htmlFor="Confirm-Password" className="block text-md font-semibold capitalize text-[#242E4D] mb-2">Confirm New Password<br />
          <input type="password" name="confirm-new-password" id="" className="w-full md:w-2/5 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#242E4D]"/>
        </label>
        <div className="mt-8">
        <button type="submit" className="flex items-center gap-2 text-white bg-[#242E4D] px-6 py-2 rounded cursor-pointer hover:bg-[#182038] transition ease-in-out duration-300">
        <LuReplace />  Change Password</button>
        </div>
      </form>
    </div>
        </Sidebar>

  )
}

export default ChangePassword