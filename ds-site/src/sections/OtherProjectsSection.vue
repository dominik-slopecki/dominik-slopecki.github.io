<script setup lang="ts">
const otherProjects = [
  {
    name: 'This website',
    date: '2025',
    description: `Creating a portfolio to present some of my current and future accomplishments in full RWD. Created using Vue, styled using TailwindCSS, tested using Vitest and PlayWright`,
    status: 'OK',
    image: '/assets/dslogopage.svg',
    link: 'https://github.com/dominik-slopecki/dominik-slopecki.github.io',
  },
  {
    name: 'Selenium and Screendiff base for Testing',
    date: '2019',
    description: `As part of learning Selenium and to keep a reference of ScreenDiff created a repo for reference (it was a really useful tool sometime ago that was hard find and use correctly - now there are more ways to screendiff)`,
    status: 'OK',
    image: '/assets/screen_diff.jpg',
    link: 'https://github.com/KerberousS/ARTEAutomatization',
  },
  {
    name: 'CSGO Mapmaking',
    date: 'from 12.2016 to 06.2019',
    description: `Making new custom maps for CSGO and porting great maps from CS:Source so they can be enjoyed by people. Some special maps were also created for youtubers.
      (This are not working after CS2 update - hopefully I will fix this in near future)`,
    status: 'OUTDATED',
    image: '/assets/csgomaps.png',
    link: 'https://steamcommunity.com/profiles/76561197998255519/myworkshopfiles',
  },
  {
    name: 'HlstatsX Admin Time Graph',
    date: '2018',
    description: `As part of learning Java (with JavaFx) and Javascript (and HTML) created applications that would present charts of time that admins have played on a server. (application was not updated for a very long time and most likely does not work anymore)`,
    status: 'OUTDATED',
    image: '/assets/oldbarchart.jpg',
    link: 'https://github.com/search?q=owner%3AKerberousS+HlstatsX&type=repositories',
  },
]
</script>

<template>
  <div class="overflow-hidden pb-24 sm:pb-32 px-6 text-gray-200">
    <h2
      class="text-center mb-24 mt-24 text-3xl font-extrabold leading-none tracking-tight text-gray-100 md:text-4xl lg:text-5xl dark:text-white"
      id="other"
    >
      Other Projects
    </h2>

    <div
      class="flex flex-column justify-between items-stretch flex-wrap gap-x-12 gap-y-8 lg:px-8 lg:mb-12"
    >
      <div v-for="project in otherProjects" :key="project.name">
        <div
          class="flex flex-row h-full content-between flex-wrap bg-white shadow-sm border border-slate-200 rounded-lg sm:w-96"
        >
          <div class="m-2.5 text-white rounded-md" :class="{ 'bg-ds': project.image === null }">
            <img
              v-if="project.image !== null"
              class="w-full sm:h-60 sm:w-96 object-cover"
              :src="project.image"
              alt="card-image"
            />
          </div>
          <p class="text-gray-400 m-2.5 ml-auto">{{ project.date }}</p>
          <div class="p-4">
            <h6 class="mb-2 text-slate-800 text-xl font-semibold">{{ project.name }}</h6>
            <p class="text-slate-600 leading-normal font-light">
              {{ project.description }}
            </p>
          </div>
          <div class="px-4 pb-4 pt-0 mt-2">
            <button
              class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <a :href="project.link" target="_blank">See more</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <p class="text-white text-center py-24">And more to come soon!</p>
</template>
