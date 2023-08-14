<template>
  <el-breadcrumb separator-icon="ArrowRight">
    <el-breadcrumb-item v-for="item in list" :key="item.name">{{
      item.name
    }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
export interface List {
  icon?: string;
  path: string;
  name: string;
}
import { defineProps, PropType } from "vue";

defineProps({
  list: {
    type: Array as PropType<List[]>,
    defalut: [],
  },
});
</script>
