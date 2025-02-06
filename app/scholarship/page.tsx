import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { scholarsList } from "@/dummyData/scholarship";
import Image from "next/image";

export default function page() {
  return (
    <div className="max-w-[80%]  mx-auto">
      <div className="md:grid grid-cols-2 gap-3 md:max-w-[70%]">
        {scholarsList.map((details: any, key) => (
          <Card key={key}>
            <div className="flex items-center">
              <Image src="/edu.jpg" alt="logo" width={10} height={5} />
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
            </div>

            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div>
        <h1>Country</h1>
      </div>
    </div>
  );
}
