<script>
import { mapActions, mapWritableState } from "pinia"
import { useAccountStore } from "../stores/account"
export default {
  created() {
    console.log("Login Page Maaf Pak/Bu saya ga jago styling jadi saya pake bootstrap")
  },
  methods: {
    ...mapActions(useAccountStore, ["loginAccount"])
  },
  computed: {
    ...mapWritableState(useAccountStore, ["login"])
  }
}
</script>

<template>
  <section class="vh-100">
    <div class="mask d-flex align-items-center h-100">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-9 col-lg-7 col-xl-6">
            <div class="card" style="border-radius: 15px;">
              <div class="card-body p-5">
                <h2 class="text-uppercase text-center mb-5">Login to your account</h2>
                <form>
                  <div class="form-outline mb-4">
                    <input v-model="login.email" type="email" id="form3Example3cg" class="form-control form-control-lg"
                      required/>
                    <label class="form-label" for="form3Example3cg">Your Email</label>
                  </div>
                  <div class="form-outline mb-4">
                    <input v-model="login.password" type="password" id="form3Example4cg"
                      class="form-control form-control-lg" required v-bind:minlength="8"/>
                    <label class="form-label" for="form3Example4cg">Password</label>
                  </div>
                  <div class="d-flex justify-content-center">
                    <button type="submit" @click.prevent="loginAccount" 
                      class="btn btn-info btn-block btn-lg">Login</button>
                  </div>
                  <p class="text-center text-muted mt-5 mb-0">Dont have an account?<RouterLink to="/register" href="#!"
                      class="fw-bold text-body"><u> Register</u></RouterLink>
                  </p>
                  <p class="text-center text-muted mt-3 mb-0">Forgotten your password?<RouterLink to="/recovery"
                      href="#!" class="fw-bold text-body"><u> Recover Password</u></RouterLink>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.gradient-custom-3 {
  background: #84fab0;

  background: -webkit-linear-gradient(to right, rgba(132, 250, 176, 0.5), rgba(143, 211, 244, 0.5));

  background: linear-gradient(to right, rgba(132, 250, 176, 0.5), rgba(143, 211, 244, 0.5))
}

.gradient-custom-4 {
  background: #84fab0;

  background: -webkit-linear-gradient(to right, rgba(132, 250, 176, 1), rgba(143, 211, 244, 1));

  background: linear-gradient(to right, rgba(132, 250, 176, 1), rgba(143, 211, 244, 1))
}
</style>