<template>
  <div class="container mx-auto">
    <main class="md:m-12 shadow-2xl print:shadow-none font-light text-tiny">
      <div class="flex flex-col lg:flex-row-reverse">
        <sidebar-profile />
        <div class="content w-full p-8 sm:p-12 print:pt-0 print:pb-0">
          <profile-section />
          <hr class="mt-8 mb-12" />
          <expirience-section />
        </div>
      </div>
      <div class="content w-full p-8 sm:p-12 print:pt-0">
        <projects-section class="print:hidden"/>
        <hr class="mt-8 mb-12" />
        <skills-section />
      </div>
    </main>
  </div>
</template>

<script setup>
import SidebarProfile from './sections/SidebarProfile.vue'
import ProfileSection from "./sections/ProfileSection.vue";
import ExpirienceSection from "./sections/ExpirienceSection.vue";
import ProjectsSection from "./sections/ProjectsSection.vue";
import SkillsSection from "./sections/SkillsSection.vue";
</script>
