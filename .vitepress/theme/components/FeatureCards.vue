<script setup lang="ts">
import { FileText, FlaskConical, ChartBarIncreasing, Users } from "@lucide/vue";

interface Card {
  href: string;
  icon: typeof FileText;
  title: string;
  description: string;
  cta: string;
}

const cards: Card[] = [
  {
    href: "/blog/",
    icon: FileText,
    title: "Blog",
    description:
      "Aktuelles zu unseren Projekten, Aktivitäten und Neuigkeiten aus dem Lab.",
    cta: "Zum Blog",
  },
  {
    href: "/projekte/",
    icon: FlaskConical,
    title: "Projekte",
    description:
      "Prototypen und Verfahren, die Prozesse der Stadtverwaltung unterstützen.",
    cta: "Projekte entdecken",
  },
  {
    href: "/hackathons/",
    icon: ChartBarIncreasing,
    title: "Hackathons",
    description:
      "Rahmenbedingungen und Beispiele für Hackathons in der Stadtverwaltung.",
    cta: "Hackathons ansehen",
  },
  {
    href: "/team/",
    icon: Users,
    title: "Team",
    description: "Das Team hinter dem InnovationLab.",
    cta: "Team treffen",
  },
];
</script>

<template>
  <div class="feature-grid">
    <a v-for="card in cards" :key="card.href" class="feature-card" :href="card.href">
      <div class="card-heading">
        <div class="card-icon">
          <component :is="card.icon" :size="22" :stroke-width="1.75" />
        </div>
        <h3>{{ card.title }}</h3>
      </div>
      <p>{{ card.description }}</p>

      <span class="go">
        {{ card.cta }}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </span>
    </a>
  </div>
</template>

<style scoped>
.feature-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 24px 0;
}

@media (max-width: 960px) {
  .feature-grid {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 560px) {
  .feature-grid {
    grid-template-columns: 1fr;
  }
}

.feature-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  padding: 28px 24px;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;
}
.feature-card:hover {
  background: var(--vp-c-bg-alt);
  border-color: var(--vp-c-brand-1);
  transform: translateY(-3px);
  box-shadow: 0 8px 20px -8px rgba(0, 0, 0, 0.18);
}

.card-heading {
  display: flex;
  align-items: center;
  gap: 10px;
}

.card-icon {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--vp-c-text-1);
}
.feature-card:hover .card-icon {
  color: var(--vp-c-brand-1);
}

.feature-card h3 {
  font-size: 15.5px;
  margin: 0;
  font-weight: 600;
  letter-spacing: -0.01em;
}
.feature-card p {
  font-size: 13.5px;
  line-height: 1.55;
  color: var(--vp-c-text-2);
  margin: 0;
}

.go {
  margin-top: auto;
  font-size: 12.5px;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  display: inline-flex;
  align-items: center;
  gap: 4px;
  opacity: 0;
  transform: translateY(4px);
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}
.feature-card:hover .go {
  opacity: 1;
  transform: translateY(0);
}
.go svg {
  width: 13px;
  height: 13px;
  transition: transform 0.2s ease;
}
.feature-card:hover .go svg {
  transform: translateX(2px);
}

@media (prefers-reduced-motion: reduce) {
  .feature-card,
  .card-icon,
  .go,
  .go svg {
    transition: none !important;
  }
}
</style>
