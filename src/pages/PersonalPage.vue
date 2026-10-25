<script setup lang="ts">
import { computed, onMounted } from 'vue'
import gsap from 'gsap'
import BioArchive from '../components/BioArchive.vue'
import ModeToggle from '../components/ModeToggle.vue'
import SiteNav from '../components/SiteNav.vue'
import { LINKS } from '../constants/links'

const lensImageModules = import.meta.glob('../images/*.{jpg,jpeg,png,JPG,JPEG,PNG,webp,WEBP}', {
  eager: true,
  import: 'default'
}) as Record<string, string>

/** Every image in `src/images`, sorted by filename (drop new files in that folder to update the gallery). */
const lensImages = computed(() =>
  Object.keys(lensImageModules)
    .filter((path) => !/profile\.(jpg|jpeg|png|webp)$/i.test(path.split('/').pop() ?? ''))
    .sort((a, b) => a.localeCompare(b))
    .map((path) => ({ path, src: lensImageModules[path] }))
)

function lensAlt(importPath: string) {
  const file = importPath.split('/').pop() ?? ''
  const name = decodeURIComponent(file.replace(/\.[^.]+$/, '')).replace(/[_-]/g, ' ')
  return name ? `Photography — ${name}` : 'Photography'
}

onMounted(() => {
  gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
    gsap.fromTo(
      el,
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 80%' }
      }
    )
  })
})
</script>

