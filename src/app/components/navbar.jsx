import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

export default function Navbar() {
    return (
        <nav className='w-full fixed z-[100] bg-[#305076] h-[6rem]'>
            <div>
                <Link href="/">Home</Link>
                <Link href="/menu">Menu</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/about">About</Link>
            </div>
            <AiOutlineMenu className="sm:hidden text-3xl cursor-pointer" />
        </nav>
    );
}