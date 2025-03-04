import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { scholarsList } from "@/dummyData/scholarship";
import Image from "next/image";

export default function page() {
  return (
    <div className="max-w-[90%]  mx-auto md:flex gap-12 mt-24">
      <div className="md:grid grid-cols-2 gap-3 md:basis-[70%]">
        {scholarsList.map((list: any, key) => (
          <Card key={key} className="my-3 md:my-0">
            <div className="flex items-center px-6">
              <Image src="/edu.jpg" alt="logo" width={50} height={50} />
              <CardHeader>
                <CardTitle>{list.name}</CardTitle>
                <CardDescription>{list.provider}</CardDescription>
              </CardHeader>
            </div>

            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>
                Dead line <span>{list.deadline}</span>
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="md:basis-[30%]">
        <h1 className="text-2xl ">Country</h1>
        <Select>
          <SelectTrigger className="max-w-sm my-4">
            <SelectValue placeholder="Select Countries" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="USA">USA</SelectItem>
            <SelectItem value="canada">Canada</SelectItem>
            <SelectItem value="italy">Italy</SelectItem>
            <SelectItem value="poland">Poland</SelectItem>
          </SelectContent>
        </Select>

        <div className="">
          <h1 className="text-xl font-semibold">Scholarship Type</h1>
          <div className=" flex space-x-2 py-2">
            <Checkbox id="funded" />
            <label
              htmlFor="terms1"
              className="text-sm font-medium leading-none "
            >
              Fully Funded
            </label>
          </div>
          <div className=" flex space-x-2 py-2">
            <Checkbox id="partial" />
            <label
              htmlFor="partial"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Partial
            </label>
          </div>
          <div className=" flex space-x-2 py-2">
            <Checkbox id="withEngPro" />
            <label
              htmlFor="withEngPro"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              With IELTS
            </label>
          </div>
          <div className=" flex space-x-2 py-2">
            <Checkbox id="withOutEngPro" />
            <label
              htmlFor="withOutEngPro"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              With Out IELTS
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
