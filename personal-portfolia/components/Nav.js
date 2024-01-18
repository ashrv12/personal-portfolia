import { Menu } from "../components/icons/triple-line.jsx";
import { Darkmode } from "../components/icons/darkmode.jsx";
import { menuItems } from "../data/menuItems.js";
import { MainMenu } from "@/components/MainMenu.jsx";

export function Navigation() {
  return (
    <div class="flex justify-center">
      <div class="p-5 flex justify-between items-center flex-row w-full h-24">
        <h2 class="font-bold font-inter text-3xl text-slate-950">{"<SS />"}</h2>

        <Menu />
        <div class="hidden sm:flex gap-4 items-center font-inter">
          <MainMenu items={menuItems} />
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
