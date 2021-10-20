<template>
  <div class= "overflow-hidden shadow-lg transition duration-300 ease-in-out hover:shadow-2xl rounded-lg p-4">
    <div class="text-2xl font-medium pt-2">
      <linked-title :link="link">{{ title }}</linked-title>
    </div>
    <p class="text-gray-800 text-md font-medium mt-4">
      {{ about }}
    </p>
    <img v-if="image" :alt="title" :src="image" class="max-h-80 w-full object-cover mt-0"/>
    <p class="text-gray-600 font-light text-lg mt-0">
      {{ description }}
    </p>
    <div class="flex flex-wrap justify-starts items-center text-xs text-white font-medium">
      <span
        class="m-1 ml-0 mr-2 px-2 py-1 rounded bg-indigo-400"
        v-for="tag in tags" :key="tag"
      >{{ tag }}</span>
    </div>
  </div>
</template>

<script setup>
import LinkedTitle from "./LinkedTitle.vue";

defineProps({
  title: {
    type: String,
    default: '',
  },
  about: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  image: {
    type: String,
    default: '',
  },
  link: {
    type: String,
    default: '',
  },
  tags: {
    type: Array,
    default() {
      return [];
    },
  },
})
</script>
