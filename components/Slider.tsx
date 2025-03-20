"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function () {
  const whyElabem = [
    {
      id: 1,
      icon: "",
      title: "Our global reach",
      description:
        " We are experts in international education because we ourselves are international. Our network spans offices across the globe, as well as partnerships with universities all over the world. We also partner with over 3000 agents worldwide increasing our global reach even further.",
    },
    {
      id: 2,
      icon: "",
      title: "Personalized Counseling",
      description:
        "We believe every student is unique. Our consultants take the time to understand your academic background, career aspirations, and personal preferences to create a customized roadmap for your  educational journey. Whether you’re aiming for top universities or specialized programs, we’ve got you covered",
    },
    {
      id: 3,
      icon: "",
      title: " Dedicated Post-Admission Support",
      description:
        "Our relationship does not end with your acceptance letter. We offer ongoing support to help you adjust to your new academic environment, ensuring a smooth transition and long-term success. ",
    },
    {
      id: 4,
      icon: "",
      title: "Expert Guidance",
      description:
        "At Elabem Consultancy, our team consists of seasoned education consultants with years of experience in the field. We understand the nuances of global education systems, admission processes, and scholarship opportunities, ensuring you receive the most accurate and up-to-date advice.",
    },
    {
      id: 5,
      icon: "",
      title: "Extensive Network",
      description:
        "Elabem Consultancy has established strong relationships with leading universities and colleges worldwide. This allows us to provide exclusive insights, early application opportunities, and even fee waivers for our students.",
    },
    {
      id: 6,
      icon: "",
      title: "End-to-End Support",
      description:
        "From course selection and application preparation to visa assistance and pre-departure briefings, we offer comprehensive support at every step. Our goal is to make the entire process seamless and stress-free for you.",
    },
  ];
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      className="w-[90%] mx-auto"
    >
      <CarouselContent className="-ml-1">
        {whyElabem.map((items, index) => (
          <CarouselItem key={index} className="md:basis-1/3 pl-4 ">
            <div className="flex flex-col items-center max-w-lg gap-3 p-6 border rounded-lg bg-card">
              <i className="ri-global-line text-4xl text-primary"></i>
              <h2 className="text-xl md:text-2xl font-bold mb-2 text-center">
                {items.title}
              </h2>
              <p className="text-justify">{items.description}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
}
