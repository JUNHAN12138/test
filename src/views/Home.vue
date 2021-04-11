<template>
  
</template>

<script>

export default {
  data(){
      return{
        object:{}
      }
  },
  methods:{
    async handleUserList() {
      const { data: res } = await this.$axios.get("queryNews/infor");
      this.object = res.data;
    }
  }
}
</script>
