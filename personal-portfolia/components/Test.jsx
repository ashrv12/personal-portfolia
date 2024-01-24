import { chipItems } from "../data/chipItems";
import { ChipList } from "./ChipList";
import { Share, ShareDark } from "./icons/share";

export function Testbox() {
  return (
    <div class="lg:hidden h-772 w-343 drop-shadow-lg bg-gray-50 dark:bg-gray-700 rounded-2xl overflow-hidden">
      <div class="w-full h-2/5 flex justify-center items-center">
        <img class="w-5/6 h-auto" src="/photos/example.png" alt="surprise" />
      </div>
      <div class="w-full h-3/5 bg-white dark:bg-gray-800 flex flex-col items-center">
        <div class="w-5/6 mt-8">
          <h1 class="font-bold text-slate-950 dark:text-slate-100 text-lg">
            Got None skill
          </h1>
          <p class="mt-4 text-md dark:text-slate-200">
            ----We didn't have nowhere to stay At 29, I've done so well, hit
            cartwheel in my estate And I'm gon' shine like I'm supposed to
            antisocial, extrovert And excellent mean the extra work And
            absentness what the fuck you heard And pessimists never struck my
            nerve And Nazareth gonna plead this case
          </p>
        </div>
        <ChipList items={chipItems} />
        <div class="w-5/6 mt-4">
          <Share />
          <ShareDark />
        </div>
      </div>
    </div>
  );
}
