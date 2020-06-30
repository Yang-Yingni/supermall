<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll"

export default {
  name: 'Scroll',
  props:{
    probeType:{
      type: Number,
      default: 0
    },
    pullUpLoad:{
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll:null
    };
  },
  mounted() {
  //1.创建BScroll对象（一定在mounted()函数里！因为要等DOM加载完
    //this.scroll = new BScroll(document.querySelector('.wrapper'),{})
    //以上写法不好，因为类为wrapper的标签可能不止一个，querySelector选中的就有可能不是这里的wrapper
    //而用“this.$refs.refname”可以获取符合条件的唯一元素对象
    this.scroll = new BScroll(this.$refs.wrapper,{
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: true
    })
  //2.监听滚动位置
    this.scroll.on('scroll', position => {
      this.$emit('scroll',position)
    })
  //3.监听上拉加载事件
    this.scroll.on('pullingUp',() => {
      this.$emit('pullingUp')
    })
  },
  methods: {
    backTo(x,y,time) {
      //scrollTo(x,y,time)
      this.scroll && this.scroll.scrollTo(x,y,time)
      //利用&&确保scroll对象已经创建出来之后，才能调用它的方法（与语法只要第一个为false，后面就不会执行
      //否则若scroll的方法在它创建出来之前就被调用的话，会出bug
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp()
    },
    refresh() {
      this.scroll && this.scroll.refresh()
    }
  }, 
};
</script>

<style scoped>

</style>
