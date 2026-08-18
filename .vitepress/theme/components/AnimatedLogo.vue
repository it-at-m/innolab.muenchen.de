<script setup lang="ts">
/**
 * Animated München.Digital. logo.
 *
 * The hexagon outline "fills in" as two strands growing from the two
 * open ends toward the top vertex, at the same speed segment-by-segment
 * (not by raw distance) so both sides reach each waypoint together.
 * The wordmark fades in once the hexagon is done.
 *
 * All path coordinates are copied unchanged from RIT_Basislogo_weiss.svg.
 */
import { onMounted, onUnmounted, ref } from "vue";

const props = withDefaults(
  defineProps<{
    /** Fill color of the hexagon. */
    hexColor?: string;
    /** Fill color of the "München.Digital." wordmark. */
    textColor?: string;
    /** Total duration of the hexagon fill animation, in seconds. */
    duration?: number;
  }>(),
  {
    hexColor: "#ffffff",
    textColor: "#ffffff",
    duration: 1.7,
  },
);

// All 12 corner points of the real hexagon path, in the order they
// appear in the source SVG. Naming them P0-P11 makes it easy to talk
// about which point is which when adjusting the animation.
const P: Record<number, [number, number]> = {
  0: [4.27, 370.56],
  1: [217.73, 491.66],
  2: [217.81, 412.0],
  3: [72.23, 330.22],
  4: [72.39, 164.75],
  5: [218.0, 82.9],
  6: [359.38, 165.07],
  7: [359.27, 281.43],
  8: [427.67, 281.09],
  9: [427.93, 124.52],
  10: [217.78, 3.28],
  11: [4.25, 123.99],
};

// Strand A runs from one open end (P1) up to the top vertex (P5, via P0/P11/P10/P9/P8).
const strandA = [P[1], P[0], P[11], P[10], P[9], P[8]];
// Strand B runs from the other open end (P2) up to the same top vertex (via P3/P4/P5/P6/P7).
const strandB = [P[2], P[3], P[4], P[5], P[6], P[7]];

function lerp(
  a: [number, number],
  b: [number, number],
  f: number,
): [number, number] {
  return [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f];
}

// Point on a strand at progress t (0..1), split evenly across segments
// (not by distance) so strand A and strand B always reach matching
// waypoints at the same time, even though their segments differ in length.
function pointOnStrand(
  strand: [number, number][],
  t: number,
): [number, number] {
  const segCount = strand.length - 1;
  const clampedT = Math.min(Math.max(t, 0), 1);
  const segIndex = Math.min(
    Math.max(Math.floor(clampedT * segCount), 0),
    segCount - 1,
  );
  const segFrac = clampedT * segCount - segIndex;
  return lerp(strand[segIndex], strand[segIndex + 1], segFrac);
}

function pointsUpTo(strand: [number, number][], t: number): [number, number][] {
  const segCount = strand.length - 1;
  const clampedT = Math.min(Math.max(t, 0), 1);
  const segIndex = Math.min(
    Math.max(Math.floor(clampedT * segCount), 0),
    segCount - 1,
  );
  return [...strand.slice(0, segIndex + 1), pointOnStrand(strand, clampedT)];
}

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

const polygonPoints = ref("");
const wordVisible = ref(false);
let rafId = 0;

function renderFrame(t: number) {
  const a = pointsUpTo(strandA, t);
  const b = pointsUpTo(strandB, t);
  // Strand A forward, then strand B backward, closes the ribbon-shaped
  // area growing between the two strands into one filled polygon.
  const all = [...a, ...b.reverse()];
  polygonPoints.value = all.map((p) => p.join(",")).join(" ");
}

function play() {
  cancelAnimationFrame(rafId);
  wordVisible.value = false;

  const durationMs = props.duration * 1000;
  const start = performance.now();

  function step(now: number) {
    const t = Math.min((now - start) / durationMs, 1);
    renderFrame(easeInOutCubic(t));
    if (t < 1) {
      rafId = requestAnimationFrame(step);
    } else {
      wordVisible.value = true;
    }
  }

  renderFrame(0);
  rafId = requestAnimationFrame(step);
}

defineExpose({ play });
onMounted(play);
onUnmounted(() => cancelAnimationFrame(rafId));
</script>

