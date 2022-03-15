<template>
   <div>
      <Hero/>
      <ProductsList/>
   </div>
</template>

<script>
import Hero from '@/modules/website/components/Hero'
import ProductsList from '@/modules/website/components/ProductsList'

export default {
   name: 'Home',
   components: {
      ProductsList,
      Hero
   }
}
</script>
