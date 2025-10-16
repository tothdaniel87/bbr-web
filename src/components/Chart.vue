<script setup lang="ts">
import {ref, computed} from 'vue';

interface Points {
  [key: number]: number;
}

/*let points = ref<Points>({
  40: 260,
  140: 210,
  240: 140,
  360: 130,
  500: 90,
});*/

const midHeight = 180;
const magnification = 1.5;

function heightMag(height: number) {
  return (height-midHeight)*magnification+midHeight;
}

let points = ref<Points>({
  40: heightMag(260),
  140: heightMag(220),
  240: heightMag(140),
  360: heightMag(130),
  500: heightMag(90),
});

function calculateIntermediatePoint(x1: number, y1: number, x2: number, y2: number, t: number): [number, number] {
  const x = x1 + (x2 - x1) * t;
  const y = y1 + (y2 - y1) * t;
  return [x, y];
}

function subDivide(pointList: Points, subdivisions: number = 2): Points {
  const result: Points = {};
  const entries = Object.entries(pointList);

  for (let i = 0; i < entries.length - 1; i++) {
    const [x1, y1] = [Number(entries[i][0]), entries[i][1]];
    const [x2, y2] = [Number(entries[i + 1][0]), entries[i + 1][1]];

    result[x1] = y1;

    for (let j = 1; j < subdivisions; j++) {
      const t = j / subdivisions;
      const [x, y] = calculateIntermediatePoint(x1, y1, x2, y2, t);
      result[x] = y;
    }
  }

  const lastPoint = entries[entries.length - 1];
  result[Number(lastPoint[0])] = lastPoint[1];

  return result;
}

const allPoints = computed(() => {
  //return points.value;
  return subDivide(points.value);
});

const polylineText = computed(() => {
  const entries = Object.entries(allPoints.value);
  let text = '';
  for (let i = 0; i < entries.length; i++) {
    let [x1, y1] = [Number(entries[i][0]), entries[i][1]];
    text += `${x1},${y1} `;
  }

  return text;
});

const pathText = computed(() => {
  const entries = Object.entries(allPoints.value);
  let text = "M " + Number(entries[0][0]) + ' ' + entries[0][1] + ' ';
  text += "Q " + (Number(entries[1][0])-20) + ' ' + (entries[1][1]-5) + ' ' + Number(entries[1][0]) + ' ' + entries[1][1] + ' ';

  for (let i = 2; i < entries.length; i++) {
    let [x1, y1] = [Number(entries[i][0]), entries[i][1]];
    text += `T ${x1} ${y1} `;
  }

  return text;
})

console.log(allPoints.value);
console.log(polylineText.value);
console.log(pathText.value);

</script>

<template>
  <svg width="100%" height="100%" viewBox="0 0 540 320" xmlns="http://www.w3.org/2000/svg">
    <!-- axis
    <line x1="30" y1="280" x2="520" y2="280" stroke="#000" stroke-width="1"/>
    <line x1="30" y1="280" x2="30"  y2="40"  stroke="#000" stroke-width="1"/> -->
    <!-- linear
    <polyline fill="none" stroke="#2b7cff" stroke-width="3" stroke-linejoin="round" stroke-linecap="round" :points="polylineText"/> -->
    <path :d="pathText" fill="none" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="stroke-black/10" />
    <path :d="pathText" fill="none" stroke="#000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="move" />
    <!-- points
    <g fill="#111">
      <circle v-for="(value, key) in allPoints" :key="key" :cx="key" :cy="value" r="5"/>
    </g> -->
  </svg>
</template>

<style scoped>
path.move {
  stroke-dasharray: 500;
  animation: move 30s linear infinite;
}

@keyframes move {
  to {
    stroke-dashoffset: -2000;
  }
}
</style>