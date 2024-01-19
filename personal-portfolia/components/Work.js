import { Chip } from "../components/Chip";
import { chipItems } from "../data/chipItems";
import { ChipList } from "../components/ChipList";
import { Share } from "../components/icons/share";

export function Work() {
  return (
    <div class="font-inter my-16 text-gray-600 flex flex-col items-center">
      <Chip label="Work" />
      <h2 class="w-11/12 text-center mt-4 text-lg">
        Some of the noteworthy projects I have built:
      </h2>
      <div class="mt-6 gap-y-6 flex flex-col">
        {/* box */}
        <div class="lg:hidden h-772 w-343 drop-shadow-lg bg-gray-50 rounded-2xl overflow-hidden">
          <div class="w-full h-2/5 flex justify-center items-center">
            <img
              class="w-5/6 h-auto"
              src="/photos/example.png"
              alt="surprise"
            />
          </div>
          <div class="w-full h-3/5 bg-white flex flex-col items-center">
            <div class="w-5/6 mt-8">
              <h1 class="font-bold text-slate-950 text-lg">Got No skill</h1>
              <p class="mt-4 text-md">
                We didn't have nowhere to stay At 29, I've done so well, hit
                cartwheel in my estate And I'm gon' shine like I'm supposed to
                antisocial, extrovert And excellent mean the extra work And
                absentness what the fuck you heard And pessimists never struck
                my nerve And Nazareth gonna plead this case
              </p>
            </div>
            <ChipList items={chipItems} />
            <div class="w-5/6 mt-4">
              <Share />
            </div>
          </div>
        </div>
        {/* end of box */}
        {/* landscape start */}

        <div class="hidden lg:flex w-1150 h-480 drop-shadow-lg bg-gray-50 rounded-2xl overflow-hidden">
          <div class="h-full w-1/2 flex justify-center items-center">
            <img
              class="w-5/6 h-auto"
              src="/photos/example.png"
              alt="surprise"
            />
          </div>
          <div class="h-full w-1/2 bg-white flex flex-col items-center justify-around">
            <div class="w-5/6 mt-8">
              <h1 class="font-bold text-slate-950 text-lg">Got No skill</h1>
              <p class="mt-4 text-md">
                We didn't have nowhere to stay At 29, I've done so well, hit
                cartwheel in my estate And I'm gon' shine like I'm supposed to
                antisocial, extrovert And excellent mean the extra work And
                absentness what the fuck you heard And pessimists never struck
                my nerve And Nazareth gonna plead this case
              </p>
            </div>
            <ChipList items={chipItems} />
            <div class="w-5/6 mt-4">
              <Share />
            </div>
          </div>
        </div>

        {/* landscape end */}

        {/* box */}
        <div class="lg:hidden h-772 w-343 drop-shadow-lg bg-gray-50 rounded-2xl overflow-hidden">
          <div class="w-full h-2/5 flex justify-center items-center">
            <img
              class="w-5/6 h-auto"
              src="/photos/example.png"
              alt="surprise"
            />
          </div>
          <div class="w-full h-3/5 bg-white flex flex-col items-center">
            <div class="w-5/6 mt-8">
              <h1 class="font-bold text-slate-950 text-lg">Got No skill</h1>
              <p class="mt-4 text-md">
                We didn't have nowhere to stay At 29, I've done so well, hit
                cartwheel in my estate And I'm gon' shine like I'm supposed to
                antisocial, extrovert And excellent mean the extra work And
                absentness what the fuck you heard And pessimists never struck
                my nerve And Nazareth gonna plead this case
              </p>
            </div>
            <ChipList items={chipItems} />
            <div class="w-5/6 mt-4">
              <Share />
            </div>
          </div>
        </div>
        {/* end of box */}
        {/* landscape start */}

        <div class="hidden lg:flex w-1150 h-480 drop-shadow-lg bg-gray-50 rounded-2xl overflow-hidden">
          <div class="h-full w-1/2 bg-white flex flex-col items-center justify-around">
            <div class="w-5/6 mt-8">
              <h1 class="font-bold text-slate-950 text-lg">Got No skill</h1>
              <p class="mt-4 text-md">
                We didn't have nowhere to stay At 29, I've done so well, hit
                cartwheel in my estate And I'm gon' shine like I'm supposed to
                antisocial, extrovert And excellent mean the extra work And
                absentness what the fuck you heard And pessimists never struck
                my nerve And Nazareth gonna plead this case
              </p>
            </div>
            <ChipList items={chipItems} />
            <div class="w-5/6 mt-4">
              <Share />
            </div>
          </div>
          <div class="h-full w-1/2 flex justify-center items-center">
            <img
              class="w-5/6 h-auto"
              src="/photos/example.png"
              alt="surprise"
            />
          </div>
        </div>

        {/* landscape end */}
        {/* box */}
        <div class="lg:hidden h-772 w-343 drop-shadow-lg bg-gray-50 rounded-2xl overflow-hidden">
          <div class="w-full h-2/5 flex justify-center items-center">
            <img
              class="w-5/6 h-auto"
              src="/photos/example.png"
              alt="surprise"
            />
          </div>
          <div class="w-full h-3/5 bg-white flex flex-col items-center">
            <div class="w-5/6 mt-8">
              <h1 class="font-bold text-slate-950 text-lg">Got No skill</h1>
              <p class="mt-4 text-md">
                We didn't have nowhere to stay At 29, I've done so well, hit
                cartwheel in my estate And I'm gon' shine like I'm supposed to
                antisocial, extrovert And excellent mean the extra work And
                absentness what the fuck you heard And pessimists never struck
                my nerve And Nazareth gonna plead this case
              </p>
            </div>
            <ChipList items={chipItems} />
            <div class="w-5/6 mt-4">
              <Share />
            </div>
          </div>
        </div>
        {/* end of box */}
        {/* landscape start */}

        <div class="hidden lg:flex w-1150 h-480 drop-shadow-lg bg-gray-50 rounded-2xl overflow-hidden">
          <div class="h-full w-1/2 flex justify-center items-center">
            <img
              class="w-5/6 h-auto"
              src="/photos/example.png"
              alt="surprise"
            />
          </div>
          <div class="h-full w-1/2 bg-white flex flex-col items-center justify-around">
            <div class="w-5/6 mt-8">
              <h1 class="font-bold text-slate-950 text-lg">Got No skill</h1>
              <p class="mt-4 text-md">
                We didn't have nowhere to stay At 29, I've done so well, hit
                cartwheel in my estate And I'm gon' shine like I'm supposed to
                antisocial, extrovert And excellent mean the extra work And
                absentness what the fuck you heard And pessimists never struck
                my nerve And Nazareth gonna plead this case
              </p>
            </div>
            <ChipList items={chipItems} />
            <div class="w-5/6 mt-4">
              <Share />
            </div>
          </div>
        </div>

        {/* landscape end */}
      </div>
    </div>
  );
}