<template>
  <div class="bg-background text-on-surface selection:bg-primary-container selection:text-white font-body overflow-x-hidden">
    <nav
      class="fixed top-0 w-full z-50 flex justify-between items-center px-12 py-6 max-w-full mx-auto bg-slate-950/60 backdrop-blur-xl shadow-[0_20px_40px_rgba(124,58,237,0.08)]"
    >
      <div class="text-2xl font-black tracking-tighter text-on-surface hover:text-violet-500 transition-colors duration-300 font-headline">
        MA
      </div>

      <SiteNav />

      <ModeToggle />
    </nav>

    <main class="relative">
      <section class="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6 pt-20" data-reveal>
        <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div class="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary-container/10 rounded-full blur-[120px] opacity-30"></div>
          <div class="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary-container/10 rounded-full blur-[100px] opacity-20"></div>
        </div>

        <div class="relative z-10 text-center space-y-8 max-w-5xl">
          <p class="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-4">The Personal Universe</p>
          <h1 class="text-7xl md:text-9xl font-headline font-black tracking-tighter leading-none mb-12">MAHIN <br />ABRAR</h1>
          <p class="max-w-2xl mx-auto font-body text-on-surface-variant text-lg leading-relaxed opacity-80">
            A digital sanctum for explorations beyond the technical. Archiving aesthetic memories, tactical engagements, and creative experiments in
            the deep void.
          </p>
          <div class="pt-12">
            <span class="material-symbols-outlined text-4xl text-primary animate-bounce opacity-40">expand_more</span>
          </div>
        </div>
      </section>

      <section class="py-32 relative bg-surface-container-lowest overflow-hidden scroll-mt-28" id="labs" data-reveal>
        <div class="scanline-overlay absolute inset-0 z-0 opacity-10"></div>
        <div class="container mx-auto px-12 relative z-10">
          <div class="mb-20 flex items-baseline gap-4">
            <h2 class="text-5xl md:text-7xl font-mono font-black tracking-tighter text-on-surface uppercase italic">IN-GAME</h2>
            <div class="h-1 flex-grow bg-gradient-to-r from-secondary/50 to-transparent"></div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="perspective-card glass-container p-8 relative overflow-hidden group transition-all duration-300">
              <div class="absolute top-0 right-0 w-24 h-24 bg-secondary/5 blur-2xl group-hover:bg-secondary/20 transition-all"></div>
              <div class="absolute top-4 right-4 h-0.5 w-8 bg-secondary/30"></div>
              <p class="font-mono text-8xl absolute -bottom-4 -right-4 text-watermark font-black tracking-tighter pointer-events-none">500+</p>
              <div class="relative z-10 space-y-6">
                <div class="h-8 w-8 rounded-full border border-secondary/20 flex items-center justify-center">
                  <span class="material-symbols-outlined text-sm text-secondary">videogame_asset</span>
                </div>
                <h3 class="font-mono text-xl font-bold tracking-tight text-secondary">RAINBOW SIX SIEGE</h3>
                <p class="font-body text-sm text-on-surface-variant/80">Tactical environmental destruction and precision entry protocols.</p>
                <div class="pt-4 flex items-center gap-2">
                  <span class="font-mono text-xs text-secondary tracking-widest uppercase">OPERATOR: Jäger</span>
                </div>
              </div>
            </div>

            <div class="perspective-card glass-container p-8 relative overflow-hidden group transition-all duration-300">
              <div class="absolute top-4 right-4 h-0.5 w-8 bg-primary/30"></div>
              <p class="font-mono text-8xl absolute -bottom-4 -right-4 text-watermark font-black tracking-tighter pointer-events-none">1200+</p>
              <div class="relative z-10 space-y-6">
                <div class="h-8 w-8 rounded-full border border-primary/20 flex items-center justify-center">
                  <span class="material-symbols-outlined text-sm text-primary">precision_manufacturing</span>
                </div>
                <h3 class="font-mono text-xl font-bold tracking-tight text-primary">COUNTER-STRIKE</h3>
                <p class="font-body text-sm text-on-surface-variant/80">Legacy mechanics. High-stakes utility and recoil mastery.</p>
                <div class="pt-4 flex items-center gap-2">
                  <span class="font-mono text-xs text-primary tracking-widest uppercase">STATUS: IN-ACTIVE</span>
                </div>
              </div>
            </div>

            <div class="perspective-card glass-container p-8 relative overflow-hidden group transition-all duration-300">
              <div class="absolute top-4 right-4 h-0.5 w-8 bg-secondary/30"></div>
              <p class="font-mono text-8xl absolute -bottom-4 -right-4 text-watermark font-black tracking-tighter pointer-events-none">450+</p>
              <div class="relative z-10 space-y-6">
                <div class="h-8 w-8 rounded-full border border-secondary/20 flex items-center justify-center">
                  <span class="material-symbols-outlined text-sm text-secondary">radar</span>
                </div>
                <h3 class="font-mono text-xl font-bold tracking-tight text-secondary">VALORANT</h3>
                <p class="font-body text-sm text-on-surface-variant/80">Ability-based strategy integrated with surgical gunplay.</p>
                <div class="pt-4 flex items-center gap-2">
                  <span class="font-mono text-xs text-secondary tracking-widest uppercase">RANK: DIAMOND 2</span>
                </div>
              </div>
            </div>

            <div class="perspective-card glass-container p-8 relative overflow-hidden group transition-all duration-300">
              <div class="absolute top-4 right-4 h-0.5 w-8 bg-primary/30"></div>
              <p class="font-mono text-8xl absolute -bottom-4 -right-4 text-watermark font-black tracking-tighter pointer-events-none">800+</p>
              <div class="relative z-10 space-y-6">
                <div class="h-8 w-8 rounded-full border border-primary/20 flex items-center justify-center">
                  <span class="material-symbols-outlined text-sm text-primary">terrain</span>
                </div>
                <h3 class="font-mono text-xl font-bold tracking-tight text-primary">BATTLEFIELD</h3>
                <p class="font-body text-sm text-on-surface-variant/80">Combined arms warfare and cinematic atmospheric chaos.</p>
                <div class="pt-4 flex items-center gap-2">
                  <span class="font-mono text-xs text-primary tracking-widest uppercase">ROLE: ENGINEER</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BioArchive />

      <section class="py-40 bg-background relative scroll-mt-28" id="lens" data-reveal>
        <div class="container mx-auto px-12">
          <div class="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div class="md:col-span-4 sticky top-40">
              <h2 class="text-7xl font-serif-editorial leading-[0.9] text-primary">THROUGH <br />THE LENS</h2>
              <p class="mt-12 font-body text-on-surface-variant leading-relaxed max-w-xs">
                A curated archive of captured light. Exploring urban geometry, desolate landscapes, and the quiet moments in between.
              </p>
              <a
                class="mt-12 group inline-flex items-center gap-4 rounded-lg py-1 transition-all duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] hover:gap-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/45"
                :href="LINKS.instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="font-mono text-sm tracking-widest text-primary uppercase transition-colors duration-300 group-hover:text-white">
                  FOLLOW THE FEED
                </span>
                <span class="material-symbols-outlined text-primary transition-transform duration-300 group-hover:translate-x-2">trending_flat</span>
              </a>
            </div>

            <div class="md:col-span-8">
              <div
                v-if="lensImages.length"
                class="columns-1 sm:columns-2 gap-8 [column-fill:_balance]"
              >
                <div
                  v-for="item in lensImages"
                  :key="item.path"
                  class="group relative overflow-hidden rounded-xl mb-8 break-inside-avoid bg-surface-container border border-outline-variant/15 cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] hover:-translate-y-2 hover:border-primary/35 hover:shadow-[0_24px_56px_rgba(124,58,237,0.22)]"
                >
                  <img
                    :src="item.src"
                    :alt="lensAlt(item.path)"
                    class="w-full h-auto object-cover grayscale transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:grayscale-0 group-hover:scale-[1.045]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <div
                v-else
                class="rounded-xl border border-outline-variant/20 bg-surface-container-low p-10 text-on-surface-variant"
              >
                <p class="font-mono text-xs tracking-[0.3em] uppercase text-on-surface-variant">Gallery</p>
                <h3 class="font-headline text-2xl mt-3 text-on-surface">No photos yet</h3>
                <p class="mt-4 max-w-xl">
                  Add JPG, PNG, or WebP files to <span class="font-mono text-primary">src/images</span> — they appear here automatically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer class="w-full py-32 mt-20 relative overflow-hidden bg-slate-950/40 flex flex-col items-center justify-center space-y-12 text-center" data-reveal>
        <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        <h2 class="font-noto-serif text-4xl md:text-6xl uppercase tracking-tighter text-on-surface font-black">THE CELESTIAL ARCHIVE</h2>
        <div class="flex flex-wrap justify-center gap-12">
          <a
            class="font-mono text-xs text-slate-500 tracking-widest uppercase transition-all duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] hover:text-violet-400 hover:tracking-[0.2em] focus-visible:outline-none focus-visible:text-violet-400"
            :href="LINKS.github"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </a>
          <a
            class="font-mono text-xs text-slate-500 tracking-widest uppercase transition-all duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] hover:text-violet-400 hover:tracking-[0.2em] focus-visible:outline-none focus-visible:text-violet-400"
            :href="LINKS.linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN
          </a>
          <a
            class="font-mono text-xs text-slate-500 tracking-widest uppercase transition-all duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] hover:text-violet-400 hover:tracking-[0.2em] focus-visible:outline-none focus-visible:text-violet-400"
            :href="LINKS.instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            INSTAGRAM
          </a>
          <a
            class="font-mono text-xs text-slate-500 tracking-widest uppercase transition-all duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] hover:text-violet-400 hover:tracking-[0.2em] focus-visible:outline-none focus-visible:text-violet-400"
            :href="LINKS.email"
          >
            EMAIL
          </a>
        </div>
        <p class="font-mono text-xs text-slate-400 tracking-widest pt-12">© {{ new Date().getFullYear() }} THE CELESTIAL ARCHIVE — ALL RIGHTS RESERVED</p>
        <div class="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>
      </footer>

      <div class="md:hidden fixed bottom-0 left-0 w-full glass-container flex justify-around items-center py-4 px-6 z-50 border-t border-outline-variant/10">
        <button class="flex flex-col items-center text-primary">
          <span class="material-symbols-outlined">home</span>
          <span class="font-mono text-[8px] mt-1">HOME</span>
        </button>
        <button class="flex flex-col items-center text-slate-500">
          <span class="material-symbols-outlined">videogame_asset</span>
          <span class="font-mono text-[8px] mt-1">PLAY</span>
        </button>
        <button class="flex flex-col items-center text-slate-500">
          <span class="material-symbols-outlined">camera</span>
          <span class="font-mono text-[8px] mt-1">LENS</span>
        </button>
        <button class="flex flex-col items-center text-slate-500">
          <span class="material-symbols-outlined">mail</span>
          <span class="font-mono text-[8px] mt-1">VOID</span>
        </button>
      </div>
    </main>
  </div>
</template>

