import { nextTick } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import { getLenis } from '../lib/motion'
import WorkPage from '../pages/WorkPage.vue'
import PersonalPage from '../pages/PersonalPage.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: '',
  linkExactActiveClass: '',
  routes: [
    { path: '/', redirect: '/work' },
    { path: '/work', component: WorkPage },
    { path: '/personal', component: PersonalPage }
  ],
  scrollBehavior(to) {
    if (to.hash) return false
    return { top: 0, left: 0 }
  }
})

router.afterEach((to) => {
  if (!to.hash) return
  nextTick(() => {
    const lenis = getLenis()
    const el = document.querySelector(to.hash)
    if (lenis && el instanceof HTMLElement) {
      lenis.scrollTo(el, { offset: -96, duration: 1.15 })
    } else if (el instanceof HTMLElement) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
})

