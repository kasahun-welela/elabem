import { serviceList } from "@/dummyData/serviceList";
import Image from "next/image";

interface Services {
  id: string;
  details: string;
  title: string;
}

export default function Services() {
  return (
    <div className="w-[80%] mx-auto ">
      <h1 className="text-3xl font-bold mb-2 text-center">Our Services</h1>
      <p className="md:w-[50%] mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam,
      </p>

      <div className="md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      <a
        href="#"
        className="group relative inline-block overflow-hidden rounded border border-gray-100 bg-gray-200  px-12 py-3 text-sm font-medium text-slate-800 hover:text-violet-600 focus:outline-none focus:ring active:bg-indigo-600 active:text-white"
      >
        <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-violet-600 transition-all duration-200 group-hover:w-full"></span>
        <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-violet-600 transition-all duration-200 group-hover:h-full"></span>
        <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-violet-600 transition-all duration-200 group-hover:w-full"></span>
        <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-violet-600 transition-all duration-200 group-hover:h-full"></span>
        Signup
      </a>
    </div>
  );
}
