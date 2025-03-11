import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

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
      <section className="bg-[#3e53a2] my-6">
        <div className=" md:flex justify-between items-center w-[90%] mx-auto">
          <div className="w-[90%] mx-auto md:basis-1/2 py-8 ">
            <h1 className="text-6xl font-bold mb-2 text-white ">Why</h1>
            <h1 className="text-6xl font-bold mb-2 text-white ">Elabem</h1>
          </div>
        </div>
      </section>
    </>
  );
}
