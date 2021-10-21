<template>
  <div
    class="w-full lg:max-w-md p-6 sm:p-10
    bg-gradient-to-b from-indigo-300 via-indigo-200 to-white"
  >
    <div class="px-2 mb-12">
      <div class="flex flex-1 flex-col print:flex-row gap-8">
        <img
          :src="profilePhoto"
          alt="Profile Picture"
          class="rounded-full w-48 mx-0 mx-auto mb-2 print:mx-0 print:w-32"
        />
        <div class="flex flex-col justify-center items-center print:items-start">
          <h1 class="text-center text-3xl font-semibold mb-2">Starikov Vladislav</h1>
          <h2 class="text-center text-xl font-light">Frontend Developer</h2>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 print:grid-cols-2 gap-0">

      <div class="font-light text-lg px-2 mb-8">
        <h2 class="text-xl font-semibold mb-3">Contact</h2>
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

      <div class="print:hidden font-light text-lg px-2 mb-8">
        <h2 class="text-xl font-semibold mb-3">Social</h2>
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

      <div class="font-light text-lg px-2 mb-8">
        <h2 class="text-xl font-semibold mb-3">Languages</h2>
        <h3>Russian</h3>
        <h3>English</h3>
        <h3>Czech</h3>
      </div>

      <div class="font-light text-lg px-2 mb-8 print:col-start-2">
        <h2 class="text-xl font-semibold mb-3">Basic skills</h2>
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
          <li>Nuxt</li>
          <li>GraphQl</li>
        </ul>
      </div>

      <div class="font-light text-lg px-2 mb-8 print:col-start-1 print:row-start-2">
        <h2 class="text-xl font-semibold mb-3">Education</h2>
        <h3 class="font-semibold">M.Eng. Information Security</h3>
        <p>Don State Technical University</p>
        <small>2018-2020</small>
        <h3 class="font-semibold">B.Sc. Computer Science</h3>
        <p>Don State Technical University</p>
        <small>2014-2018</small>
      </div>
    </div>
  </div>
</template>

<script setup>
import profilePhoto from '/src/assets/profile-photo.jpg'

import MyIcon from "../components/MyIcon.vue";
import useIcons from '../composables/useIcons';

const { mail, location, telegramm, linkedin, github, upwork } = useIcons();

</script>
