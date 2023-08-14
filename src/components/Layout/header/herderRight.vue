<template>
  <el-space class="space" size="large">
    <el-icon class="pointer"><Search /></el-icon>
    <el-icon class="pointer"><FullScreen /></el-icon>
    <Svg size="14px" class="pointer" iconName="language"></Svg>
    <el-icon class="pointer"><Refresh /></el-icon>
    <el-dropdown class="dropdown" @visible-change="isanimate = !isanimate">
      <div class="flex align-center pointer dropdownDefalut">
        <el-avatar :size="50" :src="circleUrl">
          <img
            src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
          />
        </el-avatar>
        <div style="margin-left: 10px" class="flex align-center">
          <span>admin</span>
          <el-icon
            class="vab-dropdown"
            style="margin-left: 3px"
            :class="isanimate ? 'animate__rotate' : ''"
            ><ArrowDown
          /></el-icon>
        </div>
      </div>

      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="User">个人中心</el-dropdown-item>
          <el-dropdown-item icon="SwitchButton">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </el-space>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const isanimate = ref(false);
const circleUrl = ref("https://i.gtimg.cn/club/item/face/img/2/16022_100.gif");
</script>

<style lang="scss" scoped>
.space {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.dropdown:focus-visible,
.dropdownDefalut:focus-visible {
  outline-width: 0;
}
.dropdown {
  .vab-dropdown {
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), border 0s,
      color 0.1s, font-size 0s;
  }
  .animate__rotate {
    transform: rotate(180deg);
  }
}
</style>
