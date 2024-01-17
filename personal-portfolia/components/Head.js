import { Location } from "../components/icons/location";
import { Greendot } from "../components/icons/green-dot";
import { Githublogo } from "../components/icons/github-logo";
import { Twitter } from "../components/icons/twitter";
import { Figma } from "../components/icons/figma-logo";

export function Head() {
  return (
    <div class="flex items-center flex-col">
      <div class="sm:hidden my-16 flex justify-center">
        <img src="/photos/mobileprofile.png" alt="profile" />
      </div>
      <div class="w-11/12 flex flex-col justify-between h-96 md:w-9/12 sm:flex-row sm:mt-24 sm:items-center">
        <div class="h-full flex flex-col justify-between">
          <h1 class="font-inter text-4xl lg:text-5xl font-semibold">
            Hi, I’m Sagar 👋
          </h1>
          <p class="font-inter mt-2 lg:text-lg lg:mt-4 text-gray-600">
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </p>
          <div>
            <div class="font-inter flex lg:text-lg lg:flex lg:items-center">
              <Location />
              <h2 class="pl-2 text-gray-600">Ahmedabad, India</h2>
            </div>
            <div class="font-inter mt-2 flex lg:text-lg lg:flex lg:items-center">
              <Greendot />
              <h2 class="pl-2 text-gray-600">Available for new projects</h2>
            </div>
          </div>
          <div class="flex gap-4">
            <Githublogo />
            <Twitter />
            <Figma />
          </div>
        </div>
        <img
          class="hidden sm:block"
          src="/photos/Bigprofile.png"
          alt="profile"
        />
      </div>
    </div>
  );
}
