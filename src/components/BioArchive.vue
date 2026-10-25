<script setup lang="ts">
import { computed, ref } from 'vue'

const profileModules = import.meta.glob('../images/profile.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
  eager: true,
  import: 'default'
}) as Record<string, string>

const profileSrc = computed(() => Object.values(profileModules)[0])
const imgFailed = ref(false)
</script>

<template>
  <section
    id="archive"
    class="py-32 px-12 relative bg-surface-container-lowest overflow-hidden border-t border-outline-variant/10 scroll-mt-28"
    data-reveal
  >
    <div class="absolute inset-0 pointer-events-none opacity-[0.04]">
      <span class="font-headline text-[20vw] font-black tracking-tighter select-none absolute -right-4 top-1/4">ARCHIVE</span>
    </div>

    <div class="relative z-10 max-w-6xl mx-auto">
      <p class="font-mono text-xs tracking-[0.35em] text-primary uppercase mb-6">The archive</p>
      <h2 class="font-headline text-5xl md:text-7xl font-black tracking-tighter text-on-surface mb-16">Bio &amp; timeline</h2>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div class="lg:col-span-4 lg:sticky lg:top-36">
          <div
            class="relative overflow-hidden rounded-xl bg-surface-container border border-outline-variant/15 aspect-[3/4] max-w-md mx-auto lg:mx-0 shadow-[0_24px_56px_rgba(0,0,0,0.35)]"
          >
            <img
              v-if="profileSrc && !imgFailed"
              :src="profileSrc"
              alt="Mahin Abrar"
              class="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              @error="imgFailed = true"
            />
            <div
              v-else
              class="w-full h-full min-h-[320px] flex flex-col items-center justify-center bg-surface-container-high text-on-surface-variant p-8 text-center"
            >
              <span class="font-headline text-6xl font-black text-primary/30 mb-4">MA</span>
              <p class="font-mono text-xs tracking-widest uppercase leading-relaxed">
                Add your photo as
                <span class="text-primary">src/images/profile.jpg</span>
              </p>
            </div>
          </div>
        </div>

        <div class="lg:col-span-8 space-y-8 text-on-surface-variant font-body text-lg leading-relaxed font-light">
          <p>
            Landed on Earth in 2001, which means I grew up just in time to witness the internet become both a blessing and a full-time distraction.
          </p>
          <p>
            I completed my SSC from Rajshahi Collegiate School in 2017, survived HSC at Rajshahi Government City College in 2019 (barely), and
            somehow made it through Anna University (2019–2023) without completely losing my sanity.
          </p>
          <p>
            Since 2023, I’ve been working as a Software Engineer at Fusion Infotech Ltd, where I spend most of my time turning caffeine into code
            and pretending bugs are “unexpected features.”
          </p>
          <p>
            When I’m not coding, I like to take photos, read books, learn about astronomy, and do pen sketches—because apparently one obsession wasn’t
            enough.
          </p>
          <p>
            My bookshelf is heavily influenced by John Green, Humayun Ahmed, Stephen King, Arthur Conan Doyle, and Satyajit Ray. My movie taste is
            powered by directors like Stanley Kubrick, David Fincher, David Lynch, Martin Scorsese, Christopher Nolan, and Andrei Tarkovsky—so yes, I
            do enjoy films that leave me confused for three business days.
          </p>
          <p class="text-on-surface/90">
            And when it comes to anime, <span class="text-primary font-medium">Cowboy Bebop</span> and
            <span class="text-secondary font-medium">Code Geass</span> have permanently set the bar unreasonably high.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
