<script setup lang="ts">
import { projects } from '@/data/project_info'
</script>

<template>
  <section id="projects" class="bg-bg-dark scroll-mt-22 pb-4 lg:scroll-mt-13 lg:pt-10">
    <AppContainer class="flex flex-col gap-8">
      <div class="bg-primary text-text-muted dark:text-text w-full rounded py-1 text-center">
        <span class="tracking-custom-2 text-sm uppercase"> Personal Projects </span>
      </div>

      <!-- Projects -->
      <div class="flex flex-col gap-8">
        <article
          v-for="project in projects"
          :key="project.title"
          class="bg-bg border-highlight dark:border-border-muted flex w-full flex-col gap-8 rounded-2xl border p-6 shadow-md lg:flex-row"
        >
          <!-- Project image -->
          <div class="bg-bg flex items-center justify-center overflow-hidden rounded-2xl lg:w-1/2">
            <img
              :src="project.image"
              :alt="`${project.title} preview`"
              loading="lazy"
              class="h-full w-full object-cover object-top"
            />
          </div>

          <!-- Project content -->
          <div class="flex w-full flex-col lg:w-1/2">
            <div class="flex flex-1 flex-col gap-4">
              <!-- Project title -->
              <h3 class="text-text text-center text-2xl font-semibold md:text-left">
                {{ project.title }}
              </h3>

              <!-- Project description -->
              <p class="text-text-muted">
                {{ project.description }}
              </p>

              <!-- Notable features -->
              <div v-if="project.notable_features?.length" class="flex flex-col gap-4">
                <h4 class="text-text-muted tracking-custom-1 text-sm font-semibold uppercase">
                  Notable Features
                </h4>

                <ul class="text-text-muted flex list-inside list-disc flex-col gap-1 pl-4">
                  <li v-for="feature in project.notable_features" :key="feature">
                    {{ feature }}
                  </li>
                </ul>
              </div>

              <!-- Tech stack -->
              <div v-if="project.tech?.length" class="flex flex-col gap-2">
                <h4 class="text-text-muted tracking-custom-1 py-2 text-sm font-semibold uppercase">
                  Tech Stack
                </h4>
                <ul class="text-primary flex flex-wrap gap-2 text-sm font-semibold">
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

            <!-- Project buttons -->
            <div class="mt-6 flex flex-col gap-3 sm:flex-row">
              <!-- Show "Coming Soon" -->
              <div
                v-if="!project.project_url && !project.github_url"
                class="bg-bg-primary border-primary text-primary flex w-full items-center justify-center gap-2 rounded-lg border-2 px-6 py-3 font-semibold"
              >
                Coming soon!
              </div>

              <template v-else>
                <!-- View Project button -->
                <a
                  v-if="project.project_url"
                  :href="project.project_url"
                  target="_blank"
                  rel="noreferrer"
                  class="bg-primary text-text-white inline-flex flex-1 items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold shadow-md hover:scale-102 hover:shadow-lg"
                >
                  View Project
                  <FontAwesomeIcon :icon="['fas', 'arrow-up-right-from-square']" class="text-sm" />
                </a>

                <!-- View Code button -->
                <a
                  v-if="project.github_url"
                  :href="project.github_url"
                  target="_blank"
                  rel="noreferrer"
                  class="inline-flex flex-1 items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold hover:scale-102"
                  :class="
                    project.project_url
                      ? 'bg-bg-primary border-primary hover:bg-primary/10 text-primary border-2'
                      : 'bg-primary text-text-white shadow-md hover:shadow-lg'
                  "
                >
                  View Code
                  <FontAwesomeIcon :icon="['fas', 'arrow-up-right-from-square']" class="text-sm" />
                </a>
              </template>
            </div>
          </div>
        </article>
      </div>
    </AppContainer>
  </section>
</template>
