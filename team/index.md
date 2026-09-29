---
title: Team
description: Das Team hinter dem InnoLab München.
prev: false
next: false
---

<script setup>
import { VPTeamMembers } from "vitepress/theme";

const placeholder = "/images/avatar-placeholder.svg";

const members = [
    { avatar: "/public/images/people/z.png", name: "Zaim Sari", title: "Kommisarische Leitung" },
  { avatar: "/public/images/people/si.JPG", name: "Simon Grasmeier", title: "UI/UX Designer & Stellv. Leitung", desc: "" },
  { avatar: "/public/images/people/m.jpg", name: "Ramona Deuber", title: "UI/UX Designerin" },
  { avatar: "/public/images/people/sa.png", name: "Sabrina Rehman", title: "Projektmanagerin Innovationsprojekte" },
  { avatar: "/public/images/people/f.jpg", name: "Franca Brüse", title: "Kommunikationsmanagerin" },
  /*{ avatar: placeholder, name: "\b", title: "Kommunikationsmanager" }, */
  { avatar: "/public/images/people/d.jpeg", name: "Daniel Nischwitz", title: "Technical Prototyper" },
  { avatar: placeholder, name: "Lukas", title: "Nachwuchskraft" },
];
</script>

# Team

Wir sind das InnoLab von it@M. Gemeinsam mit Kolleg\*innen der Stadtverwaltung
entwickeln wir Prototypen - von der Anwendung bis zum Hardware-Aufbau -, testen
sie früh mit den Menschen, die später damit arbeiten, und verbessern sie anhand
echter Nutzung.

<VPTeamMembers size="small" :members="members" />
