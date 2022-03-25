<template>
   <div>
      <div v-if="loadingSpecifications" class="d-flex justify-content-center">Carregando...</div>
      <div v-else class="card">

         <div class="card-header">
            <router-link
               :to="{ name: 'specificationsCreate' }"
               class="btn btn-primary btn-sm"
            >
               Cadastrar Especificação
            </router-link>
         </div>

         <div class="card-body table-responsive">
            <table class="table table-bordered" style="border-radius: 50px">
               <thead>
               <tr>
                  <th style="width: 70px">Cod.</th>
                  <th style="width: 300px">Nome</th>
                  <th>Descrição</th>
                  <th style="width: 120px">Ações</th>
               </tr>
               </thead>
               <tbody>
               <tr v-for="specification in specifications.data" :key="specification.id">
                  <td>{{ specification.id }}</td>
                  <td>{{ specification.name }}</td>
                  <td>{{ specification.description }}</td>
                  <td>
                     <router-link :to="{ name: 'specificationsEdit', params: { id: specification.id } }"
                                  class="btn btn-primary btn-sm mx-sm-1">
                        <i class="bi bi-pencil-square"></i>
                     </router-link>
                     <button @click="deleteSpecification(specification)" class="btn btn-danger btn-sm">
                        <i class="bi bi-trash"></i>
                     </button>
                  </td>
               </tr>
               </tbody>
            </table>
         </div>
         <Pagination :links="specifications.links" />
      </div>
   </div>
</template>

<script>
import Pagination from '@/modules/dashboard/components/Pagination'
import { mapActions, mapState } from 'vuex'
import store from '@/store'

export default {
   name: 'SpecificationsHome',
   components: { Pagination },
   computed: {
      ...mapState({
         loadingSpecifications: state => state.specification.specifications.loading,
         specifications: state => state.specification.specifications
      })
   },
   created () {
      this.setTitle({ title: 'Especificações' })
      this.getSpecifications()
   },
   methods: {
      ...mapActions(['getSpecifications', 'setTitle']),
      deleteSpecification (specification) {
         if (confirm(`Deseja exlcuir a especificação ${specification.name} ?`)) {
            store.dispatch('deleteSpecification', specification.id).then(() => {
               this.$toast.success('Deletado com sucesso!')
            })
         }
      }
   }
}
</script>

<style scoped>

</style>
