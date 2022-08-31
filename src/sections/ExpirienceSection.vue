<template>
  <section class="prose">
    <h2 class="section-headline mb-10">Experience</h2>

    <experience-description
      :image="companyPicture.cryptoCompany"
    >
      <template v-slot:title>Crypto project</template>
      <template v-slot:position>Lead frontend</template>
      <template v-slot:description>
        <div>No description</div>
      </template>
      <template v-slot:period>Nov 2021 - now</template>
    </experience-description>

    <experience-description
      :image="companyPicture.upworkCompany"
    >
      <template v-slot:title>Freelance</template>
      <template v-slot:position>Entrepreneur, developer</template>
      <template v-slot:description>
        <div class="mb-1">After switching to freelance, I discovered a lot of skills. Searching for projects, communicating with customers, assigning roles, estimating deadlines, management, planning, reporting. In addition, I developed software products, learned more about the laws to become an entrepreneur.</div>
        <div>Therefore, there are no insurmountable issues for me, since I have already understood that everything is resolvable.</div>
      </template>
      <template v-slot:period>Jan 2021 - now</template>
    </experience-description>

    <experience-description
      link="https://www.tlustyco.com/"
      :image="companyPicture.tlustycoCompany"
    >
      <template v-slot:title>Tlusty & Co. s.r.o.</template>
      <template v-slot:position>Lead frontend, UX designer</template>
      <template v-slot:description>
        <div class="mb-1">I created a website builder to construct web pages that use data from the company's internal API. The builder allows users creating tables, questionnaires, forms, CRUD elements with advanced functionality. Much work was done on the architecture design created by means of design patterns.</div>
        <div class="mb-1">Also, a PWA was developed, it allows company employees to track time and manage the amount of accomplished work.</div>
        <div>Within the above builder, the feature to create polls was also developed. Therefore, employees can create polls in a couple of clicks using a clear interface.</div>
      </template>
      <template v-slot:period>Nov 2019 - Nov 2021</template>
    </experience-description>

    <experience-description
      link="https://www.vendway.ru/"
      :image="companyPicture.vendwayCompany"
    >
      <template v-slot:title>VendWay</template>
      <template v-slot:position>Frontend developer</template>
      <template v-slot:description>
        <div class="mb-1">I built the client part for the vending machine that allows users to select desired products via the touchscreen and buy them through the payment terminal.</div>
        <div>The administrative dashboard was also developed to manage the state of the vending machine, to view the balance, the total amount of purchases and other important indicators for the business.</div>
      </template>
      <template v-slot:period>May 2019 - Nov 2019</template>
    </experience-description>

    <experience-description
      link="https://wis.software/"
      :image="companyPicture.wisCompany"
    >
      <template v-slot:title>WIS Software</template>
      <template v-slot:position>Frontend developer</template>
      <template v-slot:description>I worked on multiple projects as the company was focused on outsourcing development. I had experience with Rest API, websockets, graphQl, apollo. I learned how to create trigonometric shapes on canvas + d3.js. Also, I built the client side to manage streaming services.</template>
      <template v-slot:period>Nov 2018 - May 2019</template>
    </experience-description>

    <experience-description
      link="https://www.centrinvest.ru/"
      :image="companyPicture.centerCompany"
    >
      <template v-slot:title>PJSC CB "Center-invest"</template>
      <template v-slot:position>HTML developer</template>
      <template v-slot:description>I made elements, pages, websites. I created a design system for the company's internal projects from scratch. I added responsive styles for a large-scale project with fixed width styles.</template>
      <template v-slot:period>May 2017 – Nov 2018</template>
    </experience-description>
  </section>
</template>

<script setup>
import ExperienceDescription from "../components/ExperienceDescription.vue";
import usePicture from "../composables/usePicture";

const companyPicture = usePicture();
</script>
