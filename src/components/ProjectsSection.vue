<script setup lang="ts">
import Container from './BaseContainer.vue'

type ProjectFeature = string | { title: string; description: string }
type Project = {
  title: string
  description: string
  notable_features: ProjectFeature[]
  tech: string[]
  image: string
  github_url?: string
  project_url?: string
}

const projects: Project[] = [
  {
    title: '📋 ToDo Web App',
    description:
      'A simple ToDo web app to manage your tasks with a twist: it can be a little sarcastic at times.',
    notable_features: ['Customizable level of sarcasm', 'Fun reminders'],
    tech: [
      'Ruby + Rails',
      'PostgreSQL',
      'Vite + Vue 3',
      'Tailwind CSS',
      'SPA',
      'AWS',
    ],
    image: '/images/under_construction_16_9.png',
    github_url: 'https://github.com/axelkerksiek/todo-app',
    project_url: 'https://todo-app.axelkerksiek.com',
  },
  {
    title: '🕹️ 2D Arcade Game',
    description:
      'A 2D space shooter game inspired by Stargate: SG-1. Fight your way through waves of enemies unlocking upgrades as you progress. ',
    notable_features: [
      'Mulitple levels',
      'RPG mechanics',
      'Pixel art and music',
    ],
    tech: ['PICO-8', 'Lua'],
    image: '/images/under_construction_16_9.png',
    github_url: 'https://github.com/axelkerksiek/stargate-game',
    project_url: 'https://stargate-game.axelkerksiek.com',
  },
  {
    title: '🧑‍💻 Personal Portfolio',
    description:
      'A place for others to see some of the coding projects I have been working on.',
    notable_features: [
      'Light/Dark mode',
      'Customizable styling',
      'Responsive design',
    ],
    tech: ['Vite + Vue 3', 'Tailwind CSS', 'SSG', 'AWS'],
    image: '/images/axel_portfolio_light_16_9.png',
    github_url: 'https://github.com/axelkerksiek/portfolio-web-site',
  },
]
</script>

<template>
  <section id="projects" class="bg-bg-dark scroll-mt-13 pt-10 pb-4">
    <Container>
      <div class="flex flex-col gap-8">
        <div
          class="bg-primary text-text-muted dark:text-text w-full rounded py-1 text-center"
        >
          <span class="block text-sm tracking-[0.55em] uppercase">
            Personal Projects
          </span>
        </div>

        <div class="flex flex-col gap-8">
          <article
            v-for="project in projects"
            :key="project.title"
            class="bg-bg border-highlight dark:border-border-muted flex w-full flex-col gap-8 rounded-2xl border p-6 shadow-md lg:flex-row"
          >
            <div
              class="bg-bg flex items-center justify-center overflow-hidden rounded-2xl lg:w-1/2"
            >
              <img
                :src="project.image"
                :alt="`${project.title} preview`"
                class="h-full w-full object-cover object-top"
              />
            </div>

            <div class="flex w-full flex-col lg:w-1/2">
              <div class="flex flex-1 flex-col gap-4">
                <h3
                  class="text-text mt-0 text-center text-2xl font-semibold md:text-left"
                >
                  {{ project.title }}
                </h3>

                <p class="text-text-muted mt-0">
                  {{ project.description }}
                </p>

                <div
                  v-if="
                    project.notable_features && project.notable_features.length
                  "
                  class="flex flex-col gap-3"
                >
                  <h4
                    class="text-text-muted text-sm font-semibold tracking-[0.3em] uppercase"
                  >
                    Notable Features
                  </h4>

                  <ul
                    class="text-text-muted list-inside list-disc space-y-1 pl-3"
                  >
                    <li
                      v-for="feature in project.notable_features"
                      :key="
                        typeof feature === 'string' ? feature : feature.title
                      "
                    >
                      <template v-if="typeof feature === 'string'">
                        {{ feature }}
                      </template>
                      <template v-else>
                        <span class="text-text font-semibold">
                          {{ feature.title }}:
                        </span>
                        <span class="ml-1">
                          {{ feature.description }}
                        </span>
                      </template>
                    </li>
                  </ul>
                </div>

                <div
                  v-if="project.tech && project.tech.length"
                  class="flex flex-col gap-2"
                >
                  <h4
                    class="text-text-muted py-2 text-sm font-semibold tracking-[0.3em] uppercase"
                  >
                    Tech Stack
                  </h4>
                  <ul
                    class="text-primary flex flex-wrap gap-2 text-sm font-semibold"
                  >
                    <li
                      v-for="item in project.tech"
                      :key="item"
                      class="bg-primary/10 border-bg-primary rounded-full border px-3 py-1"
                    >
                      {{ item }}
                    </li>
                  </ul>
                </div>
              </div>

              <div class="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  v-if="project.project_url"
                  :href="project.project_url"
                  target="_blank"
                  rel="noopener"
                  class="bg-primary text-text-white inline-flex flex-1 items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold shadow-md hover:scale-102 hover:shadow-lg"
                >
                  View Project
                  <FontAwesomeIcon
                    :icon="['fas', 'arrow-up-right-from-square']"
                    class="text-sm"
                  />
                </a>
                <a
                  v-if="project.github_url"
                  :href="project.github_url"
                  target="_blank"
                  rel="noopener"
                  :class="[
                    'inline-flex flex-1 items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold hover:scale-102',
                    project.project_url
                      ? 'bg-bg-primary border-primary hover:bg-primary/10 text-primary border-2'
                      : 'bg-primary text-text-white shadow-md hover:shadow-lg',
                  ]"
                >
                  View Code
                  <FontAwesomeIcon
                    :icon="['fas', 'arrow-up-right-from-square']"
                    class="text-sm"
                  />
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </Container>
  </section>
</template>
