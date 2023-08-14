<template>
  <el-aside width="250px">
    <div class="logo flex align-center justify-center">
      <Logo class="icon"></Logo>
      <span>Vue Admin Pro </span>
    </div>
    <menuIndex></menuIndex>
  </el-aside>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.logo {
  width: 100%;
  height: 60px;
  color: #fff;
  background-color: #282c34;
  .icon {
    font-size: 30px;
  }
}
</style>
