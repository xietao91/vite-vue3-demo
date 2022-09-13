<script setup>
import {
  WebGLRenderer,
  PerspectiveCamera,
  Scene,
  LineBasicMaterial,
  Vector3,
  BufferGeometry,
  Line,
} from "three";

const lineContainer = ref();
const renderer = new WebGLRenderer();
console.log(lineContainer);
const scene = new Scene();
const rendererWidth = 500;
const rendererHeight = 500;

watch(() => {
  if (lineContainer && lineContainer.value) {
    lineContainer.value.appendChild(renderer.domElement);
  }
});

renderer.setSize(rendererWidth, rendererHeight);

const camera = new PerspectiveCamera(
  45,
  rendererWidth / rendererHeight,
  1,
  500
);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);
const material = new LineBasicMaterial({ color: 0x0000ff });
const points = [];
points.push(new Vector3(-10, 0, 0));
points.push(new Vector3(0, 10, 0));
points.push(new Vector3(10, 0, 0));
const geometry = new BufferGeometry().setFromPoints(points);
const line = new Line(geometry, material);
scene.add(line);
renderer.render(scene, camera);
</script>

<template>
  <div class="line-container" ref="lineContainer"></div>
</template>

<style lang="less" scoped>
.line-container {
  width: 500px;
  height: 500px;
}
</style>
