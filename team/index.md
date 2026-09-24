---
title: Team
description: Das Team hinter dem InnoLab München.
---

<script setup>
import { VPTeamMembers } from "vitepress/theme";

const placeholder = "/images/avatar-placeholder.svg";

const members = [
    { avatar: placeholder, name: "Vorname Nachname", title: "Kommisarische Leitung" },
  { avatar: placeholder, name: "Vorname Nachname", title: "UI/UX Designer", desc: "Stellvertretende Leitung" },
  { avatar: placeholder, name: "Vorname Nachname", title: "UI/UX Designerin" },
  { avatar: placeholder, name: "Vorname Nachname", title: "Projektmanagerin Innovationsprojekte" },
  { avatar: placeholder, name: "Vorname Nachname", title: "Kommunikationsmanagerin" },
  { avatar: placeholder, name: "Vorname Nachname", title: "Kommunikationsmanager" },
  { avatar: placeholder, name: "Vorname Nachname", title: "Technical Prototyper" },
  { avatar: placeholder, name: "", title: "Technical Prototyper" },
  { avatar: placeholder, name: "Vorname Nachname", title: "Nachwuchskraft" },
];
</script>

# Team

Wir sind das InnoLab von it@M. Gemeinsam mit Kolleg\*innen der Stadtverwaltung
entwickeln wir Prototypen - von der Anwendung bis zum Hardware-Aufbau -, testen
sie früh mit den Menschen, die später damit arbeiten, und verbessern sie anhand
echter Nutzung.

<VPTeamMembers size="small" :members="members" />
