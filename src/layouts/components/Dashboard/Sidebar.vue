<template>
   <div class="bg-white" id="sidebar-wrapper">

      <div
         class="sidebar-heading text-center text-success page-wrapper py-4 fs-4 fw-bold text-uppercase border-bottom">
         <i class="bi bi-cart3 fs-4"></i> <b>Vue Shop</b>
      </div>

      <div
         v-for="item in items"
         :key="item.urlName"
         class="list-group list-group-flush my-1"
      >

         <router-link
            :to="{name: item.urlName}"
            class="list-group-item list-group-item-action bg-transparent second-text"
         >
            <i :class="[item.icon, 'fs-5']"></i> {{ item.title }}
         </router-link>

      </div>
   </div>
</template>

<script>
export default {
   name: 'Sidebar',
   data () {
      return {
         items: [
            { title: 'Painel', icon: 'bi bi-speedometer2', url: 'dashboard', exact: true },
            { title: 'Produtos', icon: 'bi bi-gift', urlName: 'products', exact: true },
            { title: 'Pedidos', icon: 'bi bi-cart', urlName: 'orders', exact: true },
            { title: 'Relatórios', icon: 'bi bi-paperclip', urlName: 'reports', exact: true }
         ]
      }
   }
}
</script>

<style scoped>

</style>
