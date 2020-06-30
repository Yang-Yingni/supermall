<template>
  <div class="nav-bar">
    <!-- 因为很多地方都要用到navbar，所以绑定class而不是id -->
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {

    };
  },
  methods: {

  },
};
</script>

<style scoped>
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
}
.left {
  width: 60px;
}
.right {
  width: 60px;
}
.center {
  flex:1 ;
  /*center在flex布局的div中，设置flex :1;可以自动填满父div*/
}
</style>
