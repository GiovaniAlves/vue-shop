<template>
   <div>
      <div class="d-flex justify-content-center form_container">
         <form>
            <div class="input-group">
               <span class="input-group-text"><i class="bi bi-envelope"></i></span>
               <input type="text" name="" class="form-control input_user" value="" placeholder="E-mail">
            </div>
            <div class="input-group">
               <span class="input-group-text"><i class="bi bi-key"></i></span>
               <input type="password" name="" class="form-control input_pass" value="" placeholder="Senha">
            </div>
            <div class="d-flex justify-content-center mt-3 login_container">
               <button type="button" name="button" class="btn login_btn">Entrar</button>
            </div>
         </form>
      </div>

      <div class="mt-4">
         <div class="d-flex justify-content-center links">
            Não tem uma conta? <router-link :to="{name: 'register'}" class="ml-2"> Cadastre-se!</router-link>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: 'Login'
}
</script>
