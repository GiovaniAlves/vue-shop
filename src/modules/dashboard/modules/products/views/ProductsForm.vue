<template>
   <div>
      <div v-if="loadingProduct" class="d-flex justify-content-center">Carregando...</div>
      <div v-else class="card">

         <div v-if="Object.keys(errors).length">
            <!-- O método Object.keys() retorna um array de propriedades enumeraveis de um determinado objeto -->
            <div v-for="(field, index) in Object.keys(errors)" :key="index">
               <div v-for="(error, indx) in errors[field]" :key="indx" class="alert alert-danger" role="alert">
                  {{ error }}
               </div>
            </div>
         </div>

         <div class="card-header">
            <span v-if="!isEditing">Cadastro</span>
            <span v-else>Edição</span>
         </div>

         <form @submit.prevent="submit">
            <div class="card-body">
               <div class="row">
                  <div class="col-12 col-md-5 col-lg-4">
                     <div class="mb-3">
                        <label class="form-label">Nome</label>
                        <input v-model="localProduct.name" type="text" class="form-control" name="name">
                     </div>
                  </div>
                  <div class="col-12 col-md-7 col-lg-8">
                     <div class="mb-3">
                        <label class="form-label">URL</label>
                        <input v-model="localProduct.url" type="text" class="form-control" name="url"
                               placeholder="Informe a url nesse formato: monitor-led-url">
                     </div>
                  </div>
                  <div class="col-12 col-md-2 col-lg-2">
                     <div class="mb-3">
                        <label class="form-label">Preço</label>
                        <Money v-model="localProduct.price" type="text" class="form-control" name="price" v-bind="money"></Money>
                     </div>
                  </div>
                  <div class="col-12 col-md-2 col-lg-2">
                     <div class="mb-3">
                        <label class="form-label">Quantidade</label>
                        <input v-model="localProduct.quantity" type="number" class="form-control" name="quantity">
                     </div>
                  </div>
                  <div class="col-12 col-md-8 col-lg-8">
                     <div class="mb-3">
                        <label class="form-label">Especificações</label>
                        <div class="d-flex">
                           <Multiselect
                              v-model="selectSpecification.value"
                              mode="tags"
                              :close-on-select="false"
                              :searchable="true"
                              :create-option="false"
                              :options="selectSpecification.options"
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
                  <div class="col-12">
                     <div class="mb-3">
                        <label class="form-label">Descrição</label>
                        <div class="input-group">
                           <textarea v-model="localProduct.description" rows="4" class="form-control"></textarea>
                        </div>
                     </div>
                  </div>
                  <div class="col-12 col-lg-4">
                     <div class="mb-3">
                        <label class="form-label">Categoria</label>
                        <select v-model="localProduct.category" class="form-select form-select" name="category"
                                aria-label=".form-select-sm example">
                           <option disabled value="">Escolha uma categoria</option>
                           <option :class="[{'selected': selectedCategory(localProduct.category)}]"
                                   value="Eletrodoméstico">Eletrodoméstico
                           </option>
                           <option :class="[{'selected': selectedCategory(localProduct.category)}]"
                                   value="Eletroeletrônico">Eletroeletrônico
                           </option>
                           <option :class="[{'selected': selectedCategory(localProduct.category)}]" value="Hardware">
                              Hardware
                           </option>
                        </select>
                     </div>
                  </div>
                  <div class="col-12 col-md-4">
                     <div class="mb-3">
                        <label class="form-label">Imagem</label>
                        <input @change="onImageChoose" type="file" class="form-control" name="image">
                     </div>
                  </div>
               </div>
            </div>

            <div class="card-footer">
               <div v-if="!isEditing">
                  <button v-if="!loading" class="btn btn-primary btn-md" type="submit">Cadastrar</button>
                  <button v-else disabled class="btn btn-primary btn-md" type="submit">Cadastrando...</button>
               </div>
               <div v-else>
                  <button v-if="!loading" class="btn btn-primary btn-md" type="submit">Editar</button>
                  <button v-else disabled class="btn btn-primary btn-md" type="submit">Editando...</button>
               </div>
            </div>
         </form>
      </div>
   </div>
