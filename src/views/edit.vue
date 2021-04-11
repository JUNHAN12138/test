<template>
    <div>
        <el-card>
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="新闻标题">
                    <el-input type="text" placeholder="请输入新闻标题" v-model="form.title_news" maxlength="20" show-word-limit></el-input>
                </el-form-item>
                <el-form-item label="新闻日期">
                    <el-date-picker v-model="form.time_news" type="datetime" placeholder="选择日期时间" format="yyyy-MM-dd HH:mm:ss" value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
                </el-form-item>
                <el-form-item label="新闻编号">
                    <el-col :span="3">
                        <el-input type="text" placeholder="请输入新闻编号" v-model="form.id_news"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="新闻信息">
                    <quill-editor ref="myTextEditor" v-model="form.infor_news" :options="editorOption" style="height:270px;"></quill-editor>
                </el-form-item>
            </el-form>
            <el-button type="primary" @click="upload">提交</el-button>
        </el-card>
    </div>
</template>
<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor';

export default {
    data(){
        return{
            form:{
                id_news:'',
                title_news:'',
                time_news:'',
                infor_news:''
            },
            editorOption: {
               placeholder: '编辑文章内容'
            },
        }
    },
    components: {
        quillEditor
    },
    methods:{
        onEditorChange({ editor, html, text }) {
            this.content = html;
        },
        async upload(){
            console.log(this.form)
            const result= await this.$axios.post("addNews/infor",this.form);
        }

    }
}
</script>

<style>
.quill-editor{
    height: 500px;
}
.ql-container{
    height:200px;
}
</style>