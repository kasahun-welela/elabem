import Image from "next/image";
import React from "react";
import Link from "next/link";
import students from "@/public/student.webp";

export default function Hero() {
  return (
    <div className="md:flex justify-between items-center w-[90%] mx-auto py-10 mt-16">
      <div className="md:basis-1/2 text-center md:text-left">
        <div className="flex flex-col gap-6">
          <h1 className="md:text-4xl lg:text-4xl text-2xl font-extrabold">
            College apps take a community. We&apos;ve got one that can{" "}
            <span className="text-sky-400">change your life</span>
          </h1>
          <p className="tracking-wide text-justify text-xl">
            Empowerly connects you with a team of college admission experts,
            handpicked based on your interests & your goals.
          </p>
        </div>
        <Link
          href="/contact-us"
          className="bg-primary hover:opacity-80 mt-6 inline-block py-4 px-6 rounded-2xl text-white"
        >
          Contact Us
        </Link>
      </div>
      <div className=" mt-16 md:mt-0">
        <Image
          src={students}
          alt="hero image"
          className="md:h-[450px] md:w-[550px] rounded-lg"
        />
      </div>
    </div>
  );
}
