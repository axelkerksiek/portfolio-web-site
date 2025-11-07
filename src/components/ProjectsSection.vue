<script setup lang="ts">
const projects = [
  {
    title: 'Development Portfolio',
    description:
      'Component library built with Vue 3 and Tailwind, featuring accessible, themeable UI patterns.',
    tech: ['Vue 3', 'Tailwind CSS', 'AWS'],
    image: '/images/sample_web_app.jpeg',
    github: 'https://github.com/yourname/aurora-ui-kit',
    demo: 'https://aurora.yourdomain.com'
  },
  {
    title: 'Growth Analytics Dashboard',
    description:
      'Interactive dashboards for growth teams with customizable funnels, cohort analysis, and live KPI tracking.',
    tech: ['Nuxt', 'D3.js', 'Supabase'],
    image: '/images/sample_web_app.jpeg',
    github: 'https://github.com/yourname/growth-analytics',
    demo: 'https://analytics.yourdomain.com'
  },
  {
    title: 'Voyager Travel Planner',
    description:
      'Trip planning companion app with smart itinerary building, budget tracking, and offline sync.',
    tech: ['Vite', 'TypeScript', 'Firebase'],
    image: '/images/development_portfolio.png',
    github: 'https://github.com/yourname/voyager-travel',
    demo: 'https://voyager.yourdomain.com'
  }
]
</script>

<template>
  <section
    id="projects"
    class="px-26 py-10 bg-light-primary dark:bg-dark-primary scroll-mt-10"
  >
  <div class="flex flex-col gap-10">
      <div class="w-full rounded bg-[var(--color-primary)] text-white text-center py-1">
        <span class="block text-sm tracking-[0.55em] uppercase">
          Personal Projects
        </span>
      </div>

      <div class="flex flex-col gap-12">
        <article
          v-for="project in projects"
          :key="project.title"
          class="w-full flex flex-col lg:flex-row gap-8"
        >
          <div class="lg:w-1/2 w-full h-64 lg:h-auto">
            <img
              :src="project.image"
              :alt="`${project.title} preview`"
              class="w-full h-full object-cover rounded-2xl"
            />
          </div>

          <div class="lg:w-1/2 w-full flex flex-col">
            <div class="flex-1 flex flex-col gap-4">
              <h3 class="text-2xl font-semibold text-slate-900 dark:text-white">
                {{ project.title }}
              </h3>
              <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
                {{ project.description }}
              </p>
              <ul class="flex flex-wrap gap-2 text-sm text-emerald-600 dark:text-emerald-300 font-medium">
                <li
                  v-for="tech in project.tech"
                  :key="tech"
                  class="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30"
                >
                  {{ tech }}
                </li>
              </ul>
            </div>

            <div class="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
              <a
                :href="project.github"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-300 hover:underline"
              >
                View Code
                <span aria-hidden="true">↗</span>
              </a>
              <a
                :href="project.demo"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-300 hover:underline"
              >
                Visit Project
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>