<template>
   <div class="container my-5">
      <div class="pt-3 pb-4">
         <div class="d-flex justify-content-center mt-3">
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
                  <tr>
                     <th scope="row"># 1</th>
                     <td>20/04/2019</td>
                     <td>2392 Main Avenue, Penasauka, New Jersey 02149</td>
                     <td><span class="badge bg-secondary">Pedido <i class="bi bi-arrow-clockwise"></i></span></td>
                     <td>
                        <router-link :to="{ name: 'orderDetail', params: { id: 3 } }" class="btn btn-primary">
                           <i class="bi bi-eye-fill"></i> <small class="fw-bold text-white">Detalhes</small>
                        </router-link>
                     </td>
                  </tr>
                  <tr>
                     <th scope="row"># 2</th>
                     <td>20/04/2019</td>
                     <td>2392 Main Avenue, Penasauka, New Jersey 02149</td>
                     <td><span class="badge bg-primary">Pago <i class="bi bi-check-all"></i></span></td>
                     <td>
                        <button class="btn btn-primary">
                           <i class="bi bi-eye-fill"></i> <small class="fw-bold text-white">Detalhes</small>
                        </button>
                     </td>
                  </tr>
                  <tr>
                     <th scope="row"># 2</th>
                     <td>20/04/2019</td>
                     <td>2392 Main Avenue, Penasauka, New Jersey 02149</td>
                     <td><span class="badge bg-success">Entregue <i class="bi bi-truck"></i></span></td>
                     <td>
                        <button class="btn btn-primary">
                           <i class="bi bi-eye-fill"></i> <small class="fw-bold text-white">Detalhes</small>
                        </button>
                     </td>
                  </tr>
                  <tr>
                     <th scope="row"># 3</th>
                     <td>20/04/2019</td>
                     <td>2392 Main Avenue, Penasauka, New Jersey 02149</td>
                     <td><span class="badge bg-danger">Cancelado <i class="bi bi-x-lg"></i></span></td>
                     <td>
                        <button class="btn btn-primary">
                           <i class="bi bi-eye-fill"></i> <small class="fw-bold text-white">Detalhes</small>
                        </button>
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
export default {
   name: 'MyOrders'
}
</script>
