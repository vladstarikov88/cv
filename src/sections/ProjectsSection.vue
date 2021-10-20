<template>
  <div class="prose">
    <h2 class="section-headline">Projects</h2>
    <div class="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-4">
      <project-card
        title="Marsbase"
        link="https://marsbase.io/"
        about="Platform for trade and lending"
        description="For the project, I built the architecture, developed the components and set up the logic of user interaction with the platform"
        image="/src/assets/projects/marsbase.jpg"
        :tags="['Vue.js', 'Nuxt.js', 'd3', 'Jest', 'Sass']"
      />
      <project-card
        title="Boxing Federation of Russia"
        link="http://rusboxing.ru/"
        about="Web-site"
        description="I designed front architecture, developed components, integrated pages"
        image="/src/assets/projects/boxing.png"
        :tags="['Vue.js', 'Nuxt.js', 'Bootstrap', 'Jest']"
      />
      <project-card
        title="Wecare"
        link=""
        about="A service that provides an opportunity to provide assistance and submit requests for assistance"
        description="I have integrated login and registration forms, personal account, and other basic pages and components. Set up validation forms, communication with the backend"
        image="/src/assets/projects/wecare.jpg"
        :tags="['Vue.js', 'Vuex', 'Vuetify', 'VeeValidate']"
      />
      <project-card
        title="Loan Calculator"
        link="https://www.centrinvest.ru/ru/fiz/kreditovanie/calc"
        about="Loan calculator for the selection of the most profitable loan program"
        description="I performed markup, built an interface for advance payment type and sum identification. Data coming from backend via Axios."
        image="/src/assets/projects/loan-calc.jpg"
        :tags="['Vue.js', 'Vuex', 'Axios', 'Bootstrap', 'Webpack']"
      />
      <project-card
        title="Reports application"
        link="https://m.brasnarstvitlusty.cz/"
        image="/src/assets/projects/reports.jpg"
        about=""
      />
      <project-card
        title="Cranks"
        link="https://cranks.io/"
        image="/src/assets/projects/cranks.jpg"
      />
      <project-card
        title="Miuz"
        image="/src/assets/projects/miuz2.jpg"
        link="https://miuz.ru/"
      />
      <project-card
        title="Bagit"
        image="/src/assets/projects/bagit2.jpg"
        link="https://bagit.xin/"
      />
      <project-card
        title="VendWay"
        image="/src/assets/projects/vendway.jpg"
        link="https://vendway.ru/"
      />
      <project-card
        title="Terminal"
        image="/src/assets/projects/tlustyco.png"
        link="https://www.tlustyco.com/"
      />
      <project-card
        title="Wally"
        image="/src/assets/projects/wally.jpg"
      />
      <project-card
        title="Glove shop"
        image="/src/assets/projects/gloves.jpg"
      />
    </div>
  </div>
</template>

<script setup>
import ProjectCard from "../components/ProjectCard.vue";
</script>
