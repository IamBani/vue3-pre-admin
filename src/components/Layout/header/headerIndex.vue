<template>
  <el-header>
    <el-row align="middle" class="h100">
      <el-col :span="12" class="flex align-center">
        <el-icon size="16px" color="rgba(0,0,0,.65)" class="pointer fold-icon"
          ><Fold
        /></el-icon>
        <Breadcrumb :list="list"></Breadcrumb>
      </el-col>
      <el-col :span="12">
        <herderRight></herderRight>
      </el-col>
    </el-row>
  </el-header>
  <el-header height="50px" class="herder-tabs">
    <el-row class="h100">
      <el-col :span="24"><div class="grid-content ep-bg-purple" /></el-col>
    </el-row>
  </el-header>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import type { List } from "../../Breadcrumb.vue";
const list = reactive<List[]>([
  {
    path: "/",
    name: "组件",
  },
  {
    path: "/",
    name: "秃瓢",
  },
  {
    path: "、",
    name: "小清新秃瓢",
  },
]);
</script>

<style lang="scss" scoped>
.fold-icon {
  margin-right: 20px;
}
.herder-tabs {
  border-top: 1px solid #f6f6f6;
}
</style>
