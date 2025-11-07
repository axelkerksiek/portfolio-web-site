<template>
  <section
    id="about"
    class="px-26 pt-26 flex flex-col lg:flex-row gap-12 items-center lg:items-start lg:justify-center bg-light-primary dark:bg-dark-primary"
  >
      <div class="w-full lg:w-1/3 flex flex-col items-center gap-6">
        <img
          src="/images/axel_portrait.jpg"
          alt="Portrait of Axel"
          class="w-full h-auto max-w-[22rem] object-cover rounded-full shadow-xl shadow-emerald-500/30 ring-4 ring-primary"
        />

        <div class="flex items-center gap-8 text-dark-primary dark:text-light-primary text-2xl transition-none">
          <a 
            href="https://www.linkedin.com/in/your-handle" 
            target="_blank" 
            rel="noopener" 
            class="hover:text-primary" 
            aria-label="LinkedIn"
            title="View my LinkedIn profile"
          >
            <FontAwesomeIcon :icon="['fab', 'square-linkedin']" />
          </a>
          <a 
            href="https://github.com/your-handle" 
            target="_blank" rel="noopener" 
            class="hover:text-primary" 
            aria-label="GitHub" 
            title="View my GitHub profile"
          >
            <FontAwesomeIcon :icon="['fab', 'square-github']" />
          </a>
          <a 
            href="https://github.com/your-handle" 
            target="_blank" rel="noopener" 
            class="hover:text-primary" 
            aria-label="Resume"
            title="View my resume"
          >
            <FontAwesomeIcon :icon="['fas', 'file']" />
          </a>
        </div>
      </div>
  
      <div class="w-full lg:w-2/3 space-y-6 text-center lg:text-left">
        <h1 class="text-4xl lg:text-5xl font-bold text-dark-primary dark:text-light-primary">
          Building thoughtful web experiences
        </h1>
        <p class="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          I’m a front-end developer focused on crafting performant, accessible,
          and delightful interfaces. From design systems to data-heavy dashboards,
          I love translating complex requirements into intuitive, human-centered
          experiences. When I’m not coding, you’ll find me exploring new coffee
          spots or tinkering with personal projects. Heres another cool sentence
          to add to the about me seciton.
        </p>

        <!-- <div class="flex items-center gap-10 text-slate-500 dark:text-slate-300 text-xl">
          <a href="mailto:you@example.com" class="hover:text-emerald-500 transition-colors" aria-label="Email">
            <FontAwesomeIcon :icon="['fas', 'envelope']" />
          </a>
          <a href="https://www.linkedin.com/in/your-handle" target="_blank" rel="noopener" class="hover:text-emerald-500 transition-colors" aria-label="LinkedIn">
            <FontAwesomeIcon :icon="['fab', 'square-linkedin']" />
          </a>
          <a href="https://github.com/your-handle" target="_blank" rel="noopener" class="hover:text-emerald-500 transition-colors" aria-label="GitHub">
            <FontAwesomeIcon :icon="['fab', 'square-github']" />
          </a>
          <a href="https://github.com/your-handle" target="_blank" rel="noopener" class="hover:text-emerald-500 transition-colors" aria-label="Resume">
            <FontAwesomeIcon :icon="['fas', 'file']" />
          </a>
        </div> -->
      </div>
    </section>
  </template>