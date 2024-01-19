import { Chip } from "../components/Chip";
import { Email } from "../components/icons/email";
import { Phone } from "../components/icons/phone";
import { Copy } from "../components/icons/copy";
import { Githublogo } from "../components/icons/github-logo";
import { Twitter } from "../components/icons/twitter";
import { Figma } from "../components/icons/figma-logo";

export function Getintouch() {
  return (
    <div class="flex flex-col items-center my-8">
      <div class="w-5/6 flex flex-col items-center my-6 gap-4">
        <div class="">
          <Chip label="Get in touch" />
        </div>
        <p class="my-6">
          What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </p>
        <div class="flex gap-x-3">
          <Email />
          <h1 class="font-bold">reachsagarshah@gmail.com</h1>
          <Copy />
        </div>
        <div class="mt-4 flex gap-x-3">
          <Phone />
          <h1 class="font-bold">+91 8980500565</h1>
          <Copy />
        </div>
        <div class="flex flex-col mt-2">
          <h2>You may also find me on these platforms!</h2>
          <div class="flex mt-4 justify-center gap-x-4">
            <Githublogo />
            <Twitter />
            <Figma />
          </div>
        </div>
      </div>
    </div>
  );
}
