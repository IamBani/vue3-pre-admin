<template>
  <svg class="svg-icon" :class="[iconClass]" :style="{ fontSize: size }">
    <use :xlink:href="`#icon-${iconName}`" />
  </svg>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

defineProps({
  iconName: {
    type: String,
    required: true,
  },
  iconClass: {
    type: String,
  },
  size: {
    type: String,
    defalut: "20px",
  },
});
const req = require.context("@/assets/svg", false, /\.svg$/);
const importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().map(requireContext);
try {
  importAll(req);
} catch (error) {
  console.log(error);
}
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  overflow: hidden;
  fill: currentColor;
}
</style>
