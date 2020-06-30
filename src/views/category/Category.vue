<template>
  <div class="wrapper">
    <!-- 在BSroll中，滚动内容只能为一个标签，且必须包含于有固定高度的wrapper -->
    <ul class="content">
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </ul>
  </div>
</template>

<script>
  import BScroll from "better-scroll"

  export default {
    name: "Category", 
    data() {
      return {
        //scroll: null
      }
    },
    mounted() {
      //注意：这里的生命周期函数不能用created()，因为BScroll()里要传入DOM标签，而created时页面DOM还没渲染
      //BScroll(DOM标签(类似于挂载点，{参数})
      new BScroll('.wrapper',{

      })
    }
  }
</script>

<style scoped>
/* .content {
  background-color: rosybrown;
  height: 150px;

  overflow-y: scroll;
} */
.wrapper {
  height: 150px;
  background-color: rosybrown;

  overflow: hidden;
}
</style>
 