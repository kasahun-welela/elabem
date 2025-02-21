import { serviceList } from "@/dummyData/serviceList";
import Image from "next/image";

interface Services {
  id: string;
  details: string;
  title: string;
}

export default function Services() {
  return (
    <div className="w-[90%] md:w-[80%] mx-auto ">
      <h1 className="text-3xl font-bold mb-2 text-center mt-8">Our Services</h1>
      <p className="md:w-[50%] mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam,
      </p>

      <div className="md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6">
          {serviceList.map((service: Services) => (
            <div
              key={service.id}
              className="bg-white p-6 flex flex-col md:flex-row justify-center items-center gap-3"
            >
              <Image src="/ser.png" alt="logo" width={50} height={50} />
              <div>
                <h2 className="md:text-xl font-semibold mb-2">
                  {service.title}
                </h2>
                <p className="text-gray-600">{service.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
