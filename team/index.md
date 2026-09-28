---
title: Team
description: Das Team hinter dem InnoLab München.
prev: false
next: false
---

<script setup>
import { VPTeamMembers } from "vitepress/theme";

const placeholder = "/images/avatar-placeholder.svg";

// Beispielprofile: Namen, Rollen und weitere Einträge hier ersetzen oder ergänzen.
const members = [
  { avatar: placeholder, name: "Vorname Nachname", title: "Leitung und Strategie" },
  { avatar: placeholder, name: "Vorname Nachname", title: "Projektleitung und Innovationsmanagement" },
  { avatar: placeholder, name: "Vorname Nachname", title: "Technologie und Prototyping" },
  { avatar: placeholder, name: "Vorname Nachname", title: "Technologie und Prototyping" },
  { avatar: placeholder, name: "Vorname Nachname", title: "UX und Interface Design" },
  { avatar: placeholder, name: "Vorname Nachname", title: "UX und Interface Design" },
  { avatar: placeholder, name: "Vorname Nachname", title: "Kommunikation und Community" },
  { avatar: placeholder, name: "Vorname Nachname", title: "Kommunikation und Community" },
];
</script>

# Team

Wir sind das InnoLab von it@M. Gemeinsam mit Kolleg\*innen der Stadtverwaltung
entwickeln wir Prototypen - von der Anwendung bis zum Hardware-Aufbau -, testen
sie früh mit den Menschen, die später damit arbeiten, und verbessern sie anhand
echter Nutzung.

<VPTeamMembers size="small" :members="members" />
