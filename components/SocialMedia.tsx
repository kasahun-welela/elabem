import Link from "next/link";

export default function SocialMedia() {
  return (
    <div className="flex gap-3 justify-center items-center py-3 text-gray-800">
      <Link href=" https://t.me/elabemconsultancy" target="_blank">
        <i className="ri-telegram-2-fill text-2xl bg-gray-200 rounded-full py-2 px-2 hover:bg-primary hover:text-white"></i>
      </Link>
      <Link href="https://www.instagram.com/elabemconsultancy" target="_blank">
        {" "}
        <i className="ri-instagram-line text-2xl bg-gray-200 rounded-full py-2 px-2 hover:bg-primary hover:text-white"></i>
      </Link>
      <Link
        href="https://www.facebook.com/profile.php?id=61573901980839&sk=grid"
        target="_blank"
      >
        {" "}
        <i className="ri-facebook-fill text-2xl bg-gray-200 rounded-full py-2 px-2 hover:bg-primary hover:text-white"></i>
      </Link>
      <Link href="https://www.tiktok.com/@elabemconsultancy" target="_blank">
        {" "}
        <i className="ri-tiktok-fill text-2xl bg-gray-200 rounded-full py-2 px-2 hover:bg-primary hover:text-white"></i>
      </Link>
      <Link href="https://www.youtube.com/@haileabtadele" target="_blank">
        {" "}
        <i className="ri-youtube-line text-2xl bg-gray-200 rounded-full py-2 px-2 hover:bg-primary hover:text-white"></i>
      </Link>
    </div>
  );
}
