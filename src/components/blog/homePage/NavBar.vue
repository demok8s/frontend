<template>
  <header class="blog-header py-3">
    <div class="row flex-nowrap justify-content-between align-items-center">
      <div class="col-4 pt-1">
        <img src="/icons/loginIcon.png" alt="" width="50" height="50">
      </div>
      <div class="col-4 text-center">
        <a class="blog-header-logo text-dark" href="#">Daily Blogger</a>
      </div>

      <div v-if="!UsernameToggler" class="col-4 d-flex justify-content-end align-items-center">
        <!-- Display sign-in and sign-up links when uname is empty -->
        <router-link class="btn mr-4 btn-sm btn-outline-secondary" to="/login">Sign In</router-link>
        <router-link class="btn btn-sm btn-outline-secondary" to="/register">Sign up</router-link>
      </div>

      <div v-else class="col-4 d-flex justify-content-end align-items-center">
        <!-- Display the username when uname is not empty -->
        <span>Welcome, {{ UsernameToggler }}</span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "NavBar",
  data(){
    return {
      uname : '1'
    }
  },
  computed: {
     UsernameToggler(){
       // eslint-disable-next-line vue/no-side-effects-in-computed-properties
       return this.uname = this.$cookies.get('firstName');

     }
  }
}
</script>

<style>
@import '../blog.css';
</style>