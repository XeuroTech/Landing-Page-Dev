import React from 'react'
import { FaGithub } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";


const Header = () => {
    return (
        <>
            <div className='flex justify-between items-center p-9 '>
                <div className='flex gap-10 items-center'>
                    <FaGithub className='scale-200' />
                    <button className='rounded flex bg-transparent text-white hover:bg-black hover:text-white hover:text-xl hover:transition-all duration-200 py-2 px-2'>About <RiArrowDropDownLine className='scale-200 pl-1 pt-1' /></button>
                    <button className='flex rounded bg-transparent  text-white hover:bg-black hover:text-white hover:text-xl hover:transition-all duration-200 py-2 px-2'>Home <RiArrowDropDownLine className='scale-200 pl-1 pt-1' /></button>
                    <button className='  flex rounded bg-transparent  text-white hover:bg-black hover:text-white hover:text-xl hover:transition-all duration-200 py-2 px-2'>Phone <RiArrowDropDownLine className='scale-200 pl-1 pt-1' /></button>
                    <button className='flex rounded bg-transparent  text-white hover:bg-black hover:text-white hover:text-xl hover:transition-all duration-200 py-2 px-2'>Address <RiArrowDropDownLine className='scale-200 pl-1 pt-1' /></button>
                    <button className='flex rounded bg-transparent  text-white hover:bg-black hover:text-white hover:text-xl hover:transition-all duration-200 py-2 px-2'>Name <RiArrowDropDownLine className='scale-200 pl-1 pt-1' /></button>
                    <button className='flex rounded bg-transparent  text-white hover:bg-black hover:text-white hover:text-xl hover:transition-all duration-200 py-2 px-2'>Class <RiArrowDropDownLine className='scale-200 pl-1 pt-1' /></button>
                </div>
                <div className='flex gap-4 items-center justify-center'>
                    <FaSearch className='bg-slate-300 p-1 rounded scale-200' />
                    <button className='rounded bg-transparent  text-white hover:bg-black hover:text-white hover:text-xl hover:transition-all duration-200 py-2 px-2'>SignUp</button>
                    <button className='rounded bg-transparent  text-white hover:bg-black hover:text-white hover:text-xl hover:transition-all duration-200 py-2 px-2 border border-slate-300'>SignIn</button>
                </div>
            </div >
        </>
    )
}

export default Header