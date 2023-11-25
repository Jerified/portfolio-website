"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import AnimatedLink from './AnimatedLink'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
// import MobileNavLink from './MobileNavLink'
// import { containerVariants, menuVariants } from './animation/navbarAnimation'
import { Dancing_Script } from "@next/font/google"
import { containerVariants, menuVariants, mobileVariants } from './animation/navbarAnimation'
import MobileNavLink from './MobileNavLink'

const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "#about" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#about" },
]

const text = Dancing_Script({
  subsets: ['latin'],
  weight: ['400'],
  variable: "--roboto-font"
})

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const path = usePathname()


  return (
    <header>
      <nav className="flex justify-between items-center py-8 lg:py-8 max-w-6xl px-6 mx-auto">
      <p className={`text-3xl font-semibold text-white ${text.className}`}>Blessing.</p>
            <div className="hidden md:flex justify-center items-center gap-7">
                <ul className="flex gap-4 uppercase">
                    {navLinks.map((link, i): any => {
                        return ( 
                            <Link href={link.href} className="relative" key={link.title}>
                                {link.href === path && (
                                    <motion.span
                                        layoutId='underline'
                                        className='absolute left-0 top-full block h-[1px] w-full bg-black' />
                                )}
                                <AnimatedLink title={link.title} />
                            </Link>
                        )
                    })}
                </ul>
                <button className="text-white text-sm px-3 py-2 [background:linear-gradient(-69.74deg,_#100d7f,_rgba(178,_147,_147,_0.28)_40.52%,_rgba(198,_198,_198,_0))] rounded-[28px]">
                    Get Resume
                </button>
            </div>
            <div
                className="w-6 h-5 flex flex-col justify-between items-center md:hidden text-4xl cursor-pointer overflow-hidden group"
                onClick={toggleMenu}>
                <span className="w-full h-[2px] inline-flex transform group-hover:translate-x-2 transition-all ease-out duration-300 bg-white" />
                <span className="w-full h-[2px] inline-flex transform group-hover:translate-x-0 transition-all ease-out duration-300 bg-white translate-x-3" />
                <span className="w-full h-[2px] inline-flex transform group-hover:translate-x-3 transition-all ease-out duration-300 bg-white translate-x-1" />
            </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed z-50 left-0 top-0 w-full h-[100dvh] origin-top bg-orange-500 text-black p-10"
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-between">
                <h1 className="text-lg text-black">Blessing.</h1>
                <p
                  className="cursor-pointer text-md text-black"
                  onClick={toggleMenu}
                >
                  Close
                </p>
              </div>
              <motion.div
                variants={containerVariants}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center font-lora items-center gap-7 "
              >
                {navLinks.map((link, index) => {
                  return (
                    <div key={index} className="overflow-hidden">
                      <MobileNavLink
                        title={link.title}
                        href={link.href}
                      />
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

// const MobileNavLink = ({ title, href }) => {
//   return (
//     <motion.div
//       variants={mobileVariants}
//       className="text-5xl uppercase text-black"
//     >
//       <Link href={href}>{title}</Link>
//     </motion.div>
//   );
// };