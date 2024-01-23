import { Chip } from "../components/Chip";

import { Testbox } from "./Test";
import { Yarr } from "./Yarr";
import { Naurr } from "./Naurr";

export function Work() {
  return (
    <div class="font-inter my-16 text-gray-600 flex flex-col items-center">
      <Chip label="Work" />
      <h2 class="w-11/12 text-center mt-4 text-lg">
        Some of the noteworthy projects I have built:
      </h2>
      <div class="mt-6 gap-y-6 flex flex-col">
        {/* box */}
        <Testbox />
        {/* end of box */}
        {/* landscape start */}
        <Yarr />
        {/* landscape end */}
        {/* box */}
        <Testbox />
        {/* end of box */}
        {/* landscape start */}
        <Naurr />
        {/* landscape end */}

        {/* box */}
        <Testbox />
        {/* end of box */}
        {/* landscape start */}
        <Yarr />
        {/* landscape end */}
      </div>
    </div>
  );
}
