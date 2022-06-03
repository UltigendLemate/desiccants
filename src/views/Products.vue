<template>
 <nav class=" flex    w-full right-0 text-black bg-white bg-opacity-10 backdrop-blur-sm  z-10  px-7 shadow-lg justify-between items-center">

<div class="left flex items-center">
      <img src="../assets/logo.png" class="h-[70px] " alt="" />

    </div>

    <div @click="MenuOpen()" class=" md:hidden text-black  relative left-4 cursor-pointer flex align-middle items-center text-6xl  h-24">
    <i :class="[open?'bi bi-x':'bi bi-filter-left']" class="my-auto "></i>
    </div>

    <ul class="md:flex navlist  px-5 md:pb-0 z-50 md:static absolute top-24  text-2xl bg-white text-black md:text-black  md:bg-transparent overflow-x-hidden  w-full md:w-auto   duration-700 ease-in" :class="[open ? 'left-0':'left-[-100%]']">
     <li class=" md:text-2xl my-5 pl-5 md:mx-4">
       <router-link to="/" class=" hover:text-[#EE6C4D]">Home</router-link>
   
     </li>
     <li class=" md:text-2xl my-5 pl-5 md:mx-4">
       <router-link to="/products" class=" hover:text-[#EE6C4D]">R&amp;D</router-link>
     </li>
     <li class=" md:text-2xl my-5 pl-5 md:mx-4">
       <router-link to="/products" class=" hover:text-[#EE6C4D]">Products</router-link>
     </li>
     <li class=" md:text-2xl my-5 pl-5 md:mx-4 md:mr-0">
       <router-link to="/inquiry" class=" hover:text-[#EE6C4D]">Inquiry</router-link>
     </li>
 
     
    
    </ul>

  </nav>
<main class="bg-[#dedede]">
<div class="grid justify-center items-center">
<h1 class="  pt-8 mb-5 pb-2 md:mt-8  w-fit  text-4xl sm:text-5xl text-center px-3 md:px-0 uppercase" style="font-family: 'Lora', serif;">Our Products</h1>
</div>
<div class="grid mx-10 lg:grid-cols-2 lg:mx-40">
<div class="grid justify-center items-center px-3 py-3 pb-10 productCard  md:mx-5 my-5">

<img src="../assets/products/silica-gel.webp" class="rounded-3xl mx-auto" alt="">
<div class="">
<div class="relative ">

<div  :class="[silica ? 'opacity-0 -right-10 ':'opacity-100 delay-300 right-0 ']" class="duration-700  relative ">
<h3 class="text-2xl tracking-widest text-center my-2 font-semibold" >Silica Gel</h3>
</div>


<div :class="[silica ? 'opacity-100 delay-300 left-[calc(50%-53px)]':'opacity-0 left-[calc(50%-83px)]']" class="-top-2 absolute duration-700">
<h3 class="text-2xl text-center my-2 font-semibold">Features</h3>


</div>

</div>
<div class="relative grid justify-center items-center">
<div  :class="[silica ? 'opacity-0 -right-10 ':'opacity-100 delay-300 right-0 ']" class="duration-700  relative "><p>Silica gel is a porous chemical scientifically known as silicon dioxide which is made of alternating silicon and oxygen atoms set three-dimensionally. This irregular framework leads to the formation of voids that can hold moisture thus, acting as an adsorbent.</p>
</div>
<div :class="[silica ? 'opacity-100 delay-300 left-[calc(50%-171px)] thin ':'opacity-0  left-[calc(50%-211px)]']" class="top-0 w-fit absolute duration-700">
<ul class="list-disc pl-6">
<li  class="">Available in beads and powder form</li>
<li>Applicable for electronics, handicrafts etc.</li>
<li>High absorption capacity</li>


</ul></div>

</div>
</div>

<div class="absolute text-[45px] bottom-1 right-2 " @click="this.silica = !this.silica;"><i class="bi bi-arrow-right-circle"></i></div>


</div>
<div class="grid justify-center items-center px-3 py-3 pb-10 productCard  md:mx-5 my-5">

<img src="../assets/products/silica-gel.webp" class="rounded-3xl mx-auto" alt="">
<div class="">
<div class="relative ">

<div  :class="[act ? 'opacity-0 -right-10 ':'opacity-100 delay-300 right-0 ']" class="duration-700  relative ">
<h3 class="text-2xl tracking-widest text-center my-2 font-semibold" >Silica Gel</h3>
</div>


<div :class="[act ? 'opacity-100 delay-300 left-[calc(50%-53px)]':'opacity-0 -left-10']" class="-top-2 absolute duration-700">
<h3 class="text-2xl text-center my-2 font-semibold">Features</h3>


</div>

</div>
<div class="relative grid justify-center items-center">
<div  :class="[act ? 'opacity-0 -right-10 ':'opacity-100 delay-300 right-0 ']" class="duration-700  relative "><p>Silica gel is a porous chemical scientifically known as silicon dioxide which is made of alternating silicon and oxygen atoms set three-dimensionally. This irregular framework leads to the formation of voids that can hold moisture thus, acting as an adsorbent.</p>
</div>
<div :class="[act ? 'opacity-100 delay-300 left-0 sm:left-[calc(50%-171px)]':'opacity-0 -left-10']" class="top-0 absolute duration-700">
<ul class="list-disc pl-6">
<li>Available in beads and powder form</li>
<li>Applicable for electronics, handicrafts etc.</li>
<li>High absorption capacity</li>


</ul></div>

</div>
</div>

<div class="absolute text-[45px] bottom-1 right-2 " @click="this.act = !this.act;"><i class="bi bi-arrow-right-circle"></i></div>


</div>







</div>
  <swiper
    :effect="'cube'"
    :loop = "true"
    :grabCursor="true"
    :cubeEffect="{
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    }"
    :pagination="true"
    :modules="modules"
    class="mySwiper hidden"
  >
    <swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide
    ><swiper-slide
      ><img src="https://swiperjs.com/demos/images/nature-4.jpg"
    /></swiper-slide>
  </swiper>
  </main>
</template>
<style>


@media (max-width: 480px){

.thin{
  left: calc(50% - 135px) !important;
}

}
.productCard{
  border-radius: 24px;
background: #dedede;
box-shadow:  9px 9px 18px #c3c3c3,
             -9px -9px 18px #f9f9f9;
  position: relative;
}



.productCard p{
 @apply sm:px-20 md:px-20 lg:px-5 xl:px-9
}
</style>


<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-cube";
import "swiper/css/pagination";


// import required modules
import { EffectCube, Pagination } from "swiper";

export default {
   data(){
    return{
    open:false,
    silica : false,
    act:false

    }
  },
  methods:{
    MenuOpen(){
      this.open = !this.open
    }

  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCube, Pagination],
    };
  },
};
</script>
