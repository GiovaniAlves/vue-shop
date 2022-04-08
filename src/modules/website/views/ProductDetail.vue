<template>
   <!-- CONTAINER-FLUID START -->
   <div class="container my-5">

      <div v-if="loadingProduct" class="d-flex justify-content-center pt-4">Carregando...</div>

      <div v-else>
         <!-- WRAPPER START -->
         <div class="product-detail-wrapper pt-2">
            <div class="card bg-light border-light my-3 pb-3">
               <div class="row p-3">

                  <div class="col-12 col-lg-6">
                     <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                           <div class="carousel-item active">
                              <img :src="currentProduct.image_url" class="d-block w-100" :alt="currentProduct.url">
                           </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                                data-bs-slide="prev">
                           <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                           <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                                data-bs-slide="next">
                           <span class="carousel-control-next-icon" aria-hidden="true"></span>
                           <span class="visually-hidden">Next</span>
                        </button>
                     </div>
                  </div>
                  <div class="col-12 col-lg-6">
                     <h5 class="card-title fs-6">{{ currentProduct.name }}</h5>
                     <small class="fw-light fst-italic text-primary">{{ currentProduct.category }}</small>
                     <small class="d-block text-secondary fst-italic pt-1">{{ currentProduct.short_description }}</small>
                     <p class="card-text fw-bold fst-italic fs-4">R$ {{ currentProduct.price | format_price_br }}</p>
                     <small class="fw-light fst-italic">Produto:
                        <strong class="text-success">Disponível</strong>
                     </small>
                     <button class="d-block mt-1 btn btn-primary btn-sm"><i class="bi bi-cart-plus-fill"></i> Adicionar ao
                        Carrinho
                     </button>
                  </div>
               </div>

               <div class="row p-3">
                  <div class="col-12">
                     <nav>
                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                           <button class="nav-link active text-secondary" id="nav-home-tab" data-bs-toggle="tab"
                                   data-bs-target="#nav-home"
                                   type="button" role="tab" aria-controls="nav-home" aria-selected="true">Descrição
                           </button>
                           <button class="nav-link text-secondary" id="nav-profile-tab" data-bs-toggle="tab"
                                   data-bs-target="#nav-profile"
                                   type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                              Especificações
                           </button>
                        </div>
                     </nav>
                     <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active p-2 fw-lighter" id="nav-home" role="tabpanel"
                             aria-labelledby="nav-home-tab">
                           {{ currentProduct.description }}
                        </div>
                        <div class="tab-pane fade p-2 fw-lighter" id="nav-profile" role="tabpanel"
                             aria-labelledby="nav-profile-tab">
                           <table class="table">
                              <tbody>
                              <tr v-for="spec in currentProduct.specifications" :key="spec.id">
                                 <td>{{ spec.name }}</td>
                                 <td>{{ spec.description }}</td>
                              </tr>
                              </tbody>
                           </table>
                        </div>
                     </div>
                  </div>
               </div>

            </div>
         </div>
         <!-- WRAPPER END -->
      </div>

   </div>
   <!-- CONTAINER-FLUID END -->
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
   name: 'ProductDetail',
   computed: {
      ...mapState({
         loadingProduct: state => state.product.currentProduct.loading,
         currentProduct: state => state.product.currentProduct.data
      })
   },
   created () {
      this.getProduct({ idOrUrl: this.$route.params.url, authenticated: false })
   },
   methods: {
      ...mapActions(['getProduct'])
   }
}
</script>
