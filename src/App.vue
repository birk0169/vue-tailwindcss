<template>
<the-header></the-header>
<the-resources></the-resources>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue'
import TheResources from './components/learning-resources/TheResources.vue';

export default {
  components:{
    TheHeader,
    TheResources
  }
}
</script>

<style>

body{
  @apply bg-blue-50;
}

.primary-btn{
  @apply 
    bg-blue-100 
    text-blue-500 
    rounded-md 
    p-2
    hover:bg-blue-400 
    hover:text-blue-200
    transition
    ;
}

#app {
  width: 70%;
  margin: 0 auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*color: #2c3e50;*/
  margin-top: 60px;
}
</style>
