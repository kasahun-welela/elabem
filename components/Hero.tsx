import Image from "next/image";
import React from "react";
import Link from "next/link";
import students from "@/public/student.webp";

export default function Hero() {
  return (
    <section className="py-12 md:py-24 mt-16 w-[90%] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fadeIn">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight capitalize">
            Let <span className="text-primary">higher education</span> lead you
            to <span className="text-primary">global </span> opportunities
          </h1>
          <p className=" text-lg md:text-xl">
            Empower your journey through higher education — unlock international
            pathways to success, career advancement, and a brighter, borderless
            future
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact-us"
              className="bg-primary text-white px-8 py-4 rounded-lg text-center font-semibold hover:bg-primary/80 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/about"
              className="border-2 border-primary text-primary px-8 py-4 rounded-lg text-center font-semibold hover:bg-blue-50 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="relative aspect-square w-full max-w-[600px] mx-auto animate-fadeInRight   ">
          <div className="absolute inset-0 bg-primary rounded overflow-hidden border-2 border-primary ">
            <Image
              src={students}
              alt="Hero Image"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
