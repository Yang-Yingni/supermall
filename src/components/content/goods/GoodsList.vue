<template>
  <div class="goods-list">
    <goods-list-item
      v-for="(item,index) in goods" :key="index"
      :goods-item="item" class="item">
    </goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem"
export default {
  name: 'GoodsList',
  props: {
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components: {
    GoodsListItem
  },
  data() {
    return {

    };
  },
  methods: {

  },
};
</script>

<style scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;/*默认值为nowrap，会使得子元素挤在一行里，设置成wrap子元素可根据宽度分行显示*/
  justify-content: space-around;/*让内容中间有空白，更好看*/
  padding: 5px/*微调*/
}

.item {
  width: 48%;
}
</style>
