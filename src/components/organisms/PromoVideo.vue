<script setup lang="ts">
import FadeIn from '~/components/atoms/FadeIn.vue';
</script>

<template>
  <div class="bg-indigo-700 align-center">
    <FadeIn>
      <div class="mx-auto text-center pb-16 px-4 sm:pb-20 sm:px-6 lg:px-8">
        <h2
          class="text-3xl mb-12 font-extrabold text-white sm:text-4xl font-display"
        >
          <span class="block">A taste of what to expect</span>
        </h2>
        <iframe
          class="mx-auto md:w-960 md:h-640 sm:h-320 sm:w-auto"
          src="https://www.youtube.com/embed/458hqH4Q48Y"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </FadeIn>
  </div>
</template>
