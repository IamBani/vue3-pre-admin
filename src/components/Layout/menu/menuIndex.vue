<script lang="tsx">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup(props, ctx) {
    console.log(props, ctx);
    const isCollapse = ref(false);
    return () => (
      <>
        <el-menu
          class="el-menu-vertical-demo"
          collapse={isCollapse.value}
          style={{ "--el-menu-active-color": "#f40" }}
        >
          <el-sub-menu
            index="1"
            v-slots={{
              title: () => (
                <>
                  <el-icon>
                    <location />
                  </el-icon>
                  <span>首页</span>
                </>
              ),
              default: () => (
                <>
                  <el-menu-item index="2">
                    <el-icon>
                      <setting />
                    </el-icon>
                    <span>Navigator Two</span>
                  </el-menu-item>
                </>
              ),
            }}
          ></el-sub-menu>
        </el-menu>
      </>
    );
  },
});
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 100%;
  min-height: 400px;
}
</style>
