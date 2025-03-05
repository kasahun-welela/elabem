export default function VideoComponent() {
  return (
    <div className="w-[90%] md:w-[50%] mx-auto">
      <h1 className="text-3xl font-bold mb-2 text-center">Objectives</h1>
      <p>
        We are committed to making dreams come true through education. We
        support young talents and minds in achieving more by guiding them
        through the complex world of university applications, scholarships, and
        career opportunities
      </p>
      <p className="text-center font-semibold pt-4">
        We&apos;ll work collaboratively and tirelessly with you to make positive
        change happen.
      </p>
      <div className="flex items-center justify-center my-6 ">
        <iframe
          className="w-full h-64 md:w-[560px] md:h-[315px]"
          src="https://www.youtube.com/embed/Cfkg_UeiKlo"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          style={{ border: "none" }}
        />
      </div>
    </div>
  );
}
