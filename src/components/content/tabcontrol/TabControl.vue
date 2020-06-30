<template>
  <div class="tabcontrol">
    <div class="tabcontrol-item" 
    v-for="(item,index) in titles" :key="index" 
    @click="itemClick(index)" :class="{active: index == currentIndex}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    itemClick(index){
      this.currentIndex = index;
      this.$emit('tabClick',index)
    }
  },
};
</script>

<style scoped>
.tabcontrol {
  display: flex;
  background-color: #fff;
  text-align: center;
  font-size: 14px;
  line-height: 40px;
}
.tabcontrol-item {
  flex: 1;
}
.tabcontrol-item span {
  padding: 5px;
}
/* .active {
  color: var(--color-high-text);
} */
.active span {
  color: var(--color-high-text);
  border-bottom: solid 2px var(--color-tint);
}

/* .tabcontrol {
  position: sticky;
  top: 44px;
} */
</style>
