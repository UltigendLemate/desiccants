<template>
 <nav class=" flex     right-0 text-black bg-white bg-opacity-10 backdrop-blur-sm  z-10  px-7 shadow-lg justify-between items-center">

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
<div class="grid mx-10 lg:grid-cols-2  lg:mx-40">


<!-- SILICA GEL SACHETS  -->
<div class="flex flex-col justify-center  px-3 py-3 pb-10  productCard  md:mx-5 my-5">

<img src="../assets/products/silica-gel.webp" class="rounded-3xl w-full" alt="">
<div class="">
<div class="relative ">

<!-- <div  :class="[silica ? 'opacity-0 -right-10 ':'opacity-100 delay-300 right-0 ']" class="duration-700  relative ">
</div> -->
<h3 class="text-2xl sm:text-4xl lg:text-2xl text-center my-2 font-semibold" >Silica Gel Sachets</h3>


<!-- <div :class="[silica ? 'opacity-100 delay-300 left-[calc(50%-53px)]':'opacity-0 left-[calc(50%-83px)]']" class="-top-2 absolute duration-700">
<h3 class="text-2xl text-center my-2 font-semibold">Features</h3>


</div> -->

</div>
<div class="relative grid justify-center items-center">
<div  :class="[silica ? 'opacity-0 -right-10 ':'opacity-100 delay-300 right-0 ']" class="duration-700 pl-4 relative "><p>Silica gel is a porous chemical scientifically known as silicon dioxide which is made of alternating silicon and oxygen atoms set three-dimensionally. This irregular framework leads to the formation of voids that can hold moisture thus, acting as an adsorbent.</p>
</div>
<div :class="[silica ? 'opacity-100 delay-300 left-[calc(50%-171px)] thin ':'opacity-0  left-[calc(50%-211px)]']" class=" w-fit absolute duration-700">
<ul class="list-disc pl-6 pr-4">
<li  class="my-2">Non-toxic and non hazardous</li>
<li class="my-2">Inert and pH neutral</li>
<li class="my-2">High absorption capacity at high RH levels</li>
<li class="my-2">Used to counter static humidity</li>


</ul></div>

</div>
</div>

<div class="absolute text-[45px] bottom-1 right-2 " @click="this.silica = !this.silica;"><i class="bi bi-arrow-right-circle"></i></div>


</div>

<!-- CALCIUM BASED  -->
<div class="flex flex-col   px-3 py-3 pb-10  productCard  md:mx-5 my-5">

<img src="../assets/products/calcium.webp" class="rounded-3xl w-full" alt="">
<div class="">
<div class="relative ">


<h3 class="text-2xl sm:text-4xl lg:text-2xl text-center my-2 font-semibold" >Calcium Based Desiccant</h3>


</div>
<div class="relative grid justify-center items-center">
<div  :class="[calcium ? 'opacity-0 -right-10 ':'opacity-100 delay-300 -right-5 ']" class="duration-700 pr-7 xl:pr-3  relative "><p>These are made of calcium chloride; a type of salt which traditionally has been used for canning food and pickling purposes due to its preservatory qualities. This acts through a mechanism of absorption.</p>
</div>
<div :class="[calcium ? 'opacity-100 delay-300 left-[calc(50%-171px)] sm:left-[calc(50%-191px)] thinner ':'opacity-0  left-[calc(50%-211px)]']" class=" w-fit absolute duration-700">
<ul class="list-disc pl-6 pr-4">
<li  class="my-2">Naturally occurring and environment friendly</li>
<li class="my-2">High absorption capacity</li>
<li class="my-2">Widespread usage in sea cargos</li>



</ul></div>

</div>
</div>

<div class="absolute text-[45px] bottom-1 right-2 " @click="this.calcium = !this.calcium;"><i class="bi bi-arrow-right-circle"></i></div>


</div>


<!-- CLAY BASED  -->
<div class="flex flex-col  px-3 py-3 pb-8  productCard  md:mx-5 my-5">

<img src="../assets/products/clay.webp" class="rounded-3xl w-full" alt="">
<div class="">
<div class="relative ">


<h3 class="text-2xl sm:text-4xl lg:text-2xl text-center my-2   font-semibold" >Clay Based Desiccant</h3>


</div>
<div class="relative grid justify-center py-3 lg:py-0   items-center">
<div  :class="[clay ? 'opacity-0 -right-10 ':'opacity-100 delay-300 right-0 ']" class="duration-700  relative "><p>Made from a naturally occurring mineral called bentonite clay that results from aged volcanic ash. Has a variety of uses as it can act both as an adsorent as well as an absorbent depending on the material.</p>
</div>
<div :class="[clay ? 'opacity-100 delay-300 left-[calc(50%-141px)]  thin ':'opacity-0  left-[calc(50%-211px)]']" class=" w-fit -top-2 absolute duration-700">
<ul class="list-disc pl-6 pr-4">
<li  class="my-2">Non-toxic and non hazardous</li>
<li class="my-2">Medium absorption capacity</li>
<li class="my-2">Economical</li>
<li class="my-2">Performs est at lower RH levels</li>



</ul></div>

</div>
</div>

<div class="absolute text-[45px] bottom-1 right-2 " @click="this.clay = !this.clay;"><i class="bi bi-arrow-right-circle"></i></div>


</div>


<!-- ACTIVATED CARBON  -->
<div class="flex flex-col justify-center  px-3 py-3 pb-10  productCard  md:mx-5 my-5">

<img src="../assets/products/act.webp" class="rounded-3xl  w-full" alt="">
<div class="">
<div class="relative ">

<h3 class="text-2xl sm:text-4xl lg:text-2xl  text-center my-2 font-semibold" >Activated Carbon Pouches</h3>




