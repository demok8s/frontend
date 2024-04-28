<template>
    <form class="form-signin">
        <img class="mb-4" src="/icons/loginIcon.png" alt="" width="72" height="72">
        <h1 class="h3 mb-3 font-weight-normal text-light">Register</h1>
        <div class="login-email col-12 mt-3">
            <label for="inputEmail" class="sr-only">Email address</label>
            <input type="email" id="inputEmail" v-model="email" class="form-control" placeholder="Email address"
                required autofocus>
        </div>
        <div class="login-email col-12 mt-3">
            <label for="inputEmail" class="sr-only">Password</label>
            <input type="email" id="inputEmail" v-model="email" class="form-control" placeholder="Password" required
                autofocus>
        </div>
        <div class="login-email col-12 mt-3">
            <label for="inputEmail" class="sr-only">Comfirm password</label>
            <input type="email" id="inputEmail" v-model="email" class="form-control" placeholder="Comfirm password"
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
export default {
    name: 'ForgotPassword',
    data() {
        return {
            email: ''
        }
    },
    method: {
        async check_email() {
            const isValidEmail = await customFetch('/')
        }
    }

}
</script>
<style>
@import './login.css';
</style>