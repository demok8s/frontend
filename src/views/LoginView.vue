<template>
  <div class="login-view">
    <Login />
  </div>
</template>

<script>
import Login from '@/components/auth/Login.vue'

export default {
  name: 'LoginView',
  components: {
    Login
  },
  // Add any view-specific logic here
}
</script>

<style scoped>
/* Add your view-specific styles here */
</style>