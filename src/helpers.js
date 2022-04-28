const AUTH_TOKEN = 'token_vue_shop'
const USER_AUTHENTICATED = 'user_vue_shop'

const currencyFormatter = ({
   locale,
   currency
} = {
   locale: 'pt-BR',
   currency: 'BRL'
}) => {
   return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency
   })
}

const generateChartOptions = (type) => {
   const plugins = {
      tooltips: {}
   }
   switch (type) {
      case 'bar':
         plugins.tooltip = {
            callbacks: {
               label (tooltip) {
                  return tooltip.dataset.label || ''
               }
            }
         }
         break
      case 'doughnut':
         plugins.tooltip = {
            callbacks: {
               label (tooltip) {
                  const label = tooltip.label || ''
                  return `${label}`
               }
            }
         }
         break
   }

   const scales = {
      y: {
         beginAtZero: true
      }
   }

   return {
      scales,
      plugins
   }
}

const generateChartConfigs = opts => {
   const { type } = opts
   const data = generateChartData(opts)
   const options = generateChartOptions(type)

   return {
      data,
      options,
      type
   }
}

const generateChartData = ({ items, type, label, backgroundColors }) => {
   switch (type) {
      case 'bar':
         return {
            datasets: [
               {
                  label: `${label}: ${items.amount}`,
                  data: [items.amount], // Nesse tenho apenas 1 item que o total de usuários do mês seleciondo ex: [ 10 ]
                  backgroundColor: backgroundColors,
                  borderWidth: 1
               }
            ],
            labels: ['']
         }
      case 'doughnut':
         return {
            datasets: [
               {
                  data: items.map(item => item.total), // items: [ { label: '', total: 0 } ]
                  backgroundColor: backgroundColors,
                  borderWidth: 0
               }
            ],
            labels: items.map(item => `${item.label}: ${currencyFormatter().format(item.total)}`)
         }
   }
}

/* const errorHandler = (errorHandler, vm, info) => {
   console.log('Error Handler: ', 'Instancia Vue', vm, ' error: ', errorHandler.message, ' info: ', info)

   const jwtErrors = ['jwt malformed', 'jwt expired', 'jwt not active', 'invalid token']
   if (jwtErrors.some(jwtError => errorHandler.message.includes(jwtError))) {
      vm.$router.push({
         name: 'login',
         query: { redirect: vm.$route.path }
      })
   }
} */

export {
   AUTH_TOKEN,
   generateChartConfigs,
   USER_AUTHENTICATED
}
