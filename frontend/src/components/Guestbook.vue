<template>
  <section id="guestbook">
    <div class="container">
      <div class="section-tag">// GUESTBOOK</div>
      <h2 class="section-title">DROP A NOTE</h2>
      <p class="section-sub">Leave a message. All messages are stored live in the database.</p>

      <div class="gb-layout">
        <div class="gb-form-side">
          <div class="form-header">
            <Waveform :bars="20" color="pink" />
            <span class="form-label">NEW MESSAGE</span>
          </div>
          <form @submit.prevent="submitComment" class="gb-form">
            <div class="field">
              <label>// name</label>
              <input v-model="form.name" type="text" placeholder="your name here" required />
            </div>
            <div class="field">
              <label>// message</label>
              <textarea v-model="form.message" rows="5" placeholder="say something..." required></textarea>
            </div>
            <button type="submit" :disabled="loading" class="btn-send">
              <span v-if="!loading">SEND_MESSAGE() →</span>
              <span v-else>sending...</span>
            </button>
            <div v-if="success" class="feedback ok">✓ message delivered</div>
            <div v-if="error" class="feedback err">✗ {{ error }}</div>
          </form>
        </div>

        <div class="gb-comments-side">
          <div class="comments-header">
            <span class="form-label">MESSAGES [ {{ comments.length }} ]</span>
          </div>
          <div v-if="fetchLoading" class="state-msg">loading messages...</div>
          <div v-else-if="comments.length === 0" class="state-msg">no messages yet. be the first.</div>
          <transition-group name="msg" tag="div" class="comments-list">
            <div v-for="c in comments" :key="c.id" class="comment">
              <div class="comment-top">
                <span class="c-avatar">{{ c.name.charAt(0).toUpperCase() }}</span>
                <span class="c-name">{{ c.name }}</span>
                <span class="c-date">{{ formatDate(c.created_at) }}</span>
              </div>
              <p class="c-msg">{{ c.message }}</p>
            </div>
          </transition-group>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import Waveform from './Waveform.vue'

const API = import.meta.env.VITE_API_URL || '/api'
const comments = ref([])
const fetchLoading = ref(true)
const loading = ref(false)
const success = ref(false)
const error = ref('')
const form = ref({ name: '', message: '' })

async function fetchComments() {
  try {
    const res = await axios.get(`${API}/comments`)
    comments.value = res.data
  } catch (e) {
    console.error(e)
  } finally {
    fetchLoading.value = false
  }
}

async function submitComment() {
  loading.value = true
  success.value = false
  error.value = ''
  try {
    const res = await axios.post(`${API}/comments`, form.value)
    comments.value.unshift(res.data)
    form.value = { name: '', message: '' }
    success.value = true
    setTimeout(() => { success.value = false }, 4000)
  } catch (e) {
    error.value = 'something went wrong. try again.'
  } finally {
    loading.value = false
  }
}

function formatDate(d) {
  return new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

onMounted(fetchComments)
</script>

<style scoped>
section {
  padding: 7rem 1.5rem;
  background: var(--surface);
  border-top: 1px solid var(--border);
}
.container { max-width: 1200px; margin: 0 auto; }
.section-tag { font-size: 0.7rem; letter-spacing: 0.2em; color: var(--neon2); margin-bottom: 0.75rem; }
.section-title {
  font-family: var(--font-display);
  font-size: clamp(3rem, 8vw, 6rem);
  letter-spacing: 0.05em;
  line-height: 1;
  margin-bottom: 0.75rem;
}
.section-sub { color: var(--text-muted); margin-bottom: 3.5rem; font-size: 0.82rem; }
.gb-layout {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 3rem;
}
@media (max-width: 768px) { .gb-layout { grid-template-columns: 1fr; } }
.form-header { display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem; }
.form-label { font-size: 0.68rem; letter-spacing: 0.2em; color: var(--text-muted); }
.gb-form { display: flex; flex-direction: column; gap: 1.25rem; }
.field { display: flex; flex-direction: column; gap: 0.4rem; }
label { font-size: 0.7rem; letter-spacing: 0.15em; color: var(--neon2); }
input, textarea {
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--border2);
  color: var(--text);
  padding: 0.75rem 0;
  font-family: var(--font-body);
  font-size: 0.88rem;
  outline: none;
  transition: border-color 0.2s;
  resize: none;
}
input:focus, textarea:focus { border-bottom-color: var(--neon2); }
input::placeholder, textarea::placeholder { color: var(--text-muted); }
.btn-send {
  background: var(--neon2);
  color: #fff;
  border: none;
  padding: 1rem 1.5rem;
  font-family: var(--font-body);
  font-size: 0.78rem;
  letter-spacing: 0.15em;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.1s;
  text-align: left;
}
.btn-send:hover:not(:disabled) { opacity: 0.85; transform: translateX(4px); }
.btn-send:disabled { opacity: 0.5; cursor: not-allowed; }
.feedback { font-size: 0.78rem; padding: 0.5rem 0; }
.feedback.ok { color: var(--neon); }
.feedback.err { color: var(--neon2); }
.comments-header { margin-bottom: 1.5rem; }
.state-msg { color: var(--text-muted); font-size: 0.82rem; padding: 2rem 0; }
.comments-list { display: flex; flex-direction: column; max-height: 480px; overflow-y: auto; }
.comment { padding: 1.25rem 0; border-bottom: 1px solid var(--border); }
.comment-top { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.6rem; }
.c-avatar {
  width: 28px; height: 28px;
  background: var(--neon2);
  color: #fff;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.75rem; font-weight: bold; flex-shrink: 0;
}
.c-name { font-size: 0.82rem; }
.c-date { font-size: 0.68rem; color: var(--text-muted); margin-left: auto; }
.c-msg { color: var(--text-muted); font-size: 0.82rem; line-height: 1.6; }
.msg-enter-from { opacity: 0; transform: translateY(-8px); }
.msg-enter-active { transition: all 0.3s; }
</style>