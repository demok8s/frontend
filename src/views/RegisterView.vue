<template>
    <div class="register-view">
        <Register />
    </div>
</template>

<script>
import Register from '@/components/auth/Register.vue'

export default {
    name: 'RegisterView',
    components: {
        Register
    },
    // Add any view-specific logic here
}
</script>