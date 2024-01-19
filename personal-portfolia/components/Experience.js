import { Chip } from "../components/Chip";
import { Upwork } from "../data/Upwork.jsx";

export function Experience() {
  return (
    <div class="font-inter py-16 flex justify-center bg-gray-50">
      <div class="w-11/12 flex flex-col items-center gap-y-5">
        <Chip label="Experience" />
        <h2 class="text-center">
          Here is a quick summary of my most recent experiences:
        </h2>
        <div class="flex flex-col gap-10">
          <div class="flex justify-center w-80 h-96 md:w-200 md:h-80 bg-white drop-shadow-md rounded-xl">
            <div className="w-11/12 flex flex-col items-center justify-evenly md:flex-row">
              <div className="w-11/12 md:h-3/6 md:flex md:items-start md:justify-center">
                <img
                  class="w-28 self-start"
                  src="/Logos/Upwork.png"
                  alt="upwork"
                />
              </div>
              <div class="w-11/12 flex md:hidden">
                <h3 class="font-thin">Nov 2021 - Present</h3>
              </div>
              <div class="w-11/12 flex flex-col justify-evenly gap-y-3 md:items-center">
                <div class="w-11/12 flex">
                  <h1 class="font-bold">Sr. Frontend Developer</h1>
                </div>

                <div class="w-11/12 pl-6">
                  <ul class="text-slate-600 list-disc">
                    <li>I exist therefore I require an endless supply</li>
                    <li>An Infinite supply of cheesecakes</li>
                    <li>As the horrors persist so do I</li>
                    <li>
                      Someone will one day do her shit instead of doomscrolling
                      her phone
                    </li>
                  </ul>
                </div>
              </div>
              <div class="w-11/12 hidden md:h-3/6 md:flex md:items-start md:justify-center">
                <h3 class="font-thin">Nov 2021 - Present</h3>
              </div>
            </div>
          </div>
          {/* bomb omb omb omb */}
          <div class="flex justify-center w-80 h-96 md:w-200 md:h-80 bg-white drop-shadow-md rounded-xl">
            <div className="w-11/12 flex flex-col items-center justify-evenly md:flex-row">
              <div className="w-11/12 md:h-3/6 md:flex md:items-start md:justify-center">
                <img
                  class="w-28 self-start"
                  src="/Logos/Upwork.png"
                  alt="upwork"
                />
              </div>
              <div class="w-11/12 flex md:hidden">
                <h3 class="font-thin">Jul 2017 - Oct 2021</h3>
              </div>
              <div class="w-11/12 flex flex-col justify-evenly gap-y-3 md:items-center">
                <div class="w-11/12 flex">
                  <h1 class="font-bold">Team Lead</h1>
                </div>

                <div class="w-11/12 pl-6">
                  <ul class="text-slate-600 list-disc">
                    <li>I exist therefore I require an endless supply</li>
                    <li>An Infinite supply of cheesecakes</li>
                    <li>As the horrors persist so do I</li>
                    <li>
                      Someone will one day do her shit instead of doomscrolling
                      her phone
                    </li>
                  </ul>
                </div>
              </div>
              <div class="w-11/12 hidden md:h-3/6 md:flex md:items-start md:justify-center">
                <h3 class="font-thin">Jul 2017 - Oct 2021</h3>
              </div>
            </div>
          </div>
          {/* bomb omb omb omb */}
          <div class="flex justify-center w-80 h-72 md:w-200 md:h-64 bg-white drop-shadow-md rounded-xl">
            <div className="w-11/12 flex flex-col items-center justify-evenly md:flex-row">
              <div className="w-11/12 md:h-3/6 md:flex md:items-start md:justify-center">
                <img
                  class="w-28 self-start"
                  src="/Logos/Upwork.png"
                  alt="upwork"
                />
              </div>
              <div class="w-11/12 flex md:hidden">
                <h3 class="font-thin">Dec 2015 - May 2017</h3>
              </div>
              <div class="w-11/12 flex flex-col justify-evenly gap-y-3 md:items-center">
                <div class="md:flex md:w-full justify-start">
                  <h1 class="font-bold">Full Stack Developer</h1>
                </div>

                <div class="pl-6">
                  <ul class="text-slate-600 list-disc">
                    <li>I exist therefore I require an endless supply</li>
                    <li>An Infinite supply of cheesecakes</li>
                  </ul>
                </div>
              </div>
              <div class="w-11/12 hidden md:h-3/6 md:flex md:items-start md:justify-center">
                <h3 class="font-thin">Dec 2015 - May 2017</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
