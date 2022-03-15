<template>
   <div>
      <div class="container my-5">
         <div class="row pt-3 pb-5 container-checkout">

            <div class="col-12 col-lg-8 mb-3 container-checkout-address">
               <div class="card">
                  <h6 class="card-header">Endereço de Entrega</h6>
                  <div class="card-body">
                     <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" checked
                               id="flexRadioDefault1">
                        <label class="form-check-label" for="flexRadioDefault1">
                           Giovani Alves
                        </label>
                     </div>
                     <div class="card border-secondary mb-1" style="max-width: 18rem;">
                        <div class="card-body">
                           <p class="card-title fw-lighter" style="font-size: 13px">Rua: Antônio Cezar, 7851</p>
                           <p class="card-title fw-lighter" style="font-size: 13px">Centro - Belo Horizonte</p>
                           <p class="card-title fw-lighter" style="font-size: 13px">Minas Gerais</p>
                           <p class="card-title fw-lighter" style="font-size: 13px">(33) 99999-9999</p>
                        </div>
                     </div>
                     <p class="card-title fw-lighter" style="font-size: 12px"><strong>Editar</strong></p>
                  </div>
               </div>
            </div>

            <div class="col-12 col-lg-4 mb-3 container-checkout-sumary-order">
               <div class="card text-center">
                  <div class="card-header d-flex flex-row justify-content-between" style="height: 42px">
                     <h6>Pedido(s)</h6>
                     <router-link :to="{ name: 'cart' }" class="text-white">
                        <button class="btn btn-secondary btn-sm" style="height: 30px">
                           <i class="bi bi-pencil"></i>
                        </button>
                     </router-link>
                  </div>
                  <div class="card-body">
                     <div>
                        <div class="d-flex flex-row justify-content-between">
                           <p class="card-title fw-lighter" style="font-size: 13px"><strong>Apple MacBook Pro 15" x
                              1</strong></p>
                           <p class="card-title fw-lighter" style="font-size: 13px"><strong>R$ 5432,12</strong></p>
                        </div>
                        <small class="fw-lighter d-flex flex-row" style="font-size: 10px">Z0V20008N: 2.9GHz 6-core
                           8th-Gen Intel Core i9, 32GB RAM</small>
                     </div>
                     <hr>
                     <div>
                        <div class="d-flex flex-row justify-content-between">
                           <p class="card-title fw-lighter" style="font-size: 13px"><strong>Apple MacBook Pro 15" x
                              1</strong></p>
                           <p class="card-title fw-lighter" style="font-size: 13px"><strong>R$ 5432,12</strong></p>
                        </div>
                        <small class="fw-lighter d-flex flex-row" style="font-size: 10px">Z0V20008N: 2.9GHz 6-core
                           8th-Gen Intel Core i9, 32GB RAM</small>
                     </div>
                     <hr>
                     <div>
                        <div class="d-flex flex-row justify-content-between">
                           <p class="card-title fw-lighter" style="font-size: 13px"><strong>Apple MacBook Pro 15" x
                              1</strong></p>
                           <p class="card-title fw-lighter" style="font-size: 13px"><strong>R$ 5432,12</strong></p>
                        </div>
                        <small class="fw-lighter d-flex flex-row" style="font-size: 10px">Z0V20008N: 2.9GHz 6-core
                           8th-Gen Intel Core i9, 32GB RAM</small>
                     </div>
                  </div>
                  <div class="d-flex flex-row justify-content-between align-items-center card-footer text-muted"
                       style="height: 42px">
                     <p class="fw-bold ">Total</p>
                     <span class="fs-6 fw-lighter">R$ 1.332,75</span>
                  </div>
               </div>
            </div>

            <div class="col-12 col-lg-8 mb-3 container-checkout-payment">
               <div class="card">
                  <h6 class="card-header">Pagamento</h6>
                  <div class="card-body">

                     <div class="row">
                        <div class="col-12 col-md-7">
                           <div class="row">
                              <div class="col-12">
                                 <label>Número do Cartão</label>
                                 <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="XXXX XXXX XXXX XXXX">
                                 </div>
                              </div>
                              <div class="col-12 col-md-6">
                                 <label>Data de Expiração</label>
                                 <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="MM/AA">
                                 </div>
                              </div>
                              <div class="col-12 col-md-6">
                                 <label>CVV</label>
                                 <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="XXX">
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-12 col-md-5">
                           <img src="/img/card.png">
                        </div>
                     </div>
                     <hr>
                     <div class="row">
                        <div class="col-12 col-lg-6">
                           <div class="d-flex flex-row">
                              <i class="bi bi-shield-check fs-1 fw-bold mx-3"></i>
                              <div>
                                 <p class="fw-lighter fs-4">Proteção Completa</p>
                                 <div class="form-check">
                                    <input class="form-check-input" type="radio" checked>
                                    <label class="form-check-label fs-6 fw-lighter">
                                       Devolução total se você não receber o seu produto.
                                    </label>
                                 </div>
                                 <div class="form-check">
                                    <input class="form-check-input" type="radio" checked>
                                    <label class="form-check-label fs-6 fw-lighter">
                                       Devolução parcial ou total, se o produto recebido for diferente do pedido.
                                    </label>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="vertical-line col-12 col-lg-1">
                           <div class="d-flex" style="height: 150px;">
                              <div class="vr"></div>
                           </div>
                        </div>
                        <hr class="horizontal-line my-2">
                        <div class="col-12 col-lg-5">
                           <p class="fw-lighter fs-4">Total: <span class="text-primary">R$ 5632,23</span></p>
                           <button class="btn btn-success btn-sm fw-bold">Confirmar & Pagar</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: 'Checkout'
}
</script>
