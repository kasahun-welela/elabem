import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import VideoComponent from "@/components/VideoComponent";

export default function Home() {
  return (
    <>
      <Hero />
      <VideoComponent />
      <Services />

      <FAQ />
    </>
  );
}
