import CarouselImg from "./components/home/carouselImg";
import ServiecsPage from "./components/home/serviecs";
import AboutCompany from "./components/home/aboutCompany";
import OurPartaner from "./components/home/ourPartaner";
import Baner from "./components/home/baner";
export default function Home() {
  return (
    <div>
      <Baner />
      <CarouselImg />
      <ServiecsPage />
      <AboutCompany />
      <OurPartaner />
    </div>
  );
}
