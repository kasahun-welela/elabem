import { ContactUs } from "@/components/ContactUs";
import SocialMedia from "@/components/SocialMedia";
import { Card } from "@/components/ui/card";

export default function page() {
  return (
    <div className="w-[90%] mx-auto mt-24 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary relative inline-block">
          Get in touch with us
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30"></span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          We would love to hear from you! If you have any questions, comments,
          or inquiries, please don&apos;t hesitate to get in touch with us. Our
          team is here to assist you in any way we can.
        </p>
      </div>

      <div className="md:flex gap-8 md:w-[80%] mx-auto">
        <div className="basis-1/2 space-y-8">
          <div className="bg-white dark:bg-slate-950 p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-primary">
              Contact Information
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              For general inquiries, partnerships, or any other matter, please
              use the contact form or reach out to us directly.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 px-3 py-2 rounded-full">
                  <i className="ri-phone-fill text-primary text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Phone Numbers</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    +1 (240) 351-5163
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-primary/10 px-3 py-2  rounded-full">
                  <i className="ri-mail-fill text-primary text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email Address</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    support@elabem.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white dark:bg-slate-950 p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-primary">
              Follow Us
            </h2>
            <SocialMedia />
          </div>
        </div>

        <Card className="basis-1/2 p-6 shadow-lg mt-8 md:mt-0 ">
          <ContactUs />
        </Card>
      </div>
    </div>
  );
}
