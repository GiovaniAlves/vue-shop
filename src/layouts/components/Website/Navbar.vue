<template>
   <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div class="container-fluid">
         <div>
            <i class="bi bi-cart3 fs-4"></i><b class="navbar-brand"> Vue Shop</b>
         </div>
         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                 aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
               <li class="nav-item">
                  <router-link :to="{name: 'home' }" class="nav-link active" aria-current="page">Home</router-link>
               </li>
               <li class="nav-item">
                  <router-link :to="{ name: 'productsCatalog' }" class="nav-link">Produtos</router-link>
               </li>
            </ul>
            <div class="d-flex d-none d-sm-none d-md-none d-lg-block">
               <div class="container-fluid">
                  <router-link :to="{ name: 'cart' }" class="navbar-brand text-success d-inline-block align-text-top">
                     <i class="bi bi-cart3"></i><span class="fs-6">  ({{ cartProducts.length }}) </span>
                  </router-link>
               </div>
            </div>
            <button v-if="!user.token" class="btn btn-outline-success" type="submit">
               <router-link :to="{ name: 'login' }" class="text-decoration-none text-black">Login</router-link>
            </button>
            <ul v-else class="navbar-nav">
               <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                     data-bs-toggle="dropdown" aria-expanded="false">
                     <i class="bi bi-person"></i> Olá, {{ user.data.name }}
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                     <li><router-link :to="{ name: 'Orders' }" class="dropdown-item">Meus Pedidos</router-link></li>
                  </ul>
               </li>
            </ul>

         </div>
      </div>
   </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
   name: 'Navbar',
   computed: {
      ...mapState({
         cartProducts: state => state.cart.cartProducts,
         user: state => state.auth.user
      })
   }
}
</script>
