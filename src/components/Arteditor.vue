<template>
    <el-card class="box-card">
      <!-- 面包屑 -->
      <div class="breadcrumb" style="background-color: #999999;color: white">
        <i class="fa fa-home"></i> <!-- Breadcrumb NavXT 4.4.0 -->
        / 文章编辑页	</div>
      <!-- 面包屑结束 -->
    <el-form ref="form" :model="form" label-width="80px" style="width: 480px;">
      <el-form-item label="文章标题">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="作者">
        <el-input v-model="form.author"></el-input>
      </el-form-item>
      <el-form-item label="栏目">
        <el-select v-model="form.cat_id" placeholder="请选择所属栏目">
          <el-option v-for="catData in catDatas" :label="catData.title" :value="catData.id" :key="catData.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="发布时间">
        <el-col :span="11">
          <el-date-picker type="date" value-format="yyyy-MM-dd HH:mm:ss" placeholder="选择日期" v-model="form.pubtime" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="是否公开">
        <el-switch v-model="form.is_show"></el-switch>
      </el-form-item>
      <el-form-item label="选择标签">
        <el-checkbox-group v-model="form.tags">
          <el-checkbox v-for="tag in tags" :label="tag.name" name="tags" :key="tag.id"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="概要">
        <el-input type="textarea" :row="2" placeholder="请输入概要" v-model="form.summary"></el-input>
      </el-form-item>
      <el-form-item label="博文内容">
          <vue-editor id="editor" v-model="form.content" useCustomImageHandler
                      @imageAdded="handleImageAdded"></vue-editor>
          <!--<mavon-editor v-model="form.content" ref=md @imgAdd="$imgAdd"></mavon-editor>-->
      </el-form-item>
      <el-from-item label="预览">
        <!--  <div id="editor" class="ql-container ql-snow"><div class="ql-editor" data-gramm="false" contenteditable="true"><h1>hello </h1><blockquote><span style="color: rgb(255, 194, 102);">hehehe</span></blockquote></div><div class="ql-clipboard" contenteditable="true" tabindex="-1"></div><div class="ql-tooltip ql-hidden"><a class="ql-preview" target="_blank" href="about:blank"></a><input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL"><a class="ql-action"></a><a class="ql-remove"></a></div></div>-->
        <div class="ql-container ql-snow" style="border-style: none; width: 688px ; height: auto">
          <div class="ql-editor" data-gramm="false" v-html="form.content"></div>
        </div>
      </el-from-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
    </el-card>
</template>

<script>
    import { VueEditor }  from 'vue2-editor'
    export default {
      name: "Arteditor",
      components:{
        VueEditor
      },
      props:{
        catDatas:Object,
        tags:Object
      },
      data(){
        return{
          form: {
            title: '',//标题
            author:'',//作者
            cat_id: '',//栏目
            pubtime: '',//发布时间
            is_show: true,//是否公开
            tags:[],//选择标签
            summary:'',//概要
            content: 'hello world',//博文内容
          },
        }
      },

      methods: {
        // 绑定@imgAdd event
        $imgAdd(pos, $file){
          // 第一步.将图片上传到服务器.
          var formdata = new FormData();
          formdata.append('image', $file);
          var vm=this.$refs.md;
          this.axios({
            url: 'http://suger.pdq737.top/api/Uploadimage',
            method: 'post',
            data: formdata,
            headers: { 'Content-Type': 'multipart/form-data' },
          }).then((response) => {
            // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
            // $vm.$img2Url 详情见本页末
            console.log(response.data.pngurl);
            vm.$img2Url(pos,response.data.pngurl);
          })
        },
        handleImageAdded: function(file, Editor, cursorLocation, resetUploader) {
          // An example of using FormData
          // NOTE: Your key could be different such as:
          // formData.append('file', file)

          var formData = new FormData();
          formData.append('image', file);

          this.axios({
            url: 'http://suger.pdq737.top/api/Uploadimage',
            method: 'POST',
            data: formData,
            headers: { 'Content-Type': 'multipart/form-data' }
          })
            .then((result) => {
              let url = result.data.pngurl;// Get url from response
              Editor.insertEmbed(cursorLocation, 'image', url);
              resetUploader();
            })
            .catch((err) => {
              console.log(err);
            })
        },
        onSubmit() {
          console.log('submit!');
          for(var i=0;i<this.form.tags.length;i++){
            for(var j=0;j<this.tags.length;j++){
              if (this.form.tags[i]==this.tags[j].name) {
                  this.form.tags[i] = this.tags[j].id;
              }
            }
          }
          this.$emit('Artcommit',this.form);

        }
      }
    }
</script>

<style scoped>

</style>
