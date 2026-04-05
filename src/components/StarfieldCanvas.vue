<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

type Star = {
  x: number
  y: number
  z: number
  r: number
  tw: number
  hue: number
}

const canvasRef = ref<HTMLCanvasElement | null>(null)

let rafId = 0
let ctx: CanvasRenderingContext2D | null = null
let stars: Star[] = []

let dpr = 1
let w = 0
let h = 0

const config = {
  count: 900,
  speed: 0.18,
  depth: 1200,
  baseRadius: 1.2,
  glow: 0.9
}

function rand(min: number, max: number) {
  return min + Math.random() * (max - min)
}

function resetStar(s: Star) {
  s.x = rand(-w * 0.6, w * 0.6)
  s.y = rand(-h * 0.6, h * 0.6)
  s.z = rand(1, config.depth)
  s.r = rand(0.4, config.baseRadius)
  s.tw = rand(0.2, 1.2)
  s.hue = rand(235, 270)
}

function resize() {
  const canvas = canvasRef.value
  if (!canvas) return

  dpr = Math.min(2, window.devicePixelRatio || 1)
  w = window.innerWidth
  h = window.innerHeight

  canvas.width = Math.floor(w * dpr)
  canvas.height = Math.floor(h * dpr)
  canvas.style.width = `${w}px`
  canvas.style.height = `${h}px`

  ctx = canvas.getContext('2d')
  if (!ctx) return
  ctx.setTransform(dpr, 0, 0, dpr, w / 2, h / 2)

  if (!stars.length) {
    stars = Array.from({ length: config.count }, () => ({
      x: 0,
      y: 0,
      z: 0,
      r: 0,
      tw: 0,
      hue: 0
    }))
    for (const s of stars) resetStar(s)
  }
}

function tick(t: number) {
  if (!ctx) {
    rafId = requestAnimationFrame(tick)
    return
  }

  const time = t * 0.001
  ctx.clearRect(-w / 2, -h / 2, w, h)

  const driftX = Math.sin(time * 0.13) * 12
  const driftY = Math.cos(time * 0.11) * 10

  for (const s of stars) {
    s.z -= config.speed * 8
    if (s.z <= 1) resetStar(s)

    const k = 900 / s.z
    const x = (s.x + driftX) * k
    const y = (s.y + driftY) * k

    if (x < -w || x > w || y < -h || y > h) {
      resetStar(s)
      continue
    }

    const twinkle = 0.55 + 0.45 * Math.sin(time * (1.2 + s.tw) + s.x * 0.001 + s.y * 0.001)
    const alpha = Math.min(1, k * 0.012) * twinkle
    const radius = s.r * (0.6 + k * 0.07)

    ctx.beginPath()
    ctx.fillStyle = `hsla(${s.hue}, 90%, 70%, ${alpha * 0.9})`
    ctx.arc(x, y, radius, 0, Math.PI * 2)
    ctx.fill()

    if (config.glow > 0) {
      ctx.beginPath()
      ctx.fillStyle = `hsla(${s.hue}, 90%, 70%, ${alpha * 0.25 * config.glow})`
      ctx.arc(x, y, radius * 4.2, 0, Math.PI * 2)
      ctx.fill()
    }
  }

  rafId = requestAnimationFrame(tick)
}

onMounted(() => {
  resize()
  window.addEventListener('resize', resize, { passive: true })
  rafId = requestAnimationFrame(tick)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', resize)
  cancelAnimationFrame(rafId)
})
</script>

<template>
  <canvas
    ref="canvasRef"
    aria-hidden="true"
    class="fixed inset-0 -z-20 pointer-events-none"
  />
</template>

