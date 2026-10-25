<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import BioArchive from '../components/BioArchive.vue'
import ModeToggle from '../components/ModeToggle.vue'
import SiteNav from '../components/SiteNav.vue'
import { LINKS } from '../constants/links'

const skills = [
  ['terminal', 'Python'],
  ['javascript', 'JavaScript'],
  ['layers', 'Vue.js'],
  ['web', 'Django'],
  ['hub', 'Frappe'],
  ['settings_suggest', 'ERPNext / HRMS'],
  ['api', 'REST API'],
  ['database', 'MariaDB / SQL'],
  ['storage', 'PostgreSQL'],
  ['bolt', 'Redis'],
  ['dns', 'Ubuntu / Nginx'],
  ['sync', 'GitHub Actions']
]

const work = [
  {
    icon: 'payments',
    label: 'Lead developer',
    tags: ['HR', 'Payroll', 'ERPNext'],
    title: 'Payroll & overtime engine',
    body: 'Lead developer of the company HR app, automating overtime, attendance rules and payroll posting.'
  },
  {
    icon: 'account_tree',
    label: 'Reusable',
    tags: ['Workflow', 'HR', 'Purchasing'],
    title: 'Multi-level approval engine',
    body: 'A reusable, template-driven approval workflow used across HR and purchasing for multiple clients.'
  },
  {
    icon: 'confirmation_number',
    label: 'Solo build',
    tags: ['Ticketing', 'Projects', 'Portal'],
    title: 'Client support platform',
    body: "The company's ticketing and project system, with a customer portal, response-time tracking and dashboards."
  },
  {
    icon: 'sync_alt',
    label: 'Integrations',
    tags: ['REST', 'SAP B1', 'Banking'],
    title: 'APIs & integrations',
    body: 'REST APIs for the company mobile app, and ERPNext integrations with SAP B1 and Jamuna Bank transaction APIs.'
  },
  {
    icon: 'hub',
    label: 'Client delivery',
    tags: ['ERP', 'Python', 'Frappe'],
    title: 'Client solutions',
    body: 'Custom HR, payroll, CRM, selling and buying modules for LPG, healthcare, food and trade clients, plus an overseas recruitment app built from scratch.'
  },
  {
    icon: 'speed',
    label: 'End-to-end',
    tags: ['Redis', 'CI/CD', 'Nginx'],
    title: 'Performance & delivery',
    body: 'Added Redis caching, set up GitHub Actions CI/CD and deployed on Ubuntu / Nginx, working directly with clients from requirements to production.'
  }
]

const projects = [
  {
    title: 'playS — Tap-to-Launch',
    url: 'https://github.com/Mahin-Abrar/playS',
    tags: ['Python', 'Audio DSP'],
    body: "Launches apps by tapping the laptop body, detecting the tap and its side from stereo-mic audio using only Python's standard library."
  },
  {
    title: 'ERPNext Load Testing Suite',
    url: 'https://github.com/Mahin-Abrar/performance_testing',
    tags: ['Python', 'Locust', 'Frappe'],
    body: 'Locust suite that seeds realistic ERPNext data and load-tests up to 100 concurrent users, with HTML/CSV reports.'
  },
  {
    title: 'DaysGone',
    url: 'https://github.com/Mahin-Abrar/DaysGone',
    tags: ['Django', 'Redis', 'HTMX', 'PWA'],
    body: 'Self-hosted habit, expense and planning tracker with Redis caching, streaks and charts.'
  },
  {
    title: 'Frappe core fix',
    url: 'https://github.com/frappe/frappe/pull/27227',
    tags: ['Open source', 'Frappe'],
    body: 'Reported a duplicate-email bug in Frappe; the fix was merged and backported to v14 and v15.'
  },
  {
    title: 'Customised Listview',
    url: 'https://github.com/Mahin-Abrar/Customised-Listview',
    tags: ['Open source', 'Frappe UI'],
    body: 'Author of a Frappe UI list view app, and contributor to Enhanced Child Table.'
  }
]

