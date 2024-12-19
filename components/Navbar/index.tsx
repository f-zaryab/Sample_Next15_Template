import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className=" bg-yellow-500 py-4 fixed top-0 w-full flex justify-center">
      <div className="max-w-[90rem] flex justify-between items-center w-full">
        <div>Logo</div>
        <ul className="flex justify-center items-center gap-4 font-bold text-white">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/mw">MWRD</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
