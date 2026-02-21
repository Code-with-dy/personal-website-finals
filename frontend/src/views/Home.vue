<template>
  <main>

    <!-- HERO -->
    <section id="hero" class="hero">
      <div class="vinyl-wrap">
        <div class="vinyl" :class="{ spinning }">
          <div class="vinyl-label">
            <span class="vinyl-title">NOW PLAYING</span>
            <span class="vinyl-artist">YOUR NAME</span>
          </div>
        </div>
        <button class="play-btn" @click="spinning = !spinning">
          {{ spinning ? '⏸' : '▶' }}
        </button>
      </div>

      <div class="hero-text">
        <div class="hero-tag">// FULL STACK DEVELOPER + MUSIC ENTHUSIAST</div>
        <h1 class="hero-name">
          <span class="line1">YOUR</span>
          <span class="line2">NAME<span class="cursor-blink">_</span></span>
        </h1>
        <p class="hero-bio">
          I write code the way musicians write songs —<br>
          with rhythm, intention, and a little bit of noise.
        </p>
        <div class="hero-actions">
          <a href="#projects" class="btn-neon">VIEW MY WORK</a>
          <a href="#guestbook" class="btn-outline">SIGN GUESTBOOK</a>
        </div>
        <div class="now-playing">
          <Waveform :bars="18" />
          <span class="np-text">currently vibing to: lo-fi beats & clean code</span>
        </div>
      </div>

      <div class="ticker">
        <div class="ticker-track">
          <span v-for="i in 6" :key="i">
            VUE.JS &nbsp;✦&nbsp; NESTJS &nbsp;✦&nbsp; SUPABASE &nbsp;✦&nbsp; FULL STACK &nbsp;✦&nbsp; MUSIC &nbsp;✦&nbsp; PHILIPPINES &nbsp;✦&nbsp;
          </span>
        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section id="about" class="about">
      <div class="container">
        <div class="about-grid">
          <div class="about-left">
            <div class="section-tag">// ABOUT</div>
            <h2 class="section-heading">THE ARTIST<br><em>BEHIND THE CODE</em></h2>
            <div class="eq-bars">
              <div v-for="i in 8" :key="i" class="eq-bar" :style="{ animationDelay: `${i*0.1}s` }"></div>
            </div>
          </div>
          <div class="about-right">
            <p class="about-p">
              Hey, I'm <strong class="hl">Your Name</strong> — a Web Programming student and music lover
              based in the Philippines. I build web apps that are fast, functional, and feel good to use.
            </p>
            <p class="about-p">
              Just like music, good code has structure, flow, and a certain feel. Currently studying at
              <strong class="hl">Your School Name</strong> and learning everything about the full stack.
            </p>
            <div class="stats-row">
              <div class="stat">
                <span class="stat-n">2+</span>
                <span class="stat-l">Yrs Coding</span>
              </div>
              <div class="stat">
                <span class="stat-n">10+</span>
                <span class="stat-l">Projects</span>
              </div>
              <div class="stat">
                <span class="stat-n">∞</span>
                <span class="stat-l">Playlists</span>
              </div>
            </div>
            <div class="genres">
              <span class="genre-label">// MUSIC I CODE TO:</span>
              <div class="genre-tags">
                <span v-for="g in genres" :key="g" class="gtag">{{ g }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SKILL SETLIST -->
    <section id="tracks" class="tracks">
      <div class="container">
        <div class="section-tag">// FEATURED TRACKS</div>
        <h2 class="section-heading">MY SKILL <em>SETLIST</em></h2>
        <div class="tracklist">
          <div v-for="(track, i) in tracks" :key="track.title"
            class="track-item"
            @mouseenter="activeTrack = i"
            @mouseleave="activeTrack = null"
            :class="{ active: activeTrack === i }">
            <div class="track-num">{{ String(i+1).padStart(2,'0') }}</div>
            <div class="track-info">
              <div class="track-title">{{ track.title }}</div>
              <div class="track-skills">{{ track.skills.join(' · ') }}</div>
            </div>
            <div class="track-wave">
              <Waveform :bars="12" :color="track.color" v-if="activeTrack === i" />
              <div class="track-bar-static" v-else></div>
            </div>
            <div class="track-level">
              <div class="level-fill" :style="{ width: track.level + '%', background: track.hex }"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PROJECTS -->
    <section id="projects" class="projects">
      <div class="container">
        <div class="section-tag">// DISCOGRAPHY</div>
        <h2 class="section-heading">SELECTED <em>WORKS</em></h2>
        <div class="albums-grid">
          <div v-for="p in projects" :key="p.title" class="album-card">
            <div class="album-cover" :style="{ background: p.gradient }">
              <div class="album-art-inner">{{ p.icon }}</div>
              <div class="album-overlay">
                <a :href="p.github" target="_blank" class="album-btn">GitHub →</a>
                <a v-if="p.live" :href="p.live" target="_blank" class="album-btn live">Live →</a>
              </div>
            </div>
            <div class="album-info">
              <div class="album-num">{{ p.year }}</div>
              <div class="album-title">{{ p.title }}</div>
              <div class="album-desc">{{ p.desc }}</div>
              <div class="album-tags">
                <span v-for="t in p.tags" :key="t" class="atag">{{ t }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- TECH STACK -->
    <section id="skills" class="skills">
      <div class="container">
        <div class="skills-header">
          <div>
            <div class="section-tag">// TECH STACK</div>
            <h2 class="section-heading">THE <em>INSTRUMENTS</em></h2>
          </div>
          <Waveform :bars="24" color="blue" />
        </div>
        <div class="stack-grid">
          <div v-for="cat in stack" :key="cat.title" class="stack-col">
            <div class="stack-col-title" :style="{ color: cat.color }">{{ cat.title }}</div>
            <div class="stack-items">
              <div v-for="item in cat.items" :key="item" class="stack-item">
                <span class="stack-dot" :style="{ background: cat.color }"></span>
                {{ item }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- GUESTBOOK -->
    <Guestbook />

    <!-- FOOTER -->
    <footer>
      <div class="container">
        <div class="footer-top">
          <div class="footer-brand">
            <span class="footer-logo">YOUR NAME</span>
            <span class="footer-sub">Full Stack Developer · Music Lover · Philippines</span>
          </div>
          <div class="footer-links">
            <a href="https://github.com/yourusername" target="_blank">GitHub</a>
            <a href="mailto:youremail@email.com">Email</a>
            <a href="#hero">Back to Top ↑</a>
          </div>
        </div>
        <div class="footer-bottom">
          <Waveform :bars="40" />
          <span class="footer-copy">© {{ new Date().getFullYear() }} Your Name · Vue.js + NestJS + Supabase · Vercel</span>
        </div>
      </div>
    </footer>

  </main>
</template>

<script setup>
import { ref } from 'vue'
import Guestbook from '../components/Guestbook.vue'
import Waveform from '../components/Waveform.vue'

const spinning = ref(false)
const activeTrack = ref(null)

const genres = ['Lo-Fi', 'Indie', 'Jazz', 'Hip-Hop', 'Electronic', 'OPM']

const tracks = [
  { title: 'Frontend Development', skills: ['Vue.js', 'HTML5', 'CSS3', 'JavaScript'], level: 85, color: '', hex: '#e8ff00' },
  { title: 'Backend Engineering',  skills: ['NestJS', 'Node.js', 'Express', 'REST API'], level: 75, color: 'pink', hex: '#ff3d6b' },
  { title: 'Database & Cloud',     skills: ['Supabase', 'PostgreSQL', 'MySQL'], level: 70, color: 'blue', hex: '#00d4ff' },
  { title: 'DevOps & Deployment',  skills: ['Vercel', 'Render', 'Git', 'GitHub'], level: 72, color: '', hex: '#e8ff00' },
]

const projects = [
  {
    title: 'Personal Portfolio',
    desc: 'Music-themed portfolio with live guestbook, Vue.js frontend, NestJS API, and Supabase database.',
    icon: '🎵', year: '2026',
    gradient: 'linear-gradient(135deg, #1a1a2e, #16213e)',
    tags: ['Vue.js', 'NestJS', 'Supabase'],
    github: 'https://github.com/yourusername/personal-website-finals',
    live: '#'
  },
  {
    title: 'Project Two',
    desc: 'Describe your second project here. What does it do and what problem does it solve?',
    icon: '🎸', year: '2025',
    gradient: 'linear-gradient(135deg, #1a0a0a, #2e1616)',
    tags: ['React', 'Node.js', 'MySQL'],
    github: '#', live: ''
  },
  {
    title: 'Project Three',
    desc: 'Another project goes here. Keep the description short and punchy.',
    icon: '🥁', year: '2025',
    gradient: 'linear-gradient(135deg, #0a1a0a, #162e16)',
    tags: ['Python', 'Flask', 'PostgreSQL'],
    github: '#', live: ''
  }
]

const stack = [
  { title: 'Frontend', color: '#e8ff00', items: ['Vue.js 3', 'HTML5 / CSS3', 'JavaScript ES6+', 'Vite', 'Axios'] },
  { title: 'Backend',  color: '#ff3d6b', items: ['NestJS', 'Node.js', 'Express.js', 'REST APIs', 'Flask'] },
  { title: 'Database', color: '#00d4ff', items: ['Supabase', 'PostgreSQL', 'MySQL', 'Firebase'] },
  { title: 'Tools',    color: '#a78bfa', items: ['Git & GitHub', 'VS Code', 'Postman', 'Vercel', 'Render'] },
]
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr auto;
  align-items: center;
  gap: 2rem;
  padding: 7rem 4rem 0;
  max-width: 1200px;
  margin: 0 auto;
}
@media (max-width: 900px) {
  .hero { grid-template-columns: 1fr; padding: 6rem 1.5rem 0; text-align: center; }
  .vinyl-wrap { order: -1; }
}
.vinyl-wrap { display: flex; flex-direction: column; align-items: center; gap: 1.5rem; }
.vinyl {
  width: min(300px, 80vw);
  height: min(300px, 80vw);
  border-radius: 50%;
  background: repeating-radial-gradient(circle at center, #111 0px, #111 2px, #1a1a1a 2px, #1a1a1a 8px);
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 0 0 2px #222, 0 20px 60px rgba(0,0,0,0.8);
}
.vinyl.spinning { animation: spin 4s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }
.vinyl-label {
  width: 110px; height: 110px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1a1a1a, #0a0a0a);
  border: 2px solid var(--border2);
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  gap: 0.3rem; text-align: center;
}
.vinyl-title { font-size: 0.45rem; letter-spacing: 0.2em; color: var(--neon); text-transform: uppercase; }
.vinyl-artist { font-family: var(--font-display); font-size: 0.7rem; letter-spacing: 0.1em; }
.play-btn {
  background: var(--neon); color: #000; border: none;
  width: 52px; height: 52px; border-radius: 50%;
  font-size: 1.1rem; cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}
.play-btn:hover { transform: scale(1.1); box-shadow: 0 0 20px rgba(232,255,0,0.4); }
.hero-tag { font-size: 0.68rem; letter-spacing: 0.15em; color: var(--neon); margin-bottom: 1.5rem; }
.hero-name {
  font-family: var(--font-display);
  font-size: clamp(4rem, 10vw, 8rem);
  line-height: 0.9; letter-spacing: 0.03em; margin-bottom: 1.5rem;
}
.line1 { display: block; }
.line2 { display: block; color: var(--neon); }
.cursor-blink { animation: blink 1s step-end infinite; }
@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
.hero-bio { color: var(--text-muted); font-size: 0.88rem; line-height: 1.9; margin-bottom: 2rem; font-style: italic; }
.hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 2rem; }
@media (max-width: 900px) { .hero-actions { justify-content: center; } }
.btn-neon {
  background: var(--neon); color: #000; padding: 0.85rem 1.75rem;
  font-size: 0.72rem; letter-spacing: 0.15em; font-family: var(--font-body);
  transition: box-shadow 0.2s, transform 0.15s;
}
.btn-neon:hover { box-shadow: 0 0 24px rgba(232,255,0,0.35); transform: translateY(-2px); }
.btn-outline {
  border: 1px solid var(--border2); color: var(--text-muted);
  padding: 0.85rem 1.75rem; font-size: 0.72rem; letter-spacing: 0.15em;
  transition: border-color 0.2s, color 0.2s;
}
.btn-outline:hover { border-color: var(--neon); color: var(--neon); }
.now-playing {
  display: flex; align-items: center; gap: 1rem;
  padding: 0.75rem 1rem;
  border: 1px solid var(--border);
  background: var(--surface);
  max-width: fit-content;
}
@media (max-width: 900px) { .now-playing { margin: 0 auto; } }
.np-text { font-size: 0.7rem; color: var(--text-muted); }
.ticker { grid-column: 1 / -1; overflow: hidden; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); padding: 0.85rem 0; margin-top: 2rem; }
.ticker-track { display: flex; white-space: nowrap; animation: ticker 20s linear infinite; font-size: 0.68rem; letter-spacing: 0.15em; color: var(--text-muted); }
@keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }

