<template>
   <div>
      <span v-if="status === 'ordered'" class="badge rounded-pill bg-info">{{ status_label }} <i class="bi bi-arrow-clockwise"></i></span>
      <span v-else-if="status === 'paid'" class="badge rounded-pill bg-success">{{ status_label }} <i class="bi bi-check2-all"></i></span>
      <span v-else-if="status === 'delivered'" class="badge rounded-pill bg-primary">{{ status_label }} <i class="bi bi-truck"></i></span>
      <span v-else class="badge rounded-pill bg-danger">{{ status_label }} <i class="bi bi-x-circle-fill"></i></span>
   </div>
</template>

<script>
export default {
   name: 'RoundedColorLabel',
   props: {
      status: String,
      status_label: String
   }
}
</script>
