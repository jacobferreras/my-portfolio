"use client";
import Link from "next/link";
import ToogleTheme from "../ui/ToogleTheme";

const Navbar = () => {
  return (
    <div className="drawer font-body">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Large Screen */}
        <div className="navbar bg-transparent backdrop-blur-md fixed top-0 z-20 w-full lg:px-24 font-body pt-4">
          <div className="flex-none lg:hidden ">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="hidden lg:flex w-full justify-center">
            <ul className="menu menu-horizontal flex justify-center font-semibold  font-body w-full text-base-content">
              <li>
                <Link href="#home" className="">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="#about">ABOUT</Link>
              </li>
              <li>
                <Link href="#project">PROJECTS</Link>
              </li>
              <li>
                <Link href="#skills">SKILLS</Link>
              </li>
              <li>
                <Link href="#contact">CONTACT</Link>
              </li>

              <ToogleTheme />
            </ul>
          </div>
        </div>
      </div>

      {/* Small Screen */}
      <div className="drawer-side z-[100] fixed top-0 left-0 w-full h-full font-body">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="relative w-80 min-h-full h-full">
          <ul className="menu bg-neutral-950 min-h-full w-80 p-4 pt-20 z-[101] relative shadow-2xl border-l border-neutral-800 font-body text-white">
            <li>
              <Link href="#home">HOME</Link>
            </li>
            <li>
              <Link href="#about">ABOUT</Link>
            </li>
            <li>
              <Link href="#projects">PROJECTS</Link>
            </li>
            <li>
              <Link href="#skills">SKILLS</Link>
            </li>
            <li>
              <Link href="#contact">CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
