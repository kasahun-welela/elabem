import React from "react";

export default function VideoComponent() {
  return (
    <div className="w-[90%] md:w-[70%] mx-auto py-16 animate-fadeIn">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary relative inline-block">
          Our Objectives
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30"></span>
        </h1>
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-lg leading-relaxed">
            We are committed to making dreams come true through education. We
            support young talents and minds in achieving more by guiding them
            through the complex world of university applications, scholarships,
            and career opportunities.
          </p>
          <p className="text-xl font-semibold text-primary">
            We&apos;ll work collaboratively and tirelessly with you to make
            positive change happen.
          </p>
        </div>
      </div>

      <div className="relative">
        <iframe
          className="w-full h-64 md:w-[800px] md:h-[450px] mx-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02]"
          src="https://www.youtube.com/embed/Cfkg_UeiKlo"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          style={{ border: "none" }}
        />
      </div>

      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-4 text-gray-600">
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-primary"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Expert Guidance</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-primary"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Personalized Support</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-primary"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Proven Success</span>
          </div>
        </div>
      </div>
    </div>
  );
}
