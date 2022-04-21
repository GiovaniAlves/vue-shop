export default {
   methods: {
      // retorna o valor total dos produtos no carrinho
      totalCart (cartProducts) {
         let total = 0

         cartProducts.map((cartProd) => {
            total += this.qtyProduct(cartProd) * cartProd.product.price
         })

         return total
      },

      // retorna a quantidade máxima de produtos disponiveis (se o usuário incluir uma qtd maior do que a disponível)
      qtyProduct (cardProduct) {
         return cardProduct.quantity <= cardProduct.product.quantity ? cardProduct.quantity : cardProduct.product.quantity
      }
   }
}
