import Link from "next/link";
import { text } from "stream/consumers";
// import SocialMedia from "./SocialMedia";

export default function Footer() {
  const links = {
    quickLinks: [
      { linkTo: "/", text: "Home" },
      { linkTo: "/about", text: "About Us" },
      { linkTo: "/#services", text: "Services" },
      { linkTo: "/contact-us", text: "Contact Us" },
    ],
    contactUs: [
      { icon: "ri-mail-fill", text: "info@elabemconsult.com" },
      { icon: "ri-phone-fill", text: "+1 (240) 351-5163" },
    ],
    socialMedia: [
      {
        linkTo: "https://www.facebook.com/elabemconsultancy",
        text: "Facebook",
        icon: "ri-facebook-fill",
      },
      {
        linkTo: "https://www.linkedin.com/company/elabemconsultancy",
        text: "LinkedIn",
        icon: "ri-linkedin-fill",
      },
      {
        linkTo: "https://www.youtube.com/@elabemconsultancy",
        text: "YouTube",
        icon: "ri-youtube-fill",
      },
      {
        linkTo: "https://t.me/elabemconsultancy",
        text: "Telegram",
        icon: "ri-telegram-fill",
      },
      {
        linkTo: "https://tiktok.com/@elabemconsultancy",
        text: "TikTok",
        icon: "ri-tiktok-fill",
      },
    ],
  };

  return (
    <div className="bg-slate-900 text-gray-200 py-12 mt-12 text-lg">
      <div className="max-w-[90%] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-4 col-span-2 md:col-span-1">
            <h2 className="text-xl  md:text-2xl font-semibold text-white">
              About Elabem
            </h2>
            <p className="leading-relaxed">
              Elabem Educational Consultancy is dedicated to helping students
              achieve their academic dreams abroad. We provide comprehensive
              support for university applications, scholarships, and visa
              processes.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              Quick Links
            </h2>
            <ul className="space-y-3">
              {links.quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.linkTo}
                    className="hover:text-primary transition-colors"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              Follow Us
            </h2>
            <ul className="space-y-3">
              {links.socialMedia.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.linkTo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <i className={link.icon}></i>
                    <span>{link.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              Contact Us
            </h2>
            <ul className="space-y-3">
              {links.contactUs.map((link, index) => (
                <li key={index}>
                  <p className="hover:text-primary transition-colors flex items-center gap-2">
                    <i className={link.icon}></i>
                    <span>{link.text}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="w-[90%] mx-auto mt-12">
        <hr className="border-gray-800 my-8" />
        <p className="text-center text-sm">
          © {new Date().getFullYear()} Elabem Consultancy. All rights reserved.
        </p>
      </div>
    </div>
  );
}
