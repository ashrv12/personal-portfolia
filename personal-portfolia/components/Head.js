import { Location, LocationDark } from "../components/icons/location";
import { Greendot } from "../components/icons/green-dot";
import { Githublogo, GithublogoDark } from "../components/icons/github-logo";
import { Twitter, TwitterDark } from "../components/icons/twitter";
import { Figma, FigmaDark } from "../components/icons/figma-logo";

export function Head() {
  return (
    <div class="dark:text-slate-100 dark:bg-gray-950 sm:h-screen flex items-center sm:justify-center flex-col">
      <div class="sm:hidden my-16 flex justify-center">
        <img
          class="dark:hidden"
          src="/photos/mobileprofile.png"
          alt="profile"
        />
        <img
          class="h-360 w-80 hidden dark:flex"
          src="/photos/darkmode/darkmodemobile.png"
          alt="profile"
        />
      </div>
      <div class="w-11/12 flex flex-col justify-between h-96 md:w-9/12 sm:flex-row sm:items-center">
        <div class="h-full flex flex-col justify-between">
          <h1 class="dark:text-slate-200 font-inter text-4xl lg:text-5xl font-semibold">
            Hi, I’m Sagar 👋
          </h1>
          <p class="dark:text-slate-200 font-inter mt-2 lg:text-lg lg:mt-4 text-gray-600">
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </p>
          <div>
            <div class="font-inter flex lg:text-lg lg:flex lg:items-center">
              <LocationDark />
              <Location />
              <h2 class="dark:text-slate-200 pl-2 text-gray-600">
                Ahmedabad, India
              </h2>
            </div>
            <div class="font-inter mt-2 flex lg:text-lg lg:flex lg:items-center">
              <Greendot />
              <h2 class="dark:text-slate-200 pl-2 text-gray-600">
                Available for new projects
              </h2>
            </div>
          </div>
          <div class="flex gap-4">
            <GithublogoDark />
            <Githublogo />

            <Twitter />
            <TwitterDark />

            <Figma />
            <FigmaDark />
          </div>
        </div>
        <img
          class="hidden ml-8 sm:block sm:dark:hidden"
          src="/photos/Bigprofile.png"
          alt="profile"
        />
        <img
          class="h-360 w-80 hidden dark:flex ml-8 sm:hidden"
          src="/photos/darkmode/darkheadbig.png"
          alt="profile"
        />
      </div>
    </div>
  );
}
