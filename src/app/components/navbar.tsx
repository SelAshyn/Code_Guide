"use client";
import { useState } from "react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="m-5 p-2 sticky top-2 z-100">
      <nav className="w-auto bg-white/40 backdrop-blur-sm mt-1 p-2 flex items-center justify-between rounded-xl shadow-2xl text-xl font-[Arima] relative z-50">
        {/* Logo Section */}
        <div className="flex items-center space-x-2 z-50">
          <a href="/" className="flex items-center space-x-2">
            <img
              src="https://raw.githubusercontent.com/SelAshyn/Code_Guide/refs/heads/master/public/img.png"
              width={50}
              height={50}
              alt="Logo"
            />
            <img
              src="https://raw.githubusercontent.com/SelAshyn/Code_Guide/refs/heads/master/public/img2.png"
              width={120}
              height={60}
              alt="Logo Text"
            />
          </a>
        </div>

        {/* Hamburger Icon (Mobile Only) */}
        <button
          className="md:hidden text-black text-3xl focus:outline-none z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Navigation Links (Desktop + Mobile) */}
        <ul
          className={`
            flex flex-col md:flex-row md:items-center md:space-x-6 bg-transparent
            absolute md:static left-0 top-full w-full md:w-auto md:bg-transparent
            transition-all duration-500 ease-in-out overflow-hidden
            ${menuOpen ? "max-h-96 bg-white text-center opacity-100 py-4" : "max-h-0 opacity-0 md:opacity-100 md:max-h-none"}
            md:py-0 md:opacity-100 md:visible rounded-b-2xl md:rounded-none
          `}
        >
          <li>
            <a
              href="/"
              className="block py-3 px-4 text-black no-underline text-[18px] font-extrabold tracking-[1px] uppercase hover:text-[#df0885]"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="./Coming/"
              className="block py-3 px-4 text-black no-underline text-[18px] font-extrabold tracking-[1px] uppercase hover:text-[#df0885]"
              onClick={() => setMenuOpen(false)}
            >
              Courses
            </a>
          </li>
          <li>
            <a
              href="./Coming/"
              className="block py-3 px-4 text-black no-underline text-[18px] font-extrabold tracking-[1px] uppercase hover:text-[#df0885]"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </a>
          </li>

          {/* Sign In (Mobile Only) */}
          <li className="block md:hidden mt-2 px-4">
            <a
              href="./Sign In/index.html"
              className="bg-[#0085a1] rounded-[5px] py-2 px-4 text-white no-underline text-[15px] font-bold tracking-[1px] uppercase hover:bg-[rgb(17,217,217)] hover:text-black inline-block w-auto text-center"
              onClick={() => setMenuOpen(false)}
            >
              Sign In
            </a>
          </li>
        </ul>

        {/* Sign In (Desktop Only) */}
        <div className="hidden md:flex justify-end">
          <a
            href="./Sign In/index.html"
            className="bg-[#0085a1] rounded-[5px] py-2 px-4 text-white no-underline text-[15px] font-bold tracking-[1px] uppercase hover:bg-[rgb(17,217,217)] hover:text-black"
          >
            Sign In
          </a>
        </div>
      </nav>
    </div>
  );
}
