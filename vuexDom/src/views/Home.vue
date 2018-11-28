<template>
  <div class="home">
    <div  @click="$store.dispatch('xianxin')">点击</div>
    <HelloWorld ref="xianxian" @testFun="stortFn" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data(){
    return{
      show: true
    }
  },
  methods:{
    stortFn: function(){
      var _this = this;
      _this.$refs.xianxian.yesFun();
      console.log('123');
    },
  },
  components: {
    HelloWorld
  }
}
</script>
