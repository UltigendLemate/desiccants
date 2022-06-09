<template>
 <nav class=" flex     right-0 text-black bg-white bg-opacity-10 backdrop-blur-sm  z-10  px-7 shadow-lg justify-between items-center">

<div class="left flex items-center">
      <img src="../assets/logo.png" class="h-[70px] " alt="" />

    </div>

    <div @click="MenuOpen()" class=" md:hidden text-black z-50 relative left-4 cursor-pointer flex align-middle items-center text-6xl  h-24">
    <i :class="[open?'bi bi-x':'bi bi-filter-left']" class="my-auto "></i>
    </div>

    <ul class="md:flex navlist  px-5 md:pb-0  md:static absolute top-24 z-50 text-2xl bg-white text-black md:text-black  md:bg-transparent overflow-x-hidden  w-full md:w-auto   duration-700 ease-in" :class="[open ? 'left-0':'left-[-100%]']">
     <li class=" md:text-2xl my-5 pl-5 md:mx-4">
       <router-link to="/" class=" hover:text-[#EE6C4D]">Home</router-link>
   
     </li>
     <li class=" md:text-2xl my-5 pl-5 md:mx-4">
       <router-link to="/RnD" class=" hover:text-[#EE6C4D] font-bold">R&amp;D</router-link>
     </li>
     <li class=" md:text-2xl my-5 pl-5 md:mx-4">
       <router-link to="/products" class=" hover:text-[#EE6C4D] ">Products</router-link>
     </li>
     <li class=" md:text-2xl my-5 pl-5 md:mx-4 md:mr-0">
       <router-link to="/inquiry" class=" hover:text-[#EE6C4D]">Inquiry</router-link>
     </li>
 
     
    
    </ul>

  </nav>
<main class="bg-[#dedede] -z-40 pb-10">
<div class="grid justify-center items-center">
<h1 class="  pt-8 mb-5 pb-2 md:mt-8  w-fit  text-4xl sm:text-5xl text-center px-3 md:px-0 uppercase" style="font-family: 'Lora', serif;">Research &amp; Development </h1>
</div>
<div class="grid mx-5 justify-center lg:mx-auto">

<div class="productCard max-w-[1000px] py-5 lg:text-lg px-3">
<div class="flex flex-col lg:flex-row py-3  items-center justify-center   w-full ">
<div class="lg:w-1/2 w-full lg:ml-4">
<img src="../assets/graphs/graph1.svg" class="rounded-3xl w-full" alt="">
</div>
<div class="lg:w-1/2">

<div class="relative   px-3   md:px-6">


<h3 class="text-xl sm:text-4xl lg:text-2xl  py-2 my-2 font-semibold" >Food grade paper for packaging: A comparative study</h3>


</div>
<div class="relative grid justify-center  px-3 md:px-6 items-center">


<p>Is the packaging material as important as the adsorbent?<br>
An efficient desiccant is a combination of a good quality adsorbing/absorbing material packaged in an appropriately breathable outer layer.  This layer of covering allows the ad/ab sorbent to act on the moisture without hampering the process.<span class=""> However, it has also been known to enhance performance due to multiple factors.</span></p>


</div>


</div>



</div>
<div class="flex flex-col -mt-3 lg:mt-0"><div class="relative grid   px-3 md:px-6 items-center">


<p><span class=" hidden"> However, it has also been known to enhance performance due to multiple factors.</span>The package material can be judged by its:
</p>
<ul class="list-disc pl-5">
    <li>Bursting strength</li>
    <li>Sealing properties</li>
    <li>Porosity</li>
    <li>Zero dusting</li>
</ul>

<p>We wanted to innovate the packaging used for food grade material in order to maximise
performance as products in direct contact with edibles can affect the health of people. 
We compared the conventional packaging that food grade desiccant coms in with a new non-woven material on its air permeability.</p>

</div></div>

<div class="flex flex-col lg:flex-row-reverse py-3  items-center justify-center   w-full ">
<div class="lg:w-1/2 w-full lg:mr-4">
<img src="../assets/graphs/graph2.svg" class="rounded-3xl w-full" alt="">
</div>
<div class="lg:w-1/2 lg:-mt-3">

<div class="relative   px-3   md:px-6">


<h3 class="text-xl sm:text-4xl lg:text-2xl  py-2 my-2 lg:mt-0  font-semibold" >Details of the Study</h3>


</div>
<div class="relative grid   px-3 md:px-6 items-center">


<p>Comparison; Two non-woven’s <br>
Period; 21 days<br>
Rh maintained; 80-90 <br>
Facility temperature; 25-30 degree Celcius<br><br>
Weight in grams is an indicator for the amount of moisture absorbed by the product. DI paper showed a progressive increase in weight across the 21 days surpassing the normal paper on day 9 and also resulted in a mean weight of atleast 0.5 gm greater than that of the normal paper.
</p>


</div>


</div>



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
  position: relative ;
  z-index: 0 !important;
  

}
nav{
  position: relative;
  z-index: 99999 !important;;
}
main{
  z-index: -10 !important;
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
//   mounted () {
//   window.scrollTo(0, 0)
// }
};
</script>
