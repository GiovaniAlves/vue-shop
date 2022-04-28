<template>
   <div>
      <div class="row">
         <div class="col-md-12">
            <ToolbarByMonth
               title="Total de Vendas por Categoria"
               @date="changeMonthSaleCategory"
            />
            <canvas class="chart-container" :ref="charts[0].refId"></canvas>
         </div>
      </div>

      <div class="row pt-5">
         <div class="col-md-6">
            <ToolbarByMonth
               title="Total de Vendas por Status"
               @date="changeMonthSaleStatus"
            />
            <canvas :ref="charts[1].refId"></canvas>
         </div>
         <div class="col-md-6">
            <ToolbarByMonth
               title="Novos Usuários"
               @date="changeMonthUsers"
            />
            <canvas :ref="charts[2].refId"></canvas>
         </div>
      </div>

   </div>
</template>

<script>
import Chart from 'chart.js/auto'
import { mapActions } from 'vuex'
import ToolbarByMonth from '@/modules/dashboard/components/ToolbarByMonth'
import { generateChartConfigs } from '@/helpers'
import ReportService from '@/modules/dashboard/services/report-service'
import moment from 'moment'

export default {
   name: 'Reports',
   components: { ToolbarByMonth },
   data () {
      return {
         currentDate: moment().format('MM-YYYY'),
         chartSalesByCategories: undefined,
         chartSalesByStatus: undefined,
         chartQtyNewUsers: undefined,
         charts: [
            {
               title: 'Vendas por Categoria',
               refId: 'chartSalesByCategories'
            },
            {
               title: 'Vendas por Status',
               refId: 'chartSalesByStatus'
            },
            {
               title: 'Quantidade de Novos Usuários',
               refId: 'chartQtyNewUsers'
            }
         ],
         qtyUsers: {},
         salesByStatus: [],
         salesByCategory: []
      }
   },
   async created () {
      this.setTitle({ title: 'Painel' })

      await this.changeMonthSaleCategory(this.currentDate)
      await this.changeMonthSaleStatus(this.currentDate)
      await this.changeMonthUsers(this.currentDate)
   },
   methods: {
      ...mapActions(['setTitle']),
      async getQtyUsers (date) {
         this.qtyUsers = await ReportService.qtyUsers(date)
      },
      async getSales (date, type) {
         if (type === 'status') {
            this.salesByStatus = await ReportService.salesBy({ date, type })
         } else {
            this.salesByCategory = await ReportService.salesBy({ date, type })
         }
      },

      async changeMonthSaleCategory (date) {
         await this.getSales(date, 'category')

         this.createOrUpdateChart('chartSalesByCategories', generateChartConfigs({
               items: this.salesByCategory,
               type: 'doughnut',
               label: 'Vendas por Categoria',
               backgroundColors: ['#FF6347', '#87CEFA', '#3CB371', '#C0C0C0', '#FFDEAD']
            }
         ))
      },
      async changeMonthSaleStatus (date) {
         await this.getSales(date, 'status')

         this.createOrUpdateChart('chartSalesByStatus', generateChartConfigs({
            items: this.salesByStatus,
            type: 'doughnut',
            label: 'Vendas por Status',
            backgroundColors: ['#F0E68C', '#3CB371', '#FF0000', '#87CEFA', '#363636']
         }))
      },
      async changeMonthUsers (date) {
         await this.getQtyUsers(date)

         this.createOrUpdateChart('chartQtyNewUsers', generateChartConfigs({
            items: this.qtyUsers,
            type: 'bar',
            label: 'Novos Usuários Por Mês',
            backgroundColors: ['#3CB371']
         }))
      },

      createOrUpdateChart (refIdChart, options) {
         if (this[refIdChart]) { // Ex.: this.chartQtyNewUsers - Dessa forma posso acessar de forma dinâmica as props (data) da instância vue.
            this[refIdChart].data.datasets = options.data.datasets

            if (options.data.labels) {
               this[refIdChart].data.labels = options.data.labels
            }

            this[refIdChart].update()
            return this[refIdChart] // Faço o retorno para parar a execução e impedir que o gráfico seja gerado novamente.
         }

         const ref = this.$refs[refIdChart]
         const ctx = ref.getContext('2d')
         this[refIdChart] = new Chart(ctx, options)
         return this[refIdChart]
      }
   }
}
</script>

<style>
.chart-container{
   position: relative;
   margin: auto;
   height: 15vh;
   width: 40vw;
}
</style>
