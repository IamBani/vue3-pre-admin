<template>
  <el-container class="layout-container">
    <asideIndex></asideIndex>
    <el-container direction="vertical">
      <HeaderIndex />
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.layout-container {
  height: 100vh;
}
</style>
