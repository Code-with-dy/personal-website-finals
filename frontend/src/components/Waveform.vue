<template>
  <div class="waveform" :class="color">
    <span v-for="i in bars" :key="i" class="bar"
      :style="{ animationDelay: `${(i * 0.07) % 1}s` }">
    </span>
  </div>
</template>

<script setup>
defineProps({ bars: { default: 32 }, color: { default: '' } })
</script>

<style scoped>
.waveform {
  display: flex;
  align-items: center;
  gap: 3px;
  height: 40px;
}
.bar {
  flex: 1;
  background: var(--neon);
  opacity: 0.5;
  min-height: 4px;
  animation: wave 1.2s ease-in-out infinite alternate;
}
.waveform.pink .bar { background: var(--neon2); }
.waveform.blue .bar { background: var(--neon3); }
@keyframes wave {
  from { height: 20%; }
  to { height: 100%; }
}
</style>