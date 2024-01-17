import { Menu } from "../components/icons/triple-line.jsx";
import { Darkmode } from "../components/icons/darkmode.jsx";

export function Navigation() {
  return (
    <div class="flex justify-center">
      <div class="p-5 flex justify-between items-center flex-row w-full h-24">
        <h2 class="font-bold font-inter text-3xl text-slate-950">{"<SS />"}</h2>

        <Menu />
        <div class="hidden sm:flex gap-4 items-center font-inter">
          <div class="flex gap-4">
            <a class="font-inter text-slate-600">About</a>
            <a class="font-inter text-slate-600">Work</a>
            <a class="font-inter text-slate-600">Testimonials</a>
            <a class="font-inter text-slate-600">Contact</a>
          </div>
          <div class="w-0 border h-7"></div>
          <Darkmode />
          <button class="bg-black text-slate-100 py-1 px-2 rounded-lg">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}
