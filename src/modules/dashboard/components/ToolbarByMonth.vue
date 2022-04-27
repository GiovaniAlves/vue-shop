<template>
   <div>
      <div class="card">
         <div class="card-header">{{ title }}</div>
         <div class="card-body d-flex justify-content-between">
            <button
               @click="decrement"
               type="button"
               class="btn btn-sm btn-success"
            >
               <i class="bi bi-chevron-double-left"></i>
            </button>
            <small class="fw-lighter fs-5">{{ currentMonth }}</small>
            <button
               @click="increment"
               type="button"
               class="btn btn-sm btn-success"
            >
               <i class="bi bi-chevron-double-right"></i>
            </button>
         </div>
      </div>
   </div>
</template>

<script>
import moment from 'moment'

export default {
   name: 'ToolbarByMonth',
   props: {
      title: String
   },
   data () {
      return {
         date: moment()
      }
   },
   computed: {
      currentMonth () {
         const date = this.date.format('MMMM YYYY')
         return date[0].toUpperCase() + date.substring(1) // Deixando a primeira letra maiúscula
      }
   },
   methods: {
      emit () {
         this.$emit('date', this.date.format('MM-YYYY'))
      },
      decrement () {
         this.date = this.date.clone().subtract(1, 'month')
         this.emit()
      },
      increment () {
         this.date = this.date.clone().add(1, 'month')
         this.emit()
      }
   }
}
</script>
