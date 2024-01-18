import { Navigation } from "../components/Nav.js";
import { Head } from "../components/Head.js";
import { Aboutme } from "../components/About.js";
import { Skills } from "../components/Skills.js";
import { Experience } from "../components/Experience.js";

export default function Home() {
  return (
    <div>
      <Navigation />
      <Head />
      <Aboutme />
      <Skills />
      <Experience />
    </div>
  );
}
