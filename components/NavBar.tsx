"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const path = usePathname();

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Animation variants
  const mobileMenuVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.5,
      },
    },
    closed: {
      opacity: 0,
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.5,
      },
    },
  };

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:block fixed top-0 left-0 right-0 bg-white shadow z-50 tracking-widest">
        <div className="flex justify-between items-center py-2 w-[90%] mx-auto">
          <Link href="/">
            {" "}
            <Image
              src="/logo.png"
              alt="logo"
              className="bg-primary h-14"
              width={200}
              height={50}
            />
          </Link>
          <ul className="flex justify-end gap-6">
            <li>
              <Link
                href="/"
                className={`${
                  path === "/" ? "text-primary font-bold" : ""
                } hover:font-semibold hover:text-primary`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`${
                  path === "/about" ? "text-primary font-bold" : ""
                } hover:font-semibold hover:text-primary`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/scholarship"
                className={`${
                  path === "/scholarship" ? "text-primary font-bold" : ""
                } hover:font-semibold hover:text-primary`}
              >
                Scholarship
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className={`${
                  path === "/contact-us" ? "text-primary font-bold" : ""
                } hover:font-semibold hover:text-primary`}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="bg-white flex justify-between items-center px-5 md:hidden py-5 fixed top-0 left-0 right-0 shadow-sm z-50 transition-all duration-300">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            className="bg-primary h-12 w-39"
            width={200}
            height={70}
          />
        </Link>
        <div className="flex items-center gap-4">
          <button onClick={handleMenuClick} className="text-primary">
            <i className="ri-menu-line text-2xl"></i>
          </button>
        </div>
      </div>

      {/* Mobile menu nav list */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden"
            onClick={closeMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="fixed inset-y-0 left-0 w-[75%] bg-white z-50 overflow-y-auto"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="text-primary font-bold flex justify-between items-center p-4">
                <h1>Elabem Consultancy</h1>
                <button onClick={closeMenu} className="text-primary">
                  <i className="ri-close-line text-2xl"></i>
                </button>
              </div>
              <ul className="space-y-4 p-4">
                <li>
                  <Link
                    className={`${
                      path === "/" ? "text-primary font-semibold" : ""
                    } hover:text-primary`}
                    href="/"
                    onClick={closeMenu}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      path === "/about" ? "text-primary font-semibold" : ""
                    } hover:text-primary`}
                    href="/about"
                    onClick={closeMenu}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      path === "/scholarship"
                        ? "text-primary font-semibold"
                        : ""
                    } hover:text-primary`}
                    href="/scholarship"
                    onClick={closeMenu}
                  >
                    Scholarship
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      path === "/contact-us" ? "text-primary font-semibold" : ""
                    } hover:text-primary`}
                    href="/contact-us"
                    onClick={closeMenu}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default NavBar;
