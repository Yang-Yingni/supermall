<template>
  <div id="home">
    <nav-bar class="home-nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll class="wrapper" ref="scroll" 
            :probe-type="3" 
            @scroll="contentScroll"
            :pullUpLoad="true"
            @pullingUp="loadMore">
      <home-swiper :banners="banners"/>
      <recommend-view :recommends="recommends"/>
      <popular-view/>
      <tab-control :titles="['流行', '新款', '精选']"
        class="tab-control"
        @tabClick="tabClick" />
      <goods-list :goods="showGoods"/>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"/><!--注意：组件上监听原生事件需要“.native”修饰符-->
    <!-- 因为这个点击事件需要用到scroll组件里的东西，所以在父组件这里绑定事件，而不是在子组件文件里，否则参数传递会很麻烦 -->
  </div>
</template>

<script>
  //公共组件导入
  import NavBar from "components/common/navbar/NavBar.vue"
  import TabControl from "components/content/tabcontrol/TabControl"
  import Scroll from "components/common/scroll/Scroll"
  import GoodsList from "components/content/goods/GoodsList"
  import BackTop from "components/content/backtop/BackTop"

  //一般组件导入
  import HomeSwiper from "./childcomps/HomeSwiper"
  import RecommendView from "./childcomps/RecommendView"
  import PopularView from "./childcomps/PopularView"

  //函数/方法导入
  import {getMultiData,getGoodsData} from "network/home.js"


  export default {
    name: "Home",

    components: {
      NavBar,
      TabControl,
      Scroll,
      GoodsList,
      BackTop,
      HomeSwiper,
      RecommendView,
      PopularView
    },

    data(){
      return {
        banners:[],
        recommends: [],
        goods: {
          'pop': {page: 1, list: []},
          'new': {page: 1, list: []},
          'sell': {page: 1, list: []}
        },
        currentType: 'pop',
        isShowBackTop: false
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    created() {
    //1.请求多个数据
      this.getMultiData()
    //2.请求商品数据
      this.getGoodsData('pop')
      this.getGoodsData('new')
      this.getGoodsData('sell')
    },
    //3.监听图片是否加载完成（利用事件总线$bus
      //但是程序里其实并没有$bus这个东西，所以要手动加上，怎么加才能使所有组件都能用呢
      //没错，添加vue原型（在main.js里
      mounted() {//注意，用到scroll对象，一定不能在created函数里！（因为"new BScroll(元素，属性)"中的元素必须得等渲染出来才有
        this.$bus.$on('itemImageload', () => {
        console.log('image has loaded');
        this.$refs.scroll.refresh()
      })
    },
    methods: {
      /**
       * 事件监听相关方法
       */
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break;
          case 1:
            this.currentType = 'new'
            break;
          case 2:
            this.currentType = 'sell'
            break;
        }
      },
      backClick() {
      //利用$refs访问scroll子组件
        //this.$refs.scroll.scroll.scrollTo(0,0,500)
        this.$refs.scroll.backTo(0,0,500)
      },
      contentScroll(position) {
        this.isShowBackTop = (-position.y) > 1000
      },
      loadMore() {
        console.log('上拉加载更多');
        
        this.getGoodsData(this.currentType)
      },
      /**
       * 网络请求相关方法
       */
      getMultiData(){
        getMultiData().then( res => {
        //console.log(res);
        //因为res为created函数里的局部变量，所以要拿东西保存一下
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list        
      })
      },
      getGoodsData(type){
        const page = this.goods[type].page;
        getGoodsData(type,page).then( res => {       
        this.goods[type].list.push( ...res.data.list)
        //push(...数组名)相当于将数组中的每一项依次push
        this.goods[type].page += 1

        //this.$refs.scroll.scroll.finishiPullUp()
        this.$refs.scroll.finishPullUp()
      })
      }

    }
  }
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  height: 100vh;
  /* vh:viewport height 视口高度 */
  position: relative;
}
.home-nav-bar {
  background-color: var(--color-tint);
  color: white;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.tab-control {
  position: sticky;
  top: 44px;
}
.wrapper {
  /* height: 400px; */
  /* 滚动高度有两种方法设置，注：要匹配不同机型，所以不能定死
  1.利用计算属性 
  height: calc(100% - (49px + 44px));这里的100%是指相对于父元素*/
  /* 2.利用绝对定位 (记得父元素要position要相对定位relative)*/
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 0;

  /* margin-top: 44px; */
  overflow: hidden;
}
</style>
