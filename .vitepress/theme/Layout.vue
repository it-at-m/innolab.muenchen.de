<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import AnimatedLogo from "./components/AnimatedLogo.vue";
import ThemeSwitcher from "./components/ThemeSwitcher.vue";

const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #home-hero-info-before>
      <p class="hero-eyebrow">Stabsstelle im IT-Referat</p>
    </template>
    <template #home-hero-image>
      <div style="width: 360px; margin-left: 220px">
        <AnimatedLogo duration="0.8" />
      </div>
    </template>
  </Layout>
  <ThemeSwitcher />
</template>