.container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }
.section-tag { font-size: 0.68rem; letter-spacing: 0.2em; color: var(--neon); margin-bottom: 0.75rem; }
.section-heading { font-family: var(--font-display); font-size: clamp(2.5rem, 6vw, 5rem); letter-spacing: 0.04em; line-height: 1; margin-bottom: 3rem; }
.section-heading em { font-family: var(--font-serif); font-style: italic; color: var(--neon); }

.about { padding: 7rem 1.5rem; background: var(--surface); border-top: 1px solid var(--border); }
.about-grid { display: grid; grid-template-columns: 1fr 1.4fr; gap: 5rem; align-items: start; }
@media (max-width: 768px) { .about-grid { grid-template-columns: 1fr; gap: 2.5rem; } }
.eq-bars { display: flex; align-items: flex-end; gap: 4px; height: 40px; margin-top: 2rem; }
.eq-bar { flex: 1; background: var(--neon); opacity: 0.5; animation: eqAnim 0.8s ease-in-out infinite alternate; }
@keyframes eqAnim { from { height: 20%; } to { height: 100%; } }
.about-p { color: var(--text-muted); margin-bottom: 1rem; font-size: 0.88rem; line-height: 1.9; }
.hl { color: var(--neon); }
.stats-row { display: flex; gap: 2.5rem; padding: 2rem 0; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); margin: 2rem 0; }
.stat { display: flex; flex-direction: column; gap: 0.2rem; }
.stat-n { font-family: var(--font-display); font-size: 2.8rem; color: var(--neon); line-height: 1; }
.stat-l { font-size: 0.68rem; letter-spacing: 0.15em; color: var(--text-muted); text-transform: uppercase; }
.genre-label { font-size: 0.68rem; letter-spacing: 0.15em; color: var(--neon2); display: block; margin-bottom: 0.75rem; }
.genre-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.gtag { border: 1px solid var(--border2); color: var(--text-muted); padding: 0.3rem 0.75rem; font-size: 0.72rem; transition: border-color 0.2s, color 0.2s; }
.gtag:hover { border-color: var(--neon2); color: var(--neon2); }

