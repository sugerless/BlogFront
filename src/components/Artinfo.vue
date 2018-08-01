<template>
  <div>
  <article class="article container card">
    <!-- 面包屑 -->
    <div class="breadcrumb" style="background-color: #999999;color: white">
      <i class="fa fa-home"></i> <!-- Breadcrumb NavXT 4.4.0 -->
       / {{ArtInfoData.title}}	</div>
    <!-- 面包屑结束 -->
      <div class="title-article">
        <h1><a href="avascript:;">{{ArtInfoData.title}}</a></h1>
      </div>
      <div class="tag-article">
        <span class="label label-zan"><i class="fa fa-tags"></i> {{ArtInfoData.pubtime}}</span>
        <span class="label label-zan"><i class="fa fa-tags"></i> <a href="javascript:;" rel="category tag"> {{ArtInfoData.tags}}</a></span>
        <span class="label label-zan"><i class="fa fa-user"></i> <a href="javascript:;" rel="author"> {{ArtInfoData.author}}</a></span>
        <span class="label label-zan"><i class="fa fa-eye"></i> {{ArtInfoData.look}}</span>
      </div>

    <div class="centent-article">
      <div class="card"><img class="card-img-top" width="750" height="300" :src="ArtInfoData.pictureurl" alt=""></div>
        <div class="ql-container ql-snow" style="border-style: none; width: 688px ; height: auto">
          <div class="ql-editor" data-gramm="false"  v-html="ArtInfoData.content"></div>
      </div>

      <!-- 下一篇文章 -->
      <div style="padding-bottom: 5px">
        <a href="avascript:;" class="btn btn-info ">下一篇</a>
      </div>

      <!-- 文章版权信息 -->
      <div class="copyright alert alert-success">
        <p>
          版权属于:
          <a href="#">{{ArtInfoData.author}}</a></p>
        <p>转载时必须以链接形式注明原始出处及本声明。</p>
      </div>
      <!-- 文章版权信息结束 -->

    </div>
  </article>
  </div>
</template>

<script>
    export default {
        name: "Artinfo",
        props:{
          ArtInfoData:Object
        },
        methods:{

        }
    }
</script>

<style scoped src="../../static/css/core.css">

</style>
