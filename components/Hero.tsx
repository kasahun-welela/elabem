import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="md:flex justify-between items-center">
      <div className="basis-1/2">
        <h1 className="md:text-4xl font-bold text-xl">
          The future you imagine is closer than you think.
        </h1>
        <Link
          href="/contact-us"
          className="bg-primary text-white py-4 px-6 rounded-2xl mt-3"
        >
          Contact Us
        </Link>
      </div>
      <Image
        src="/hero.png"
        className="basis-1/2"
        alt="hero image"
        width={400}
        height={500}
      />
    </div>
  );
}
