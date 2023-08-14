import { defineStore } from "pinia";

interface UserState {
  token: string;
  roleList: string[];
}

export const useUserStore = defineStore({
  id: "user",
  state: (): UserState => ({
    token: "",
    roleList: [],
  }),
  getters: {
    getToken(): string {
      return this.token;
    },
  },
  actions: {
    setToken(info: string | undefined) {
      this.token = info ? info : ""; // for null or undefined value
      // setAuthCache(TOKEN_KEY, info)
    },
    async login() {
      //to
    },
  },
});
