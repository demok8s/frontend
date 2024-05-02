<template>
    <form class="form-signin" v-on:submit.prevent="registerUser">
        <img class="mb-4" src="/icons/loginIcon.png" alt="" width="72" height="72">
        <h1 class="h3 mb-3 font-weight-normal text-light">Register</h1>
        <div class="row">
            <div class="login-email col-12">
                <label for="inputEmail" class="sr-only">Email address</label>
                <input type="email" id="inputEmail" v-model="email" class="form-control" placeholder="Email address"
                    required autofocus>
            </div>
        </div>
        <div class="row mt-4">
            <div class="login-email col-6">
                <label for="first_name" class="sr-only">First Name</label>
                <input type="text" id="first_name" v-model="first_name" class="form-control" placeholder="First Name"
                    required autofocus>
            </div>
            <div class="login-email col-6">
                <label for="last_name" class="sr-only">Last Name</label>
                <input type="text" id="last_name" v-model="last_name" class="form-control" placeholder="Last Name"
                    required autofocus>
            </div>
        </div>

        <div class="login-password">
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" v-model="password" class="form-control" placeholder="Password"
                required>
        </div>

        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
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
    name: 'Register',
    data() {
        return {
            email: '',
            password: '',
            first_name: '',
            last_name: '',

        }
    },
    methods: {
        async registerUser() {
            const newUser = customFetch('/register', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: this.email,
                    password: this.password,
                    first_name: this.first_name,
                    last_name: this.last_name
                })
            })

            toast.promise(newUser, {
              pending: 'working on it ...', // Display while the promise is pending
              success: 'Your user has been created 👌', // Display on success
            }).then(r => console.log(r))
         }
    }

}
</script>
<style >
@import './login.css';
</style>