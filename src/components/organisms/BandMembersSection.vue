<template>
  <div class="bg-indigo-700">
    <div
      class="max-w-4xl mx-auto px-4 pb-16 pt-12 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:px-8"
    >
      <div
        class="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16"
        style="margin-top: -150px"
      >
        <FadeIn
          v-for="member in bandMembers"
          :key="member.name"
          class="pt-8 rounded-lg bg-indigo-700"
        >
          <div
            class="flex items-center justify-center rounded-md bg-opacity-10"
          >
            <img v-bind:src="member.icon" alt="Band Member Image" />
          </div>
          <div class="mt-6 block items-center justify-center">
            <h3 class="text-lg font-medium text-center text-white">
              {{ member.name }}
            </h3>
            <p class="mt-2 text-center text-base text-indigo-200">
              {{ member.description }}
            </p>
          </div>
        </FadeIn>
      </div>
      <p class="mt-20 text-center">
        <a
          href="/about/"
          class="py-3 px-4 rounded-md shadow bg-gray-50 font-medium hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900 whitespace-nowrap sm:w-min text-center"
        >
          Read About Us
        </a>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import FadeIn from '../atoms/FadeIn.vue';

const bandMembers = [
  {
    name: 'Cormac || Cajon',
    description: 'Performs with an array of percussion sounds',
    icon: 'https://lagroove.ie/wp-content/uploads/2019/05/Cormac-web-200x200.png',
  },
  {
    name: 'Amy || Vocals',
    description: 'An exceptional vocal range',
    icon: 'https://lagroove.ie/wp-content/uploads/2022/05/Amy-web-200x200-1.png',
  },
  {
    name: 'Jamie || Rhythm Guitar',
    description: 'Is class at guitar',
    icon: 'https://lagroove.ie/wp-content/uploads/2019/05/Jamie-web-200x200.png',
  },
];
export default {
  components: {
    FadeIn,
  },
  setup() {
    return {
      bandMembers,
    };
  },
};
</script>
