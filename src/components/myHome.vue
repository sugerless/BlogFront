<template>
  <div>
  <mynav id="mynav" @navclick="navclick"></mynav>
  <div class="bodyer"><!-- 主体 -->
    <div class="container"><!-- 栅格布局 -->
      <div class="row">
        <div class="col-md-8" id="mainbody"><!-- 主内容 -->
          <div v-if="ShowArtList" id="art-list"><!-- 文章列表 -->
            <myartlist :ArtList="ArtsummaryData.arrartlist" @Titleclick="hotchange" @Tagclick="tagchange" @Authorclick="authorclick"></myartlist>
            <mypagelist :total="ArtsummaryData.pagelist.total" :current-page="ArtsummaryData.pagelist.current" @pagechange="pagechange" :display="ArtsummaryData.pagelist.display"></mypagelist>
            <!--  <myeditor></myeditor> -->
          </div>
            <myartinfo v-if="ShowArtInfo" :ArtInfoData="ArtInfoData"></myartinfo>
            <myeditor v-if="ShowEditorInfo" :catDatas="catDatas" :tags="tags" @Artcommit="artcommit" v-loading="loading" element-loading-text="拼命上传中..."></myeditor>
        </div>
        <aside class="col-md-4" id="sidebar">
          <mycard :HotArtDatas="HotArtDatas" :catDatas="catDatas" :tags="hottags" @HotArtclick="hotchange" @Catclick="catchange" @Tagclick="tagchange"></mycard>
          </aside>
      </div>
    </div>
    <vue-editor hidden></vue-editor>
  </div>
  </div>
</template>