.tracks { padding: 7rem 1.5rem; border-top: 1px solid var(--border); }
.tracklist { display: flex; flex-direction: column; }
.track-item { display: grid; grid-template-columns: 3rem 1fr auto 200px; align-items: center; gap: 1.5rem; padding: 1.25rem 1rem; border-bottom: 1px solid var(--border); transition: background 0.2s; cursor: default; }
@media (max-width: 768px) { .track-item { grid-template-columns: 2.5rem 1fr; } .track-wave, .track-level { display: none; } }
.track-item.active { background: var(--surface); }
.track-num { font-size: 0.72rem; color: var(--text-muted); }
.track-item.active .track-num { color: var(--neon); }
.track-title { font-size: 0.88rem; margin-bottom: 0.2rem; }
.track-skills { font-size: 0.72rem; color: var(--text-muted); }
.track-wave { width: 80px; }
.track-bar-static { height: 2px; width: 60px; background: var(--border2); }
.track-level { height: 3px; background: var(--border); overflow: hidden; }
.level-fill { height: 100%; transition: width 0.6s ease; }

.projects { padding: 7rem 1.5rem; background: var(--surface); border-top: 1px solid var(--border); }
.albums-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; }
.album-card { display: flex; flex-direction: column; }
.album-cover { aspect-ratio: 1; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; }
.album-art-inner { font-size: 4rem; opacity: 0.5; transition: opacity 0.3s; }
.album-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.85); display: flex; align-items: center; justify-content: center; gap: 1rem; opacity: 0; transition: opacity 0.3s; }
.album-card:hover .album-overlay { opacity: 1; }
.album-card:hover .album-art-inner { opacity: 0.1; }
.album-btn { border: 1px solid var(--text); color: var(--text); padding: 0.6rem 1.25rem; font-size: 0.72rem; letter-spacing: 0.1em; transition: background 0.2s; }
.album-btn:hover { background: var(--text); color: #000; }
.album-btn.live { border-color: var(--neon); color: var(--neon); }
.album-btn.live:hover { background: var(--neon); color: #000; }
.album-info { padding: 1.25rem 0; border-bottom: 1px solid var(--border); }
.album-num { font-size: 0.68rem; color: var(--text-muted); margin-bottom: 0.3rem; }
.album-title { font-family: var(--font-display); font-size: 1.4rem; letter-spacing: 0.05em; margin-bottom: 0.5rem; }
.album-desc { font-size: 0.8rem; color: var(--text-muted); margin-bottom: 1rem; line-height: 1.7; }
.album-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
.atag { background: var(--surface2); border: 1px solid var(--border); color: var(--text-muted); padding: 0.2rem 0.6rem; font-size: 0.68rem; }

.skills { padding: 7rem 1.5rem; border-top: 1px solid var(--border); }
.skills-header { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 3rem; gap: 2rem; }
.stack-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); border: 1px solid var(--border); }
.stack-col { padding: 2rem; border-right: 1px solid var(--border); }
.stack-col:last-child { border-right: none; }
@media (max-width: 600px) { .stack-grid { grid-template-columns: 1fr 1fr; } .stack-col:nth-child(even) { border-right: none; } .stack-col { border-bottom: 1px solid var(--border); } }
.stack-col-title { font-size: 0.68rem; letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 1.25rem; }
.stack-items { display: flex; flex-direction: column; gap: 0.6rem; }
.stack-item { display: flex; align-items: center; gap: 0.6rem; font-size: 0.82rem; color: var(--text-muted); transition: color 0.2s; }
.stack-item:hover { color: var(--text); }
.stack-dot { width: 5px; height: 5px; border-radius: 50%; flex-shrink: 0; }

footer { padding: 3rem 1.5rem 2rem; border-top: 1px solid var(--border); background: var(--surface); }
.footer-top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 2rem; gap: 1.5rem; flex-wrap: wrap; }
.footer-brand { display: flex; flex-direction: column; gap: 0.3rem; }
.footer-logo { font-family: var(--font-display); font-size: 1.5rem; letter-spacing: 0.1em; color: var(--neon); }
.footer-sub { font-size: 0.72rem; color: var(--text-muted); }
.footer-links { display: flex; gap: 1.5rem; flex-wrap: wrap; }
.footer-links a { font-size: 0.72rem; letter-spacing: 0.1em; color: var(--text-muted); transition: color 0.2s; }
.footer-links a:hover { color: var(--neon); }
.footer-bottom { display: flex; flex-direction: column; gap: 1rem; padding-top: 1.5rem; border-top: 1px solid var(--border); }
.footer-copy { font-size: 0.68rem; color: var(--text-muted); }
</style>