import Hero from "@/components/Hero";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  const cardData = [
    {
      title: "A rich history",
      icon: "ri-graduation-cap-fill",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      linkTo: "/",
    },
    {
      title: "Global Network",
      icon: "ri-global-line",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

      linkTo: "/",
    },
    {
      title: "Closer to you",
      icon: "ri-team-fill",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

      linkTo: "/",
    },
    {
      title: "Driven by innovation",
      icon: "ri-search-line",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

      linkTo: "",
    },
    {
      title: "Centered around you",
      icon: "ri-pulse-line",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

      linkTo: "/",
    },
  ];

  return (
    <>
      <div className="w-[80%] mx-auto mt-24 md:mt-3">
        <Hero />
        <h1 className="text-primary text-center font-bold text-2xl">
          Why Choose Elabem
        </h1>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
          {cardData.map((details: any, key) => (
            <Card className="max-w-sm" key={key}>
              <CardHeader className="text-center">
                <i className={`${details.icon} text-primary text-2xl`}></i>
                <CardTitle>{details.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{details.description}</p>
              </CardContent>
              <CardFooter>
                <Link href={details.linkTo} className="text-primary">
                  Learn More &gt;
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
