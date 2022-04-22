<template>
   <div class="container my-5">
      <div class="pt-3 pb-4">

         <div v-if="recentlyPurchased" class="d-flex justify-content-center mt-3">
            <div class="card text-white bg-success">
               <div class="card-body">
                  <h5 class="card-title"><i class="bi bi-check2-all"></i> Sua compra foi aprovada.</h5>
                  <p class="card-text">Para mais informações do pedido clique na opção de detalhes do mesmo.</p>
               </div>
            </div>
         </div>

         <div class="card mt-3 mb-5">
            <h6 class="card-header">Meus Pedidos</h6>
            <div class="card-body table-responsive">

               <table class="table">
                  <thead>
                  <tr>
                     <th scope="col">Pedido</th>
                     <th scope="col">Data</th>
                     <th scope="col">Endereço</th>
                     <th scope="col">Status</th>
                     <th></th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="order in orders.data" :key="order.id">
                     <th scope="row"># {{ order.id }}</th>
                     <td>{{ order.date }}</td>
                     <td>Rua: Antônio Cezar, 7851</td>
                     <td><RoundedColorsLabels :status="order.status" :status_label="order.status_label" /> </td>
                     <td>
                        <router-link :to="{ name: 'orderDetail', params: { id: order.id }}" class="btn btn-primary">
                           <i class="bi bi-eye-fill"></i> <small class="fw-bold text-white">Detalhes</small>
                        </router-link>
                     </td>
                  </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import OrderService from '@/modules/website/modules/order/service/order-service'
import RoundedColorsLabels from '@/modules/website/modules/order/components/RoundedColorsLabels'

export default {
   name: 'Orders',
   components: { RoundedColorsLabels },
   data () {
     return {
        orders: [],
        loading: false,
        recentlyPurchased: this.$route.params.recentlyPurchased || false
     }
   },
   async created () {
      this.orders = await OrderService.index()
   }
}
</script>
