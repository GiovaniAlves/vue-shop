<template>
   <div>
      <Navbar />

      <router-view />

      <Footer />
   </div>
</template>

<script>
import Navbar from '@/layouts/components/Website/Navbar'
import Footer from '@/layouts/components/Footer'
export default {
   name: 'Website',
   components: { Footer, Navbar }
}
</script>

<style scoped>
@import url('./../assets/css/websiteStyle.css');
</style>
