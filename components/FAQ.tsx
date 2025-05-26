// import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      id: 1,
      question: "1. What services does Elabem Consultancy provide?",
      answer:
        " At Elabem Educational Consultancy, we are dedicated to helping students achieve their academic dreams abroad. We offer a wide range of services, including Personalized academic counseling and university selection, Full application support, including essay and Statement of Purpose (SOP) guidance, Scholarship and financial aid application assistance, Visa document preparation and interview coaching, Pre-departure briefings, including housing, insurance, and travel guidance, Post-arrival support services to help students settle smoothly in a new country, We are committed to being with you at every stage of your journey — from your first consultation until you step confidently into your new academic life abroad.",
    },
    {
      id: 2,
      question: "2. Which countries do you assist students in applying to?",
      answer:
        "Elabem Consultancy proudly supports students applying to leading institutions in: The United States, Canada, United Kingdom, Australia, Germany, Ireland, New Zealand, and several other countries known for their outstanding education systems.",
    },
    {
      id: 3,
      question: "3. Is the first consultation really free?",
      answer:
        "Yes, the first consultation is completely free. We believe in providing a no-obligation opportunity for students to discuss their goals and explore their options without any commitment.",
    },
    {
      id: 4,
      question:
        "4. Is an English proficiency exam mandatory for studying abroad?",
      answer:
        "Yes. Proving English language proficiency is a mandatory requirement for international students applying to universities in: The United States, Canada, Australia, The United Kingdom, and many others. You must take tests such as: TOEFL (Test of English as a Foreign Language), IELTS (International English Language Testing System), Duolingo English Test (accepted by many U.S. universities) depending on your target institution’s preferences. We assist you in selecting the right test, registering for it, and providing resources to help you prepare and achieve the scores you need.",
    },
  ];
  return (
    <div className="py-16 ">
      <div className="w-[90%] md:w-[50%] mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary relative inline-block text-center">
            FAQs
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30"></span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg mt-4">
            Find answers to common questions about our services and process
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={`faq${faq.id}`}
              className="px-6 py-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-slate-950 border border-gray-100 dark:border-gray-800"
            >
              <AccordionTrigger className="text-lg font-semibold hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-normal leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
