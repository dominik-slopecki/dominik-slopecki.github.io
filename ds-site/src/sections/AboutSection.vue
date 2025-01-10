<template>
  <div id="about" class="flex flex-row flex-wrap bg-white p-12 lg:py-24 justify-evenly">
    <div class="flex flex-col">
      <div>
        <h2 class="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
          Thanks for reading
        </h2>
        <p class="mt-6 text-lg/8 text-gray-600">
          Hope you found something interesting here and that we can get to know each other soon!
          <br />
          <br />
          You can find more info about me on:
        </p>
      </div>

      <div
        class="py-8 px-4 align-middle flex flex-wrap gap-y-4 justify-center lg:justify-between gap-x-12"
      >
        <a href="https://www.facebook.com/kerberouss" target="_blank">
          <span>Facebook</span>
          <svg height="72" width="62" viewBox="0 0 24 24" aria-hidden="true" class="mx-auto">
            <path
              fill-rule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/dominik-s%C5%82opecki-b70075155/" target="_blank">
          <span>LinkedIn</span>
          <svg height="72" viewBox="0 0 455 455" width="48" class="mx-auto">
            <g>
              <path
                style="fill-rule: evenodd; clip-rule: evenodd"
                d="M246.4,204.35v-0.665c-0.136,0.223-0.324,0.446-0.442,0.665H246.4z"
              />
              <path
                style="fill-rule: evenodd; clip-rule: evenodd"
                d="M0,0v455h455V0H0z M141.522,378.002H74.016V174.906h67.506V378.002z
		 M107.769,147.186h-0.446C84.678,147.186,70,131.585,70,112.085c0-19.928,15.107-35.087,38.211-35.087
		c23.109,0,37.31,15.159,37.752,35.087C145.963,131.585,131.32,147.186,107.769,147.186z M385,378.002h-67.524V269.345
		c0-27.291-9.756-45.92-34.195-45.92c-18.664,0-29.755,12.543-34.641,24.693c-1.776,4.34-2.24,10.373-2.24,16.459v113.426h-67.537
		c0,0,0.905-184.043,0-203.096H246.4v28.779c8.973-13.807,24.986-33.547,60.856-33.547c44.437,0,77.744,29.02,77.744,91.398V378.002
		z"
              />
            </g>
          </svg>
        </a>
        <a href="https://github.com/kerberouss" target="_blank">
          <span>GitHub (Personal)</span>
          <svg height="72" width="62" viewBox="0 0 24 24" aria-hidden="true" class="mx-auto">
            <path
              fill-rule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
        <a href="https://github.com/dominik-slopecki" target="_blank">
          <span>GitHub (Work)</span>
          <svg height="72" width="62" viewBox="0 0 24 24" aria-hidden="true" class="mx-auto">
            <path
              fill-rule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>

    <div class="flex items-center gap-x-6 my-4">
      <img
        class="size-16 rounded-full"
        src="https://media.licdn.com/dms/image/v2/C4E03AQHsyPnhJtZZow/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1604838831972?e=1741824000&v=beta&t=zAirN1ppvF_hAxJiqDPsL40QPIb3kaNxiaYZawiNw4I"
        alt=""
      />

      <div>
        <h3 class="text-base/7 font-semibold tracking-tight text-gray-900">Dominik Słopecki</h3>
        <p class="text-sm/6 font-semibold text-orange-700">SDET</p>
      </div>
    </div>
  </div>
</template>
