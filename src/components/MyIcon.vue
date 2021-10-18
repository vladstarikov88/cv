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
import { computed, toRefs } from '@vue/reactivity'

const props = defineProps({
  icon: {
    type: Object,
    default() {
      return {};
    },
  }
})

const { icon } = toRefs(props);

const viewBox = computed(() => `0 0 ${icon.value.icon[0]} ${icon.value.icon[1]}`)
const svgPath = computed(() => icon.value.icon[4])
</script>
