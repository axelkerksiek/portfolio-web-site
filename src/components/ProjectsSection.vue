<script setup lang="ts">
  import Container from './Container.vue'
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
      title: 'ToDo Web App',
      description:
        'A simple ToDo web app to manage your tasks with a twist: it can be a little sarcastic at times.',
      notable_features: ['Customizable level of sarcasm', 'Fun reminders'],
      tech: ['Ruby + Rails', 'PostgreSQL', 'TypeScript', 'Vite + Vue 3', 'Tailwind CSS', 'SPA', 'AWS'],
      image: '/images/under_construction.png',
      github_url: 'https://github.com/axelkerksiek/todo-app',
      project_url: 'https://todo-app.axelkerksiek.com'
    },
    {
      title: '2D Arcade Game',
      description:
        'A 2D space shooter game inspired by Stargate: SG-1. Complete with pixel art and music, fight your way through waves of enemies unlocking upgrades as you progress.',
      notable_features: ['Mulitple levels', 'Pixel art and music', 'RPG mechanics'],
      tech: ['PICO-8', 'Lua'],
      image: '/images/under_construction.png',
      github_url: 'https://github.com/axelkerksiek/stargate-game',
      project_url: 'https://stargate-game.axelkerksiek.com'
    },
    {
      title: 'Personal Portfolio',
      description:
        'A place for others to see some of the coding projects I have been working on.',
      notable_features: ['Light/Dark mode', 'Customizable styling', 'Responsive design'],
      tech: ['TypeScript', 'Vite + Vue 3', 'Tailwind CSS', 'SSG', 'AWS'],
      image: '/images/development_portfolio.png',
      github_url: 'https://github.com/axelkerksiek/portfolio-web-site'
    }
  ]
</script>

<template>
  <section
    id="projects"
    class="pt-10 pb-4 bg-bg-dark scroll-mt-13"
  >
    <Container>
      <div class="flex flex-col gap-8">
        <div class="w-full rounded bg-primary text-text-muted dark:text-text text-center py-1">
          <span class="block text-sm tracking-[0.55em] uppercase">
            Personal Projects
          </span>
        </div>

        <div class="flex flex-col gap-8">
          <article
            v-for="project in projects"
            :key="project.title"
            class="h-auto lg:h-[464px] w-full flex flex-col lg:flex-row gap-8 rounded-2xl bg-bg p-6 border border-highlight dark:border-border-muted shadow-md"
          >
          <div class="lg:w-1/2 w-full h-full flex bg-bg items-center justify-center">
            <img
              :src="project.image"
              :alt="`${project.title} preview`"
              class="max-w-full max-h-full object-contain rounded-2xl"
            />
          </div>

            <div class="lg:w-1/2 w-full flex flex-col">
              <div class="flex-1 flex flex-col gap-4">
                <h3 class="text-2xl font-semibold text-text mt-0">
                  {{ project.title }}
                </h3>

                <p class="text-text-muted mt-0">
                  {{ project.description }}
                </p>

                <div
                  v-if="project.notable_features && project.notable_features.length"
                  class="flex flex-col gap-3"
                >
                  <h4 class="text-sm font-semibold uppercase tracking-[0.3em] text-text-muted">
                    Notable Features
                  </h4>

                  <ul class="list-disc list-inside pl-3 text-text-muted space-y-1">
                    <li
                      v-for="feature in project.notable_features"
                      :key="typeof feature === 'string' ? feature : feature.title"
                    >
                      <template v-if="typeof feature === 'string'">
                        {{ feature }}
                      </template>
                      <template v-else>
                        <span class="font-semibold text-text">
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
                  <h4 class="pb-2 text-sm font-semibold uppercase tracking-[0.3em] text-text-muted">
                    Tech Stack
                  </h4>
                  <ul class="flex flex-wrap gap-2 text-sm text-primary font-semibold">
                    <li
                      v-for="item in project.tech"
                      :key="item"
                      class="px-3 py-1 rounded-full bg-primary/10 border border-bg-primary"
                    >
                      {{ item }}
                    </li>
                  </ul>
                </div>
              </div>

              <div class="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  v-if="project.project_url"
                  :href="project.project_url"
                  target="_blank"
                  rel="noopener"
                  class="flex-1 px-6 py-3 font-semibold rounded-lg bg-primary text-text-white hover:bg-primary/90 shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2"
                >
                  View Project
                  <FontAwesomeIcon :icon="['fas', 'arrow-up-right-from-square']" class="text-sm" />
                </a>
                <a
                  v-if="project.github_url"
                  :href="project.github_url"
                  target="_blank"
                  rel="noopener"
                  :class="[
                    'flex-1 px-6 py-3 font-semibold rounded-lg inline-flex items-center justify-center gap-2',
                    project.project_url 
                      ? 'bg-bg-primary border-2 border-primary text-primary hover:bg-primary/10' 
                      : 'bg-primary text-text-white hover:bg-primary/90 shadow-md hover:shadow-lg'
                  ]"
                >
                  View Code
                  <FontAwesomeIcon :icon="['fas', 'arrow-up-right-from-square']" class="text-sm" />
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </Container>
  </section>
</template>