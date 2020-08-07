<template>
  <div id="app">
    <div id="nav">
     <buttonss></buttonss>
    </div>
    <router-view/>
  </div>
</template>

<script>
import buttonss from '@/components/button.vue'
export default {
  data(){
    return{

    }
  },
  components:{
    buttonss
  }
}
</script>

<style lang="scss">

*{
        padding: 0px;
        margin: 0px;
    }

</style>
