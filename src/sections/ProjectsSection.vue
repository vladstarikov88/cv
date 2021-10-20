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
      />
      <project-card
        title="Boxing Federation of Russia"
        link="http://rusboxing.ru/"
        about="Web-site"
        description="I designed front architecture, developed components, integrated pages"
        :image="productPicture.boxing"
        :tags="['Vue.js', 'Nuxt.js', 'Bootstrap', 'Jest']"
      />
      <project-card
        title="Wecare"
        link=""
        about="A service that provides an opportunity to provide assistance and submit requests for assistance"
        description="I have integrated login and registration forms, personal account, and other basic pages and components. Set up validation forms, communication with the backend"
        :image="productPicture.wecare"
        :tags="['Vue.js', 'Vuex', 'Vuetify', 'VeeValidate']"
      />
      <project-card
        title="Loan Calculator"
        link="https://www.centrinvest.ru/ru/fiz/kreditovanie/calc"
        about="Loan calculator for the selection of the most profitable loan program"
        description="I performed markup, built an interface for advance payment type and sum identification. Data coming from backend via Axios."
        :image="productPicture.loan"
        :tags="['Vue.js', 'Vuex', 'Axios', 'Bootstrap', 'Webpack']"
      />
      <project-card
        title="Reports application"
        link="https://m.brasnarstvitlusty.cz/"
        :image="productPicture.reports"
        about=""
      />
      <project-card
        title="Cranks"
        link="https://cranks.io/"
        :image="productPicture.cranks"
      />
      <project-card
        title="Miuz"
        :image="productPicture.miuz"
        link="https://miuz.ru/"
      />
      <project-card
        title="Bagit"
        :image="productPicture.bagit"
        link="https://bagit.xin/"
      />
      <project-card
        title="VendWay"
        :image="productPicture.vendway"
        link="https://vendway.ru/"
      />
      <project-card
        title="Terminal"
        :image="productPicture.tlustyco"
        link="https://www.tlustyco.com/"
      />
      <project-card
        title="Wally"
        :image="productPicture.wally"
      />
      <project-card
        title="Glove shop"
        :image="productPicture.gloves"
      />
    </div>
  </div>
</template>

<script setup>
import ProjectCard from "../components/ProjectCard.vue";
import usePicture from '../composables/usePicture';

const productPicture = usePicture();
</script>
