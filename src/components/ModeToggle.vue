<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const isWork = computed(() => route.path === '/work' || route.path === '/')
const isPersonal = computed(() => route.path === '/personal')

const base =
  'relative inline-flex items-center justify-center px-4 py-2 min-w-[5.75rem] font-mono text-[10px] tracking-widest uppercase rounded-full no-underline select-none outline-none transition-all duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 active:scale-[0.97]'

const inactive =
  'text-slate-400 hover:text-on-surface hover:scale-105 hover:shadow-[0_0_16px_rgba(124,58,237,0.12)]'

const active =
  'bg-primary-container text-on-primary-container shadow-[0_0_24px_rgba(124,58,237,0.42)] scale-[1.02]'
</script>

<template>
  <div
    class="flex items-center rounded-full p-1 gap-0.5 border border-outline-variant/25 bg-surface-container-low/90 backdrop-blur-sm"
    role="tablist"
    aria-label="Portfolio mode"
  >
    <RouterLink to="/work" :class="[base, isWork ? active : inactive]">WORK</RouterLink>
    <RouterLink to="/personal" :class="[base, isPersonal ? active : inactive]">PERSONAL</RouterLink>
  </div>
</template>
