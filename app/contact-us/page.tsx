"use client";
import { ContactUs } from "@/components/ContactUs";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function page() {
  return (
    <div className="mx-6 md:w-[80%] md:mx-auto mt-24 md:mt-0 py-6">
      <div>
        <h1 className="text-center text-2xl">Get in touch with us</h1>
        <p className="md:text-center leading-relaxed text-gray-600">
          We would love to hear from you! If you have any questions, comments,
          or inquiries, please don't hesitate to get in touch with us. Our team
          is here to assist you in any way we can.
        </p>
      </div>

      <div className="md:flex gap-5 md:mt-10 md:w-[70%] mx-auto">
        <div className="basis-1/2">
          <h2 className="text-center text-xl md:text-3xl py-2 ">
            Get in Touch
          </h2>
          <p className="leading-relaxed text-gray-600 md:text-base ">
            For general inquiries, partnerships, or any other matter, please use
            the contact form below. We'll respond as soon as possible.
          </p>

          <div className="flex items-center gap-4 ml-6 md:ml-10 my-3">
            <i className="ri-phone-fill text-primary text-2xl md:text-3xl"></i>
            <div>
              <h1 className="text-gray-950 text-lg md:text-base ">
                Phone Numbers
              </h1>
              <p className="leading-relaxed text-gray-600 md:text-base ">
                +251911111111
              </p>
              <p className="leading-relaxed text-gray-600 md:text-base ">
                +251911111111
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 ml-6 md:ml-10 my-3">
            <i className="ri-mail-fill text-primary text-2xl md:text-3xl"></i>

            <div>
              <p className="text-gray-950 text-lg md:text-base ">
                Email Address
              </p>
              <p className="leading-relaxed text-gray-600 md:text-base ">
                support@elabem.com
              </p>
            </div>
          </div>
          <div className="flex gap-3 justify-center items-center py-3">
            <Link href=" https://t.me/elabemconsultancy" target="_blank">
              <i className="ri-telegram-2-fill text-2xl bg-gray-200 rounded-full py-2 px-2 hover:text-primary"></i>
            </Link>
            <Link
              href="https://www.instagram.com/elabemconsultancy"
              target="_blank"
            >
              {" "}
              <i className="ri-instagram-line text-2xl bg-gray-200 rounded-full py-2 px-2 hover:text-primary"></i>
            </Link>
            <Link href="#" target="_blank">
              {" "}
              <i className="ri-facebook-fill text-2xl bg-gray-200 rounded-full py-2 px-2 hover:text-primary"></i>
            </Link>
            <Link
              href="https://www.tiktok.com/@elabemconsultancy"
              target="_blank"
            >
              {" "}
              <i className="ri-tiktok-fill text-2xl bg-gray-200 rounded-full py-2 px-2 hover:text-primary"></i>
            </Link>
            <Link href="https://www.youtube.com/@haileabtadele" target="_blank">
              {" "}
              <i className="ri-youtube-line text-2xl bg-gray-200 rounded-full py-2 px-2 hover:text-primary"></i>
            </Link>
          </div>
        </div>
        <Card className="basis-1/2 max-w-md my-2">
          <ContactUs />
        </Card>
      </div>
    </div>
  );
}
