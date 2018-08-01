<template>
  <div class="article card">
    <div class="data-article"><!-- 更新时间 -->
      <span class="month">{{ArtData.month}}月</span>
      <span class="day">{{ArtData.day}}</span>
    </div>
    <section>
      <div class="title-article"><!-- 标题 -->
        <h1>
          <a href="javascript:;" v-on:click="TitleClick(ArtData.id)">
            {{ArtData.title}}
          </a>
        </h1>
      </div>
      <div class="tag-article"><!-- 标签 -->
        <span class="badge label"><i class="fa fa-tags"></i><a href="javascript:;" v-on:click="TagClick(ArtData.tags)">{{ArtData.tags}}</a></span>
        <span class="badge label"><i class="fa fa-user"></i><a href="javascript:;" v-on:click="AuthorClick(ArtData.author)">{{ArtData.author}}</a></span>
        <span class="badge label"><i class="fa fa-eye"></i>{{ArtData.look}}</span>
      </div>
      <div class="content-article"><!-- 内容（图片+简介） -->
        <div class="card"><a href="javascript:;" v-on:click="TitleClick(ArtData.id)"><img class="card-img-top"width="750" height="300" :src="ArtData.pictureurl" alt=""></a></div>
        <div class="summary">{{ArtData.summarys}}</div>
      </div>
      <button type="button" class="btn btn-info pull-right read-more" v-on:click="TitleClick(ArtData.id)">阅读全文<span class="badge">{{ArtData.look}}</span></button>
    </section>
  </div>
</template>

<script>
    export default {
        name: "Artsummary",
        props:{
          ArtData:Object
        },
        methods:{
          TitleClick:function (id) {
            this.$emit('Titleclick',id)
          },
          TagClick:function (name) {
            this.$emit('Tagclick',name)
          },
          AuthorClick:function (name) {
            this.$emit('Authorclick',name)
          }
        }
    }
</script>

<style scoped src="../../static/css/artcss.css">

</style>
