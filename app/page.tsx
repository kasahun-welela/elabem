import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import VideoComponent from "@/components/VideoComponent";
import Image from "next/image";
import studentImg from "@/public/students_high.png";

export default function Home() {
  // const workList = [
  //   {
  //     title: "Free Consultation",
  //     icon: "ri-number-1",
  //     description: (
  //       <>
  //         We offer a{" "}
  //         <span className="text-primary font-semibold">30-minute free</span>{" "}
  //         consultation video call to understand your goals, academic background,
  //         and aspirations.
  //       </>
  //     ),
  //   },
  //   {
  //     title: "University & Country Selection",
  //     icon: "ri-number-2",
  //     description:
  //       "We help you identify the best-fit universities based on your preferences, field of study, and financial situation",
  //   },
  //   {
  //     title: "Application Strategy & Preparation",
  //     icon: "ri-number-3",
  //     description:
  //       "Guidance on required documents (transcripts, recommendation letters, test scores, etc.).",
  //   },
  //   {
  //     title: "Scholarship & Financial Aid Support ",
  //     icon: "ri-number-4",
  //     description:
  //       "Identifying scholarship opportunities.Guidance on financial aid applications and securing funding.",
  //   },
  //   {
  //     title: "Interview & Visa Support",
  //     icon: "ri-number-5",
  //     description:
  //       "Mock interviews for admissions and scholarship committees.Visa application guidance and preparation.",
  //   },
  //   {
  //     title: "Pre-Departure & Post-Acceptance Support",
  //     icon: "ri-number-6",
  //     description:
  //       "Advice on accommodation, travel, and settling into university life.Ongoing mentorship and career development support.",
  //   },
  // ];
  return (
    <>
      <Hero />
      <VideoComponent />
      <Services />
      {/* <section className="w-[90%] mx-auto items-center justify-between">
        <h1 className="text-3xl font-bold mb-2 text-center">How we work</h1>
        <div className="md:flex  ">
          <div>
            {workList.map((steps) => (
              <div
                key={steps.title}
                className="rounded-xl border  text-card-foreground shadow-sm hover:shadow flex items-center p-3 gap-3 max-w-md my-2"
              >
                <i className={`${steps.icon} text-2xl text-primary`}></i>
                <div>
                  <h2 className="font-semibold leading-none tracking-wider pb-2">
                    {steps.title}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {steps.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Image
            src="/studentlarge.webp"
            alt="student image"
            className="bg-cover"
            width={700}
            height={150}
          />
        </div>
      </section> */}
      <section className="bg-primary my-6">
        <div className=" md:flex justify-between items-center w-[90%] mx-auto">
          <div className="w-[90%] mx-auto md:basis-1/2 py-8 ">
            <h1 className="text-3xl font-bold mb-2 text-white text-center md:text-start">
              Are you dreaming of studying abroad?
            </h1>
            <p className="text-white tracking-wide  py-3 ">
              We specialize in helping students like you achieve their global
              education goals. From university admissions to visa support, our
              expert team guides you every step of the way. Stop worrying about
              the complexities and start your journey to studying abroad with
              confidence.
            </p>
          </div>
          <Image src={studentImg} alt="student picture" />
        </div>
      </section>
      <FAQ />
    </>
  );
}
