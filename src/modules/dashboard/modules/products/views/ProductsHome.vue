<template>
   <div class="card">

      <div class="card-header">
         <router-link
            :to="{ name: 'productsCreate' }"
            class="btn btn-primary btn-sm"
         >
            Cadastrar Produto
         </router-link>
      </div>

      <div class="card-body table-responsive">
         <table class="table table-bordered" style="border-radius: 50px">
            <thead>
            <tr>
               <th style="width: 10px">#</th>
               <th>Tarefa</th>
               <th>Progredindo</th>
               <th>Mais</th>
               <th style="width: 120px">Ações</th>
            </tr>
            </thead>
            <tbody>
            <tr>
               <td>1</td>
               <td>Update software</td>
               <td>
                  Lorem ipsum dolor sit amet, consm quisquam repellendus repudiandae sed voluptatibus?
               </td>
               <td>
                  Lorem ipsum dolor sit amet, consm quisquam
               </td>
               <td>
                  <button class="btn btn-primary btn-sm mx-2"><i class="bi bi-pencil-square"></i></button>
                  <button class="btn btn-danger btn-sm"><i class="bi bi-trash"></i></button>
               </td>
            </tr>
            <tr>
               <td>2</td>
               <td>
                  Lorem ipsum dolor
               </td>
               <td>
                  Lorem ipsum dolor sit amet, consm quisquam repellendus repudiandae sed voluptatibus?
               </td>
               <td>
                  Lorem ipsum dolor sit amet, consm quisquam
               </td>
               <td>
                  <button class="btn btn-primary btn-sm mx-2"><i class="bi bi-pencil-square"></i></button>
                  <button class="btn btn-danger btn-sm"><i class="bi bi-trash"></i></button>
               </td>
            </tr>
            <tr>
               <td>3</td>
               <td>Cron job running</td>
               <td>
                  Lorem ipsum dolor sit amet, consm quisquam repellendus repudiandae sed voluptatibus?
               </td>
               <td>
                  Lorem ipsum dolor sit amet, consm quisquam
               </td>
               <td>
                  <button class="btn btn-primary btn-sm mx-2"><i class="bi bi-pencil-square"></i></button>
                  <button class="btn btn-danger btn-sm"><i class="bi bi-trash"></i></button>
               </td>
            </tr>
            <tr>
               <td>4</td>
               <td>Fix and squish bugs</td>
               <td>
                  Lorem ipsum dolor sit amet, consm quisquam repellendus repudiandae sed voluptatibus?
               </td>
               <td>
                  Lorem ipsum dolor sit amet, consm quisquam
               </td>
               <td>
                  <button class="btn btn-primary btn-sm mx-2"><i class="bi bi-pencil-square"></i></button>
                  <button class="btn btn-danger btn-sm"><i class="bi bi-trash"></i></button>
               </td>
            </tr>
            </tbody>
         </table>
      </div>
      <Pagination/>
   </div>
</template>

<script>
import Pagination from '@/modules/dashboard/components/Pagination'
import { mapActions } from 'vuex'

export default {
   name: 'ProductsHome',
   components: { Pagination },
   created () {
      this.setTitle({ title: 'Produtos' })
   },
   methods: {
      ...mapActions(['setTitle'])
   }
}
</script>
