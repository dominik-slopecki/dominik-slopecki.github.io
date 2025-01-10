<script setup lang="ts">
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const mobileMenuOpen = ref(false)
const mobileMenuOpacity = ref('opacity-0')

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Professional Experience', href: '#experience' },
  { name: 'Other Projects', href: '#other' },
  { name: 'About', href: '#about' },
]

function triggerMenuStateChange(isOpen: boolean): void {
  if (isOpen) {
    mobileMenuOpen.value = true
    setTimeout(() => {
      mobileMenuOpacity.value = 'opacity-100'
    }, 150)
  } else {
    mobileMenuOpacity.value = 'opacity-0'
    setTimeout(() => {
      mobileMenuOpen.value = false
    }, 150)
  }
}
</script>

<template>
  <nav class="flex items-center justify-between p-6 lg:px-8 bg-ds" aria-label="Global">
    <div class="flex lg:flex-1">
      <p class="-m-1.5 p-1.5">
        <span class="sr-only">DS Site</span>
        <img class="h-8 w-auto" src="/assets/dslogov3.svg" alt="DS logo" />
      </p>
    </div>

    <div data-testid="mobileMenuButton" class="flex lg:hidden">
      <button
        type="button"
        class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300"
        @click="triggerMenuStateChange(true)"
      >
        <span class="sr-only">Open main menu</span>
        <Bars3Icon class="size-6" aria-hidden="true" />
      </button>
    </div>

    <div
      data-testid="desktopNavContainer"
      class="hidden flex transition lg:flex lg:gap-x-12 align-center flex-col"
    >
      <a
        v-for="item in navigation"
        :key="item.name"
        :href="item.href"
        class="text-sm/6 font-semibold text-gray-100 hover:text-gray-300 drop-shadow-2xl"
        >{{ item.name }}</a
      >
    </div>

    <Dialog class="lg:hidden" @close="triggerMenuStateChange(false)" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-50" />

      <div class="transition duration-500" :class="[mobileMenuOpacity]">
        <DialogPanel
          class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div class="flex items-center justify-between">
            <p class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img class="h-8 w-auto" src="/assets/dslogov3.svg" alt="DS logo" />
            </p>

            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-gray-300"
              @click="triggerMenuStateChange(false)"
            >
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="size-6" aria-hidden="true" />
            </button>
          </div>

          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div data-testid="mobileNavigationContainer" class="space-y-2 py-6">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  @click="triggerMenuStateChange(false)"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-700 hover:bg-gray-50"
                  >{{ item.name }}</a
                >
              </div>
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  </nav>
</template>
