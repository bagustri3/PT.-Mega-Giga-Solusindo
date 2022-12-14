import { defineStore } from 'pinia'
import axios from "axios"
const base = "http://localhost:3000"

export const useAccountStore = defineStore("account", {
  state: () => ({
    login: {
      email: "",
      password: "",
    },
    register: {
      email: "",
      password: "",
      firstName: "",
      lastName: ""
    },
  }),
  actions: {
    async loginAccount() {
      try {
        // const { data } = await axios({
        //   url: `${base}/login`,
        //   method: "post",              //! Login with axios/Http Request(Example)
        //   data: this.login,
        // });
        // localStorage.setItem("access_token", data.access_token);
        // this.router.push("/");
        console.log(this.login)
      } catch (error) {
        console.log(error)
      }
    },
    async registerAccount() {
      try {
        // await axios({
        //   url: `${base}/users/register`,
        //   method: "post",             //! Register with axios/Http Request(Example)
        //   data: this.register,
        // });
        this.router.push("/login");
        console.log(this.register)
      } catch (error) {
        console.log(error)
      }
    },
    logout() {
      localStorage.clear();
      this.router.push("/login");
    },
  },
});
