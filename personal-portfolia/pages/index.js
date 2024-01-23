import { Navigation } from "../components/Nav.js";
import { Head } from "../components/Head.js";
import { Aboutme } from "../components/About.js";
import { Skills } from "../components/Skills.js";
import { Experience } from "../components/Experience.js";
import { Work } from "../components/Work.js";
import { Getintouch } from "../components/Getintouch.js";
import { Footer } from "../components/Footer.js";

export default function Home() {
  return (
    <div class="dark:bg-gray-950">
      <Navigation />
      <Head />
      <Aboutme />
      <Skills />
      <Experience />
      <Work />
      <Getintouch />
      <Footer />
    </div>
  );
}
