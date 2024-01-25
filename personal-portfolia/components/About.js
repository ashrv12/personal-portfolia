import { Chip } from "../components/Chip";

export function Aboutme() {
  return (
    <div class="flex justify-center mt-16 sm:mt-0 pt-16 dark:bg-gray-900 bg-gray-50">
      <div className="w-11/12 font-inter flex flex-col justify-between items-center">
        <Chip label="About me" />
        <div class="sm:flex items-center">
          <img
            class="h-130 hidden md:flex md:dark:hidden"
            src="/photos/bigabout.png"
            alt="bigBOI"
          />
          <img
            class="h-130 hidden md:hidden md:dark:flex"
            src="/photos/darkmode/darkmodeabtbig.png"
            alt="bigBOI"
          />
          <div class="font-inter mt-12 flex flex-col items-center gap-5 mb-16">
            <img
              class="md:hidden dark:hidden"
              src="/photos/summerprof.png"
              alt="summer"
            />
            <img
              class="md:hidden md:dark:hidden hidden dark:flex"
              src="/photos/darkmode/darkmodeabtmobil.png"
              alt="summer"
            />
            <div class="w-9/12 flex justify-start">
              <h1 class="dark:text-slate-100 text-left text-2xl font-semibold">
                Curious about me? Here you have it:
              </h1>
            </div>
            <p class="w-9/12 text-gray-500 dark:text-slate-200">
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and
              writing clear, readable, highly performant code matters to me.
            </p>
            <p class="w-9/12 text-gray-500 dark:text-slate-200">
              I began my journey as a web developer in 2015, and since then,
              I've continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, in my early thirties, 7 years after starting my web
              development journey, I'm building cutting-edge web applications
              using modern technologies such as Next.js, TypeScript, Nestjs,
              Tailwindcss, Supabase and much more.
            </p>
            <p class="w-9/12 text-gray-500 dark:text-slate-200">
              I am very much a progressive thinker and enjoy working on products
              end to end, from ideation all the way to development.
            </p>
            <p class="w-9/12 text-gray-500 dark:text-slate-200">
              When I'm not in full-on developer mode, you can find me hovering
              around on twitter or on indie hacker, witnessing the journey of
              early startups or enjoying some free time. You can follow me on
              Twitter where I share tech-related bites and build in public, or
              you can follow me on GitHub.
            </p>
            <h2 class="w-9/12 text-left text-gray-500 dark:text-slate-200">
              Finally, some quick bits about me.
            </h2>
            <div class="pl-4 w-9/12 flex justify-center sm:justify-around">
              <ul class="font-inter text-gray-500 list-disc dark:text-slate-200">
                <li>B.E. in Computer Engineering</li>
                <li>Full time freelancer</li>
              </ul>
              <ul class="font-inter text-gray-500 list-disc dark:text-slate-200">
                <li>Avid learner</li>
                <li>Aspiring indie hacker</li>
              </ul>
            </div>
            <p class="w-9/12 text-gray-500 dark:text-slate-200">
              One last thing, I'm available for freelance work, so feel free to
              reach out and say hello! yarr😉
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
