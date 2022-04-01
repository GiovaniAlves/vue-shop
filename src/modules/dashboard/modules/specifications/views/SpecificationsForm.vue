<template>
   <div>
      <!--   Mostrando mensagem de carregando enquanto busca essa especificação   -->
      <div v-if="loadingSpecification" class="d-flex justify-content-center">Carregando...</div>
      <div v-else class="card">

         <div class="card-header">
            <span v-if="!isEditing">Cadastro</span>
            <span v-else>Edição</span>
         </div>

         <form @submit.prevent="submit">
            <div class="card-body">
               <div class="row">
                  <div class="col-12 col-md-3 col-lg-4">
                     <div class="mb-3">
                        <label class="form-label">Nome</label>
                        <input v-model="localSpecification.name" type="text" class="form-control" name="name">
                     </div>
                  </div>
                  <div class="col-12 col-md-9 col-lg-8">
                     <div class="mb-3">
                        <label class="form-label">Descricão</label>
                        <input v-model="localSpecification.description" type="text" class="form-control" name="description">
                     </div>
                  </div>
               </div>
            </div>

            <div class="card-footer">
               <div v-if="!isEditing">
                  <button v-if="!loading" class="btn btn-primary btn-md" type="submit">Cadastrar</button>
                  <button v-else class="btn btn-primary btn-md" disabled type="submit">Cadastrando...</button>
               </div>
               <div v-else>
                  <button v-if="!loading" class="btn btn-primary btn-md" type="submit">Editar</button>
                  <button v-else class="btn btn-primary btn-md" disabled type="submit">Editando...</button>
               </div>
            </div>
         </form>
      </div>
   </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
   name: 'SpecificationsForm',
   data () {
      return {
         localSpecification: {
            name: '',
            description: ''
         },
         isEditing: false,
         // loading do botão de salvar
         loading: false
      }
   },
   computed: {
      ...mapState({
         // Vai mostrar a mensagem de carregando enquanto busca a especificação no servidor
         loadingSpecification: state => state.specification.currentSpecification.loading,
         currentSpecification: state => state.specification.currentSpecification.data
      })
   },
   created () {
      this.setTitle({ title: 'Especificação do Produto' })
      if (this.$route.params.id) {
         this.getSpecification(this.$route.params.id)
         this.isEditing = true
      }
   },
   watch: {
      currentSpecification: function (newValue) {
         this.localSpecification = {
            ...newValue
         }
      }
   },
   methods: {
      ...mapActions(['getSpecification', 'saveSpecification', 'setTitle']),
      async submit () {
         this.loading = true
         let action = 'Cadastrado'
         if (this.localSpecification.id) {
            action = 'Atualizado'
         }

         try {
            const response = await this.saveSpecification(this.localSpecification)
            const { data } = response

            if (!this.$route.params.id) {
               this.$router.push({
                  name: 'specificationsEdit',
                  params: { id: data.id }
               })
               this.isEditing = true
            }

            this.$toast.success(`${action} com sucesso!`)
         } catch (e) {
            console.log('save specification error: ', e)
            this.$toast.error('Erro!')
         } finally {
            this.loading = false
         }
      }
   }
}
</script>

<style scoped>

</style>
