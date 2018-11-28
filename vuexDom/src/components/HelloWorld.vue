<template>
  <div class="hello">
    <p @click="xianxin">{{$store.state.show}}{{$store.state.tip}}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{

    }
  },
  methods:{
    xianxin: function(){
      var _this = this;
      _this.$emit('testFun',{name:'123'});
    },
    yesFun: function(){
      var _this = this;
      console.log('789');
    }
  },
}
</script>
