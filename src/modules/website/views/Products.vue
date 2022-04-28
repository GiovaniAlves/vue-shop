<template>
   <!-- CONTAINER-FLUID START -->
   <div class="container mt-5">

      <!-- WRAPPER START -->
      <div class="product-wrapper">

         <div class="categories-container mt-3">
            <div class="card bg-light border-light">
               <div class="px-3 py-2">
                  <p class="text-start fs-5">Categorias</p>

                  <div class="form-check">
                     <input v-model="categories"
                            class="form-check-input"
                            type="checkbox"
                            value="home_appliance"
                     >
                     <label class="form-check-label">
                        Eletrodoméstico
                     </label>
                  </div>
                  <div class="form-check">
                     <input v-model="categories"
                            class="form-check-input"
                            type="checkbox"
                            value="electronic"
                     >
                     <label class="form-check-label">
                        Eletroeletrônico
                     </label>
                  </div>
                  <div class="form-check">
                     <input v-model="categories"
                            class="form-check-input"
                            type="checkbox"
                            value="hardware"
                     >
                     <label class="form-check-label">
                        Hardware
                     </label>
                  </div>
               </div>
            </div>
         </div>

         <div class="products-container my-3">

            <div class="card bg-light border-light py-2 px-3">
               <div class="ordination-card">
                  <span>
                     Mostrando {{ showFisrtQtyProducts }}-{{showLastQtyProducts }} de {{ products.links.totalProducts }} Produtos
                  </span>
                  <div>
                     <label class="mx-2">Ordenar por: </label>
                     <select v-model="orderBy" class="form-select form-select-sm"
                             aria-label=".form-select-sm example"
                             style="width: 140px">
                        <option selected value="1">Mais Recente</option>
                        <option value="2">Menor Preço</option>
                        <option value="3">Maior Preço</option>
                     </select>
                  </div>
               </div>
            </div>

            <div v-if="loadingProducts" class="d-flex justify-content-center mt-2">Carregando...</div>
            <div v-else class="card bg-light border-light p-3 mb-5 mt-3">
               <div class="row">
                  <div
                     v-for="product in products.data" :key="product.id"
                     class="col-12 col-md-6 col-lg-4 col-xl-3 mb-2"
                  >
                     <div class="card border-light">
                        <router-link :to="{ name: 'productDetail', params: { url: product.url } }">
                           <img :src="product.image_url" class="card-img-top" alt="...">
                        </router-link>
                        <div class="card-body">
                           <router-link :to="{ name: 'productDetail', params: { url: product.url } }" style="color: #0c0b0b; text-decoration: none">
                              <h5 class="card-title fs-6">{{ product.name }}</h5>
                           </router-link>
                           <small class="fw-light fst-italic">{{ product.category_label }}</small>
                           <p class="card-text fw-bold">R$ {{ product.price | format_price_br }}</p>
                           <a
                              @click.prevent="addProductCart(product)"
                              href="#"
                              :class="['btn', 'btn-primary', 'fw-lighter', {'disabled': productInCart(product)}]"
                           >
                              <i class="bi bi-cart4"></i> Adicionar ao Carrinho
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="d-flex justify-content-center">
                  <Pagination :links="products.links" action="getProducts" :filters="filters"/>
               </div>
            </div>

         </div>

      </div>
      <!-- WRAPPER END-->
   </div>
   <!-- CONTAINER-FLUID END  -->
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import Pagination from '@/components/Pagination'

export default {
   name: 'Products',
   components: { Pagination },
   data () {
      return {
         categories: [],
         orderBy: {},
         filters: {
            categories: [],
            // Iniciei o orderBy pq se não passar o filtro no getProdutcs ele não vai para rota product/search e busca
            // os links já com o *('search')* Ex:. /product/search?page=5
            orderBy: { id: 'DESC' }
         }
      }
   },
   computed: {
      ...mapState({
         loadingProducts: state => state.product.products.loading,
         products: state => state.product.products,
         cartProducts: state => state.cart.cartProducts
      }),
      showFisrtQtyProducts () {
         const { links } = this.products
         if (links.currentPage === 1) {
            return 1
         } else {
            // Fazendo o cálculo da label que vai mostrar o intervalo da quantidade de produtos que está sendo exibida
            return (((links.currentPage - 1) * links.productsPerPage) + 1)
         }
      },
      showLastQtyProducts () {
         const { links } = this.products
         if (links.currentPage === links.totalPages) {
            return links.totalProducts
         } else {
            return (links.currentPage * links.productsPerPage)
         }
      }
   },
   created () {
      this.getProducts({ filters: this.filters })
   },
   watch: {
      categories: function (newValue) {
         this.filters.categories = newValue
         this.getProducts({ filters: this.filters })
      },
      orderBy: function (newValue) {
         switch (newValue) {
            case '1': {
               this.filters.orderBy = { id: 'DESC' }
               break
            }
            case '2': {
               this.filters.orderBy = { price: 'ASC' }
               break
            }
            case '3': {
               this.filters.orderBy = { price: 'DESC' }
               break
            }
            default: {
               this.filters.orderBy = { id: 'ASC' }
            }
         }
         this.getProducts({ filters: this.filters })
      }
   },
   methods: {
      ...mapActions(['getProducts']),
      ...mapMutations({
         addProductCart: 'ADD_PRODUCT_CART'
      }),
      productInCart (product) {
         let inCart = false

         this.cartProducts.map((cartProd) => {
            if (cartProd.id === product.id) {
               inCart = true
            }
         })

         return inCart
      }
   }
}
</script>
