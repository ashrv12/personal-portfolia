import { Chip } from "../components/Chip";
import { Upwork, UpworkSec, UpworkTh } from "./Upwork";

export function Experience() {
  return (
    <div class="dark:bg-gray-900 font-inter py-16 flex justify-center bg-gray-50">
      <div class="w-11/12 flex flex-col items-center gap-y-5">
        <Chip label="Experience" />
        <h2 class="text-center dark:text-slate-100">
          Here is a quick summary of my most recent experiences:
        </h2>
        <div class="flex flex-col gap-10">
          <Upwork />
          <UpworkSec />
          <UpworkTh />
        </div>
      </div>
    </div>
  );
}
