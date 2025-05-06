import Hero from "@/components/Hero";
// import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import VideoComponent from "@/components/VideoComponent";
import Image from "next/image";
import studentImg from "@/public/students_high.png";

export default function Home() {
  const workList = [
    {
      title: "Free Consultation",
      order: 1,
      description: (
        <>
          We offer a{" "}
          <span className="text-primary font-semibold">30-minute free</span>{" "}
          consultation video call to understand your goals, academic background,
          and aspirations.
        </>
      ),
    },
    {
      title: "University & Country Selection",
      order: 2,
      description:
        "We help you identify the best-fit universities based on your preferences, field of study, and financial situation",
    },
    {
      title: "Application Strategy & Preparation",
      order: 3,
      description:
        "Guidance on required documents (transcripts, recommendation letters, test scores, etc.).",
    },
    {
      title: "Scholarship & Financial Aid Support ",
      order: 4,
      description:
        "Identifying scholarship opportunities.Guidance on financial aid applications and securing funding.",
    },
    {
      title: "Interview & Visa Support",
      order: 5,
      description:
        "Mock interviews for admissions and scholarship committees.Visa application guidance and preparation.",
    },
    {
      title: "Pre-Departure & Post-Acceptance Support",
      order: 6,
      description:
        "Advice on accommodation, travel, and settling into university life.Ongoing mentorship and career development support.",
    },
  ];
  return (
    <>
      <Hero />
      <VideoComponent />
      {/* <Services /> */}

      <section className="bg-[#3e53a2] my-6">
        <div className="md:flex justify-between items-center w-[90%] mx-auto">
          <div className="w-[90%] mx-auto md:basis-1/2 py-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white text-center md:text-start leading-tight">
              Are you dreaming of studying abroad?
            </h1>
            <p className="text-white/90 text-lg leading-relaxed">
              We specialize in helping students like you achieve their global
              education goals. From university admissions to visa support, our
              expert team guides you every step of the way. Stop worrying about
              the complexities and start your journey to studying abroad with
              confidence.
            </p>
          </div>
          <Image src={studentImg} className="md:pt-7" alt="student picture" />
        </div>
      </section>

      <section className="w-[90%] mx-auto my-6">
        <div className="text-center mb-2">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary relative inline-block text-center">
            How we work
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30"></span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3">
          {workList.map((steps) => (
            <div
              key={steps.title}
              className="rounded-xl border bg-white dark:bg-slate-950  text-card-foreground shadow-sm hover:shadow flex items-center px-3 py-4 gap-3 "
            >
              <p className="text-white bg-[#7bbacc] py-2 px-4 rounded-full">
                {steps.order}
              </p>
              <div>
                <h2 className="font-semibold leading-none tracking-wider pb-2">
                  {steps.title}
                </h2>
                <p className="text-sm ">{steps.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <FAQ />
    </>
  );
}
