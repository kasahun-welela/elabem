import Slider from "@/components/Slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
        </div>

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
      {/* </div> */}
      <section className="bg-[#3e53a2] my-6">
        <div className=" md:flex justify-between items-center w-[90%] mx-auto">
          <div className="w-[90%] mx-auto md:basis-1/2 py-8 ">
            <h1 className="text-6xl font-bold mb-2 text-white ">Why</h1>
            <h1 className="text-6xl font-bold mb-2 text-white ">Elabem</h1>
          </div>

          <div>
            <div className="rounded border bg-card text-card-foreground shadow p-3">
              <p>Global Reach</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
