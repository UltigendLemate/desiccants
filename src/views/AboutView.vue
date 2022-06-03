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
       <router-link to="/about" class=" hover:text-[#EE6C4D]">R&amp;D</router-link>
     </li>
     <li class=" md:text-2xl my-5 pl-5 md:mx-4">
       <router-link to="/" class=" hover:text-[#EE6C4D]">Products</router-link>
     </li>
     <li class=" md:text-2xl my-5 pl-5 md:mx-4 md:mr-0">
       <router-link to="/inquiry" class=" hover:text-[#EE6C4D]">Inquiry</router-link>
     </li>
 
     
    
    </ul>

  </nav>
<main class="bg-[#dedede]">
<div class="grid justify-center items-center">
<h1 class="  pt-8 mb-5 pb-2 md:mt-8  w-fit  text-5xl text-center px-3 md:px-0 uppercase" style="font-family: 'Lora', serif;">Our Products</h1>
</div>
<div class="grid mx-10">
<div class="flex flex-col md:flex-row px-4 py-3 productCard  my-5">

<img src="../assets/products/act.webp" class="rounded-3xl" alt="">
<div>
<h3 class="text-2xl text-center my-3 font-semibold">Activated Carbon Pouches</h3>
<p class="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sit facilis molestias, veniam ex ducimus distinctio? Similique maxime vero eos in. Corrupti ipsa quisquam possimus expedita repellat quaerat animi, harum laudantium libero similique? Asperiores rem, earum vero minus accusantium atque.</p>
</div>

</div>
<div class="flex flex-col md:flex-row px-4 py-3 productCard  my-5">

<img src="../assets/products/act.webp" class="rounded-3xl" alt="">
<div>
<h3 class="text-2xl text-center my-3 font-semibold">Activated Carbon Pouches</h3>
<p class="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sit facilis molestias, veniam ex ducimus distinctio? Similique maxime vero eos in. Corrupti ipsa quisquam possimus expedita repellat quaerat animi, harum laudantium libero similique? Asperiores rem, earum vero minus accusantium atque.</p>
</div>

</div>
<div class="flex flex-col md:flex-row px-4 py-3 productCard  my-5">

<img src="../assets/products/act.webp" class="rounded-3xl" alt="">
<div>
<h3 class="text-2xl text-center my-3 font-semibold">Activated Carbon Pouches</h3>
<p class="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sit facilis molestias, veniam ex ducimus distinctio? Similique maxime vero eos in. Corrupti ipsa quisquam possimus expedita repellat quaerat animi, harum laudantium libero similique? Asperiores rem, earum vero minus accusantium atque.</p>
</div>

</div>
<div class="flex flex-col md:flex-row  px-4 py-3 productCard  my-5">

<img src="../assets/products/act.webp" class="rounded-3xl" alt="">
<div>
<h3 class="text-2xl text-center my-3 font-semibold">Activated Carbon Pouches</h3>
<p class="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sit facilis molestias, veniam ex ducimus distinctio? Similique maxime vero eos in. Corrupti ipsa quisquam possimus expedita repellat quaerat animi, harum laudantium libero similique? Asperiores rem, earum vero minus accusantium atque.</p>
</div>

</div>
<div class="flex flex-col md:flex-row px-4 py-3 productCard  my-5">

<img src="../assets/products/act.webp" class="rounded-3xl" alt="">
<div>
<h3 class="text-2xl text-center my-3 font-semibold">Activated Carbon Pouches</h3>
<p class="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sit facilis molestias, veniam ex ducimus distinctio? Similique maxime vero eos in. Corrupti ipsa quisquam possimus expedita repellat quaerat animi, harum laudantium libero similique? Asperiores rem, earum vero minus accusantium atque.</p>
</div>

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
.productCard{
  border-radius: 24px;
background: #dedede;
box-shadow:  9px 9px 18px #c3c3c3,
             -9px -9px 18px #f9f9f9;
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
