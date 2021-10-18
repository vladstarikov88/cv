<template>
  <div class="container mx-auto max-w-screen-xl">
    <main
      id="wrapper"
      class="flex flex-col sm:flex-row-reverse sm:m-12 shadow-2xl"
    >
      <sidebar-profile />
      <div class="content w-full p-12">
        <div id="profile" class="prose">
          <h2 class="section-headline">Profile</h2>
          <p>
            I'm a self-taught web developer focusing on the core web
            fundamentals - HTML, CSS and JS. I'm experienced in frontend
            frameworks like Vue and React and static site generators like
            Next.js and Eleventy. I write SCSS or use CSS frameworks like
            TailwindCSS, Bootstrap or Bulma to speed up styling of my
            projects.
          </p>
          <p>
            I am highly motivated in expanding my horizons day by day for
            better performance, testing and user experience.
          </p>
        </div>
        <hr class="mt-8 mb-12" />
        <div id="experience" class="prose">
          <h2 class="section-headline">Experience</h2>
          <div>
            <h3>Example Inc</h3>
            <section class="mb-6">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                Jul.&nbsp;2019:
              </div>
              <div class="lg:inline-block lg:w-8/12 w-full">
                Fullstack Developer
              </div>
            </section>
            <section class="mb-6">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                Task:
              </div>
              <div class="lg:inline-block lg:w-8/12 w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </div>
            </section>
            <section class="mb-6">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                Description:
              </div>
              <div class="lg:inline-block lg:w-8/12 w-full">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </div>
            </section>
            <section class="mb-6">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                Tools:
              </div>
              <div class="lg:inline-block lg:w-8/12 w-full">
                <span class="rounded-xl bg-gray-300 px-3">Vue</span>
                <span class="rounded-xl bg-gray-300 px-3">Vuex</span>
                <span class="rounded-xl bg-gray-300 px-3">Bootstrap</span>
                <span class="rounded-xl bg-gray-300 px-3">Docker</span>
                <span class="rounded-xl bg-gray-300 px-3">Git</span>
                <span class="rounded-xl bg-gray-300 px-3">Bitbucket</span>
                <span class="rounded-xl bg-gray-300 px-3">Jira</span>
              </div>
            </section>
          </div>
        </div>
        <hr class="mt-8 mb-12" />
        <div id="projects" class="prose">
          <h2 class="section-headline">Projects</h2>
          <div class="mb-16">
            <h3 id="chrisko-headline">Chrisko.io</h3>
            <section class="mb-6">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                Personal blog:
              </div>
              <div class="lg:inline-block lg:w-8/12 w-full">
                My blog is the center of my online presence. Here, I share
                posts about what I've learnt, tutorials and my thoughts on web
                development in general.
              </div>
            </section>
            <section class="mb-6">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                Deployed to:
              </div>
              <div class="lg:inline-block lg:w-8/12 w-full">
                <a
                  href="https://chrisko.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  >chrisko.io</a
                >
              </div>
            </section>
            <section class="mb-6">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                Code on:
              </div>
              <div class="lg:inline-block lg:w-8/12 w-full">
                <a
                  href="https://github.com/christiankozalla/nextjs-blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  >GitHub/nextjs-blog</a
                >
              </div>
            </section>
            <section class="mb-6">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                Features:
              </div>
              <div class="lg:inline-block lg:w-8/12 w-full">
                <ul>
                  <li>Static generation</li>
                  <li>Blog content written in Markdown</li>
                  <li>Counter for pageviews and likes</li>
                  <li>My latest tweets</li>
                  <li>Featured images made with Inkscape</li>
                  <li>SEO</li>
                </ul>
              </div>
            </section>

            <section class="mb-6">
              <div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                Built with:
              </div>
              <div class="lg:inline-block lg:w-8/12 w-full">
                <span class="rounded-xl bg-gray-300 px-3">Next.js</span>
                <span class="rounded-xl bg-gray-300 px-3">CSS</span>
                <span class="rounded-xl bg-gray-300 px-3">styled-jsx</span>
                <span class="rounded-xl bg-gray-300 px-3">DynamoDB</span>
                <span class="rounded-xl bg-gray-300 px-3">Vercel</span>
              </div>
            </section>
          </div>
        </div>
        <hr class="mt-8 mb-12" />
        <div id="projects" class="prose">
          <h2 class="section-headline">Expand my skills</h2>
          <div class="mb-16">
            <h4 id="expand-knowledge-headline">
              I'd like to expand my skills and knowledge in several fields
            </h4>
            <ul>
              <li>TypeScript</li>
              <li>Testing, e.g. with Mocha, Chai, Jest</li>
              <li>Web Components, e.g. with StencilJS, LitElement</li>
              <li>Prototyping and Wireframing, e.g. with Figma, Adobe XD</li>
              <li>Scalable Vector Graphics</li>
              <li>Databases</li>
              <li>Mobile development</li>
              <li>
                Backend development, e.g. learn additional language like Go,
                Python, PHP, Ruby, Java, Rust
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import SidebarProfile from './components/SidebarProfile.vue'
</script>
