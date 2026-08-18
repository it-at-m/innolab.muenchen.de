<script setup lang="ts">
/**
 * Palette switcher for the three color themes explored for the
 * münchen.digital. relaunch. Only affects dark mode for now — see
 * custom.css for the actual `[data-palette]` overrides. The choice
 * is persisted in localStorage and applied as a `data-palette`
 * attribute on <html>, read by custom.css.
 */
import { onMounted, ref } from "vue";

type Palette = "official" | "amber" | "blue";

const STORAGE_KEY = "innolab-palette";

const palettes: { id: Palette; swatch: string; title: string }[] = [
  {
    id: "official",
    swatch: "#1e6cff",
    title: "München.Digital. (Umbragrau/Blau/Türkis)",
  },
  { id: "amber", swatch: "#f0c04b", title: "Braun + Gelb-Akzent" },
  { id: "blue", swatch: "#6fa8d6", title: "Braun + Blau + Gelb-Mini-Akzent" },
];

const active = ref<Palette>("official");

function apply(id: Palette) {
  active.value = id;
  document.documentElement.setAttribute("data-palette", id);
  try {
    localStorage.setItem(STORAGE_KEY, id);
  } catch {
    // ignore (private browsing etc.)
  }
}

onMounted(() => {
  let saved: string | null = null;
  try {
    saved = localStorage.getItem(STORAGE_KEY);
  } catch {
    // ignore
  }
  const initial = palettes.some((p) => p.id === saved)
    ? (saved as Palette)
    : "official";
  apply(initial);
});
</script>

<template>
  <div class="theme-switcher" role="group" aria-label="Farbthema">
    <button
      v-for="p in palettes"
      :key="p.id"
      type="button"
      class="theme-switcher-btn"
      :class="{ active: active === p.id }"
      :title="p.title"
      :aria-label="p.title"
      :aria-pressed="active === p.id"
      @click="apply(p.id)"
    >
      <span class="swatch" :style="{ background: p.swatch }" />
    </button>
  </div>
</template>

<style scoped>
.theme-switcher {
  position: fixed;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  z-index: var(--vp-z-index-nav, 30);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 2px;
  padding: 3px;
  border-radius: 999px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  box-shadow: var(--vp-shadow-3);
}

.theme-switcher-btn {
  appearance: none;
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  padding: 0;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.15s ease;
}

.swatch {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
}

.theme-switcher-btn:hover {
  background: var(--vp-c-default-soft);
}

.theme-switcher-btn.active {
  background: var(--vp-c-bg-elv);
  box-shadow: 0 0 0 2px var(--vp-c-brand-1);
}

@media (max-width: 640px) {
  .theme-switcher {
    top: auto;
    bottom: 16px;
    right: 12px;
    transform: none;
  }
}
</style>
