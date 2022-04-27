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

export default {
   name: 'Reports',
   components: { ToolbarByMonth },
   data () {
      return {
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
   created () {
      this.setTitle({ title: 'Painel' })
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

         this.setCharts('chartSalesByCategories', {
            items: this.salesByCategory,
            type: 'doughnut',
            label: 'Vendas por Categoria',
            backgroundColors: ['#FF6347', '#87CEFA', '#3CB371', '#C0C0C0', '#FFDEAD']
         })
      },
      async changeMonthSaleStatus (date) {
         await this.getSales(date, 'status')

         this.setCharts('chartSalesByStatus', {
            items: this.salesByStatus,
            type: 'doughnut',
            label: 'Vendas por Status',
            backgroundColors: ['#F0E68C', '#D8BFD8', '#3CB371', '#BA55D3', '#8B4513']
         })
      },
      async changeMonthUsers (date) {
         await this.getQtyUsers(date)

         this.setCharts('chartQtyNewUsers', {
            items: this.qtyUsers,
            type: 'bar',
            label: 'Novos Usuários Por Mês',
            backgroundColors: ['#3CB371']
         })
      },

      createChart (chartId, options) {
         const ref = this.$refs[chartId]
         const ctx = ref.getContext('2d')
         return new Chart(ctx, options)
      },
      setCharts (refIdChart, values) {
         const chartConfigs = generateChartConfigs(values)

         if (this[refIdChart]) { // Ex.: this.chartQtyNewUsers - Dessa forma posso acessar de forma dinâmica as props (data) da instância vue.
            this[refIdChart].data.datasets = chartConfigs.data.datasets

            if (chartConfigs.data.labels) {
               this[refIdChart].data.labels = chartConfigs.data.labels
            }

            this[refIdChart].update()
         } else {
            this[refIdChart] = this.createChart(refIdChart, chartConfigs)
         }
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
