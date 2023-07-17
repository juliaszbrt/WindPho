// 'use client'
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useState } from "react"

export default function Navbar() {
    // const [menuOpen, setMenuOpen] = useState(false)
    return (
        <nav className='flex pl-[2rem] pr-[2rem] items-center justify-between w-full fixed z-[100] bg-[#305076] h-[6rem]'>
            <div className="">
                <a href='/'><div className="h-[4rem] w-[4rem] rounded-[100%] bg-[#A8BCD3]"></div></a>
            </div>
            <div>
                <AiOutlineMenu className="sm:hidden text-3xl cursor-pointer text-[#A8BCD3]" />
            </div>
            {/* mobile version */}
            <div class="hidden">
                <Link href="/">Home</Link>
                <Link href="/menu">Menu</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/about">About</Link>
            </div>
        </nav>
    )
}