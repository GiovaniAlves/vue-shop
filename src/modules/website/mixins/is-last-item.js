export default {
   methods: {
      isLastItem (arraySize, currentPosition) {
         // retorna true se a posição atual for a última. Criei esse método para esconder o último hr da lista de pedidos
         return arraySize === currentPosition + 1
      }
   }
}
