"use client";
import Link from "next/link";
import React, { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleButton = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full shadow-sm">
      <div className=" hidden md:flex justify-around items-center  py-5 md:w-[80%] mx-auto">
        <Link href="/" className="text-2xl font-bold text-primary">
          Elabem Consultancy
        </Link>
        <ul className="flex justify-end gap-6 ">
          <li>
            <Link href="/" className="hover:font-semibold hover:text-primary">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:font-semibold hover:text-primary"
            >
              About Us
            </Link>
          </li>

          <li>
            <Link
              href="/scholarship"
              className="hover:font-semibold hover:text-primary"
            >
              Scholarship
            </Link>
          </li>
          <li>
            <Link
              href="/contact-us"
              className="hover:font-semibold hover:text-primary"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      <div className="absolute shadow-sm top-0 right-0 left-0 md:hidden z-50">
        <div className="flex justify-between items-center p-5">
          <Link href="/" className="text-xl font-bold text-primary ">
            Elabem Consultancy
          </Link>

          {isOpen ? (
            <i
              className="ri-close-line text-primary text-3xl"
              onClick={toggleButton}
            ></i>
          ) : (
            <i
              className="ri-menu-fill text-primary text-3xl"
              onClick={toggleButton}
            ></i>
          )}
        </div>
        {isOpen && (
          <ul className="flex flex-col gap-1 p-3 bg-white">
            <li>
              <Link href="/" className="hover:font-semibold hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:font-semibold hover:text-primary"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/scholarship"
                className="hover:font-semibold hover:text-primary"
              >
                Scholarship
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className="hover:font-semibold hover:text-primary"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default NavBar;
