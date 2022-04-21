export default {
   ADD_PRODUCT_CART (state, product) {
      let inCart = false

      state.cartProducts.map((prodCart) => {
         if (prodCart.id === product.id) {
            inCart = true
         }
      })

      // Se não estiver no carrinho adiciona
      if (!inCart) {
         state.cartProducts.push({
            quantity: 1,
            id: product.id,
            product
         })
      }
   },

   REMOVE_PRODUCT_CART (state, product) {
      state.cartProducts = state.cartProducts.filter((prodCart) => {
         return prodCart.id !== product.id
      })
   },

   INCREMENT_QTY_PRODUCT_CART (state, product) {
      state.cartProducts = state.cartProducts.map((prodCart, index) => {
         if (prodCart.id === product.id) {
            state.cartProducts[index].quantity++
         }

         return state.cartProducts[index]
      })
   },

   DECREMENT_QTY_PRODUCT_CART (state, product) {
      state.cartProducts = state.cartProducts.filter((prodCart, index) => {
         if (prodCart.id === product.id) {
            state.cartProducts[index].quantity--
         }

         if (state.cartProducts[index].quantity > 0) {
            return state.cartProducts[index]
         }
      })
   },

   CLEAR_CART (state) {
      state.cartProducts = []
   }
}
