<script setup lang="ts">
import { shallowRef } from 'vue';

const features = shallowRef({
  threePiece: [
    'Vocals x 2, Guitar & Cajon',
    'All equipment provided',
    '2 hour set',
    'Requests taken in advance',
  ],
  fivePiece: [
    'Vocals x 2, Guitar & Cajon, Bass & Sax',
    'All equipment provided',
    '2 hour set',
    'Requests taken in advance',
  ],
});
// Should be an even number to look nice
const questions = shallowRef([
  {
    question: 'Question Here',
    answer: 'Answer Here',
  },
  {
    question: 'Question Here',
    answer: 'Answer Here',
  },
  {
    question: 'Question Here',
    answer: 'Answer Here',
  },
  {
    question: 'Question Here',
    answer: 'Answer Here',
  },
  {
    question: 'Question Here',
    answer: 'Answer Here',
  },
  {
    question: 'Question Here',
    answer: 'Answer Here',
  },
]);
const currentBilling = shallowRef('threePiece');
const price = shallowRef({
  threePiece: 650,
  fivePiece: 1350,
});
</script>

<template>
  <div class="pt-12">
    <div class="bg-gray-100">
      <div class="pt-12 sm:pt-16 lg:pt-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <h1
              class="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl font-display"
            >
              Plans &amp; Pricing
            </h1>
            <p class="mt-4 text-xl text-gray-600">
              These are our most standard and popular setups.
              <br />
              <br />
              However, our band is scaleable so we sometimes add extra guitar,
              saxophone or bass!
              <br />
              Don't hesitate to
              <a href="mailto:lagroovetrio@gmail.com" class="text-indigo-600"
                >contact us first with a custom requirement</a
              >
              and we will do our best to meet your needs.
            </p>
          </div>
        </div>
      </div>
      <div
        class="relative self-center px-4 sm:px-6 lg:px-8 mt-6 bg-gray-100 rounded-lg p-0.5 flex justify-center sm:mt-8"
      >
        <button
          @click="currentBilling = 'threePiece'"
          type="button"
          :class="
            currentBilling === 'threePiece'
              ? 'border-gray-200 shadow-sm bg-white text-gray-900 underline'
              : 'border-transparent text-gray-700'
          "
          class="relative w-1/2 rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8"
        >
          3 piece band
        </button>
        <button
          @click="currentBilling = 'fivePiece'"
          type="button"
          :class="
            currentBilling === 'fivePiece'
              ? 'border-gray-200 shadow-sm bg-white text-gray-900 underline'
              : 'border-transparent text-gray-700'
          "
          class="ml-0.5 relative w-1/2 border rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-8"
        >
          5 piece band
        </button>
      </div>
      <div class="mt-2 bg-white pb-16 sm:mt-4 sm:pb-20 lg:pb-28">
        <div class="relative">
          <div class="absolute inset-0 h-1/2 bg-gray-100"></div>
          <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              class="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex"
            >
              <div class="flex-1 bg-white px-6 py-8 lg:p-12">
                <h3 class="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  {{
                    currentBilling === 'threePiece'
                      ? '3 Piece Band'
                      : '5 Piece Band'
                  }}
                </h3>
                <p class="mt-6 text-base text-gray-500">
                  Mail us to discuss your event today.
                </p>
                <div class="mt-8">
                  <div class="flex items-center">
                    <h4
                      class="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-indigo-600"
                    >
                      What's included
                    </h4>
                    <div class="flex-1 border-t-2 border-gray-200"></div>
                  </div>
                  <ul
                    role="list"
                    class="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5"
                  >
                    <li
                      v-for="feature in features[currentBilling]"
                      :key="feature"
                      class="flex items-start lg:col-span-1"
                    >
                      <div class="flex-shrink-0">
                        <!-- Heroicon name: solid/check-circle -->
                        <svg
                          class="h-5 w-5 text-green-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                      <p class="ml-3 text-sm text-gray-700">
                        {{ feature }}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                class="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12"
              >
                <p class="text-lg leading-6 font-medium text-gray-900">
                  2 hours
                </p>
                <div
                  class="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900"
                >
                  <span>€{{ price[currentBilling] }}</span>
                  <span class="ml-3 text-xl font-medium text-gray-500">
                    EUR
                  </span>
                </div>
                <!-- <p class="mt-4 text-sm font-medium text-gray-500">
                Or £2/month if paid threePiece
              </p> -->
                <div class="mt-6">
                  <div class="rounded-md shadow">
                    <a
                      href="mailto:lagroovetrio@gmail.com"
                      class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900"
                    >
                      Inquire now
                    </a>
                  </div>
                </div>
                <div class="mt-4 text-sm font-medium text-gray-900">
                  Or send us a
                  <a
                    href="mailto:lagroovetrio@gmail.com"
                    class="text-indigo-600"
                    >custom request.</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-900">
      <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div class="lg:max-w-2xl lg:mx-auto lg:text-center">
          <h2
            class="text-3xl font-bold tracking-tight text-white sm:text-4xl font-display"
          >
            Frequently asked questions
          </h2>
          <p class="mt-4 text-gray-400">
            If your question isn't answered here, please
            <a href="mailto:lagroovetrio@gmail.com" class="underline"
              >contact us.</a
            >
          </p>
        </div>
        <div class="mt-20">
          <dl
            class="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10"
          >
            <div v-for="{ question, answer } in questions" :key="question">
              <dt class="font-semibold text-white">
                {{ question }}
              </dt>
              <dd class="mt-3 text-gray-400">
                {{ answer }}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>
