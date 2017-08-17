<template>
  <div>
      <div class="app-header">头部</div>
      <div class="app-con">
        <keep-alive>
             <router-view></router-view>
        </keep-alive>
      </div>
      <div class="app-footer">底部</div>
  </div>
</template>
<script>
export default {
  name: 'app'
}
</script>
<style>
    *{
        margin:0;
        padding:0
    }
    .app-header{
        background: red;
        height:100px;
    }
    .app-footer{
        background: #00ff00;
        height:200px;
    }
</style>
