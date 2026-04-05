<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

/** Archive (bio) lives on both pages; link targets the current site’s #archive. */
const archiveTo = computed(() => ({
  path: route.path === '/personal' ? '/personal' : '/work',
  hash: '#archive'
}))

const linkClass =
  'font-mono text-[10px] tracking-widest uppercase text-slate-400 hover:text-violet-200 transition-colors duration-300 border-b border-transparent hover:border-violet-500/40 pb-1'
</script>

<template>
  <div class="hidden md:flex items-center gap-12">
    <RouterLink :to="{ path: '/work', hash: '#work' }" :class="linkClass">PROJECTS</RouterLink>
    <RouterLink :to="archiveTo" :class="linkClass">ARCHIVE</RouterLink>
    <RouterLink :to="{ path: '/personal', hash: '#labs' }" :class="linkClass">LABS</RouterLink>
  </div>
</template>
