<template>
  <div class="recommends">
    <div class="recommends-item" v-for="(item,index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div> 
  </div>
</template>

<script>
export default {
  name: 'RecommendView',
  props: {
    recommends:{
      type:Array
    }
  }
}
</script>

<style scoped>
.recommends {
  display: flex;
  margin-top: 6px;
  padding-bottom: 8px;
  border-bottom: 10px solid #eee;;
  text-align: center;
  font-size: 13px;
}
.recommends-item {
  flex: 1;
}
.recommends img {
  width: 75px;
  height: 75px;
  margin-bottom: 5px;
}
</style>
