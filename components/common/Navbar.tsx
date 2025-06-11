"use client";
import Link from "next/link";
import ToogleTheme from "../ui/ToogleTheme";
import { motion, AnimatePresence } from "motion/react";
import React from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="drawer font-body">
      <div className="drawer-content flex flex-col">
        {/* Large Screen */}
        <div className="navbar bg-transparent backdrop-blur-md fixed top-0 z-20 w-full lg:px-24 font-body pt-4">
          <div className="flex flex-row items-center justify-between w-full lg:hidden ">
            <button
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
              onClick={() => setIsOpen(true)}
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
            </button>
            <div>
              <ToogleTheme />
            </div>
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
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              aria-label="close sidebar"
              className="drawer-overlay fixed inset-0 z-[99] bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              className="w-80 min-h-full h-full bg-neutral-950 z-[101] shadow-2xl border-l border-neutral-800 font-body text-white fixed top-0 left-0"
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="relative h-full w-full">
                <button
                  className="absolute top-4 right-4 text-2xl text-white hover:text-blue-500 focus:outline-none"
                  aria-label="Close sidebar"
                  onClick={() => setIsOpen(false)}
                >
                  &times;
                </button>
                <ul className="menu min-h-full w-80 p-4 pt-20 z-[101] font-body text-white">
                  <li>
                    <Link href="#home" onClick={() => setIsOpen(false)}>
                      HOME
                    </Link>
                  </li>
                  <li>
                    <Link href="#about" onClick={() => setIsOpen(false)}>
                      ABOUT
                    </Link>
                  </li>
                  <li>
                    <Link href="#project" onClick={() => setIsOpen(false)}>
                      PROJECTS
                    </Link>
                  </li>
                  <li>
                    <Link href="#skills" onClick={() => setIsOpen(false)}>
                      SKILLS
                    </Link>
                  </li>
                  <li>
                    <Link href="#contact" onClick={() => setIsOpen(false)}>
                      CONTACT
                    </Link>
                  </li>
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
