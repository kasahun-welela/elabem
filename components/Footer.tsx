import Link from "next/link";
import SocialMedia from "./SocialMedia";

export default function Footer() {
  return (
    <div className="bg-slate-950 text-gray-400 py-6">
      <div className="grid grid-cols-2 md:grid-cols-4 md:w-[50%] mx-auto py-3">
        <div className="leading-8">
          <h2 className="text-xl font-semibold text-white py-2">Quick Links</h2>
          <ul className="ml-2">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">Contact Us</Link>
            </li>
            <li>
              <Link href="/">Scholarship</Link>
            </li>
          </ul>
        </div>

        <div className="leading-8">
          <h2 className="text-xl font-semibold text-white py-2">Help</h2>
          <ul className="ml-2">
            <li>
              {" "}
              <Link href="/">FAQ</Link>
            </li>
            <li>
              {" "}
              <Link href="/">Link1</Link>
            </li>
            <li>
              <Link href="/">Link2</Link>
            </li>
            <li>
              {" "}
              <Link href="/">Link3</Link>
            </li>
          </ul>
        </div>

        <div className="leading-8">
          <h2 className="text-xl font-semibold text-white py-2">Company</h2>
          <ul className="ml-2">
            <li>
              {" "}
              <Link href="/">Terms and Condition</Link>
            </li>
            <li>
              {" "}
              <Link href="/">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>

      <SocialMedia />
    </div>
  );
}
