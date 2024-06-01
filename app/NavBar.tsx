import React from "react";
import Link from "next/link";
import { GiAlienBug } from "react-icons/gi";
const NavBar = () => {
  const listitems = [
    { label: "Dashboard", href: "/" },
    { label: "Issue", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-5 border-b h-14 mb-5 px-6 items-center">
      <div>
        <link href="/" />
        <GiAlienBug />
      </div>
      <ul className="flex space-x-5">
        {listitems.map((li) => (
          <li
            key={li.href}
            className="text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            <link href={li.href} />
            {li.label}
          </li>
        ))}
        {/*<li className='text-zinc-500 hover:text-zinc-900 transition-colors'><link href='/'/>Dashboard</li>
            <li><link href='/issues'/>Issue</li>*/}
      </ul>
    </nav>
  );
};

export default NavBar;
