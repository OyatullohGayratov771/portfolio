import Hero from "../components/Hero";
import { IntroStrip } from "../components/HomeSection/IntroStrip";
import { FeaturedProjects } from "../components/HomeSection/FeaturedProjects";
import { NowBuilding } from "../components/HomeSection/NowBuilding";
import { SkillPoster } from "../components/HomeSection/SkillPoster";

export default function Home() {
  return (
    <>
      <Hero />
      <IntroStrip />
      <FeaturedProjects />
      <NowBuilding />
      <SkillPoster />
    </>
  );
}
