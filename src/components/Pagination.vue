<template>
   <div class="clearfix">
      <ul class="pagination pagination-md m-0 float-end">
         <li class="page-item">
            <a @click="getForPage($event, links.firstPage, 'fisrt')" class="page-link" href="">&laquo;</a>
         </li>
         <li
            v-for="link in cleanLinks" :key="link.label"
            :class="{'active': link.active}"
            class="page-item"
         >
            <a
               class="page-link"
               href=""
               @click="getForPage($event, link, '')"
            >
               {{ link.label }}
            </a>
         </li>
         <li class="page-item">
            <a @click="getForPage($event, links.lastPage, 'last')" class="page-link" href="">&raquo;</a>
         </li>
      </ul>
   </div>
</template>

<script>
import store from '@/store'

export default {
   name: 'Pagination',
   props: {
      links: Object,
      action: String,
      filters: Object
   },
   computed: {
      cleanLinks () {
         // criando uma cópia pq uma prop não pode ser modificada
         const cleanLinks = [...this.links.data]
         cleanLinks.shift()
         cleanLinks.pop()
         return cleanLinks
      }
   },
   methods: {
      getForPage (event, link, firstOrLast) {
         event.preventDefault()
         // se não for nem o primeiro nem o último link entra aqui
         if (!firstOrLast) {
            if (link.active) {
               return
            }
            // Será adicionando o parâmetro ('page') e outros filtros na url Ex: "http://127.0.0.1:8000/api/v1/auth/product?page=1"
            return store.dispatch(this.action, { urlPaginated: link.url, filters: this.filters })
         }

         store.dispatch(this.action, { urlPaginated: link, filters: this.filters })
      }
   }
}
</script>
