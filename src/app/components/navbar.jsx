// 'use client'
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
// import { useState } from "react"

export default function Navbar() {
    // const [menuOpen, setMenuOpen] = useState(false)
    return (
        <nav className='flex pl-[2rem] pr-[2rem] items-center justify-between w-full fixed z-[100] bg-[#305076] h-[6rem]'>
            <div>
                <a href='/'><div className="h-[4rem] w-[4rem] rounded-[100%] bg-[#A8BCD3]"></div></a>
            </div>
            <div>
                <AiOutlineMenu className="sm:hidden text-3xl cursor-pointer text-[#A8BCD3]" />
            </div>
            {/* styled for desktop */}
            <div class="hidden sm:text-[#A8BCD3] sm:flex sm:gap-[4rem] sm:text-[20px]">
                <Link href="/" className="hover:text-white ease-in-out duration-500">Home</Link>
                <Link href="/menu" className="hover:text-white ease-in-out duration-500">Menu</Link>
                <Link href="/contact" className="hover:text-white ease-in-out duration-500">Contact</Link>
                <Link href="/about" className="hover:text-white ease-in-out duration-500">About</Link>
            </div>
        </nav>
    )
}