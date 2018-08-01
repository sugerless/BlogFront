<template>
  <!-- 导航 <-->
  <!--  -->
  <nav class="navbar navbar-expand-lg bg-light navbar-light">
    <a class="navbar-brand" href="index.html">{{blogname}}</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="index.html">首页<span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" v-on:click="Click(2)">记录</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            分类
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <!--<a class="dropdown-item" href="#">C/C++</a>
            <a class="dropdown-item" href="#">Html/css</a>
            <a class="dropdown-item" href="#">php</a>
            <a class="dropdown-item" href="#">other</a>
            -->

            <a class="dropdown-item" href="javascript:;" v-for="item in skills" v-on:click="Click(item.id)">
              {{item.opt}}
            </a>

          </div>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="javascript:;" :click="Click(4)">关于</a>
        </li>
      </ul>

      <div class="share">
        <a href="https://weibo.com/" class="share-sina share-box"></a>
        <a href="javascript:;" @click="openwechat" class="share-wechat share-box"></a>
        <a href="tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=601480201" class="share-qzone share-box"></a>
        <a href=" https://github.com/sugerless" class="share-flower share-box"></a>
      </div>
    </div>
    <!-- btn-secondary dropdown-toggle -->
  </nav>
</template>

<script>
    export default {
        name: "navigation",
        data:function () {
          return{
            blogname:'Suger',
            skills:[
              {opt:'后端开发',id:31},
              {opt:'前端开发',id:32},
              {opt:'随笔',id:33},
              {opt:'运维相关',id:34}
            ]
          }
        },
        methods:{
          EditorClick:function () {
            this.$emit('Editorclick');
          },
          Click:function (id){
            this.$emit('navclick',id)
          },
          openwechat:function () {
            this.$alert('<img src="../../static/photo/wechat.png" height="400px" width="400px" alt="添加微信好友"/>','添加我的微信',
              {dangerouslyUseHTMLString: true});
          }
        }
    }
</script>

<style scoped src="../../static/css/mycss.css">

</style>
