<template>
  <template v-if="link">
    <a
      :href="link"
      target="_blank'"
      class="hover:underline"
    ><slot /></a>
  </template>
  <template v-else>
    <a class="hover:underline"><slot /></a>
  </template>
</template>

<script setup>
defineProps({
  link: {
    type: String,
  }
})
</script>
