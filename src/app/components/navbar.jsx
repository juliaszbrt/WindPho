import Link from 'next/link';

export default function Navbar() {
    return (
        <div>
            <Link href="/">Home</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/about">About Us</Link>
        </div>
    );
}