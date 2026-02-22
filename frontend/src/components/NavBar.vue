<template>
  <nav :class="{ scrolled }">
    <div class="nav-inner">
      <a href="#hero" class="logo">
        <span class="logo-icon">▶</span>
        <span class="logo-text">DYLAN VILLANUEVA</span>
      </a>
      <div class="nav-links">
        <a href="#about">About</a>
        <a href="#tracks">Tracks</a>
        <a href="#skills">Stack</a>
        <a href="#projects">Works</a>
        <a href="#guestbook" class="nav-cta">Sign Guestbook</a>
      </div>
      <button class="hamburger" @click="open = !open" :class="{ open }">
        <span></span><span></span><span></span>
      </button>
    </div>
    <div class="mobile-menu" :class="{ open }">
      <a href="#about" @click="open=false">About</a>
      <a href="#tracks" @click="open=false">Tracks</a>
      <a href="#skills" @click="open=false">Stack</a>
      <a href="#projects" @click="open=false">Works</a>
      <a href="#guestbook" @click="open=false">Sign Guestbook</a>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const open = ref(false)
const scrolled = ref(false)
const onScroll = () => { scrolled.value = window.scrollY > 60 }
onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  padding: 1.5rem 2rem;
  transition: all 0.4s;
}
nav.scrolled {
  background: rgba(8,8,8,0.97);
  backdrop-filter: blur(20px);
  padding: 1rem 2rem;
  border-bottom: 1px solid var(--border);
}
.nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo { display: flex; align-items: center; gap: 0.6rem; }
.logo-icon {
  color: var(--neon);
  font-size: 0.9rem;
  animation: pulse 2s ease-in-out infinite;
}
@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
.logo-text {
  font-family: var(--font-display);
  font-size: 1.3rem;
  letter-spacing: 0.15em;
}
.nav-links { display: flex; align-items: center; gap: 2rem; }
.nav-links a {
  font-size: 0.72rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-muted);
  transition: color 0.2s;
}
.nav-links a:hover { color: var(--neon); }
.nav-cta {
  border: 1px solid var(--neon) !important;
  color: var(--neon) !important;
  padding: 0.5rem 1.1rem;
  transition: background 0.2s !important;
}
.nav-cta:hover { background: var(--neon); color: #000 !important; }
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}
.hamburger span {
  display: block; width: 22px; height: 1px;
  background: var(--text);
  transition: all 0.3s;
}
.hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(4px,4px); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(4px,-4px); }
.mobile-menu {
  display: none;
  flex-direction: column;
  gap: 1.25rem;
  padding: 1.5rem 0 0.5rem;
  max-width: 1200px;
  margin: 0.5rem auto 0;
  border-top: 1px solid var(--border);
}
.mobile-menu.open { display: flex; }
.mobile-menu a { font-size: 0.8rem; color: var(--text-muted); letter-spacing: 0.15em; text-transform: uppercase; }
@media (max-width: 768px) {
  .nav-links { display: none; }
  .hamburger { display: flex; }
}
</style>