<template>
    <form class="form-signin" v-on:submit.prevent="reset_pass">
        <img class="mb-4" src="/icons/loginIcon.png" alt="" width="72" height="72">
        <h1 class="h3 mb-3 font-weight-normal text-light">Register</h1>
        <div class="login-email col-12 mt-3">
            <label for="inputEmail" class="sr-only">Email address</label>
            <input type="email" id="inputEmail" v-model="email" class="form-control" placeholder="Email address"
                required autofocus>
        </div>
        <div class="login-email col-12 mt-3">
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" v-model="password" class="form-control" placeholder="Password" required
                autofocus>
        </div>
        <div class="login-email col-12 mt-3">
            <label for="inputRepass" class="sr-only">Confirm password</label>
            <input type="password" id="inputRepass" v-model="repass" class="form-control" placeholder="Confirm password"
                required autofocus>
        </div>
        <button class="btn btn-lg btn-primary btn-block mt-3" type="submit">Reset password</button>
        <div class="row mt-3">
            <div class="col-12"><small class=" mb-3 font-weight-small text-end text-light">Go back to <router-link
                        to="/login">Login</router-link></small></div>
        </div>
    </form>
</template>

<script>
import customFetch from '@/components/auth/fetch';
import { toast } from 'vue3-toastify'

export default {
    name: 'ForgotPassword',
    data() {
        return {
            email: '',
            password: '',
            repass: ''
        }
    },
  computed:{
     comparePasswords(){
       return this.password === this.repass;
     }
  },
  methods: {
        async reset_pass() {
            if (this.comparePasswords){
              const isValidEmail =  customFetch('/reset-password',{
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  email: this.email,
                  password: this.password
                })
              });
              toast.promise(isValidEmail, {
                pending: 'Working on it...', // Display while the promise is pending
                success: `Password reset successfully for ${this.email}! 👌`, // Display on success
              }).then(r => console.log(r))

            }else{
              toast.error("passwords do not match ")
            }

        }
    }

}
</script>
<style>
@import './login.css';
</style>