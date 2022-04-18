<template>
   <!-- CONTAINER START -->
   <div class="container container-cart my-5">
      <div class="pt-3 pb-5">
         <div v-if="cartProducts.length > 0" class="card text-center">
            <div class="card-header fw-bold text-start">
               Carrinho
            </div>
            <div class="card-body my-2">

               <div v-for="(item, index) in cartProducts" :key="item.product.id">
                  <div class="cart-items">
                     <img :src="item.product.image_url" class="img-thumbnail" :alt="item.product.name" width="200">
                     <h5 class="fs-5 fw-lighter" style="font-size: 8px">
                        {{ item.product.name }}
                     </h5>

                     <div class="d-block">
                        <div class="d-flex flex-row align-items-start justify-content-start">
                           <h6>
                              <strong>
                                 R$ {{ item.product.price | format_price_br }}<label class="text-muted mx-1"> x </label>
                              </strong>
                           </h6>
                           <div class="quantity ml-4">
                              <input
                                 @click="incrementQty(item.product)"
                                 type="button"
                                 value="+"
                                 class="plus">
                              <input type="number" readonly step="1" max="99" min="1" :value="item.qty" title="Qty" class="qty"
                                     size="4">
                              <input
                                 @click="decrementQty(item.product)"
                                 type="button"
                                 value="-"
                                 class="minus">
                           </div>
                        </div>
                        <small v-if="aboveAvailableQuantity(item)" class="fw-lighter text-danger"
                               style="font-size: 12px">
                           Existem apenas {{ item.product.quantity }} unidades disponíveis desse produto
                        </small>
                     </div>

                     <div class="col-2 col-sm-2 col-md-2 text-right">
                        <button
                           @click="removeProductCart(item.product)"
                           type="button"
                           class="btn btn-outline-danger btn-xs"
                        >
                           <i class="bi bi-trash3-fill"></i>
                        </button>
                     </div>
                  </div>
                  <hr v-if="!isLastItem(cartProducts.length, index)">
               </div>

            </div>

            <div class="card-footer d-flex flex-row justify-content-end text-muted text-end ">

               <p class="fw-bold fw-lighter">Total</p>
               <span class="mx-3 mx-md-5">{{ qtyCartProducts }} (Items)</span>
               <span>R$ {{ totalCart(cartProducts) | format_price_br }}</span>

            </div>

            <div class="card-footer text-muted text-end ">

               <router-link :to="{ name: 'checkout' }" class="text-decoration-none text-white">
                  <button class="btn btn-primary btn-sm fw-bold"> Finalizar Compra</button>
               </router-link>

            </div>
         </div>
         <div v-else class="d-flex pt-3 justify-content-center fs-5 fw-light">Carrinho vazio</div>
      </div>
   </div>
   <!-- CONTAINER END -->
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import isLastItemMixin from '@/modules/website/mixins/is-last-item'
import cartUtilitiesMixin from '@/modules/website/mixins/cart-utilities'

export default {
   name: 'Cart',
   computed: {
      ...mapState({
         cartProducts: state => state.cart.cartProducts
      }),
      qtyCartProducts () {
         return this.cartProducts.length
      }
   },
   mixins: [
      isLastItemMixin,
      cartUtilitiesMixin
   ],
   methods: {
      ...mapMutations({
         decrementQty: 'DECREMENT_QTY_PRODUCT_CART',
         incrementQty: 'INCREMENT_QTY_PRODUCT_CART',
         removeProductCart: 'REMOVE_PRODUCT_CART'
      }),
      aboveAvailableQuantity (cartProduct) {
         return cartProduct.qty > cartProduct.product.quantity
      }
   }
}
</script>
