import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";
const base = "http://localhost:3000";

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
      lastName: "",
      ok:false
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
        if (
          !this.login.email.match(
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
          )
        )
          throw { name: "Must be an email format" };
        if (this.login.password.length < 8) {
          throw { name: "Password Length must be greater than 8" };
        } else {
          console.log(this.login);
        }
      } catch ({ name }) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: name,
        });
      }
    },
    async registerAccount() {
      try {
        // await axios({
        //   url: `${base}/register`,
        //   method: "post",             //! Register with axios/Http Request(Example)
        //   data: this.register,
        // });
        if (
          !this.register.email.match(
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
          )
        )
          throw { name: "Must be an email format" };
        if (this.register.password.length < 8) {
          throw { name: "Password Length must be greater than 8" };
        } else if (!this.register.ok) {
          throw { name : "Tick the check box please"}
        } else {
          console.log(this.register);
          this.router.push("/");
        }
      } catch ({ name }) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: name,
        });
      }
    },
  },
});
