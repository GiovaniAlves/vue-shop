<template>
   <!-- CONTAINER START -->
   <div class="container container-cart my-5">
      <div class="pt-3 pb-5">
         <div class="card text-center">
            <div class="card-header fw-bold text-start">
               Carrinho
            </div>
            <div class="card-body my-2">
               <div class="cart-items">
                  <img src="/img/products/product3.jpg" class="img-thumbnail" alt="..." width="200">
                  <h5 class="fs-5 fw-lighter" style="font-size: 8px">
                     Computador gamer sit amet, consectetur adipisicing elitonsectetur elit.
                  </h5>
                  <div class="d-flex flex-row align-items-start justify-content-start">
                     <h6><strong>R$ 12,99 <label class="text-muted mx-1"> x </label></strong></h6>
                     <div class="quantity ml-4">
                        <input type="button" value="+" class="plus">
                        <input type="number" step="1" max="99" min="1" value="1" title="Qty" class="qty"
                               size="4">
                        <input type="button" value="-" class="minus">
                     </div>
                  </div>
                  <div class="col-2 col-sm-2 col-md-2 text-right">
                     <button type="button" class="btn btn-outline-danger btn-xs">
                        <i class="bi bi-trash3-fill"></i>
                     </button>
                  </div>
               </div>
               <hr>
               <div class="cart-items">
                  <img src="/img/products/product3.jpg" class="img-thumbnail" alt="..." width="200">
                  <h5 class="fs-5 fw-lighter">
                     Computador gamer sit amet, consectetur adipisicing elitonsectetur elit.
                  </h5>
                  <div class="d-flex flex-row align-items-start justify-content-start">
                     <h6><strong>R$ 12,99 <label class="text-muted mx-1"> x </label></strong></h6>
                     <div class="quantity ml-4">
                        <input type="button" value="+" class="plus">
                        <input type="number" step="1" max="99" min="1" value="1" title="Qty" class="qty"
                               size="4">
                        <input type="button" value="-" class="minus">
                     </div>
                  </div>
                  <div class="col-2 col-sm-2 col-md-2 text-right">
                     <button type="button" class="btn btn-outline-danger btn-xs">
                        <i class="bi bi-trash3-fill"></i>
                     </button>
                  </div>
               </div>
               <hr>
               <div class="cart-items">
                  <img src="/img/products/product3.jpg" class="img-thumbnail" alt="..." width="200">
                  <h5 class="fs-5 fw-lighter">
                     Computador gamer sit amet, consectetur adipisicing elitonsectetur elit.
                  </h5>
                  <div class="d-flex flex-row align-items-start justify-content-start">
                     <h6><strong>R$ 12,99 <label class="text-muted mx-1"> x </label></strong></h6>
                     <div class="quantity ml-4">
                        <input type="button" value="+" class="plus">
                        <input type="number" step="1" max="99" min="1" value="1" title="Qty" class="qty"
                               size="4">
                        <input type="button" value="-" class="minus">
                     </div>
                  </div>
                  <div class="col-2 col-sm-2 col-md-2 text-right">
                     <button type="button" class="btn btn-outline-danger btn-xs">
                        <i class="bi bi-trash3-fill"></i>
                     </button>
                  </div>
               </div>
            </div>
            <div class="card-footer d-flex flex-row justify-content-end text-muted text-end ">
               <p class="fw-bold fw-lighter">Total</p>
               <span class="mx-3 mx-md-5">7 (Items)</span>
               <span>R$ 892,00</span>
            </div>
            <div class="card-footer text-muted text-end ">
               <router-link :to="{ name: 'checkout' }" class="text-decoration-none text-white">
                  <button class="btn btn-primary btn-sm fw-bold"> Finalizar Compra</button>
               </router-link>
            </div>
         </div>
      </div>
   </div>
   <!-- CONTAINER END -->
</template>

<script>
export default {
   name: 'Cart'
}
</script>
