import { Chip } from "../components/Chip";
// logos
import { logoItems, logoItemsDark } from "../data/logoItems.js";
import { LogoList, LogoListDark } from "../components/LogoList.jsx";

export function Skills() {
  return (
    <div class="py-16 font-inter text-slate-600 flex flex-col items-center">
      <Chip label="Skills" />
      <div class="pt-6 w-11/12">
        <h2 class="flex justify-center text-center dark:text-slate-100">
          The skills, tools and technologies I am really good at:
        </h2>
      </div>
      <LogoList items={logoItems} />
      <LogoListDark items={logoItemsDark} />
    </div>
  );
}
