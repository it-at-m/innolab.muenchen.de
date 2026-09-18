<script setup lang="ts">
import DefaultTheme from "vitepress/theme";

import AnimatedLogo from "./components/AnimatedLogo.vue";
import ThemeSwitcher from "./components/ThemeSwitcher.vue";

const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #home-hero-image>
      <div class="home-logo">
        <AnimatedLogo duration="0.8" />
      </div>
    </template>
  </Layout>
  <ThemeSwitcher />
</template>
