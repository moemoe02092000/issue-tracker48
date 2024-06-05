import React from "react";
import Link from "next/link";
import { GiAlienBug } from "react-icons/gi";
const NavBar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-5 border-b h-14 mb-5 px-6 items-center">
      <div>
        <Link href="/">
          <GiAlienBug />
        </Link>
      </div>
      <ul className="flex space-x-5">
        {links.map((link) => (
          <li
            key={link.href}
            className="text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
        {/*<li className='text-zinc-500 hover:text-zinc-900 transition-colors'><Link href='/'>Dashboard</Link></li>
            <li><link href='/issues'/>Issue</li>*/}
      </ul>
    </nav>
  );
};

export default NavBar;
//20MIN
