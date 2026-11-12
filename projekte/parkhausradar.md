---
title: Parkhausradar
description: Parkhausradar ist eine mobil optimierte Web-App, die die aktuelle Belegung der Parkhäuser in der Münchner Innenstadt auf einer interaktiven Karte zeigt.
---

# Parkhausradar <Badge type="tip" text="Abgeschlossen" />

Mit dem Parkhausradar sehen Bürger\*innen auf dem Smartphone, wie viele Plätze in den Parkhäusern der Münchner Innenstadt gerade frei sind.

**Zeitraum:** 2026\
**Partner:** Mobilitätsreferat

## Ausgangslage

Seit Mai 2006 ist das Parkleitsystem München Zentrum in Betrieb. Es zeigt Autofahrer\*innen vor Ort dynamisch den Weg zu freien Stellplätzen in den Parkhäusern der Altstadt und des angrenzenden Hauptbahnhofviertels.

Die Daten dazu gab es also schon lange, aber nur auf der Straße. Wer vor der Fahrt oder unterwegs auf dem Smartphone nachsehen wollte, wo noch Plätze frei sind, konnte das nicht. Dabei hilft genau das: Wer gezielt ein Parkhaus mit freien Plätzen ansteuert, muss nicht erst durch die Innenstadt kreisen.

Das wollten wir ändern.

## Unser Ansatz

Unser Ziel war, die vorhandenen Daten so schnell wie möglich digital für alle verfügbar zu machen. Statt mit einer langen Konzeptphase haben wir klein angefangen: Nach wenigen Tagen stand ein erster Prototyp, der gezeigt hat, dass sich die Daten des Parkleitsystems gut auf einer Karte darstellen lassen.

Auf dieser Grundlage haben wir das Parkhausradar mit der [Referenzarchitektur](https://github.com/it-at-m/refarch) von it@M neu aufgebaut, damit es stabil, sicher und wartbar dauerhaft betrieben werden kann. Innerhalb weniger Wochen war die Anwendung fertig.

![Desktop-Ansicht des Parkhausradars](/images/parkhausradar_desktop_screenshot.jpg)
_Die Karte zeigt alle angeschlossenen Parkhäuser mit der Zahl ihrer freien Plätze._

### Was das Parkhausradar kann

- **Karte und Liste:** Jedes Parkhaus erscheint mit einer Ampelmarkierung auf der Karte. Eine Liste zeigt alle Parkhäuser mit ihren freien Plätzen.
- **Details:** Pro Parkhaus sind die freien Plätze, die Kapazität, die Belegung in Prozent und der Zeitpunkt der letzten Aktualisierung zu sehen.
- **Route:** Mit einem Tipp öffnet sich die Route zur Einfahrt des Parkhauses in Apple Karten, Google Maps, OpenStreetMap oder Waze.
- **Teilen:** Ein Link führt direkt zu einem bestimmten Parkhaus.

![Mobile Ansicht mit Parkhausdetails](/images/parkhausradar_mobile_screenshot.jpg){width=300}
_Die Detailansicht eines Parkhauses auf dem Smartphone._

### Open Source

Der [Quellcode](https://github.com/it-at-m/Parkhausradar) ist unter der MIT-Lizenz auf GitHub veröffentlicht. Die Belegungsdaten speichern wir im offenen Standard OGC SensorThings API. So kann das Parkhausradar auch anderen Kommunen als Grundlage für ähnliche Anwendungen dienen.

## Was wir gelernt haben

**Erst ausprobieren, dann sauber bauen.** Der schnelle Prototyp hat früh gezeigt, dass die Idee funktioniert. Für den dauerhaften Betrieb haben wir ihn aber nicht weiterentwickelt, sondern auf Basis der Referenzarchitektur neu aufgebaut. Templates, Gateway und Pipelines waren damit schon vorhanden und wir konnten uns auf die eigentlichen Funktionen konzentrieren.


## Nächste Schritte

Über eine [Umfrage](https://umfrage.muenchen.de/index.php/577876) direkt in der App sammeln wir Feedback, um das Parkhausradar weiter zu verbessern.

Da alle Messwerte gespeichert werden, sind künftig auch Auswertungen über längere Zeiträume möglich, zum Beispiel, zu welchen Tageszeiten die Parkhäuser besonders voll sind.

Wir bedanken uns beim Mobilitätsreferat für die gute Zusammenarbeit.
