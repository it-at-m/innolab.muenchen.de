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
    { avatar: "/images/people/z.png", name: "Zaim Sari", title: "Kommisarische Leitung" },
  { avatar: "/images/people/si.JPG", name: "Simon Grasmeier", title: "UI/UX Designer & Stellv. Leitung", desc: "" },
  { avatar: "/images/people/m.jpg", name: "Ramona Deuber", title: "UI/UX Designerin" },
  { avatar: "/images/people/sa.png", name: "Sabrina Rehman", title: "Projektmanagerin Innovationsprojekte" },
  { avatar: "/images/people/f.jpg", name: "Franca Brüse", title: "Kommunikationsmanagerin" },
  /*{ avatar: placeholder, name: "\b", title: "Kommunikationsmanager" }, */
  { avatar: "/images/people/d.jpeg", name: "Daniel Nischwitz", title: "Technical Prototyper" },
  /*{ avatar: placeholder, name: "Lukas", title: "Nachwuchskraft" },*/
];
</script>

# Team

Wir sind das InnovationLab des IT-Referats. Wir probieren Neues aus, bauen Prototypen und testen sie mit den Menschen, die sie später nutzen.

<VPTeamMembers size="small" :members="members" />
