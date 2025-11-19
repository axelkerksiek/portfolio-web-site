<template>
  <section id="about" class="bg-bg-dark scroll-mt-10 pt-26">
    <AppContainer>
      <div class="flex flex-col lg:flex-row">
        <!-- Image div - centered -->
        <div class="flex w-full items-center justify-center lg:w-1/3">
          <img
            src="/images/portraits/axel_portrait_750x750_optimized.jpg"
            alt="Portrait of Axel"
            class="ring-primary h-auto w-full max-w-[16rem] rounded-full object-cover ring-4"
          />
        </div>

        <!-- Content div - centered on mobile, left aligned on large screens -->
        <div
          class="flex w-full flex-col justify-center space-y-6 py-8 text-center lg:w-2/3 lg:py-0 lg:text-left"
        >
          <h1 class="text-text text-4xl font-bold">Building software from design to delivery</h1>
          <p class="text-text-muted text-lg leading-loose">
            I'm a full-stack developer specializing in
            <span class="font-semibold italic">Vue</span> and
            <span class="font-semibold italic">Rails</span>. I work with the entire product
            lifecycle—from design and engineering through testing and deployment. Below are a few
            personal projects that I have worked on. Feel free to explore the live sites or dive
            into my code on GitHub.
          </p>
          <!-- <div
            class="mb-1 rounded-lg bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 p-[1.5px]"
          >
            <div class="bg-bg flex justify-between gap-4 rounded-lg p-4">
              <p
                class="text-text-muted flex-1 text-left text-base leading-relaxed"
              >
                ✨ LLM generated fact goes here...
              </p>
              <button
                class="text-text-black dark:text-text-white flex-shrink-0 cursor-pointer hover:scale-110"
                aria-label="Generate another fact"
                title="Generate another fact"
              >
                <FontAwesomeIcon :icon="['fas', 'dice']" class="text-xl" />
              </button>
            </div>
          </div>
          <p
            class="text-text-muted mt-0.5 text-center text-xs italic md:text-right"
          >
            Generated with <span class="font-semibold">AWS Bedrock</span>
          </p> -->
        </div>
      </div>
    </AppContainer>
  </section>
</template>
