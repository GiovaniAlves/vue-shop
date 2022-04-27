<template>
   <div class="bg-white" id="sidebar-wrapper">

      <div
         class="sidebar-heading text-center text-success page-wrapper py-4 fs-4 fw-bold text-uppercase border-bottom">
         <i class="bi bi-cart3 fs-4"></i> <b>Vue Shop</b>
      </div>

      <div
         v-for="item in items"
         :key="item.url"
         class="list-group list-group-flush my-1"
      >

         <router-link
            :to="{path: item.url}"
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
            /* Coloque aqui abaixo o ('path') em vez do ('name') pq na rota de /painel/relatórios quero que apereça apenas
                 o nome /painel na rota, se eu tivesse colocado o ('name') iria redirecionar para a rota /painel e não mostraria os reports. */
            { title: 'Painel', icon: 'bi bi-speedometer2', url: '/painel', exact: true },
            { title: 'Especificações', icon: 'bi bi-bookmark-plus', url: '/painel/especificacoes', exact: true },
            { title: 'Produtos', icon: 'bi bi-gift', url: '/painel/produtos', exact: true }
         ]
      }
   }
}
</script>

<style scoped>

</style>
