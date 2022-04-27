<template>
   <div class="container my-5">
      <div v-if="loading" class="d-flex justify-content-center pt-3 fs-5 fw-light">Carregando...</div>
      <div v-else class="pt-3 pb-4">

         <div class="card mb-3">
            <div class="card-body">
               <p class="fw-lighter fs-5">Detalhes do Pedido: #{{ order.id }}</p>
               <p class="fw-lighter">{{ order.date_time }}</p>
               <p class="card-text">
                  <small class="text-muted">
                     Status: <RoundedColorLabel :status="order.status" :status_label="order.status_label" />
                  </small>
               </p>
            </div>
         </div>

         <div class="card mb-3">
            <div class="card-body">
              <div class="card-address-payment">
                 <div>
                    <p class="fst-italic fw-bold">Billing Address</p>
                    <p class="fst-italic">{{ order.client.name }}</p>
                    <p class="fst-italic" style="font-size: 13px">Main Avenue Penasauka, New Jersey 87896</p>
                    <p class="fst-italic" style="font-size: 13px">Email: antony@example.com</p>
                 </div>

                 <div>
                    <p class="fst-italic fw-bold">Shipping Address</p>
                    <p class="fst-italic">{{ order.client.name }}</p>
                    <p class="fst-italic" style="font-size: 13px">Main Avenue Penasauka, New Jersey 87896</p>
                 </div>

                 <div>
                    <p class="fst-italic fw-bold">Payment Method</p>
                    <div class="d-flex">
                       <img src="/img/card.png" width="100">
                       <div>
                          <p class="fst-italic">{{ order.client.name }}</p>
                          <p>**** **** **** ****</p>
                       </div>
                    </div>
                 </div>

              </div>
            </div>
         </div>

         <div class="card mb-3">
            <div class="card-body table-responsive">
               <table class="table table-borderless">
                  <thead class="table-light">
                     <tr>
                        <th class="fst-italic">Produto(s)</th>
                        <th class="fst-italic">Quantidade</th>
                        <th class="fst-italic">Preço</th>
                        <th class="fst-italic">Total</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr v-for="(orderProduct, index) in order.orderProducts" :key="index">
                        <td class="fw-lighter fs-6">{{ orderProduct.product.name }}</td>
                        <td class="fw-lighter fs-6">{{ orderProduct.quantity }}</td>
                        <td class="fw-lighter fs-6">R$ {{ orderProduct.price | format_price_br }}</td>
                        <td class="fw-lighter fs-6">R$ {{ orderProduct.quantity * orderProduct.price | format_price_br }}</td>
                     </tr>
                  </tbody>
               </table>
               <div class="d-flex justify-content-end">
                  <p class="fst-italic fw-bold fs-6">Total da Compra: R$ {{ order.total | format_price_br}}</p>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import OrderService from '@/modules/website/modules/order/services/order-service'
import RoundedColorLabel from '@/modules/website/modules/order/components/RoundedColorLabel'

export default {
   name: 'OrderDetail',
   components: { RoundedColorLabel },
   data () {
      return {
         order: {
            client: {
               name: ''
            },
            orderProducts: []
         },
         loading: false
      }
   },
   async created () {
      this.loading = true

      try {
         this.order = await OrderService.get(this.$route.params.id)
      } catch (e) {

      } finally {
         this.loading = false
      }
   }
}
</script>

<style scoped>

</style>
