<script setup lang="ts">
import { shallowRef, ref, onMounted, onBeforeUnmount, toRefs } from 'vue';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
import {
  MenuIcon,
  XIcon,
  PhotographIcon,
  VideoCameraIcon,
  MusicNoteIcon,
  BookOpenIcon,
} from '@heroicons/vue/outline/esm/index.js';
import NavbarDropdown from '~/components/molecules/NavbarDropdown.vue';

const navigation = shallowRef([
  { name: 'About Us', href: '/about/' },
  { name: 'Pricing', href: '/pricing/' },
  {
    name: 'Social',
    children: [
      {
        name: 'Facebook',
        description: 'Join the community',
        href: '/',
        icon: BookOpenIcon,
      },
      {
        name: 'Instagram',
        description: 'Follow our adventures',
        href: '/',
        icon: PhotographIcon,
      },
      {
        name: 'SoundCloud',
        description: 'Check out our tunes',
        href: '/',
        icon: MusicNoteIcon,
      },
      {
        name: 'YouTube',
        description: 'Check out our vids',
        href: '/',
        icon: VideoCameraIcon,
      },
    ],
  },
]);

const isScrolledToTop = ref(true);
const handleScroll = () => {
  isScrolledToTop.value = window.scrollY === 0;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <Popover as="header" class="relative">
    <div
      class="bg-white py-3 h-16 flex items-center fixed top-0 left-0 right-0 z-10 transition-colors ease-in-out duration-500"
    >
      <nav
        class="bg-white relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 flex-grow"
        aria-label="Global"
      >
        <div class="flex items-center flex-1">
          <div class="flex items-center justify-between w-full md:w-auto">
            <a
              href="/"
              class="text-gray-100 flex items-center font-semibold text-xl"
            >
              <img
                src="http://lagroove.wpengine.com/wp-content/uploads/2019/04/logo-black-la-05.png"
                alt="La Groove Logo"
                style="max-width: 20%"
              />
            </a>
            <div class="-mr-2 flex items-center md:hidden">
              <PopoverButton
                class="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white"
              >
                <span class="sr-only">Open main menu</span>
                <MenuIcon class="h-6 w-6" aria-hidden="true" />
              </PopoverButton>
            </div>
          </div>
          <div class="hidden space-x-8 md:flex md:ml-10 w-full justify-between">
            <template v-for="item in navigation" :key="item.name">
              <NavbarDropdown
                v-if="item.children"
                :name="item.name"
                :children="item.children"
              />
              <a
                v-else
                :key="item.name"
                :href="item.href"
                class="text-base font-medium text-gray-900 hover:text-gray-300"
                >{{ item.name }}</a
              >
            </template>
          </div>
        </div>
      </nav>
    </div>

    <transition
      enter-active-class="duration-150 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel
        focus
        class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top md:hidden"
      >
        <div
          class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
        >
          <div class="px-5 pt-4 flex items-center justify-between">
            <div>
              <a href="/" class="logo h-8 text-slate-800">La Groove</a>
            </div>
            <div class="-mr-2">
              <PopoverButton
                class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
              >
                <span class="sr-only">Close menu</span>
                <XIcon class="h-6 w-6" aria-hidden="true" />
              </PopoverButton>
            </div>
          </div>
          <div class="pt-5 pb-6">
            <div class="px-2 space-y-1">
              <template v-for="item in navigation" :key="item.name">
                <template v-if="item.children">
                  <a
                    v-for="childItem in item.children"
                    :key="childItem.name"
                    :href="childItem.href"
                    class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                    >{{ childItem.name }}</a
                  >
                </template>
                <a
                  v-else
                  :href="item.href"
                  class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                  >{{ item.name }}</a
                >
              </template>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>