<script>
    import { VueEditor }  from 'vue2-editor'
    export default {
      name: "myHome.vue",
      data:function(){
          return{
            ShowArtList:true,
            ShowArtInfo:false,
            ShowEditorInfo:false,
            ArtsummaryData:Object,
            HotArtDatas:Object,
            catDatas:Object,
            hottags:Object,
            tags:Object,
            currenttagname:'',
            currentcatid:0,
            currentauthorname:'',
            ArtInfoData:Object,
            loading:false,
          }
      },
      components:{
        VueEditor
      },
      mounted:function () {
          this.getArtsummaryData({page:1});
          this.getHotArtListData({hot:1});
          this.getCatListData();
          this.getHotTagListData();
          this.getTagListData();
      },
      methods:{
          //获得文章简介列表数据
          getArtsummaryData:function (DataObject) {
            var url='http://suger.pdq737.top/api/artsummary?';
            var self=this;
            for(var name in DataObject){
              url=url+name+'='+DataObject[name]+'&';
            }
            this.axios(
              {
                method:'get',
                url:url,
              }
            ).then(function(response){
              self.ArtsummaryData=response.data.result.data;
            });
          },
          //获得最热文章标题列表数据
          getHotArtListData:function(DataObject){
            var url='http://suger.pdq737.top/api/Artlist?';
            for(var name in DataObject){
              url=url+name+'='+DataObject[name]+'&';
            }
            this.axios(
              {
                method:'get',
                url:url,
              }
            ).then((response)=>{
              this.HotArtDatas=response.data.result.data;
            });
          },
          //获得栏目列表数据
          getCatListData:function(DataObject){
            var url='http://suger.pdq737.top/api/CatList?';
            for(var name in DataObject){
              url=url+name+'='+DataObject[name]+'&';
            }
            this.axios(
              {
                method:'get',
                url:url,
              }
            ).then((response)=>{
              this.catDatas=response.data.result.data;
            });
          },
        getTagListData:function(){
          var url='http://suger.pdq737.top/api/Tags?all=1';
          this.axios(
            {
              method:'get',
              url:url,
            }
          ).then((response)=>{
            this.tags=response.data.result.data;
          });
        },
          //获得最热标签列表数据
          getHotTagListData:function(){
            var url='http://suger.pdq737.top/api/Tags?hot=1';
            this.axios(
              {
                method:'get',
                url:url,
              }
            ).then((response)=>{
              this.hottags=response.data.result.data;
            });
          },
          getArtInfoData:function(id){
            var url = 'http://suger.pdq737.top/api/Artinfo?id='+id;
            var self = this;
            this.axios(
              {
              method:'get',
              url:url,
            }
            ).then(function (response) {
              self.ArtInfoData=response.data.result.data;
            });
          },
          postArtInfoData:function(Data){
            var url = 'http://suger.pdq737.top/api/Artadmin';
            var self = this;
            this.axios(
              {
                method:'post',
                url:url,
                data:Data
              }
              ).then(function (response) {
                if(response.data.code!=200)
                  self.Arterror(response.data);
                else {
                  self.Artsuccess(response.data);
                  console.log(response.data);
                }
                self.loading=false;
              }).cache(function (error) {
                self.Arterror(error);
                console.log(error);
              });
          },
          //分页
          pagechange:function (page) {
            var DataObject={};
            if(this.currenttagname!=='')
                DataObject['tag']=this.currenttagname;
            if(this.currentcatid!==0)
                DataObject['cat']=this.currentcatid;
            if(this.currentauthorname!=='')
                DataObject['author']=this.currentauthorname;
            DataObject['page']=page;
            this.getArtsummaryData(DataObject);
            window.scrollTo(0,document.body.scrollHeight);
            window.scrollTo(0,0);
          },
          //点击文章
          hotchange:function (id) {
              this.getArtInfoData(id);
              this.ShowArtInfo=true;
              this.ShowArtList=false;
              this.ShowEditorInfo=false;
          },
          authorclick:function(name){
              this.currentauthorname=name;
              this.currenttagname='';
              this.currentcatid=0;
              var DataObject={page:1,author:name};
              this.getArtsummaryData(DataObject);
              this.ShowArtInfo=false;
              this.ShowArtList=true;
              this.ShowEditorInfo=false;
              window.scrollTo(0,document.body.scrollHeight);
              window.scrollTo(0,0);

          },
          //点击栏目分类
          catchange:function (id) {
              this.currentcatid=id;
              this.currentauthorname='';
              this.currenttagname='';
              var DataObject={page:1,cat:id};
              this.getArtsummaryData(DataObject);
              this.ShowArtInfo=false;
              this.ShowArtList=true;
              this.ShowEditorInfo=false;
              document.body.scrollTop = 0;
              document.documentElement.scrollTop = 0;
              window.scrollTo(0,document.body.scrollHeight);
              window.scrollTo(0,0);
          },
          //点击热门标签
          tagchange:function (name) {
              this.currenttagname=name;
              this.currentauthorname='';
              this.currentcatid=0;
              var DataObject={page:1,tag:name};
              this.getArtsummaryData(DataObject);
              this.ShowArtInfo=false;
              this.ShowArtList=true;
              this.ShowEditorInfo=false;
              window.scrollTo(0,document.body.scrollHeight);
              window.scrollTo(0,0);
          },
          Arterror:function(error){
            this.$notify.error(
              {
                title:'上传文章失败',
                message:error,

              }
            );
          },
          Artsuccess:function(data){
            this.$notify(
              {
                title:'上传文章成功',
                message:data,
                type:'success',
              }
            );
          },
          artcommit:function (form) {
              this.loading=true;
              this.postArtInfoData(form);
          },
          editorchange:function () {
              this.ShowArtList=false;
              this.ShowArtInfo=false;
              this.ShowEditorInfo=true;
          },
          //特殊逻辑
          navclick:function (id) {
              if(id==2){
                this.catchange(3);
              }
              if(id==31){
                this.catchange(1);
              }
              if(id==32){
                this.catchange(2);
              }
              if(id==33){
                this.catchange(3);
              }
              if(id==34){
                this.catchange(4);
              }
          }
      }
    }
</script>
<style>
  #mynav{
  padding-left: 200px;
  padding-right: 200px;
  }
</style>
<style scoped src="../../static/css/artcss.css">

</style>
