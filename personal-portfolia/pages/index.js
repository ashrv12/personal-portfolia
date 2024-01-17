import { Navigation } from "../components/Nav.js";
import { Head } from "../components/Head.js";
import { Aboutme } from "../components/About.js";

export default function Home() {
  return (
    <div>
      <Navigation />
      <Head />
      <Aboutme />
    </div>
  );
}
