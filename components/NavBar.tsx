"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleButton = () => {
    setIsOpen(!isOpen);
  };

  // Animation variants for the menu
  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.3 },
    },
  };

  // Animation variants for the hamburger icon
  const iconVariants = {
    open: { rotate: 90 },
    closed: { rotate: 0 },
  };

  return (
    <div className="w-full shadow-sm">
      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-around items-center py-5 md:w-[80%] mx-auto">
        <Link href="/" className={`text-2xl font-bold text-primary`}>
          Elabem Consultancy
        </Link>
        <ul className="flex justify-end gap-6">
          <li>
            <Link
              href="/"
              className={`${
                pathname === "/" ? "text-primary font-bold" : ""
              } hover:font-semibold hover:text-primary`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`${
                pathname === "/about" ? "text-primary font-bold" : ""
              } hover:font-semibold hover:text-primary`}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/scholarship"
              className={`${
                pathname === "/scholarship" ? "text-primary font-bold" : ""
              } hover:font-semibold hover:text-primary`}
            >
              Scholarship
            </Link>
          </li>
          <li>
            <Link
              href="/contact-us"
              className={`${
                pathname === "/contact-us" ? "text-primary font-bold" : ""
              } hover:font-semibold hover:text-primary`}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Navigation */}
      <div className="absolute shadow-sm top-0 right-0 left-0 md:hidden z-50">
        <div className="flex justify-between items-center p-5">
          <Link href="/" className="text-xl font-bold text-primary">
            Elabem Consultancy
          </Link>

          {/* Hamburger Icon */}
          <motion.div
            variants={iconVariants}
            animate={isOpen ? "open" : "closed"}
            onClick={toggleButton}
            className="cursor-pointer"
          >
            {isOpen ? (
              <i className="ri-close-line text-primary text-3xl"></i>
            ) : (
              <i className="ri-menu-fill text-primary text-3xl"></i>
            )}
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex flex-col gap-1 p-3 bg-white"
            >
              <li>
                <Link
                  href="/"
                  className={`${
                    pathname === "/" ? "text-primary font-bold" : ""
                  } hover:font-semibold hover:text-primary`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`${
                    pathname === "/about" ? "text-primary font-bold" : ""
                  } hover:font-semibold hover:text-primary`}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/scholarship"
                  className={`${
                    pathname === "/scholarship" ? "text-primary font-bold" : ""
                  } hover:font-semibold hover:text-primary`}
                >
                  Scholarship
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className={`${
                    pathname === "/contact-us" ? "text-primary font-bold" : ""
                  } hover:font-semibold hover:text-primary`}
                >
                  Contact Us
                </Link>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default NavBar;
