<template>
   <div class="container my-5">
      <div class="pt-3 pb-4">

         <div class="card mb-3">
            <div class="card-body">
               <p class="fw-lighter fs-5">Detalhes do Pedido: #452</p>
               <p class="fw-lighter">25 de Janeiro de 2022</p>
               <p class="card-text">
                  <small class="text-muted">
                     Status: <span class="badge bg-success">Pedido <i class="bi bi-check-all"></i></span>
                  </small>
               </p>
            </div>
         </div>

         <div class="card mb-3">
            <div class="card-body">
              <div class="d-flex justify-content-between">
                 <div>
                    <p class="fst-italic fw-bold">Billing Address</p>
                    <p class="fst-italic">Giovani Alves</p>
                    <p class="fst-italic" style="font-size: 13px">Main Avenue Penasauka, New Jersey 87896</p>
                    <p class="fst-italic" style="font-size: 13px">Email: antony@example.com</p>
                 </div>

                 <div>
                    <p class="fst-italic fw-bold">Shipping Address</p>
                    <p class="fst-italic">Giovani Alves</p>
                    <p class="fst-italic" style="font-size: 13px">Main Avenue Penasauka, New Jersey 87896</p>
                 </div>

                 <div>
                    <p class="fst-italic fw-bold">Payment Method</p>
                    <div class="d-flex">
                       <img src="/img/card.png" width="100">
                       <div>
                          <p class="fst-italic">Giovani Alves</p>
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
                     <tr>
                        <td class="fw-lighter fs-6">Memória Ram</td>
                        <td class="fw-lighter fs-6">10</td>
                        <td class="fw-lighter fs-6">R$ 45,00</td>
                        <td class="fw-lighter fs-6">R$ 450,00</td>
                     </tr>
                     <tr>
                        <td class="fw-lighter fs-6">Memória Ram</td>
                        <td class="fw-lighter fs-6">10</td>
                        <td class="fw-lighter fs-6">R$ 45,00</td>
                        <td class="fw-lighter fs-6">R$ 450,00</td>
                     </tr>
                     <tr>
                        <td class="fw-lighter fs-6">Memória Ram</td>
                        <td class="fw-lighter fs-6">10</td>
                        <td class="fw-lighter fs-6">R$ 45,00</td>
                        <td class="fw-lighter fs-6">R$ 450,00</td>
                     </tr>
                     <tr>
                        <td class="fw-lighter fs-6">Memória Ram</td>
                        <td class="fw-lighter fs-6">10</td>
                        <td class="fw-lighter fs-6">R$ 45,00</td>
                        <td class="fw-lighter fs-6">R$ 450,00</td>
                     </tr>
                  </tbody>
               </table>
               <div class="d-flex justify-content-end">
                  <p class="fst-italic fw-bold fs-6">Total da Compra: R$ 4.500,00</p>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: 'OrderDetail'
}
</script>

<style scoped>

</style>
