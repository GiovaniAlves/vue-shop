<template>
   <div>
      <div class="container my-5">
         <div class="pt-3 pb-5 container-checkout">

            <div class="address">
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
                           <p class="card-title fw-lighter" style="font-size: 13px">CEP: 39800-000</p>
                           <p class="card-title fw-lighter" style="font-size: 13px">Minas Gerais</p>
                           <p class="card-title fw-lighter" style="font-size: 13px">(33) 99999-9999</p>
                        </div>
                     </div>
                     <p class="card-title fw-lighter" style="font-size: 12px"><strong>Editar</strong></p>
                  </div>
               </div>
            </div>
            <div class="sumary-order">
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
                     <div v-for="(item, index) in cartProducts" :key="item.id">
                        <div class="d-flex flex-row justify-content-between">
                           <p class="card-title fw-lighter" style="font-size: 13px">
                              <strong>{{ item.product.name }}</strong> x {{ qtyProduct(item) }}
                           </p>
                           <p class="card-title fw-lighter" style="font-size: 13px"><strong>R$
                              {{ item.product.price * qtyProduct(item) | format_price_br }}</strong></p>
                        </div>
                        <small class="fw-lighter d-flex flex-row" style="font-size: 10px">
                           {{ item.product.specifications[0].description }}
                        </small>
                        <hr v-if="!isLastItem(cartProducts.length, index)">
                     </div>
                  </div>
                  <div class="d-flex flex-row justify-content-between align-items-center card-footer text-muted"
                       style="height: 42px">
                     <p class="fw-bold ">Total</p>
                     <span class="fs-6 fw-lighter">R$ {{ totalCart(cartProducts) | format_price_br }}</span>
                  </div>
               </div>
            </div>
            <div class="payment">
               <div class="card">
                  <h6 class="card-header">Pagamento</h6>
                  <div class="card-body">

                     <div class="row">
                        <div class="col-12 col-md-7">
                           <div class="row">
                              <div class="col-12">
                                 <label>Número do Cartão</label>
                                 <div class="input-group mb-3">
                                    <TheMask
                                       v-model.trim="$v.order.card_number.$model"
                                       mask="####-####-####-####"
                                       :class="['form-control', {'is-invalid': $v.order.card_number.$invalid && $v.order.card_number.$dirty }]"
                                       type="text"
                                       placeholder="XXXX-XXXX-XXXX-XXXX"
                                       id="validationCardNumber"
                                    ></TheMask>
                                    <div id="validationCardNumber" class="invalid-feedback">
                                       Informe o número do cartão.
                                    </div>
                                 </div>
                              </div>
                              <div class="col-12 col-md-6">
                                 <label>Data de Expiração</label>
                                 <div class="input-group mb-3">
                                    <TheMask
                                       v-model.trim="$v.order.exp_date.$model"
                                       mask="##/##"
                                       :class="['form-control', {'is-invalid': $v.order.exp_date.$invalid && $v.order.exp_date.$dirty }]"
                                       type="text"
                                       :masked="true"
                                       placeholder="MM/AA"
                                       id="validationExpDate"
                                    ></TheMask>
                                    <div id="validationExpDate" class="invalid-feedback">
                                       Informe a data de experição.
                                    </div>
                                 </div>
                              </div>
                              <div class="col-12 col-md-6">
                                 <label>CVV</label>
                                 <div class="input-group mb-3">
                                    <TheMask
                                       v-model.trim="$v.order.cvc.$model"
                                       mask="###"
                                       :class="['form-control', {'is-invalid': $v.order.cvc.$invalid && $v.order.cvc.$dirty }]"
                                       type="text"
                                       placeholder="XXX"
                                       id="validationCVC"
                                    ></TheMask>
                                    <div id="validationCVC" class="invalid-feedback">
                                       Informe o CVC.
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-12 col-md-5">
                           <img src="/img/card.png" width="230">
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
                           <p class="fw-lighter fs-4">Total: <span
                              class="text-primary">R$ {{ totalCart(cartProducts) | format_price_br }}</span></p>
                           <button
                              v-if="!loading"
                              @click.prevent="onSubmint"
                              class="btn btn-success btn-sm fw-bold"
                              :disabled="$v.$invalid"
                           >
                              Confirmar & Pagar
                           </button>
                           <button
                              v-else
                              @click.prevent="onSubmint"
                              class="btn btn-success btn-sm fw-bold disabled"
                           >
                              Confirmando...
                           </button>
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
import { mapState } from 'vuex'
import isLastItemMixin from '@/modules/website/mixins/is-last-item'
import cartUtilitiesMixin from '@/modules/website/mixins/cart-utilities'
import { required } from 'vuelidate/lib/validators'
import { TheMask } from 'vue-the-mask'
import OrderService from '@/modules/website/modules/order/service/order-service'

export default {
   name: 'OrderCheckout',
   components: { TheMask },
   data () {
      return {
         order: {
            total: 0,
            card_number: undefined,
            exp_date: '',
            cvc: undefined,
            products: []
         },
         loading: false
      }
   },
   validations: {
      order: {
         card_number: {
            required
         },
         exp_date: {
            required
         },
         cvc: {
            required
         }
      }
   },
   computed: {
      ...mapState({
         cartProducts: state => state.cart.cartProducts
      })
   },
   created () {
      if (this.cartProducts.length === 0) {
         this.$router.push({ name: 'productsCatalog' })
      }
   },
   mixins: [
      isLastItemMixin,
      cartUtilitiesMixin
   ],
   methods: {
      async onSubmint () {
         this.loading = true
         try {
            if (!this.$v.$invalid) {
               this.resetOrderProducts()
               this.cartProducts.forEach((cartProd) => {
                  this.order.products.push({
                     id: cartProd.id,
                     price: cartProd.product.price,
                     quantity: cartProd.quantity
                  })
               })

               this.order.total = this.totalCart(this.cartProducts)

               await OrderService.create(this.order)
            }
         } catch (error) {
            const { status } = error.response

            if (status === 422) {
               this.$toast.error('Cartão recusado')
            }
         } finally {
            this.loading = false
         }
      },
      resetOrderProducts () {
         this.order.products = []
      }
   }
}
</script>
