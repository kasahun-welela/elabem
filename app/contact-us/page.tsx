import { ContactUs } from "@/components/ContactUs";
import { Card } from "@/components/ui/card";

export default function page() {
  return (
    <div className="w-[80%] mx-auto mt-24">
      <Card className="flex gap-2">
        <div className="bg-[#011C2B] text-white basis-1/2 rounded">
          <h1>Contact Information</h1>
        </div>
        <ContactUs />
      </Card>
    </div>
  );
}
