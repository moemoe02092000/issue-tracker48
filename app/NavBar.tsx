'use client'
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GiAlienBug } from "react-icons/gi";
import classNames from "classnames";
const NavBar = () => {
  const currentPath = usePathname();
  console.log(currentPath);
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
            //className={`${link.href===currentPath ? "text-zinc-900": "text-zinc-500"} hover:text-zinc-900 transition-colors`}
            className={classNames({'text-zinc-900':link.href===currentPath,'text-zinc-500':link.href!==currentPath,'hover:text-zinc-900 transition-colors':true})}
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
//35MIN
