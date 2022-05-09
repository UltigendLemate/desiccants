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
       <router-link to="/" class="text-xl hover:text-[#EE6C4D]">Home</router-link>
     </li>
     <li class="md:mx-4 my-6">
       <router-link to="/" class="text-xl hover:text-[#EE6C4D]">About Us</router-link>
     </li>
     <li class="md:mx-4 my-6">
       <router-link to="/" class="text-xl hover:text-[#EE6C4D]">Products</router-link>
     </li>
     <button class="md:mx-4 mt-0 mb-6 md:mt-6">
       <router-link to="/" class="text-xl ">Contact Us</router-link>
     </button>
     
     
    
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

/* From uiverse.io by @ShadowShahriar */
button {
 --border-radius: 15px;
 --border-width: 4px;
 appearance: none;
 position: relative;
 padding: 0.75em 1.5em;
 border: 0;
 background-color: #212121;
 font-family: "Roboto", Arial, "Segoe UI", sans-serif;
 font-size: 20px;
 font-weight: 500;
 color: #fff;
 z-index: 2;
}

button::after {
 --m-i: linear-gradient(#000, #000);
 --m-o: content-box, padding-box;
 content: "";
 position: absolute;
 left: 0;
 top: 0;
 width: 100%;
 height: 100%;
 padding: var(--border-width);
 border-radius: var(--border-radius);
 background-image: conic-gradient(
		#488cfb,
		#29dbbc,
		#ddf505,
		#ff9f0e,
		#e440bb,
		#655adc,
		#488cfb
	);
 -webkit-mask-image: var(--m-i), var(--m-i);
 mask-image: var(--m-i), var(--m-i);
 -webkit-mask-origin: var(--m-o);
 mask-origin: var(--m-o);
 -webkit-mask-clip: var(--m-o);
 mask-composite: exclude;
 -webkit-mask-composite: destination-out;
 filter: hue-rotate(0);
 animation: rotate-hue linear 500ms infinite;
 animation-play-state: paused;
}

button:hover::after {
 animation-play-state: running;
}

@keyframes rotate-hue {
 to {
  filter: hue-rotate(1turn);
 }
}

button,
button::after {
 box-sizing: border-box;
}

button:active {
 --border-width: 5px;
}
button:hover{
  color:#EE6C4D;
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