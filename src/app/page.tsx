import Baner from "./components/home/baner";
import VideoPlayer from "./components/home/videoPlayer";
import ServiecsPage from "./components/home/serviecs";
import AboutCompany from "./components/home/aboutCompany";
import OurPartaner from "./components/home/ourPartaner";

export default function Home() {
  return (
    <main className="bg-slate-50 overflow-hidden">
      <section className="relative">
        <VideoPlayer />
        <Baner />
      </section>

      <ServiecsPage />

      <AboutCompany />

      <OurPartaner />
    </main>
  );
}
