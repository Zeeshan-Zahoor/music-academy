import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import MusicSchoolTestimonials from "@/components/MusicSchoolTestimonials";
import HeroSection from "@/components/HeroSection";
import UpcommingWebinars from "@/components/UpcommingWebinars";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/96 antialiased bg-grid-white/[0.2]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <MusicSchoolTestimonials />
      <UpcommingWebinars />
    </main>
  );
}
