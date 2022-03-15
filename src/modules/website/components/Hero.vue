<template>
   <div class="hero">
      <div class="container h-100">
         <div class="row h-100 justify-content-center align-items-center">
            <div class="col-md-5">
               <div class="hero-content">
                  <h1 class="hero-title">
                     Vue Shop
                  </h1>
                  <p>
                     <i>
                        A Vue Shop é um <b>e-commerce de eletrônicos</b> especializado na venda de items de linha gamer, eletrônicos, smart home,
                        smartphones e etc. Fundado em março de 2022, na cidade de Teófilo Otoni - MG, por Giovani Guimarães.
                     </i>
                  </p>
                  <div class="hero-btn mt-5">
                     <button class="btn custom-btn btn-success m-2">Explorar</button>
                     <button class="btn custom-btn btn-outline-success">Produtos</button>
                  </div>
               </div>
            </div>
            <div class="col-md-7">
               <div class="graphic">
                  <img src="/img/svg/graphic.svg" alt="">
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: 'Hero',
   props: {
      msg: String
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hero {
   padding-top: 7rem;
   width: 100%;
   height: 500px;
   text-align: left;
}

</style>
