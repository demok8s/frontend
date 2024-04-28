<template>
  <form class="form-signin" v-on:submit.prevent="login">
    <img class="mb-4" src="/icons/loginIcon.png" alt="" width="72" height="72">
    <h1 class="h3 mb-3 font-weight-normal text-light">Login</h1>
    <div class="login-email">
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" id="inputEmail" v-model="email" class="form-control" placeholder="Email address" required
        autofocus>
    </div>
    <div class="login-password">
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" v-model="password" class="form-control" placeholder="Password" required>
    </div>

    <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    <div class="row mt-3">
      <div class="col-6"><small class=" mb-3 font-weight-small text-end text-light"><router-link to="/register">Sign up
            here</router-link></small></div>
      <div class="col-6"><small class=" mb-3 font-weight-small text-stgart text-light"><router-link
            to="/forgotPassword">forgot password ?</router-link></small></div>
    </div>


  </form>
</template>

<script>
import { toast } from 'vue3-toastify'
import customFetch from '@/components/auth/fetch';
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login() {
      const token = await customFetch('/login', {
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
      toast.promise(token, {
        pending: 'Logging in...', // Display while the promise is pending
        success: 'Login successful! 👌', // Display on success
      })
    }
  }

}
</script>

<style>
@import './login.css';
</style>