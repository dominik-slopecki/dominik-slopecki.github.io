<template>
  <div id="home" class="hover:transition-all">
    <header class="fixed inset-x-0 top-0 z-50">
      <NavigationComponent></NavigationComponent>
    </header>

    <div class="relative isolate px-6 pt-14 lg:px-8">
      <div class="mx-auto max-w-2xl py-12 sm:py-18 lg:py-24">
        <div class="text-left">
          <h1
            data-testid="heading-text"
            class="text-balance text-5xl font-semibold tracking-tight text-gray-100 sm:text-7xl"
          >
            DS
          </h1>

          <p class="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            Dominik Słopecki - Portfolio
          </p>

          <div class="mt-10 pt-10 flex flex-col text-gray-100">
            <div class="">{{ hiText }} Name's Dominik. I am a passionate and experienced</div>
            <br />
            <br />
            <br />
            <div class="flex justify-between text-gray-10 flex-wrap">
              <div class="flex flex-col justify-between">
                <p class="font-bold">QA</p>
                <p data-testid="qaYearsOfExp" class="font-bold">
                  (with {{ yearsOfQaExperience }} years of experience)
                </p>
              </div>
              <span class="basis-full my-12 sm:basis-0 sm:my-0">and</span>
              <div class="flex flex-col justify-between">
                <p class="font-bold">Full-Stack Developer</p>
                <p data-testid="devYearsOfExp" class="font-bold">
                  (with {{ yearsOfQaExperience - 3 }} years of experience)
                </p>
              </div>
            </div>
          </div>

          <BackgroundOverlay></BackgroundOverlay>

          <div class="mt-10 pt-10 flex items-left justify-left gap-x-12 text-gray-200">
            I love to create and take part in the creation of things that are either useful for
            people or just bring them entertainment of any kind.
            <br /><br />
            I like to design and create fun stuff. I enjoy video games and swimming.
            <br /><br />
            Sometimes, I just like to drive or wander around in search of something interesting.
            <br /><br />
            And - above all - I can provide you and your project with a unique touch for detail as
            well as pure commitment and eagneress to all that can make it a better final product.
            <br />
            <br />
            I wish you a nice Day and Hope we get to discuss a bit!
          </div>
        </div>
      </div>
    </div>
    <div class="hidden sm:mb-8 sm:flex sm:justify-center">
      <div
        class="relative text-center rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
      >
        This simple site was created using
        <a
          class="text-gray-500 hover:text-gray-400 hover:underline transition-all"
          href="https://github.com/dominik-slopecki/dominik-slopecki.github.io"
          target="_blank"
          >Vue+TailwindCSS</a
        >
        <br />
        And has basic tests using
        <a
          class="text-gray-500 hover:text-gray-400 hover:underline transition-all"
          href="https://github.com/dominik-slopecki/dominik-slopecki.github.io/blob/main/ds-site/src/sections/__tests__"
          target="_blank"
          >Vitest (unit testing)</a
        >
        +
        <a
          class="text-gray-500 hover:text-gray-400 hover:underline transition-all"
          href="/playwright-report.html"
          target="_blank"
          >Playwright</a> <a class="text-gray-500 hover:text-gray-400 hover:underline transition-all"
          href="https://github.com/dominik-slopecki/dominik-slopecki.github.io/blob/main/ds-site/e2e/vue.spec.ts"
          target="_blank">(E2E testing)</a>
        >
      </div>
    </div>
  </div>

  <ExperienceSection> </ExperienceSection>
  <OtherProjectsSection> </OtherProjectsSection>
  <AboutSection> </AboutSection>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { ref } from 'vue'
import NavigationComponent from './components/NavigationComponent.vue'
import BackgroundOverlay from './components/BackgroundOverlayComponent.vue'
import ExperienceSection from './sections/ExperienceSection.vue'
import OtherProjectsSection from './sections/OtherProjectsSection.vue'
import AboutSection from './sections/AboutSection.vue'

const hiText = ref('')
const lettersForHiText = 'Hi!'
const yearsOfQaExperience = ref(10)

onMounted(async () => {
  const currentDate: number = Date.now()
  const firstITWorkStartDate: number = new Date(2017, 5, 0) as unknown as number
  yearsOfQaExperience.value = new Date(currentDate - firstITWorkStartDate).getUTCFullYear() - 1970

  for (let letterCount = 0; letterCount < lettersForHiText.length; letterCount++) {
    await delay(250)
    setTimeout(async () => {
      hiText.value += lettersForHiText[letterCount]
    }, 150)
  }
})

const delay = (durationMs: number) => {
  return new Promise((resolve) => setTimeout(resolve, durationMs))
}
</script>