</div>
<div class="relative grid justify-center items-center py-7 xl:py-0  2xl:py-0">
<div  :class="[act ? 'opacity-0 -right-10 ':'opacity-100 delay-300 right-0 ']" class="duration-700  relative "><p>A highly microporous material which is processed to have small low volume pores leading to a higher surface area. It is often used as a filter for contaminants present in the air as well as the water.</p>
</div>
<div :class="[act ? 'opacity-100 delay-300 left-0   thin ':'opacity-0  left-[calc(50%-281px)]']" class="  w-fit  absolute duration-700">
<ul class="list-disc pl-6  sm:pl-[20%] md:pl-12 lg:pl-16 pr-4">
<li  class="">Acts as an economical adsorbent for many industries</li>
<li class="">Can be produced from renewable resources</li>
<li class="">Absorbs inherent product smell such as that in plastic</li>
<li class="">Absorbs smell erupting from moist environments</li>


</ul></div>

</div>
</div>

<div class="absolute text-[45px] bottom-1 right-2 " @click="this.act = !this.act;"><i class="bi bi-arrow-right-circle"></i></div>


</div>


<!-- ONE SLIDES FROM HERE ON  -->

<!-- FOOD GRADE  -->
<div class="flex flex-col  px-3 py-3 pb-5  productCard  md:mx-5 my-5">

<img src="../assets/products/food_grade.webp" class="rounded-3xl w-full" alt="">

<div class="relative ">


<h3 class="text-2xl sm:text-4xl lg:text-2xl text-center my-2 font-semibold" >Food Grade Desiccant</h3>


</div>
<div class="relative grid justify-center  items-center">


<ul class="list-disc pl-6 pr-4">
<li  class="my-2">Safe for contact with food as per FDA parameters
</li>
<li class="my-2">High tear strength packaging of sachet</li>
<li class="my-2">Super sealing strength</li>




</ul>


</div>




</div>



<!-- Indicative Adsorbers  -->
<div class="flex flex-col  px-3 py-3 pb-5  productCard  md:mx-5 my-5">

<img src="../assets/products/indicative.webp" class="rounded-3xl w-full" alt="">

<div class="relative ">


<h3 class="text-2xl sm:text-4xl lg:text-2xl text-center my-2 font-semibold" >Indicative Adsorbers</h3>


</div>
<div class="relative grid justify-center    items-center">


<ul class="list-disc pl-6 pr-4">
<li  class="my-2">Special indicative beads that change color when saturated
</li>
<li class="my-2">Best used for medical devices</li>
<li class="my-2">Available as per WHO quality guidelines</li>




</ul>


</div>




</div>

<!-- Container Desiccants  -->
<div class="flex flex-col  px-3 py-3 pb-5  productCard  md:mx-5 my-5">

<img src="../assets/products/container.webp" class="rounded-3xl w-full" alt="">

<div class="relative ">


<h3 class="text-2xl sm:text-4xl lg:text-2xl text-center my-2 font-semibold" >Container Desiccants</h3>


</div>
<div class="relative grid justify-center    items-center">


<ul class="list-disc pl-6 pr-4">
<li  class="my-2">Very high absorption capacity
</li>
<li class="my-2">Traps moisture and changes physical form into gel</li>
<li class="my-2">Controls container rain</li>




</ul>


</div>




</div>


<!-- Sustainable Solutions  -->
<div class="flex flex-col  px-3 py-3 pb-5  productCard  md:mx-5 my-5">

<img src="../assets/products/sustainable.webp" class="rounded-3xl w-full" alt="">

<div class="relative ">


<h3 class="text-2xl sm:text-4xl lg:text-2xl text-center my-2 font-semibold" >Sustainable Solutions</h3>


</div>
<div class="relative grid justify-center   items-center">


<ul class="list-disc pl-6 pr-4">
<li  class="my-2">Desiccant produced from renewable sources
</li>
<li class="my-2">Packaging is environment friendly</li>
<li class="my-2">Can be disposed of as regular waste without any harm to the environment.</li>




</ul>


</div>




</div>



<!-- Oxygen Absorber -->
<div class="flex flex-col  px-3 py-3 pb-5  productCard  md:mx-5 my-5">

<img src="../assets/products/indicative.webp" class="rounded-3xl w-full" alt="">

<div class="relative ">


<h3 class="text-2xl sm:text-4xl lg:text-2xl text-center my-2 font-semibold" >Oxygen Absorber</h3>


</div>
<div class="relative grid justify-center   items-center">


<ul class="list-disc pl-6 pr-4">
<li  class="my-2">Creates anaerobic conditions around the product
</li>
<li class="my-2">Increases shelf life of packaged food</li>
<li class="my-2">Retains freshness and quality without chemical preservatives</li>




</ul>


</div>




</div>



<!--  Anti-Mold Stickers -->
<div class="flex flex-col  px-3 py-3 pb-5  productCard  md:mx-5 my-5">

<img src="../assets/products/indicative.webp" class="rounded-3xl w-full" alt="">

<div class="relative ">


<h3 class="text-2xl sm:text-4xl lg:text-2xl text-center my-2 font-semibold" >Anti-Mold Stickers</h3>


</div>
<div class="relative grid justify-center   items-center">


<ul class="list-disc pl-6 pr-4">
<li  class="my-2">Reduces mold activity
</li>
<li class="my-2">Easy to apply on a variety of surfaces</li>
<li class="my-2">Recyclable
</li>




</ul>


</div>




</div>








</div>

  </main>
</template>
<style>


@media (max-width: 440px){

.thin{
  left: calc(50% - 140px) !important;
}
.thinner{
  left: calc(50% - 120px) !important;
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
 @apply sm:px-20 md:px-20 lg:px-5 xl:px-7 2xl:px-10
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
    calcium : false,
    clay : false,
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
