<template>
   <!-- <nav>class="flex flex-row justify-between px-10 bg-gray-200"> -->
   <nav class="bg-gray-900 text-gray-100 py-3.5 px-6 shadow md:flex justify-between items-center">
    <div class="left flex items-center">
      <img src="./assets/logo.png" class="h-20" alt="" />
      <span>Desiccants</span>
    </div>

    <!-- <div
      class="
        hamburger-lines
        align-middle
        flex flex-col
        space-y-2
        mt-1
        items-center
        justify-center
      "
    >
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
    </div> -->

    <div >

    <span @click="MenuOpen()" class="absolute md:hidden right-6 top-1.5 cursor-pointer flex align-middle items-center text-6xl  h-20">
    <i :class="[open?'bi bi-x':'bi bi-filter-left']" class="my-auto"></i>
    </span>

    <ul class="md:flex md:items-center md:px-0 px-5 md:pb-0  md:static absolute bg-gray-900 md:w-auto w-full  duration-700 ease-in" :class="[open ? 'left-0':'left-[-100%]']">
     <li class="md:mx-4 my-6">
       <router-link to="/" class="text-xl hover:text-green-500">Home</router-link>
     </li>
     <li class="md:mx-4 my-6">
       <router-link to="/" class="text-xl hover:text-green-500">Home</router-link>
     </li>
     <li class="md:mx-4 my-6">
       <router-link to="/" class="text-xl hover:text-green-500">Home</router-link>
     </li>
     
     
    
    </ul>
    
    </div>
  </nav>

  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}



</style>

<script>
export default {
  data(){
    return{
    open:false,

    }
  },
  methods:{
    MenuOpen(){
      this.open = !this.open
    }
  }
}
</script>