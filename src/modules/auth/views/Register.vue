<template>
   <div>
      <div class="d-flex justify-content-center form_container">
         <form @submit.prevent="registerUser">
            <div v-if="Object.keys(errors).length">
               <!-- O método Object.keys() retorna um array de propriedades enumeraveis de um determinado objeto -->
               <div v-for="(field, index) in Object.keys(errors)" :key="index">
                  <div v-for="(error, indx) in errors[field] || []" :key="indx" class="alert alert-danger" role="alert">
                     {{ error }}
                  </div>
               </div>
            </div>
            <div class="input-group">
               <span class="input-group-text"><i class="bi bi-person"></i></span>
               <input v-model="user.name" type="text" name="" class="form-control input_user" value=""
                      placeholder="Nome">
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
            <div class="d-flex justify-content-center login_container">
               <button v-if="loading" type="submit" name="button" class="btn login_btn">Cadastrando...</button>
               <button v-else type="submit" name="button" class="btn login_btn">Cadastrar</button>
            </div>
         </form>
      </div>

      <div class="mt-4">
         <div class="d-flex justify-content-center links">
            Já tem conta?
            <router-link :to="{name: 'login'}" class="ml-2"> Login</router-link>
         </div>
      </div>
   </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
   name: 'Register',
   data () {
      return {
         user: {
            name: '',
            email: '',
            password: ''
         },
         loading: false,
         errors: []
      }
   },
   methods: {
      ...mapActions(['register']),
      async registerUser () {
         this.resetErrors()
         this.loading = true

         try {
            await this.register(this.user)
            this.$router.push(this.$route.query.redirect || { name: 'dashboard' })
         } catch (error) {
            const { status } = error.response
            const errorResponse = error.response.data.errors

            if (status === 422) {
               this.errors = Object.assign(this.errors, errorResponse)
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
