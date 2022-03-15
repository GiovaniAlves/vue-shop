<template>
   <div>
      <!-- Page Content -->
      <div class="container container-body">

         <!-- login -->
         <div class="d-flex justify-content-center h-100 my-5">
            <div class="user_card">

               <div class="d-flex justify-content-center">
                  <div class="brand_logo_container">
                     <img src="img/logo.png" class="brand_logo" alt="Logo">
                  </div>
               </div>

               <router-view/>

            </div>
         </div>
         <!-- login-->

      </div>
      <!-- /.container -->
   </div>
</template>

<script>
export default {
   name: 'Auth'
}
</script>

<style scoped>
@import url('./../assets/css/authStyle.css');

.container-body {
   padding-top: 100px;
   background-color: #fbfbfb;
}
</style>
