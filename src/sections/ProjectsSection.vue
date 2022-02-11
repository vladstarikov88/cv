<template>
  <div class="prose">
    <h2 class="section-headline">Projects</h2>
    <div class="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-4">
      <project-card
        title="Marsbase"
        link="https://marsbase.io/"
        about="Platform for trade and lending"
        description="For the project, I built the architecture, developed the components and set up the logic of user interaction with the platform"
        :image="productPicture.marsbase"
        :tags="['Vue.js', 'Nuxt.js', 'd3', 'REST', 'Jest', 'Sass']"
      />
      <project-card
        title="Boxing Federation of Russia"
        link="http://rusboxing.ru/"
        about="Website for a government organization"
        description="I designed front architecture, developed components, integrated pages, distributed tasks"
        :image="productPicture.boxing"
        :tags="['Vue.js', 'Nuxt.js', 'Bootstrap', 'REST', 'Jest']"
      />
      <project-card
        title="Wecare"
        link=""
        about="A service that provides an opportunity to provide assistance and submit requests for assistance"
        description="I have integrated login and registration forms, personal account, and other basic pages and components. Set up validation forms, communication with the backend"
        :image="productPicture.wecare"
        :tags="['Vue.js', 'Vuex', 'Vuetify', 'REST', 'VeeValidate']"
      />
      <project-card
        title="Loan Calculator"
        link="https://www.centrinvest.ru/ru/fiz/kreditovanie/calc"
        about="Loan calculator for the selection of the most profitable loan program"
        description="I performed markup, built an interface for advance payment type and sum identification. Data coming from backend via Axios."
        :image="productPicture.loan"
        :tags="['Vue.js', 'Vuex', 'Axios', 'REST', 'Bootstrap', 'Webpack']"
      />
      <project-card
        title="Reports application"
        about="Time and job management PWA"
        description="The application was developed so that after completing each microtask, the employee can fill in his report by scanning the QR code of the microtask."
        link="https://m.brasnarstvitlusty.cz/"
        :image="productPicture.reports"
        :tags="['Vue.js', 'Nuxt.js', 'PWA', 'REST', 'Vuetify', 'QR-scanner']"
      />
      <project-card
        title="Cranks"
        about="Service for managing the status of bike parts"
        description="The customer only had an idea. Therefore, I had to design a product concept from scratch according to the customer's requirements. I also worked on UX, architecture, client-side logic. Unit testing has also been added."
        link="https://cranks.io/"
        :image="productPicture.cranks"
        :tags="['UX', 'Conception', 'Vue.js', 'Composition api', 'Vuetify', 'Typescript', 'Sass', 'REST', 'Jest']"
      />
      <project-card
        title="Miuz"
        about="E-commerce project"
        :image="productPicture.miuz"
        link="https://miuz.ru/"
        :tags="['Vue.js', 'Vue-storefront', 'GraphQL']"
      />
      <project-card
        title="Bagit"
        about="International delivery by travelers"
        :image="productPicture.bagit"
        link="https://bagit.xin/"
        :tags="['Vue.js', 'REST']"
      />
      <project-card
        title="VendWay"
        about="CRM system for managing the state of vending machines"
        :image="productPicture.vendway"
        link="https://vendway.ru/"
        :tags="['Vue.js', 'Vuex', 'Vue router', 'Vuetify', 'REST']"
      />
      <project-card
        title="Terminal"
        about="Website builder that allows to create the pages the user needs in a few clicks"
        :image="productPicture.tlustyco"
        link="https://www.tlustyco.com/"
        :tags="['Vue.js', 'Vuex', 'Vue router', 'Vuetify', 'REST']"
      />
      <project-card
        title="Wally"
        about="Service for the exchange of anonymous messages"
        :image="productPicture.wally"
        :tags="['Vue.js', 'HTML', 'Scss', 'pixel repfect', 'responsive', 'Webpack']"
      />
      <project-card
        title="Glove shop"
        about="Website about the company-manufacturer of gloves"
        :image="productPicture.gloves"
        :tags="['Vue.js', 'HTML', 'Scss', 'Webpack']"
      />
      <!--
        Tetris-like game
        lg form login (скрины в переписке со сльвом)
        вендинговые автоматы
        фрактальная шиза
      -->
    </div>
  </div>
</template>

<script setup>
import ProjectCard from "../components/ProjectCard.vue";
import usePicture from '../composables/usePicture';

const productPicture = usePicture();
</script>
