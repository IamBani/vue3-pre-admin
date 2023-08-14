<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import en from "element-plus/dist/locale/en.mjs";

const language = ref("zh-cn");
const locale = computed(() => {
  return language.value === "zh-cn" ? zhCn : en;
});
// const changer = () => {
//   language.value = language.value === "zh-cn" ? "en" : "zh-cn";
// };
</script>
