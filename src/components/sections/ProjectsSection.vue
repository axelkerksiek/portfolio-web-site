<script setup lang="ts">
import { projects } from '@/data/projects'
</script>

<template>
  <section id="projects" class="bg-bg-dark scroll-mt-22 pb-4 lg:scroll-mt-13 lg:pt-10">
    <AppContainer>
      <div class="flex flex-col gap-8">
        <div class="bg-primary text-text-muted dark:text-text w-full rounded py-1 text-center">
          <span class="block text-sm tracking-[0.55em] uppercase"> Personal Projects </span>
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
                loading="lazy"
                class="h-full w-full object-cover object-top"
              />
            </div>

            <div class="flex w-full flex-col lg:w-1/2">
              <div class="flex flex-1 flex-col gap-4">
                <h3 class="text-text mt-0 text-center text-2xl font-semibold md:text-left">
                  {{ project.title }}
                </h3>

                <p class="text-text-muted mt-0">
                  {{ project.description }}
                </p>

                <div
                  v-if="project.notable_features && project.notable_features.length"
                  class="flex flex-col gap-3"
                >
                  <h4 class="text-text-muted tracking-custom-1 text-sm font-semibold uppercase">
                    Notable Features
                  </h4>

                  <ul class="text-text-muted list-inside list-disc space-y-1 pl-3">
                    <li
                      v-for="feature in project.notable_features"
                      :key="typeof feature === 'string' ? feature : feature.title"
                    >
                      <template v-if="typeof feature === 'string'">
                        {{ feature }}
                      </template>
                      <template v-else>
                        <span class="text-text font-semibold"> {{ feature.title }}: </span>
                        <span class="ml-1">
                          {{ feature.description }}
                        </span>
                      </template>
                    </li>
                  </ul>
                </div>

                <div v-if="project.tech && project.tech.length" class="flex flex-col gap-2">
                  <h4
                    class="text-text-muted tracking-custom-1 py-2 text-sm font-semibold uppercase"
                  >
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
              <div class="mt-6 flex flex-col gap-3 sm:flex-row">
                <!-- Show "Coming Soon" if both URLs are empty -->
                <div
                  v-if="!project.project_url && !project.github_url"
                  class="bg-bg-primary border-primary text-primary inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 px-6 py-3 font-semibold"
                >
                  Coming soon!
                </div>

                <!-- Show buttons if at least one URL exists -->
                <template v-else>
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
                </template>
              </div>
            </div>
          </article>
        </div>
      </div>
    </AppContainer>
  </section>
</template>
