<template>
  <div>
    <div class="container blog-layout">
      <NavBar />
      <Banner />
    </div>
  </div>

</template>

<script>
import NavBar from "@/components/blog/homePage/NavBar.vue";
import Banner from "@/components/blog/homePage/Banner.vue";
export default {
  name: "HomeView",
  components: {
    NavBar,
    Banner
  }
}
</script>

<style scoped>
/* Add your view-specific styles here */
.blog-layout {
  background: white;
}
</style>