import { serviceList } from "@/dummyData/serviceList";
import Image from "next/image";

interface Services {
  id: string;
  details: string;
  title: string;
}

export default function Services() {
  return (
    <div className="w-[90%] mx-auto py-16">
      <div className="text-center mb-12 animate-fadeIn">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary relative inline-block">
          Our Services
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30"></span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg mt-4 max-w-2xl mx-auto">
          Comprehensive support for your educational journey, from application
          to arrival
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {serviceList.map((service: Services) => (
          <div
            key={service.id}
            className="group bg-white dark:bg-slate-950 rounded-xl border border-gray-100 dark:border-gray-800 p-6 hover:shadow-lg transition-all duration-300 animate-fadeIn"
          >
            <div className="flex flex-col items-center text-center gap-4">
              <div className="bg-primary/10 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="/ser.png"
                  alt={service.title}
                  width={40}
                  height={40}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-3 text-primary group-hover:text-primary/80 transition-colors">
                  {service.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.details}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
