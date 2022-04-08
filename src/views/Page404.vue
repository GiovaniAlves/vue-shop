<template>
   <div class="my-4 text-center">
      <router-link :to="{ name: 'home' }" style="text-decoration: none; color: #0c0b0b">
         <p class="fs-4 fw-normal"><i class="bi bi-house"></i> Voltar para a Home</p>
      </router-link>
      <img src="/img/404.png" alt="404">
   </div>
</template>

<script>
export default {
   name: 'Page404'
}
</script>
