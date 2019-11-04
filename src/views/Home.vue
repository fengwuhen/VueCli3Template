<template>
  <div class="p-wrap">
    {{web_site_name}}
    <el-button type="primary">饿了Button组件</el-button>
  </div>
</template>
<script>
import login from "../api/login";

export default {
  data() {
    return {};
  },
  mounted() {
    login
      .get()
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {}
};
</script>