<template>
  <div class="animated-logo">
    <svg viewBox="0 0 725 545">
      <polygon :fill="hexColor" :points="polygonPoints" />

      <g
        class="wordmark"
        :class="{ visible: wordVisible }"
        :style="{ fill: textColor }"
      >
        <!-- "München." — paths copied unchanged from RIT_Basislogo_weiss.svg -->
        <g class="word-group" style="transition-delay: 0.05s">
          <path
            d="m290.18,338.09l28.73,66.68,29.36-66.68h10.49v76.53h-6.89v-70.7h-.21l-29.26,70.7h-6.89l-29.26-70.39h-.21v70.39h-6.89v-76.53h11.02Z"
          />
          <path
            d="m375.3,361.41h6.36v34.66c0,8.48,4.98,14.31,13.99,14.31,10.18,0,15.26-8.48,15.26-17.92v-31.06h6.36v41.98c0,.85,0,2.01.11,3.29l.42,7.95h-6.57l-.32-7.84-.21-.21c-3.71,6.57-9.75,9.65-16.64,9.65-12.51,0-18.76-8.37-18.76-21.2v-33.6Zm16.22-23v9.33h-7.84v-9.33h7.84Zm18.45,0v9.33h-7.84v-9.33h7.84Z"
          />
          <path
            d="m474.09,381.02v33.6h-6.36v-34.77c0-8.38-5.09-14.21-13.99-14.21-9.65,0-15.26,7.84-15.26,18.13v30.85h-6.36v-41.98c0-2.33,0-4.35-.53-11.24h6.57l.32,7.84.21.21c3.71-6.57,9.75-9.65,16.64-9.65,12.61,0,18.76,8.38,18.76,21.2Z"
          />
          <path
            d="m529.42,377.74h-6.89c-.53-8.16-5.72-12.08-14.52-12.08-9.33,0-15.79,9.54-15.79,22.26s6.47,22.47,15.79,22.47c7.84,0,13.89-4.66,14.52-12.4h6.89c-1.7,12.19-8.59,18.23-20.78,18.23-14.52,0-23.32-11.87-23.32-28.2s9.12-28.2,23.75-28.2c11.02,0,19.72,6.57,20.35,17.91Z"
          />
          <path
            d="m539.81,338.09h6.36v31.38h.21c3.71-6.57,9.86-9.65,16.64-9.65,12.4,0,18.76,8.16,18.76,21.2v33.6h-6.36v-34.45c0-9.12-5.19-14.52-13.99-14.52-9.75,0-15.26,7.95-15.26,18.23v30.74h-6.36v-76.53Z"
          />
          <path
            d="m641.46,389.5h-41.13c.32,13.46,7.1,20.88,18.44,20.88,7.31,0,13.67-5.3,15.37-12.72h6.68c-3.29,12.72-11.24,18.55-23.96,18.55-14.95,0-23.43-12.19-23.43-28.2s9.22-28.2,23.75-28.2c15.58,0,24.17,10.07,24.27,29.68Zm-6.89-5.83c-.85-11.34-7.21-18.02-17.38-18.02-8.9,0-15.37,6.68-16.64,18.02h34.03Z"
          />
          <path
            d="m695.41,381.02v33.6h-6.36v-34.77c0-8.38-5.09-14.21-13.99-14.21-9.65,0-15.26,7.84-15.26,18.13v30.85h-6.36v-41.98c0-2.33,0-4.35-.53-11.24h6.57l.32,7.84.21.21c3.71-6.57,9.75-9.65,16.64-9.65,12.61,0,18.76,8.38,18.76,21.2Z"
          />
          <path d="m720.75,405.51v9.12h-8.48v-9.12h8.48Z" />
        </g>

        <!-- "Digital." — paths copied unchanged from RIT_Basislogo_weiss.svg -->
        <g class="word-group" style="transition-delay: 0.15s">
          <path
            d="m306.58,444.3c9.65,0,18.97,2.33,25.76,7.53,7.53,5.83,12.19,16.43,12.19,29.47,0,17.81-7.31,31.59-21.73,37-4.45,1.7-9.86,2.33-15.37,2.33h-27.67v-76.43l26.82.11Zm-10.18,63.71c2.23,0,4.45.21,6.68.21,3.71,0,7-.21,9.12-.74,12.61-2.86,15.37-16.11,15.37-26.29s-3.29-21.84-16.64-24.17c-2.23-.42-5.72-.53-8.9-.53-1.91,0-3.82,0-5.62.11v51.41Z"
          />
          <path
            d="m372.51,444.09v13.67h-16.75v-13.67h16.75Zm-.53,22.9v53.64h-15.69v-53.64h15.69Z"
          />
          <path
            d="m421.27,474.41l.53-7.1h14.74c-.42,3.29-.53,5.83-.64,7.74,0,1.8-.11,3.39-.11,4.66v40.71c0,15.48-10.6,21.31-26.5,21.31-13.67,0-22.79-4.03-23.75-17.17h15.05c.42,4.67,3.71,7.42,9.33,7.42,5.09,0,8.37-2.33,9.65-6.47.53-1.7.85-7.1.85-10.28v-2.97c-3.5,4.66-8.06,7.31-14.52,7.31-14.52,0-22.47-12.51-22.47-26.29s7.74-26.5,22.9-26.5c6.57,0,11.45,2.23,14.95,7.63Zm-11.66,34.45c7.21,0,11.02-5.62,11.02-15.37,0-10.71-3.82-16.22-10.81-16.22-6.47,0-10.71,5.51-10.71,15.9s3.82,15.69,10.5,15.69Z"
          />
          <path
            d="m466.74,444.09v13.67h-16.75v-13.67h16.75Zm-.53,22.9v53.64h-15.69v-53.64h15.69Z"
          />
          <path
            d="m499.07,467.41h12.72v10.39h-12.72v24.28c0,5.83.95,7.84,7.21,7.84,1.91,0,2.86,0,5.19-.32v10.28c-5.19,1.38-9.54,1.7-12.19,1.7-10.39,0-15.79-3.92-15.79-13.99v-29.79h-10.28v-10.39h10.28v-10.49l15.58-5.72v16.22Z"
          />
          <path
            d="m560.98,470.91c3.39,2.97,5.19,7.53,5.19,14.1l.11,19.61c0,6.57.42,11.87,1.27,16.01h-14.21c-.21-1.38-.42-2.54-.42-3.5-.11-.95-.11-2.23-.11-3.82-3.71,5.41-8.38,8.59-16.11,8.59-3.07,0-7.21-.42-10.18-2.01-4.45-2.44-7.74-7.74-7.74-13.46,0-7.84,3.6-12.83,9.12-16.01s12.83-4.13,20.78-4.13h2.65v-2.12c0-6.15-2.54-9.43-7.84-9.43-2.76,0-5.09,1.38-6.25,3.71-.53,1.17-.74,2.44-.74,4.03h-15.37c.21-12.61,10.6-16.96,22.15-16.96,6.89,0,13.46,1.7,17.7,5.41Zm-19.29,40.81c6.57,0,9.65-6.04,9.65-13.57v-2.76l-2.76-.11c-9.65,0-14.52,3.6-14.52,8.8,0,4.35,3.18,7.63,7.63,7.63Z"
          />
          <path d="m595.85,443.99v76.64h-15.69v-76.64h15.69Z" />
          <path d="m624.05,506.53v14.1h-13.46v-14.1h13.46Z" />
        </g>
      </g>
    </svg>
  </div>
</template>

<style scoped>
.animated-logo {
  position: relative;
}

/* Soft glow behind the logo, in the current brand color. Sits behind
   the SVG (z-index below it, and the SVG has no background so the
   glow shows through around the hexagon shape). Centered on the
   hexagon mark itself (viewBox 0 0 725 545, hex spans roughly
   x:4-428 y:3-492) rather than the full wordmark box, so it doesn't
   drift toward the text. */
.animated-logo::before {
  content: "";
  position: absolute;
  left: 5%;
  right: 45%;
  top: -15%;
  bottom: -5%;
  z-index: -1;
  background: radial-gradient(
    circle,
    color-mix(in srgb, var(--vp-c-brand-1) 55%, transparent) 0%,
    color-mix(in srgb, var(--vp-c-brand-1) 20%, transparent) 45%,
    transparent 75%
  );
  filter: blur(64px);
  pointer-events: none;
}

.animated-logo svg {
  width: 100%;
  height: auto;
  overflow: visible;
  position: relative;
}

.word-group {
  opacity: 0;
  transform: translateY(8px);
  transition:
    opacity 0.5s ease-out,
    transform 0.5s ease-out;
}

.wordmark.visible .word-group {
  opacity: 1;
  transform: translateY(0);
}
</style>
