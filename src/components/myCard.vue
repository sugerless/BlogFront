<template>
  <div>
    <aside class="" id="aboutme">
      <div class="hottags card">
        <div class="hotart-title sidebar-title">
          <i class="fa fa-user-circle"></i>
          关于我
        </div>
        <div>
          <!--  <li v-for="HotArtData in HotArtDatas" class="list-group-item" style="padding-top: 8px;padding-bottom: 8px;">
            <span class="page-title">
              <a href="javascript:;" v-on:click="HotArtClick(HotArtData.id)">{{HotArtData.title}}</a>
            </span>
          </li>-->
          <li  class="list-group-item" style="padding-top: 8px;padding-bottom: 8px;">
            <span class="page-title">
              <i class="fa fa-smile-o"></i> Suger
            </span>
            <!-- <span class="fa fa-thumbs-o-up fa-lg" style="vertical-align: top;"></span>-->
          </li>
          <li  class="list-group-item" style="padding-top: 8px;padding-bottom: 8px;">
            <span class="page-title">
              <i class="fa fa-google"></i> gaoman1997@gmail.com
            </span>
            <!-- <span class="fa fa-thumbs-o-up fa-lg" style="vertical-align: top;"></span>-->
          </li>
          <li  class="list-group-item" style="padding-top: 8px;padding-bottom: 8px;">
            <span class="page-title">
              <i class="fa fa-github"></i> https://github.com/sugerless
            </span>
            <!-- <span class="fa fa-thumbs-o-up fa-lg" style="vertical-align: top;"></span>-->
          </li>
          <li  class="list-group-item" style="padding-top: 8px;padding-bottom: 8px;">
            <span class="page-title">
              <i class="fa fa-list-alt"></i>
                <div style="padding-left: 18px">
                  <p>本科 西南大学 计算机科学与技术专业</p>
                  <p>融360 php开发工程师（实习）</p>
                  <p>现居: 北京海淀</p>
                </div>
            </span>
            <!-- <span class="fa fa-thumbs-o-up fa-lg" style="vertical-align: top;"></span>-->
          </li>
        </div>
      </div>
    </aside>

    <aside id="hotart">
      <div class="hot card">
        <div class="hotart-title sidebar-title">
          <i class="fa fa-fire"></i>
          最热文章
        </div>
        <ul class="list-group list-group-flush">
          <li v-for="HotArtData in HotArtDatas" class="list-group-item" style="padding-top: 8px;padding-bottom: 8px;">
            <span class="page-title">
              <a href="javascript:;" v-on:click="HotArtClick(HotArtData.id)">{{HotArtData.title}}</a>
            </span>
            <!-- <span class="fa fa-thumbs-o-up fa-lg" style="vertical-align: top;"></span>-->
          </li>
        </ul>
      </div>
    </aside><!-- 最热文章 -->
    <aside id="column-list">
      <div class="column card">
        <div class="hotart-title sidebar-title">
          <i class="fa fa-bars"></i>
          栏目分类
        </div>
        <ul class="list-group list-group-flush">
          <li v-for="catData in catDatas" class="list-group-item" style="padding-top: 8px;padding-bottom: 8px;">
            <span class="page-title">
              <a href="javascript:;" v-on:click="CatClick(catData.id)">{{catData.title}}</a>
            </span>
            <span class="badge my-badge">{{catData.number}}</span>
          </li>
        </ul>
      </div>
    </aside><!-- 栏目列表 -->
    <aside class="" id="hotcard">
      <div class="hottags card">
        <div class="hotart-title sidebar-title">
          <i class="fa fa-laptop"></i>
          热门标签
        </div>
        <div>
          <!--  <a href="#" style="color:#CAE1FF;font-size:10pt;">CSS</a>
          <a href="#" style="color:#B7B7B7;font-size:20pt;">PHP</a>
          -->
          <a v-for="tag in tags" href="javascript:;" v-on:click="TagClick(tag.name)" :style="tag.style">{{tag.name}}</a>
        </div>
      </div>
    </aside><!-- 热门标签 -->
  </div>
</template>

<script>
    export default {
        name: "myCard.vue",
        data:function(){
          return{
          }
        },

        props:{
          HotArtDatas:Object,
          catDatas:Object,
          tags:Object,
        },
        methods:{
          HotArtClick:function(id){
            this.$emit('HotArtclick',id)
          },
          CatClick:function (id) {
            this.$emit('Catclick',id)
          },
          TagClick:function (name) {
            this.$emit('Tagclick',name)
          }
        }
    }

</script>
<style>
  .list-group-item{
    border:none;
  }
</style>
<style scoped src="../../static/css/artcss.css">

</style>
