<template>
  <div class="mb-10">
    <div class="mb-2">
      <img
        class="inline rounded-full w-8 h-8 relative bottom-1 px-0 bg-contain bg-center mr-2 mb-0 mt-0"
        :src="image"
      >
      <span class="text-xl font-bold">
        <linked-title :link="link">
          <slot name="title" />
        </linked-title>
        | 
      </span>
      <span class="text-base font-normal mb-3">
        <slot name="position" />
      </span>
    </div>
    <div class="lg:inline-block w-full mb-2">
      <slot name="description" />
    </div>
    <div class="text-base text-gray-500 italic mb-2">
      <slot name="period" />
    </div>
  </div>
</template>

<script setup>
import LinkedTitle from "./LinkedTitle.vue";

defineProps({
  link: {
    type: String,
    default: '',
  },
  image: {
    type: String,
    default: '',
  },
});
</script>