import Image from "next/image";
import React from "react";
import Link from "next/link";
import students from "@/public/student.webp";

export default function Hero() {
  return (
    <div className="md:flex justify-between items-center w-[90%] mx-auto py-10 mt-16 md:gap-5">
      <div className="md:basis-1/2 text-center md:text-left animate-fadeIn">
        <div className="flex flex-col gap-6">
          <h1 className="md:text-4xl lg:text-5xl text-3xl font-extrabold leading-tight">
            College apps take a community. We&apos;ve got one that can{" "}
            <span className="text-primary relative">
              change your life
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30"></span>
            </span>
          </h1>
          <p className="tracking-wide text-justify text-xl ">
            Empowerly connects you with a team of college admission experts,
            handpicked based on your interests & your goals.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Link
            href="/contact-us"
            className="bg-primary hover:bg-primary/80 transition-all duration-300 p-4 rounded-md text-white inline-block text-center font-semibold shadow-lg hover:shadow-xl"
          >
            Contact Us
          </Link>
          <Link
            href="/about"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 p-4 rounded-md inline-block text-center font-semibold"
          >
            Learn More
          </Link>
        </div>
      </div>
      <div className="mt-16 md:mt-0 animate-fadeInRight">
        <Image
          src={students}
          alt="Students collaborating on college applications"
          className="md:h-[500px] md:w-[600px] rounded-lg shadow-2xl transition-transform duration-300"
          priority
        />
      </div>
    </div>
  );
}
