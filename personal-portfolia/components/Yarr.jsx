import { chipItems } from "../data/chipItems";
import { ChipList } from "./ChipList";
import { Share } from "./icons/share";

export function Yarr() {
  return (
    <div class="hidden lg:flex w-1150 h-480 drop-shadow-lg bg-gray-50 rounded-2xl overflow-hidden">
      <div class="h-full w-1/2 flex justify-center items-center">
        <img class="w-5/6 h-auto" src="/photos/example.png" alt="surprise" />
      </div>
      <div class="h-full w-1/2 bg-white flex flex-col items-center justify-around">
        <div class="w-5/6 mt-8">
          <h1 class="font-bold text-slate-950 text-lg">Got No skill</h1>
          <p class="mt-4 text-md">
            We didn't have nowhere to stay At 29, I've done so well, hit
            cartwheel in my estate And I'm gon' shine like I'm supposed to
            antisocial, extrovert And excellent mean the extra work And
            absentness what the fuck you heard And pessimists never struck my
            nerve And Nazareth gonna plead this case
          </p>
        </div>
        <ChipList items={chipItems} />
        <div class="w-5/6 mt-4">
          <Share />
        </div>
      </div>
    </div>
  );
}
