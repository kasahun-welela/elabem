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
      question: "1. How is get admission in abroad university?",
      answer:
        "  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
      id: 2,
      question: "2. Do you offer complete solution for students?",
      answer:
        "  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
      id: 3,
      question: "3. Which country is safe and better for higher study?",
      answer:
        "  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
      id: 4,
      question: "4. Do you allow accomadation for students in abroad?",
      answer:
        "  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
  ];
  return (
    <div className="py-14">
      {/* <div className="w-[90%] md:w-[80%] mx-auto md:flex justify-between items-center gap-9 ">
        <div className="basis-1/2 my-3">
          <h1 className="text-3xl font-bold mb-2 text-center md:text-start">
            Frequently Asked Question
          </h1>
          <hr className="bg-primary h-1 w-6 " />
          <p className="font-semibold text-xl md:text-2xl py-5">
            Still do you have any questions to know? Feel free to ask our
            experts here.
          </p>
          <Link
            href="/contact-us"
            className="bg-primary hover:bg-primary/50 p-3 rounded-sm text-white inline-block my-5"
          >
            Ask your Questions
          </Link>
        </div>
        <div className="basis-1/2">
          <Accordion type="single" collapsible className="w-full space-y-2">
            <AccordionItem
              value="faq-1"
              className="px-3 rounded-md shadow bg-white"
            >
              <AccordionTrigger>
                1. How is get admission in abroad university?
              </AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="faq-2"
              className="px-3 rounded-md shadow bg-white"
            >
              <AccordionTrigger>
                2. Do you offer complete solution for students?
              </AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="faq-3"
              className="px-3 rounded-md shadow bg-white"
            >
              <AccordionTrigger>
                3. Which country is safe and better for higher study?
              </AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="faq-4"
              className="px-3 rounded-md shadow bg-white"
            >
              <AccordionTrigger>
                4. Do you allow accomadation for students in abroad?
              </AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div> */}
      <div className="w-[90%] md:w-[50%] mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-center">FAQs</h1>
        <Accordion type="single" collapsible className="w-full space-y-2 ">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={`faq${faq.id}`}
              className="px-3 rounded-md shadow bg-white dark:bg-slate-950"
            >
              <AccordionTrigger>{faq.question} </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