const credentials = [
  ['school', 'BSc in Computer Science and Engineering', 'Anna University · 2019 – 2023 · CGPA 8.40 / 10', ''],
  [
    'article',
    'An Innovative Healthcare Records Management System with Ethereum and IPFS',
    'IJSREM paper · 2023',
    'https://ijsrem.com/download/an-innovative-healthcare-records-management-system-with-ethereum-and-ipfs'
  ],
  [
    'workspace_premium',
    'Plasma Donation app on IBM Cloud',
    'IBM certification · ICT Academy, IBM Skills Network',
    'https://courses.ictacademy.skillsnetwork.site/certificates/5dddb82c4d74453a85c9969ea8601778'
  ],
  ['translate', 'IELTS Band 7', 'English proficiency', '']
]

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
  <div class="font-body selection:bg-primary-container selection:text-on-primary-container">
    <nav
      class="fixed top-0 w-full z-50 bg-slate-950/60 backdrop-blur-xl flex justify-between items-center px-12 py-6 max-w-full mx-auto shadow-[0_20px_40px_rgba(124,58,237,0.08)]"
    >
      <div
        class="text-2xl font-black tracking-tighter text-on-surface hover:text-violet-500 transition-colors duration-300 font-noto-serif"
      >
        MA
      </div>

      <SiteNav />

      <ModeToggle />
    </nav>

    <section class="relative min-h-screen flex flex-col justify-center items-start px-12 overflow-hidden nebula-glow" data-reveal>
      <div class="absolute inset-0 z-[-1] opacity-30">
        <div class="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full shadow-[0_0_8px_#fff]"></div>
        <div class="absolute top-1/2 left-3/4 w-1 h-1 bg-primary rounded-full shadow-[0_0_12px_#d2bbff]"></div>
        <div class="absolute top-3/4 left-1/3 w-1 h-1 bg-secondary rounded-full shadow-[0_0_10px_#adc6ff]"></div>
        <div class="absolute top-20 right-20 w-px h-px bg-white"></div>
      </div>

      <div class="max-w-[80%]">
        <h1 class="font-headline font-black text-[15vw] md:text-9xl tracking-tighter leading-none mb-8 text-on-surface text-reveal">
          <span>MAHIN ABRAR</span>
        </h1>
        <p class="font-label uppercase tracking-widest text-sm text-on-surface-variant mb-6">
          Software Engineer · Python · Frappe / ERPNext · Backend &amp; Automation
        </p>
        <p class="font-headline italic text-xl md:text-2xl text-primary opacity-90 typing-cursor">
          Building systems by day, exploring the cosmos by night.
        </p>

        <div class="mt-16 flex flex-wrap gap-6">
          <a class="group relative px-10 py-4 border border-primary/20 hover:border-primary transition-colors duration-300" href="#work">
            <span class="font-label uppercase tracking-widest text-sm relative z-10 group-hover:text-primary transition-colors">View Work</span>
            <div class="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-all"></div>
          </a>
          <a
            class="group relative px-10 py-4 border border-outline-variant/20 hover:border-outline-variant transition-colors duration-300"
            :href="LINKS.resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="font-label uppercase tracking-widest text-sm relative z-10">Résumé</span>
          </a>
          <a
            class="group relative px-10 py-4 border border-outline-variant/20 hover:border-outline-variant transition-colors duration-300"
            :href="LINKS.email"
          >
            <span class="font-label uppercase tracking-widest text-sm relative z-10">Email Me</span>
          </a>
        </div>
      </div>
    </section>

    <section class="relative py-32 px-12 bg-surface-container-lowest scroll-mt-28" id="about" data-reveal>
      <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center overflow-hidden pointer-events-none">
        <span class="font-headline text-[25vw] font-black opacity-[0.03] tracking-tighter select-none">SKILLS</span>
      </div>

      <div class="relative z-10 max-w-7xl mx-auto">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <div
            v-for="([icon, name], i) in skills"
            :key="name"
            class="group bg-surface-container-high p-8 border border-outline-variant/10 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(124,58,237,0.15)]"
          >
            <div class="mb-4">
              <span class="material-symbols-outlined text-3xl" :class="i % 2 ? 'text-secondary' : 'text-primary'">{{ icon }}</span>
            </div>
            <span
              class="font-label text-xs tracking-widest uppercase text-on-surface-variant"
              :class="i % 2 ? 'group-hover:text-secondary' : 'group-hover:text-primary'"
            >{{ name }}</span>
          </div>
        </div>

        <div class="mt-32 flex flex-col md:flex-row justify-between items-end gap-12">
          <div class="flex flex-col">
            <span class="font-label text-[120px] leading-none font-bold text-primary opacity-20 -mb-6">03+</span>
            <span class="font-label uppercase tracking-widest text-sm text-outline">Years of experience</span>
          </div>
          <div class="flex flex-col text-right">
            <span class="font-label text-[120px] leading-none font-bold text-secondary opacity-20 -mb-6">06</span>
            <span class="font-label uppercase tracking-widest text-sm text-outline">Industries served</span>
          </div>
        </div>
      </div>
    </section>

    <section class="py-32 px-12 relative overflow-hidden scroll-mt-28" id="work" data-reveal>
      <h2 class="font-headline font-black text-[11vw] md:text-8xl tracking-tighter mb-6 opacity-80">WORK</h2>
      <p class="font-label uppercase tracking-widest text-sm text-on-surface-variant mb-24">
        Software Engineer · Fusion Infotech Ltd · Sep 2023 – Present
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl">
        <article
          v-for="(item, i) in work"
          :key="item.title"
          class="group relative overflow-hidden rounded-xl bg-surface-container-low p-10 transition-all duration-500 hover:bg-surface-container hover:-translate-y-1 nebula-glow"
          :class="i % 2 ? 'hover:shadow-[0_0_50px_rgba(124,58,237,0.15)]' : 'hover:shadow-[0_0_50px_rgba(59,130,246,0.12)]'"
        >
          <div class="flex items-start justify-between gap-6">
            <div
              class="h-12 w-12 rounded-full border flex items-center justify-center bg-surface-container-high/50"
              :class="i % 2 ? 'border-primary/25' : 'border-secondary/25'"
            >
              <span class="material-symbols-outlined text-2xl" :class="i % 2 ? 'text-primary' : 'text-secondary'">{{ item.icon }}</span>
            </div>
            <span class="font-label text-xs tracking-widest uppercase text-on-surface-variant">{{ item.label }}</span>
          </div>
          <div class="flex flex-wrap gap-2 mt-8 mb-4">
            <span v-for="tag in item.tags" :key="tag" class="font-label text-xs border border-outline-variant px-2 py-0.5 rounded uppercase">{{ tag }}</span>
          </div>
          <h3 class="font-headline text-2xl md:text-3xl mb-4 text-on-surface">{{ item.title }}</h3>
          <p class="text-on-surface-variant font-light leading-relaxed">{{ item.body }}</p>
        </article>
      </div>
    </section>

    <section class="py-32 px-12 relative overflow-hidden bg-surface-container-lowest scroll-mt-28" id="projects" data-reveal>
      <h2 class="font-headline font-black text-[11vw] md:text-8xl tracking-tighter mb-24 opacity-80">PROJECTS</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
        <a
          v-for="item in projects"
          :key="item.title"
          :href="item.url"
          target="_blank"
          rel="noopener noreferrer"
          class="group relative overflow-hidden rounded-xl bg-surface-container-low p-10 transition-all duration-500 hover:bg-surface-container hover:shadow-[0_0_50px_rgba(124,58,237,0.15)] hover:-translate-y-1"
        >
          <div class="flex flex-wrap gap-2 mb-6">
            <span v-for="tag in item.tags" :key="tag" class="font-label text-xs border border-outline-variant px-2 py-0.5 rounded uppercase">{{ tag }}</span>
          </div>
          <h3 class="font-headline text-2xl mb-4 text-on-surface group-hover:text-primary transition-colors">
            {{ item.title }}
            <span class="material-symbols-outlined text-base align-middle opacity-50">north_east</span>
          </h3>
          <p class="text-on-surface-variant font-light leading-relaxed">{{ item.body }}</p>
        </a>
      </div>
    </section>

    <section class="py-32 px-12 relative overflow-hidden scroll-mt-28" id="credentials" data-reveal>
      <h2 class="font-headline font-black text-[11vw] md:text-8xl tracking-tighter mb-24 opacity-80">CREDENTIALS</h2>

      <ul class="max-w-4xl divide-y divide-outline-variant/15">
        <li v-for="[icon, title, meta, url] in credentials" :key="title" class="flex items-start gap-6 py-8">
          <span class="material-symbols-outlined text-primary text-2xl">{{ icon }}</span>
          <div>
            <a v-if="url" :href="url" target="_blank" rel="noopener noreferrer" class="font-headline text-xl md:text-2xl text-on-surface hover:text-primary transition-colors">{{ title }}</a>
            <h3 v-else class="font-headline text-xl md:text-2xl text-on-surface">{{ title }}</h3>
            <p class="font-label text-xs tracking-widest uppercase text-on-surface-variant mt-2">{{ meta }}</p>
          </div>
        </li>
      </ul>
    </section>

    <BioArchive />

    <section class="relative py-48 px-12 overflow-hidden flex flex-col items-center justify-center text-center" data-reveal>
      <div class="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
        <svg class="orbital-ring w-[600px] h-[600px]" viewBox="0 0 100 100">
          <circle cx="50" cy="50" fill="none" r="48" stroke="#d2bbff" stroke-dasharray="2 4" stroke-width="0.2"></circle>
          <circle cx="50" cy="50" fill="none" r="35" stroke="#adc6ff" stroke-width="0.1"></circle>
          <circle cx="15" cy="50" fill="#7c3aed" r="1.5"></circle>
        </svg>
      </div>

      <div class="relative z-10 max-w-2xl">
        <h2 class="font-headline italic text-4xl mb-12 text-primary">Find me in the universe</h2>
        <div class="flex flex-wrap justify-center gap-12 mb-20">
          <a
            class="group flex flex-col items-center gap-4 rounded-xl p-2 transition-all duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] hover:scale-110 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            :href="LINKS.github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              class="w-16 h-16 rounded-full border border-outline-variant flex items-center justify-center transition-all duration-300 group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(124,58,237,0.4)]"
            >
              <span class="material-symbols-outlined text-2xl transition-transform duration-300 group-hover:scale-110">code</span>
            </div>
            <span class="font-label text-xs uppercase tracking-widest text-outline transition-colors duration-300 group-hover:text-primary">GitHub</span>
          </a>
          <a
            class="group flex flex-col items-center gap-4 rounded-xl p-2 transition-all duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] hover:scale-110 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            :href="LINKS.linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              class="w-16 h-16 rounded-full border border-outline-variant flex items-center justify-center transition-all duration-300 group-hover:border-secondary group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
            >
              <span class="material-symbols-outlined text-2xl transition-transform duration-300 group-hover:scale-110">link</span>
            </div>
            <span class="font-label text-xs uppercase tracking-widest text-outline transition-colors duration-300 group-hover:text-secondary">LinkedIn</span>
          </a>
          <a
            class="group flex flex-col items-center gap-4 rounded-xl p-2 transition-all duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] hover:scale-110 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            :href="LINKS.instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              class="w-16 h-16 rounded-full border border-outline-variant flex items-center justify-center transition-all duration-300 group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(124,58,237,0.4)]"
            >
              <span class="material-symbols-outlined text-2xl transition-transform duration-300 group-hover:scale-110">photo_camera</span>
            </div>
            <span class="font-label text-xs uppercase tracking-widest text-outline transition-colors duration-300 group-hover:text-primary">Instagram</span>
          </a>
        </div>

        <a
          class="inline-block p-1 border-b border-primary/40 transition-all duration-300 hover:border-primary hover:shadow-[0_4px_24px_rgba(124,58,237,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/45 rounded-sm"
          :href="LINKS.email"
        >
          <span class="font-label text-2xl md:text-3xl tracking-tight text-on-surface">{{ LINKS.emailDisplay }}</span>
        </a>
      </div>
    </section>

    <footer class="w-full py-32 mt-20 relative overflow-hidden bg-slate-950/40 flex flex-col items-center justify-center space-y-12 text-center">
      <div class="font-noto-serif text-4xl uppercase tracking-tighter text-violet-400">THE CELESTIAL ARCHIVE</div>
      <div class="flex flex-wrap justify-center gap-8">
        <a
          class="font-mono text-xs text-slate-500 transition-all duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] hover:text-violet-400 hover:tracking-[0.2em] focus-visible:outline-none focus-visible:text-violet-400"
          :href="LINKS.github"
          target="_blank"
          rel="noopener noreferrer"
        >
          GITHUB
        </a>
        <a
          class="font-mono text-xs text-slate-500 transition-all duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] hover:text-violet-400 hover:tracking-[0.2em] focus-visible:outline-none focus-visible:text-violet-400"
          :href="LINKS.linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          LINKEDIN
        </a>
        <a
          class="font-mono text-xs text-slate-500 transition-all duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] hover:text-violet-400 hover:tracking-[0.2em] focus-visible:outline-none focus-visible:text-violet-400"
          :href="LINKS.instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          INSTAGRAM
        </a>
        <a
          class="font-mono text-xs text-slate-500 transition-all duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] hover:text-violet-400 hover:tracking-[0.2em] focus-visible:outline-none focus-visible:text-violet-400"
          :href="LINKS.email"
        >
          EMAIL
        </a>
      </div>
      <div class="font-mono text-xs tracking-[0.3em] text-slate-400 mt-12">© {{ new Date().getFullYear() }} THE CELESTIAL ARCHIVE</div>
    </footer>
  </div>
</template>

