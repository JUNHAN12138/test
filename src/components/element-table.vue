<template>
  <div class="et">
    <el-table :data="tableData" style="width: 100%" max-height="250">
      <el-table-column fixed prop="date" label="日期" width="150">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
      <el-table-column prop="province" label="省份" width="120">
      </el-table-column>
      <el-table-column prop="city" label="市区" width="120"> </el-table-column>
      <el-table-column prop="address" label="地址" width="300">
      </el-table-column>
      <el-table-column prop="zip" label="邮编" width="120"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.row)"
            type="text"
            size="small"
          >
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name:'et',
  data() {
    return {
        tableData: []
    };
  },
  methods: {
    async deleteRow(name) {
      const result =await this.$axios.post("home/del",name)
      this.getList()
    },
    //获取所有的数据
      async getList(){
        const {data:res} =await this.$axios.get('home/show')
        if(res.status==200){
            this.tableData=JSON.parse(JSON.stringify(res.data))
        }
        console.log(this.tableData[0].date)
      }
  },
  created(){
      this.getList()
  },
  
};
</script>