</template>

<script>
import { Money } from 'v-money'
import Multiselect from '@vueform/multiselect/dist/multiselect.vue2.js'
import { mapActions, mapState } from 'vuex'

export default {
   name: 'ProductsForm',
   components: { Multiselect, Money },
   data () {
      return {
         localProduct: {
            name: '',
            description: '',
            url: '',
            price: 0,
            quantity: null,
            category: '',
            specifications: [],
            image: null,
            image_url: null
         },
         // configuração do component Money
         money: {
            decimal: ',',
            thousands: '.',
            prefix: 'R$ ',
            precision: 2,
            masked: false
         },
         selectSpecification: {
            value: [],
            options: []
         },
         isEditing: false,
         errors: [],
         // loading do botão de salvar
         loading: false
      }
   },
   computed: {
      ...mapState({
         loadingProduct: state => state.product.currentProduct.loading,
         currentProduct: state => state.product.currentProduct.data,
         specifications: state => state.specification.specifications.data
      })
   },
   created () {
      this.setTitle({ title: 'Produto' })
      this.getSpecifications({ allSpecifications: true })
      if (this.$route.params.id) {
         this.getProduct(this.$route.params.id)
         this.isEditing = true
      }
   },
   watch: {
      currentProduct: function (newValue) {
         // Utilizei o Object assign para mesclar em vez de substituir o conteúdo
         this.localProduct = Object.assign(this.localProduct, newValue)

         // Pegando as especificações do produto
         const array = []
         newValue.specifications.forEach((specification) => {
            array.push(specification.name)
         })
         this.selectSpecification.value = array.slice()
      },
      specifications: function (newValue) {
         const array = []

         // Pegando todas as espeficicações cadastradas
         newValue.forEach((specification) => {
            array.push({
               label: specification.name,
               value: specification.name,
               id: specification.id
            })
         })
         this.selectSpecification.options = array.slice()
      },
      'selectSpecification.value': function (newValue) {
         const array = []

         // Inserindo no this.localProduct.specifications as especificações escolhidas pelo usuário no select
         this.selectSpecification.options.forEach((specifOption) => {
            this.selectSpecification.value.forEach((specifValue) => {
               if (specifOption.label === specifValue) {
                  array.push({
                     id: specifOption.id
                  })
               }
            })
         })
         this.localProduct.specifications = array.slice()
      }
   },
   methods: {
      ...mapActions(['getProduct', 'getSpecifications', 'saveProduct', 'setTitle']),
      async submit () {
         this.loading = true
         this.resetErrors()

         let action = 'Cadastrado'
         if (this.localProduct.id) {
            action = 'Atualizado'
         }

         try {
            const response = await this.saveProduct(this.localProduct)
            const { data } = response

            if (!this.$route.params.id) {
               this.$router.push({
                  name: 'productsEdit',
                  params: { id: data.id }
               })
               this.isEditing = true
            }

            this.$toast.success(`${action} com sucesso!`)
         } catch (error) {
            const { status } = error.response
            const { errors } = error.response.data

            if (status === 422) {
               this.errors = Object.assign(this.errors, errors)
               setTimeout(() => this.resetErrors(), 6000)
               return
            }

            this.$toast.error('Falha')
            console.log('save product error: ', error)
         } finally {
            this.loading = false
         }
      },
      // A imagem será convertida em base 64
      onImageChoose (event) {
         const file = event.target.files[0]

         const reader = new FileReader()
         reader.onload = () => {
            this.localProduct.image = reader.result
         }
         reader.readAsDataURL(file)
      },
      selectedCategory (category) {
         return this.localProduct.category === category
      },
      resetErrors () {
         this.errors = []
      }
   }
}
</script>

<style src="@vueform/multiselect/themes/default.css">
</style>
