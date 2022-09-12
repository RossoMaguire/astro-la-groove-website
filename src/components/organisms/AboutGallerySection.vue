<script setup lang="ts">
import FadeIn from '../atoms/FadeIn.vue';

const galleryImages = [
  {
    id: 'image-1',
    src: 'https://lagroove.ie/wp-content/uploads/2019/04/IMG_6873-150x150.jpg',
  },
  {
    id: 'image-2',
    src: 'https://lagroove.ie/wp-content/uploads/2019/04/cormac.jpg',
  },
  {
    id: 'image-3',
    src: 'https://lagroove.ie/wp-content/uploads/2022/05/IMG-20220111-WA0002-150x150.jpg',
  },
  {
    id: 'image-4',
    src: 'https://lagroove.ie/wp-content/uploads/2022/05/IMG-20220111-WA0003-1-150x150.jpg',
  },
  {
    id: 'image-5',
    src: 'https://lagroove.ie/wp-content/uploads/2019/05/IMG_6253-150x150.jpg',
  },
  {
    id: 'image-6',
    src: 'https://lagroove.ie/wp-content/uploads/2022/05/IMG-20220102-WA0004-150x150.jpg',
  },
  {
    id: 'image-7',
    src: 'https://lagroove.ie/wp-content/uploads/2019/05/IMG_6007.jpg',
  },
  {
    id: 'image-8',
    src: 'https://lagroove.ie/wp-content/uploads/2019/03/La-Groove-bc_Artboard-6-copy.png',
  },
  {
    id: 'image-9',
    src: 'https://lagroove.ie/wp-content/uploads/2022/05/IMG-20220530-WA0024.jpg',
  },
];
</script>

<template>
  <div
    class="py-16 bg-gray-50 overflow-hidden lg:py-24"
    style="margin-bottom: 160px"
  >
    <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
      <svg
        class="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
        width="404"
        height="784"
        fill="none"
        viewBox="0 0 404 784"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              class="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width="404"
          height="784"
          fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
        />
      </svg>

      <div class="relative">
        <FadeIn>
          <h2
            class="text-center text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl font-display"
          >
            About La Groove
          </h2>
        </FadeIn>
      </div>

      <svg
        class="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
        width="404"
        height="784"
        fill="none"
        viewBox="0 0 404 784"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              class="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width="404"
          height="784"
          fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
        />
      </svg>

      <div class="relative mt-12 sm:mt-16 lg:mt-24">
        <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8">
          <div class="lg:col-start-2">
            <FadeIn fromDirection="right">
              <h3
                class="text-2xl font-bold text-gray-900 tracking-tight sm:text-3xl font-display"
              >
                The groove to your party
              </h3>
              <p class="mt-5 text-lg text-gray-500">
                An acoustic three piece band with an extensive set list that
                covers a range of classics from the 70s to current tracks.
              </p>
              <p class="mt-5 text-lg text-gray-500">
                Some of the artists that we cover include; Fleetwood mac,
                Michael Jackson, Bruno mars, Earth Wind and Fire, Dua lipa and
                many more.
              </p>
              <p class="mt-5 text-lg text-gray-500">
                La Groove typically perform as a trio but occasionally extends
                the band line up to include saxophone, bass and lead guitar with
                packages individually catered for your needs.
              </p>

              <p class="mt-5 text-lg text-gray-500">
                For more information, contact a member of the band below.
              </p>

              <p class="mt-8">
                <a
                  href="/pricing/"
                  class="py-3 px-4 rounded-md shadow bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900 whitespace-nowrap sm:w-min text-center"
                >
                  F.A.Q & Prices
                </a>
              </p>
            </FadeIn>
          </div>

          <div class="lg:col-start-1">
            <FadeIn fromDirection="left">
              <svg
                class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                width="784"
                height="404"
                fill="none"
                viewBox="0 0 784 404"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      class="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width="784"
                  height="404"
                  fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
                />
              </svg>
              <div class="grid grid-cols-3 gap-4">
                <div v-for="image in galleryImages" :key="image.id">
                  <img
                    v-bind:src="image.src"
                    class="min-w-full"
                    style="min-height: 140px"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
