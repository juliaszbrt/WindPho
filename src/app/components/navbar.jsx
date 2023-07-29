'use client'
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useState } from "react"

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false) // [value, function that changes value]

    const handleMenu = () =>{
        setMenuOpen(!menuOpen)
    }

    return (
        <div>
            <nav className='flex pl-[2rem] pr-[2rem] items-center justify-between w-full fixed z-[100] bg-[#305076] h-[6rem]'>
                <div className={
                    !menuOpen ? 'visible':'invisible'
                }>
                    <a href='/'><div className="h-[4rem] w-[4rem] rounded-[100%] bg-[#A8BCD3]"></div></a>
                </div>
                <div className={
                    !menuOpen ? 'visible':'invisible'
                }>
                    <AiOutlineMenu onClick={handleMenu} className="sm:hidden text-3xl text-[#A8BCD3]" />
                </div>
                <div className={
                    menuOpen ? 'visible':'hidden'
                }>
                    <AiOutlineClose onClick={handleMenu} className="text-3xl text-[#A8BCD3]" />
                </div>
                {/* styled for desktop */}
                <div class="hidden sm:text-[#A8BCD3] sm:flex sm:gap-[4rem] sm:text-[20px]">
                    <Link href="/" className="hover:text-white ease-in-out duration-500">Home</Link>
                    <Link href="/menu" className="hover:text-white ease-in-out duration-500">Menu</Link>
                    <Link href="/contact" className="hover:text-white ease-in-out duration-500">Contact</Link>
                    <Link href="/about" className="hover:text-white ease-in-out duration-500">About</Link>
                </div>
            </nav>
            <nav className={
                    // if menuOpen is true --> visible; else --> hidden
                    menuOpen ? 'fixed w-[100vw] h-screen bg-[#305076] ease-in duration-500 flex flex-col justify-center items-center' : 'hidden'
                }>
                    <div onClick={handleMenu} className="text-[#A8BCD3] flex flex-col text-center gap-[1.5rem] text-[2rem]">
                        <Link href="/" >Home</Link>
                        <Link href="/menu">Menu</Link>
                        <Link href="/contact">Contact</Link>
                        <Link href="/about">About</Link>
                    </div>
                </nav>
        </div>
    )
}