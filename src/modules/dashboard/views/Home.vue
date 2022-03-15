<template>
   <div class="px-4 mb-5 pb-5">
      <div class="card">

         <div class="card-header">
            <button class="btn btn-primary">Cadastrar</button>
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

         <div class="card-footer clearfix">
            <ul class="pagination pagination-md m-0 float-end">
               <li class="page-item"><a class="page-link" href="#">&laquo;</a></li>
               <li class="page-item"><a class="page-link" href="#">1</a></li>
               <li class="page-item"><a class="page-link" href="#">2</a></li>
               <li class="page-item"><a class="page-link" href="#">3</a></li>
               <li class="page-item"><a class="page-link" href="#">&raquo;</a></li>
            </ul>
         </div>

      </div>
   </div>
</template>

<script>
export default {
   name: 'Home'
}
</script>
