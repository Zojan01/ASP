<template>
<div>
    <h2>Estudiantes</h2>
    <el-table v-loading="loading" :data="data" style="width: 100%">
        <el-table-column prop="name" label="Nombre" sortable></el-table-column>
        <el-table-column prop="lastName" label="Apellido" width="200" sortable></el-table-column>
        <el-table-column prop="bio" label="Acerca de mi" width="400" sortable></el-table-column>
      </el-table>
</div>
</template>

<script>
export default {
  name: "StudentIndex",
  data() {
    return {
        data: [],
        loading: false
    };
  },
  created() {
      let self = this;
      self.getAll();
  },
  methods: {
    getAll() {
      let self = this;

      self.loading = true;

      self.$store.state.services.studentService
        .getAll()
        .then(r => {
          self.loading = false;
          self.data = r.data;
        }).catch(r => {
          self.$message({
            message: "Ocurrió un error inesperado",
            type: "error"
          });
        });
    }
  }
};
</script>