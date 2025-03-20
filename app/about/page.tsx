import Slider from "@/components/Slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import abt from "@/public/abt.jpg";

export default function page() {
  const coreValue = [
    {
      logo: "",
      title: "Excellence",
      description: "Providing the highest quality service to our student",
    },
    {
      logo: "",
      title: "Commitment",
      description:
        "The guarantee of staying with you in every step of the process",
    },
    {
      logo: "",
      title: "Knowledge",
      description:
        "Complete and up to date information  from world wide university",
    },
    {
      logo: "",
      title: "Trust",
      description:
        "Thousand of students have entrusted us with their university onboarding",
    },
  ];

  return (
    <>
      {" "}
      <div className="w-[90%] mx-auto mt-24 py-6">
        <div className="md:w-[70%] mx-auto py-4 md:py-16">
          <h1 className="tracking-wider text-2xl md:text-4xl  font-bold mb-2 text-center ">
            We Support Students in Achieving Their Study Abroad Dreams
          </h1>
          <p className="tracking-wide text-lg text-center">
            Our platform streamlines the journey of studying abroad, helping
            students and families navigate every stage with ease.
          </p>

          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-center">
            Our Core Values
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4">
            {coreValue.map((value) => (
              <Card key={value.title}>
                <CardHeader>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>{value.description}</CardContent>
              </Card>
            ))}
          </div>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold mb-2 text-center py-6">
          Our Services
        </h1>
        <Slider />
        <section className="my-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-center">
            Reasons to Select Us
          </h1>
          <div className="md:flex justify-between items-center gap-5 mt-4">
            <Image
              src={abt}
              alt="students"
              className="md:basis-1/2 rounded-xl"
            />
            <div className="md:basis-1/2 ">
              <div>
                <h2 className="font-semibold text-xl py-3">
                  Comprehensive Tools
                </h2>
                <p>
                  Provide students with a personalized dashboard that highlights
                  the most relevant information for their study abroad journey,
                  such as university options, application deadlines, and visa
                  requirements.
                </p>
              </div>
              <div>
                <h2 className="font-semibold text-xl py-3">
                  Personalized Insights
                </h2>
                <p>
                  Allow students to set study abroad goals (e.g., preferred
                  countries, budget, career aspirations) and track their
                  progress toward achieving them.
                </p>
              </div>
              <div>
                <h2 className="font-semibold text-xl py-3">
                  Secure and Reliable
                </h2>
                <p>
                  Based on the student’s academic profile and preferences, offer
                  personalized recommendations for universities, courses, and
                  scholarships.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
