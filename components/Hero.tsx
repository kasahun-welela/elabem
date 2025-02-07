import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    // <div className="bg-blue-500">
    //   <div className="md:flex justify-between items-center  w-[80%] mx-auto ">
    //     <div className="basis-1/2">
    //       <h1 className="md:text-4xl font-bold text-xl text-white">
    //         The future you imagine is closer than you think.
    //       </h1>
    //       <Link
    //         href="/contact-us"
    //         className="bg-yellow-600 text-white py-4 px-6 rounded-2xl mt-3 inline-block"
    //       >
    //         Contact Us
    //       </Link>
    //     </div>
    //     <Image
    //       src="/hero.png"
    //       className="basis-1/2"
    //       alt="hero image"
    //       width={400}
    //       height={500}
    //     />
    //   </div>
    // </div>

    <div className="mt-20 md:mt-0 h-80 md:h-screen bg-[url('/hero2.png')] md:bg-cover flex flex-col justify-center  ">
      <div className="md:ml-40 px-3 md:max-w-[50%] ">
        <h1 className=" text-white text-2xl md:text-5xl font-extrabold">
          The future you imagine is closer than you think.
        </h1>
        <p className="py-5 text-white md:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam,
        </p>
        <div className="space-x-2 ml-5">
          <Link
            href="/contact-us"
            className="bg-primary text-white py-4 px-6 rounded-2xl mt-3 inline-block"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
