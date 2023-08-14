<template>
  <div class="container">
    <img class="wave" :src="wave" alt="" />
    <div class="img">
      <img :src="bg" alt="" />
    </div>
    <div class="form-login">
      <div class="content">
        <div>
          <img :src="avatar" alt="" class="avatar" />
        </div>
        <h2>登录</h2>
        <el-form
          ref="formRef"
          :model="dynamicValidateForm"
          size="large"
          class="demo-dynamic"
        >
          <el-form-item prop="name" label="">
            <el-input
              placeholder="请输入账号"
              prefix-icon="User"
              v-model="dynamicValidateForm.name"
            />
          </el-form-item>

          <el-form-item prop="pwd" label="">
            <el-input
              prefix-icon="Lock"
              type="password"
              placeholder="请输入密码"
              v-model="dynamicValidateForm.pwd"
            />
          </el-form-item>
          <el-form-item>
            <el-button
              :loading="loading"
              style="width: 100%"
              type="primary"
              @click="submitForm()"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import wave from "@/assets/img/wave.png";
import avatar from "@/assets/img/avatar.png";
import bg from "@/assets/img/bg.png";
import { ref, unref } from "vue";
import { userLogin } from "@/http/api/login";

import type { FormInstance } from "element-plus";
const formRef = ref<FormInstance>();
const dynamicValidateForm = ref({
  name: "admin",
  pwd: "123456",
});
const loading = ref(false);
const submitForm = async () => {
  const data = await formRef.value?.validate();
  if (!data) {
    return;
  }
  try {
    loading.value = true;
    const { name, pwd: password } = unref(dynamicValidateForm);
    userLogin({
      name,
      password,
    });
  } catch (error) {
    //todo
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped lang="scss">
.container {
  height: 100vh;
  width: 100vw;
  padding: 0 32px;
  display: flex;
  // justify-content: space-around;
  .wave {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    z-index: -1;
  }
  .img {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
    img {
      width: 500px;
    }
  }
  .form-login {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    .content {
      width: 360px;
      .avatar {
        height: 100px;
      }
    }
  }
}
</style>
