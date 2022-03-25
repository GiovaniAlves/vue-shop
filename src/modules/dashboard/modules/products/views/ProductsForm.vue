<template>
   <div class="card">

      <div class="card-header">
         <span>Cadastro</span>
      </div>

      <form>
         <div class="card-body">
            <div class="row">
               <div class="col-12 col-md-6 col-lg-8">
                  <div class="mb-3">
                     <label class="form-label">Nome</label>
                     <input type="text" class="form-control" name="name">
                  </div>
               </div>
               <div class="col-12 col-md-3 col-lg-2">
                  <div class="mb-3">
                     <label class="form-label">Preço</label>
                     <input type="number" class="form-control" name="price">
                  </div>
               </div>
               <div class="col-12 col-md-3 col-lg-2">
                  <div class="mb-3">
                     <label class="form-label">Quantidade</label>
                     <input type="number" class="form-control" name="quantity">
                  </div>
               </div>
               <div class="col-12 col-lg-8">
                  <div class="mb-3">
                     <label class="form-label">Especificações</label>
                     <div class="d-flex">
                        <Multiselect
                           v-model="value"
                           mode="tags"
                           :close-on-select="false"
                           :searchable="true"
                           :create-option="false"
                           :options="options"
                        />
                        <router-link
                           :to="{ name: 'specifications' }"
                           class="input-group-text without-text-decoration"
                        >
                           <i class="bi bi-plus-circle-fill fs-6 mx-1"></i> Cadastrar
                        </router-link>
                     </div>
                  </div>
               </div>
               <div class="col-12 col-lg-4">
                  <div class="mb-3">
                     <label class="form-label">Categoria</label>
                        <select class="form-select form-select" name="category" aria-label=".form-select-sm example">
                           <option value="1">One</option>
                           <option value="2">Two</option>
                           <option value="3">Three</option>
                        </select>
                  </div>
               </div>
               <div class="col-12 col-md-6">
                  <div class="mb-3">
                     <label class="form-label">Imagem</label>
                     <input type="file" class="form-control" name="image">
                  </div>
               </div>
            </div>
         </div>

         <div class="card-footer">
            <button class="btn btn-primary btn-md" type="submit">Cadastrar</button>
         </div>
      </form>
   </div>
</template>

<script>
import Multiselect from '@vueform/multiselect/dist/multiselect.vue2.js'
import { mapActions } from 'vuex'

export default {
   name: 'ProductsForm',
   components: { Multiselect },
   created () {
      this.setTitle({ title: 'Produto' })
   },
   data () {
      return {
         value: null,
         options: [
            'Batman',
            'Robin1',
            'Joker2',
            'Batman3',
            'Robin4',
            'Joker5',
            'Batman7',
            'Robin9',
            'Joker21',
            'Batman21',
            'Robin21',
            'Joker12123'
         ]
      }
   },
   methods: {
      ...mapActions(['setTitle'])
   }
}
</script>

<style src="@vueform/multiselect/themes/default.css">
</style>
