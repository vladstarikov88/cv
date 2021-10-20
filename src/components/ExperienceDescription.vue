<template>
  <div class="mb-8">
    <div class="mb-2">
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
});
</script>