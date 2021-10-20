<template>
  <div
    id="sidebar"
    class="w-full lg:max-w-md p-8 bg-gradient-to-b from-indigo-300 via-indigo-200 to-white"
  >
    <div class="px-2 mb-12">
      <img
        src="../assets/profile-photo.jpg"
        alt="Profile Picture"
        class="rounded-full w-48 mx-auto mb-2"
      />
      <h1 class="text-center text-3xl font-semibold mb-2">Starikov Vladislav</h1>
      <h2 class="text-center text-xl font-light">Frontend Developer</h2>
    </div>

    <div class="font-light text-lg px-2 mb-12">
      <h2 class="text-xl font-semibold mb-4">Contact</h2>
      <div class="flex items-center my-3">
        <my-icon :icon="mail" class="mr-4" />
        <a href="mailto:vlad.starikov.88@gmail.com">vlad.starikov.88@gmail.com</a>
      </div>
      <div class="flex items-center my-3">
        <my-icon :icon="telegramm" class="mr-4" />
        <a href="https://t.me/vladstarikov" target="_blank">@vladstarikov</a>
      </div>
      <div class="flex items-center my-3">
        <my-icon :icon="location" class="mr-4" />
        <div>
          <p>Russia, Rostov-on-Don</p>
        </div>
      </div>
    </div>

    <div class="font-light text-lg px-2 mb-12">
      <h2 class="text-xl font-semibold mb-4">Social</h2>
      <div class="flex items-center my-3">
        <my-icon :icon="linkedin" class="mr-4" />
        <a href="https://www.linkedin.com/in/vladislav-starikov-05460152/" target="_blank">Linkedin</a>
      </div>
      <div class="flex items-center my-3">
        <my-icon :icon="github" class="mr-4" />
        <a href="https://github.com/vladstarikov88" target="_blank">Github</a>
      </div>
      <div class="flex items-center my-3">
        <my-icon :icon="upwork" class="mr-4" />
        <a href="https://www.upwork.com/freelancers/~01b58b2043286ccf03" target="_blank">Upwork</a>
      </div>
    </div>

    <div class="font-light text-lg px-2 mb-12">
      <h2 class="text-xl font-semibold mb-4">Skills & Tools</h2>
      <ul class="list-none">
        <!-- <li>JavaScript</li>
        <li>Web API</li>
        <li>Vue (2.x, 3.x)</li>
        <li>Nuxt</li>
        <li>Typescript</li>
        <li>Node</li>
        <li>GraphQl</li>
        <li>Canvas</li>
        <li>SCSS</li>
        <li>Databases</li> -->
        <li>JavaScript</li>
        <li>Vue (2.x, 3.x)</li>
        <li>Typescript</li>
        <li>Node</li>
      </ul>
    </div>

    <div class="font-light text-lg px-2 mb-12">
      <h2 class="text-xl font-semibold mb-4">Education</h2>
      <h3 class="font-semibold">Master of Computer Science</h3>
      <p>Don State Technical University</p>
      <small>2018-2020</small>
      <h3 class="font-semibold">Bachelor of Computer Science</h3>
      <p>Don State Technical University</p>
      <small>2014-2018</small>
    </div>

    <div class="font-light text-lg px-2 mb-12">
      <h2 class="text-xl font-semibold mb-4">Languages</h2>
      <h3>Russian</h3>
      <h3>English</h3>
      <h3>Czech</h3>
    </div>
  </div>
</template>

<script setup>
import MyIcon from "../components/MyIcon.vue";
import useIcons from '../composables/useIcons';

const { mail, location, telegramm, linkedin, github, upwork } = useIcons();

</script>

<style scoped lang="scss">
</style>
