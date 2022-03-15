<template>
   <!-- CONTAINER-FLUID START -->
   <div class="container my-5">

      <!-- WRAPPER START -->
      <div class="product-detail-wrapper pt-2">
         <div class="card bg-light border-light my-3 pb-3">
            <div class="row p-3">

               <div class="col-12 col-lg-6">
                  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                     <div class="carousel-inner">
                        <div class="carousel-item active">
                           <img src="/img/products/product1.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                           <img src="/img/products/product2.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                           <img src="/img/products/product3.jpg" class="d-block w-100" alt="...">
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
                  <h5 class="card-title fs-6">Apple iMac Pro (27-inch with Retina 5K Display, 3.0GHz 10-core Intel Xeon
                     W, 1TB SSD)</h5>
                  <small class="fw-light fst-italic text-primary">Computador & Acessórios</small>
                  <small class="d-block text-secondary fst-italic pt-1">
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad alias amet atque corporis,
                     culpa cupiditate earum, hic iure non, quaerat rem similique sit sunt tenetur! Explicabo iste
                     quibusdam voluptatum?
                  </small>
                  <p class="card-text fw-bold fst-italic fs-4">R$ 58,88</p>
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
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid, corporis cum, dolorum
                           est et harum illo
                           ipsum nemo nisi non nostrum odit optio perferendis quos, ratione temporibus unde ut. ipsum
                           nemo nisi non nostrum odit optio perferendis quos, ratione
                           temporibus unde utipsum nemo nisi non nostrum odit optio perferendis quos, ratione temporibus
                           unde ut. ipsum nemo nisi non nostrum odit
                           optio perferendis quos, ratione temporibus unde ut
                        </p>

                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid, corporis cum, dolorum
                           est et harum illo
                           ipsum nemo nisi non nostrum odit optio perferendis quos, ratione temporibus unde ut.
                        </p>
                     </div>
                     <div class="tab-pane fade p-2 fw-lighter" id="nav-profile" role="tabpanel"
                          aria-labelledby="nav-profile-tab">
                        <table class="table">
                           <tbody>
                           <tr>
                              <td>Processador</td>
                              <td>8GB of 2133MHz LPDDR3 onboard memory</td>
                           </tr>
                           <tr>
                              <td>Memória</td>
                              <td>2.3GHz quad-core Intel Core i5</td>
                           </tr>
                           <tr>
                              <td>Marca</td>
                              <td>Apple</td>
                           </tr>
                           <tr>
                              <td>Tela</td>
                              <td>13.3-inch (diagonal) LED-backlit display with IPS technology</td>
                           </tr>
                           <tr>
                              <td>SSD</td>
                              <td>512GB</td>
                           </tr>
                           <tr>
                              <td>Peso</td>
                              <td>2KG</td>
                           </tr>
                           <tr>
                              <td>Gráfico</td>
                              <td>Intel Iris Plus Graphics 655</td>
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
   <!-- CONTAINER-FLUID END -->
</template>

<script>
export default {
   name: 'ProductDetail'
}
</script>
