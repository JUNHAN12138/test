<template>
	<el-upload
    class="avatar-uploader"
    action="http://localhost:3000/upload"
    :show-file-list="false"
    :on-success="handleUploadSuccess"
    :before-upload="beforeAvatarUpload"
    >
    <img 
    	v-if="imgurl" 
    	:src="imgurl" 
    	class="avatar">
    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
  </el-upload>
</template>
<script>
  export default {
    data() {
      return {
      	imgurl: ''
      }
    },
    methods: {
    	handleAvatarSuccess(res, file) {
        this.imgurl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        // 上传前对文件的一些校验处理
      }
    },
    mounted(){
    	
    }
  }
</script>
<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>