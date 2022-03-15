<template>
   <div>
      <div class="d-flex justify-content-center form_container">
         <form>
            <div class="input-group">
               <span class="input-group-text"><i class="bi bi-person"></i></span>
               <input type="text" name="" class="form-control input_user" value="" placeholder="Nome">
            </div>
            <div class="input-group">
               <span class="input-group-text"><i class="bi bi-envelope"></i></span>
               <input type="text" name="" class="form-control input_user" value="" placeholder="E-mail">
            </div>
            <div class="input-group">
               <span class="input-group-text"><i class="bi bi-key"></i></span>
               <input type="password" name="" class="form-control input_pass" value="" placeholder="Senha">
            </div>
            <div class="d-flex justify-content-center login_container">
               <button type="button" name="button" class="btn login_btn"> Cadastrar</button>
            </div>
         </form>
      </div>

      <div class="mt-4">
         <div class="d-flex justify-content-center links">
            Já tem conta? <router-link :to="{name: 'login'}" class="ml-2"> Login</router-link>
         </div>
      </div>
   </div>
</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default {
   name: 'Register'
}
</script>
