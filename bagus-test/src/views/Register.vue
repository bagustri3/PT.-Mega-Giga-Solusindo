<script>
import { RouterLink } from 'vue-router';
import { mapActions, mapWritableState } from 'pinia';
import { useAccountStore } from '../stores/account';
export default {
    created (){
        console.log("Ini register page pak/bu, maaf saya ga jago styling jadi saya pakai bootstrap juga")
    },
    methods: {
        ...mapActions(useAccountStore, ["registerAccount"])
    },
    computed: {
        ...mapWritableState(useAccountStore, ["register"])
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
                                <h2 class="text-uppercase text-center mb-5">Create Your account</h2>
                                <form>

                                    <div class="form-outline mb-4">
                                        <input v-model="register.firstName" type="text" id="form3Example1cg" class="form-control form-control-lg" required/>
                                        <label class="form-label" for="form3Example1cg">First Name</label>
                                    </div>
                                    <div class="form-outline mb-4">
                                        <input v-model="register.lastName" type="text" id="form3Example3cg" class="form-control form-control-lg" required/>
                                        <label class="form-label" for="form3Example3cg">Last Name</label>
                                    </div>
                                    <div class="form-outline mb-4">
                                        <input v-model="register.email" type="email" id="form3Example3cg" class="form-control form-control-lg" required/>
                                        <label class="form-label" for="form3Example3cg">Email Address</label>
                                    </div>
                                    <div class="form-outline mb-4">
                                        <input v-model="register.password" type="password" id="form3Example4cg"
                                            class="form-control form-control-lg" required v-bind:minlength="8"/>
                                        <label class="form-label" for="form3Example4cg">Password</label>
                                    </div>
                                    <div class="form-check d-flex justify-content-center mb-5">
                                        <input class="form-check-input me-2" type="checkbox" value=""
                                            id="form2Example3cg" required/>
                                        <label class="form-check-label" for="form2Example3g">
                                            To register with us please tick to agree to our<a href="#!" class="text-body"><br><u>Terms and Conditions.</u></a>
                                        </label>
                                    </div>

                                    <div class="d-flex justify-content-center">
                                        <button @click="registerAccount" type="submit"
                                            class="btn btn-info btn-block btn-lg text-body">Register</button>
                                    </div>

                                    <p class="text-center text-muted mt-5 mb-0">Have already an account? <RouterLink to="/login" href="#!"
                                            class="fw-bold text-body"><u>Login here</u></RouterLink></p>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>