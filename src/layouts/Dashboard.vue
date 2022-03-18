<template>
   <div>
      <div class="d-flex" id="wrapper">
         <!-- SIDEBAR START -->
         <Sidebar/>
         <!-- SIDEBAR END -->

         <!-- PAGE CONTENT START -->
         <div id="page-wrapper">
            <nav class="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
               <div class="d-flex align-items-center">
                  <i
                     @click="toggleSideBar"
                     class="bi bi-justify-left fs-2 me-3"
                     id="menu-toggle"
                  ></i>
                  <h2 class="fs-2 m-0"> Dashboard</h2>
               </div>

               <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                       data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                       aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
               </button>

               <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav ms-auto mb-2 mx-4 mb-lg-0">
                     <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle second-text fw-bold" href="#" id="navbarDropdown"
                           role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           <i class="fas fa-user me-2"></i>John Doe
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                           <li><a class="dropdown-item" href="#">Notificações <span
                              class="badge bg-primary">10</span></a></li>
                           <li><span class="dropdown-item cursor-pointer" @click="logout">Sair</span></li>
                        </ul>
                     </li>
                  </ul>
               </div>
            </nav>

            <div class="container-fluid">
               <router-view/>
            </div>

         </div>
         <!-- PAGE CONTENT END -->
      </div>

      <Footer/>
   </div>
</template>

<script>
import Sidebar from '@/layouts/components/Dashboard/Sidebar'
import Footer from '@/layouts/components/Footer'
import store from '@/store'

export default {
   name: 'Dashboard',
   components: {
      Footer,
      Sidebar
   },
   methods: {
      logout () {
         try {
            store.dispatch('logout')
            this.$router.push({ name: 'login' })
         } catch (e) {
            console.log('Error logout...:', e)
         }
      },
      toggleSideBar () {
         // eslint-disable-next-line no-undef
         $('#wrapper').toggleClass('toggled')
      }
   }
}
</script>

<style scoped>
@import url('./../assets/css/dashboardStyle.css');
.cursor-pointer {
   cursor: pointer;
}
</style>
