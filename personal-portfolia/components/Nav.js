import { Menu } from "../components/icons/triple-line.jsx";
import { Darktriple } from "../components/icons/triple-line.jsx";
// import { Darkmode } from "../components/icons/darkmode.jsx";
import { menuItems } from "../data/menuItems.js";
import { MainMenu } from "@/components/MainMenu.jsx";
import { MainMenuCol } from "@/components/MainMenu.jsx";
import { useState } from "react";
import { Ex } from "@/components/icons/x-icon.jsx";
// import { Moon } from "../components/icons/moon.jsx";
import { ThemeChanger } from "./Theme.jsx";

export function Navigation() {
  return (
    <div class="flex justify-center">
      <div class="dark:bg-gray-950 p-5 flex justify-between items-center flex-row w-full h-24">
        <h2 class="dark:text-slate-100 font-bold font-inter text-3xl text-slate-950">
          {"<SS />"}
        </h2>
        <MobileMenu />
        <div class="hidden sm:flex gap-4 items-center font-inter">
          <MainMenu items={menuItems} />
          <div class="w-0 border h-7"></div>
          {/* <Darkmode />
          <Moon /> */}
          <ThemeChanger />
          <a href="/photos/raccoon.jpeg" download>
            <button class="bg-black text-slate-100 dark:text-gray-900 dark:bg-slate-100 py-1 px-2 rounded-lg">
              Download CV
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export function MobileMenu() {
  const [visible, setVisible] = useState(false);

  function openMenu() {
    setVisible(true);
  }
  function closeMenu() {
    setVisible(false);
  }

  return (
    <>
      <button class="flex sm:hidden" onClick={openMenu}>
        <Menu />
        <Darktriple />
      </button>
      {visible && (
        <div class="fixed inset-0 dark:bg-gray-950/20 bg-gray-900/10"></div>
      )}
      <div
        class={`dark:bg-gray-950 font-inter flex flex-col items-center fixed top-0 bottom-0 w-3/4 transition-all bg-white ${
          visible ? "right-0" : "-right-full"
        }`}
      >
        <div class="h-16 w-full px-5 flex justify-between items-center">
          <h1 class="dark:text-slate-100 font-bold text-3xl">{"<SS />"}</h1>
          <button onClick={closeMenu}>
            <Ex />
          </button>
        </div>
        {/* divider div */}
        <div class="h-0 w-full border border-slate-100 dark:border-slate-800"></div>
        {/* divider div */}
        <div class="w-full pl-5 py-7 flex justify-start">
          <MainMenuCol items={menuItems} />
        </div>
        {/* divider div */}
        <div class="h-0 w-full border border-slate-100 dark:border-slate-800"></div>
        {/* divider div */}
        <div class="w-full flex justify-between p-5 mt-3">
          <h2 class="dark:text-slate-100 text-xl text-slate-600">
            Switch Theme
          </h2>
          {/* <Darkmode />
          <Moon /> */}
          <ThemeChanger />
        </div>
        <a href="/photos/raccoon.jpeg" download>
          <button class="text-lg w-64 mt-3 bg-black text-slate-100 dark:bg-slate-100 dark:text-gray-900 py-1 px-2 rounded-xl">
            Download CV
          </button>
        </a>
      </div>
    </>
  );
}
