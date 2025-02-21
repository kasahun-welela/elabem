import Link from "next/link";
import SocialMedia from "./SocialMedia";

export default function Footer() {
  return (
    <div className="bg-slate-950 text-gray-400 py-6 mt-5">
      <div className="grid grid-cols-2 md:grid-cols-4 w-[90%] md:w-[50%] mx-auto py-3">
        <div className="leading-8">
          <h2 className="text-xl font-semibold text-white py-2">Quick Links</h2>
          <ul className="ml-2">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white">
                Scholarship
              </Link>
            </li>
          </ul>
        </div>

        <div className="leading-8">
          <h2 className="text-xl font-semibold text-white py-2">Help</h2>
          <ul className="ml-2">
            <li>
              {" "}
              <Link href="/" className="hover:text-white">
                FAQ
              </Link>
            </li>
            <li>
              {" "}
              <Link href="/" className="hover:text-white">
                Link1
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white">
                Link2
              </Link>
            </li>
            <li>
              {" "}
              <Link href="/" className="hover:text-white">
                Link3
              </Link>
            </li>
          </ul>
        </div>

        <div className="leading-8">
          <h2 className="text-xl font-semibold text-white py-2">Company</h2>
          <ul className="ml-2">
            <li>
              {" "}
              <Link href="/" className="hover:text-white">
                Terms and Condition
              </Link>
            </li>
            <li>
              {" "}
              <Link href="/" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <SocialMedia />
      <hr className="text-white py-3 w-[80%] mx-auto" />
    </div>
  );
}
