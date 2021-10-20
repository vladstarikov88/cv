<template>
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="home"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    :viewBox="viewBox"
    class="inline h-5 w-5"
  >
    <path fill="currentColor" :d="svgPath"/>
  </svg>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  icon: {
    type: Object,
    default() {
      return {};
    },
  }
})

const viewBox = computed(() => `0 0 ${props.icon.icon[0]} ${props.icon.icon[1]}`)
const svgPath = computed(() => props.icon.icon[4])
</script>
