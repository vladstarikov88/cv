<template>
  <section class="prose">
    <h2 class="section-headline">Experience</h2>
    
    <experience-description link="https://www.tlustyco.com/">
      <template v-slot:title>Tlusty & Co. s.r.o.</template>
      <template v-slot:position>Lead frontend, UX designer</template>
      <template v-slot:description>I wrote a website builder to build web pages that use data from the company's internal api. The constructor allows you to create tables, questionnaires, forms, CRUD elements with advanced functionality. A lot of work has been done on architecture design using design patterns</template>
      <!-- <template v-slot:period>Nov 2019 - now</template> -->
      <template v-slot:period>Mar 2020 - now</template>
    </experience-description>


    <experience-description>
      <template v-slot:title>Freelance</template>
      <template v-slot:position>Entrepreneur, developer</template>
      <template v-slot:description>After switching to freelance, I discovered a lot of skills. Searching for projects, communicating with customers, assigning roles, estimating deadlines, management, planning, reporting. In addition, I developed software products, learned the laws</template>
      <template v-slot:period>Nov 2019 - now</template>
    </experience-description>

    <experience-description link="https://www.vendway.ru/">
      <template v-slot:title>VendWay</template>
      <template v-slot:position>Frontend developer</template>
      <template v-slot:description>
        <div class="mb-1">I wrote the client part for the vending machine, which allowed the user to select the desired position through the touchscreen on the screen and buy it through the payment terminal.</div>
        <div>The administrative dashboard was also written to manage the state of the vending machine to view the balances, the total amount of purchases and other important indicators for the business.</div>
      </template>
      <template v-slot:period>May 2019 - Nov 2019</template>
    </experience-description>

    <experience-description link="https://wis.software/">
      <template v-slot:title>WIS Software</template>
      <template v-slot:position>Frontend developer</template>
      <template v-slot:description>I have worked on multiple projects as the company was outsourcing development. Worked with Rest API, websockets, graphQl, apollo. Created trigonometric shapes on canvas + d3.js. Wrote the client side to manage streaming services.</template>
      <template v-slot:period>Nov 2018 - May 2019</template>
    </experience-description>

    <experience-description link="https://www.centrinvest.ru/">
      <template v-slot:title>PJSC CB "Center-invest"</template>
      <template v-slot:position>HTML developer</template>
      <template v-slot:description>I have made up elements, pages, sites. I created a design system for the company's internal projects from scratch. Added responsive styles for a large-scale project with fixed width styles. </template>
      <template v-slot:period>May 2017 – Nov 2018</template>
    </experience-description>
  </section>
</template>

<script setup>
import ExperienceDescription from "../components/ExperienceDescription.vue";
</script>
