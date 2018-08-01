<template>
  <div>
  <myarticlecard v-for="ArtData in ArtList" :ArtData="ArtData" :key="ArtData.id" @Titleclick="TitleClick" @Tagclick="TagClick" @Authorclick="AuthorClick"></myarticlecard>
  </div>
</template>

<script>
    export default {
        name: "ArtList",
        props:{
          ArtList:Array
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
      },

    }
</script>

<style scoped src="../../static/css/artcss.css">

</style>
