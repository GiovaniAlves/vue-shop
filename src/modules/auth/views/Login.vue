<template>
   <div>
      <div class="d-flex justify-content-center form_container">
         <form @submit.prevent="loginUser">
            <div v-if="Object.keys(errors).length">
               <div v-for="(field, index) in Object.keys(errors)" :key="index">
                  <div v-for="(error, indx) in errors[field] || []" :key="indx" class="alert alert-danger" role="alert">
                     {{ error }}
                  </div>
               </div>
            </div>
            <div class="input-group">
               <span class="input-group-text"><i class="bi bi-envelope"></i></span>
               <input v-model="user.email" type="text" name="" class="form-control input_user" value=""
                      placeholder="E-mail">
            </div>
            <div class="input-group">
               <span class="input-group-text"><i class="bi bi-key"></i></span>
               <input v-model="user.password" type="password" name="" class="form-control input_pass" value=""
                      placeholder="Senha">
            </div>
            <div class="d-flex justify-content-center mt-3 login_container">
               <button v-if="loading" type="submit" name="button" class="btn login_btn">Logando...</button>
               <button v-else type="submit" name="button" class="btn login_btn">Logar</button>
            </div>
         </form>
      </div>

      <div class="mt-4">
         <div class="d-flex justify-content-center links">
            Não tem uma conta?
            <router-link :to="{name: 'register'}" class="ml-2"> Cadastre-se!</router-link>
         </div>
      </div>
   </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
   name: 'Login',
   data () {
      return {
         user: {
            email: '',
            password: ''
         },
         loading: false,
         errors: []
      }
   },
   methods: {
      ...mapActions(['login']),
      async loginUser () {
         this.loading = true
         this.resetErrors()

         try {
            await this.login(this.user)
            // TODO se o usuário for adm redireciono para o painel
            this.$router.push(this.$route.query.redirect || { path: '/painel' })
         } catch (error) {
            const { status } = error.response
            const errorResponse = error.response.data.errors

            if (status === 422) {
               this.errors = Object.assign(this.errors, errorResponse)
            } else if (status === 404) {
               this.$toast.error('Credenciais Inválidas!')
            }
         } finally {
            this.loading = false
         }
      },
      resetErrors () {
         this.errors = []
      }
   }
}
</script>
