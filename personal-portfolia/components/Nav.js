import { Menu } from "../components/icons/triple-line.jsx";

export function Navigation() {
  return (
    <div class="flex justify-center">
      <div class="p-5 border flex justify-between items-center flex-row w-full h-24">
        <h2 class="font-bold font-inter text-3xl text-slate-950">
          {"<SS />"}
        </h2>

        <Menu />
      </div>
    </div>
  );
}
