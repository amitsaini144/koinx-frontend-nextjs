"use client"
import NavLink from "./NavLink"
import Button from "./BlueButton"
import Logo from "./Logo"
import { useRef } from 'react';


function Navbar() {
    const menuRef = useRef<HTMLDivElement>(null);

    function ToggleMenu() {
        if (menuRef.current) {
            menuRef.current.classList.toggle('top-[9%]')
                ;
        }
    }
    return (
        <nav className="bg-white md:sticky top-0 z-10 shadow-sm flex justify-between items-center py-4 ">
            <div className="ml-10 ">
                <Logo />
            </div>
            <div ref={menuRef} className="absolute duration-500 md:static bg-white min-h-[40vh] md:min-h-fit left-0 top-[-100%] w-full md:w-auto flex items-center px-5">
                <div className="flex md:flex-row flex-col justify-between md:items-center mr-10 mt-1 md:gap-[1vw] gap-8">
                    <NavLink label="Crypto Taxes" />
                    <NavLink label="Free tools" />
                    <NavLink label="Resourse Center" />
                    <div className="mr-1 flex ml-3 sm:ml-8 md:ml-0">
                        <Button />
                    </div>
                </div>
            </div>
            <button onClick={ToggleMenu} className="cursor-pointer md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>


            </button>
        </nav>
    )
}

export default Navbar