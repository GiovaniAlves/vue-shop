<template>
   <div>
      <div v-if="loadingProducts" class="d-flex justify-content-center">Carregando...</div>
      <div v-else class="card">

         <div class="card-header">
            <router-link
               :to="{ name: 'productsCreate' }"
               class="btn btn-primary btn-sm"
            >
               Cadastrar Produto
            </router-link>
         </div>

         <div class="card-body table-responsive">
            <table class="table table-bordered" style="border-radius: 50px">
               <thead>
               <tr>
                  <th style="width: 50px">Cod.</th>
                  <th>Nome</th>
                  <th>Preço</th>
                  <th>Quantidade</th>
                  <th>Categoria</th>
                  <th style="width: 120px">Ações</th>
               </tr>
               </thead>
               <tbody>
               <tr v-for="product in products.data" :key="product.id">
                  <td>{{ product.id }}</td>
                  <td>{{ product.name }}</td>
                  <td>R$ {{ product.price | format_price_br }}</td>
                  <td>{{ product.quantity }}</td>
                  <td>{{ product.category_label }}</td>
                  <td>
                     <router-link :to="{ name: 'productsEdit', params: { id: product.id } }"
                                  class="btn btn-primary btn-sm mx-sm-1">
                        <i class="bi bi-pencil-square"></i>
                     </router-link>
                     <button @click="deleteProduct(product)" class="btn btn-danger btn-sm"><i class="bi bi-trash"></i></button>
                  </td>
               </tr>
               </tbody>
            </table>
         </div>
         <div class="card-footer">
            <Pagination :links="products.links" action="getProducts" />
         </div>
      </div>
   </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Pagination from '@/components/Pagination'
import store from '@/store'

export default {
   name: 'ProductsHome',
   components: { Pagination },
   computed: {
      ...mapState({
         loadingProducts: state => state.product.products.loading,
         products: state => state.product.products
      })
   },
   created () {
      this.setTitle({ title: 'Produtos' })
      this.getProducts()
   },
   methods: {
      ...mapActions(['getProducts', 'setTitle']),
      deleteProduct (product) {
         if (confirm(`Deseja realmente excluir o produto ${product.name}?`)) {
            store.dispatch('deleteProduct', product.id).then(() => {
               this.$toast.success('Deletado com sucesso!')
            })
         }
      }
   }
}
</script>
