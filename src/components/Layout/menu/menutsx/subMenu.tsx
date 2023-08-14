import { defineComponent } from "vue";

export default defineComponent({
  name: "subMenu",
  setup() {
    return () => (
      <el-sub-menu index={"9"}>
        {{
          title: () => (
            <>
              <el-icon>
                <location />
              </el-icon>
              <span>Navigator One</span>
            </>
          ),
        }}
      </el-sub-menu>
    );
  },
});

<style></style>;
