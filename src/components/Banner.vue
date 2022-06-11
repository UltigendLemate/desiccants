<template>
 <!-- <div class="containe overflow-x-hidden max-w-screen md:-mb-5 flex md:flex-row flex-col-reverse md:h-[80vh] py-8 px-7"> 


<div class="right  flex items-center  content-center justify-center  md:my-auto  mt-10 md:mx-10 py-0 md:py-9  md:h-full ">
  <img src='../assets/pic.jpg'   class="rounded-xl object-cover lg:object-fill  md:h-5/6 mx-auto shadow-[#00000067] shadow-lg " alt="">


  </div>
<div class="md:my-auto flex flex-col overflow-x-hidden mb-0 mt-7 md:w-1/2 items-start justify-center">
  <div class="left  overflow-x-hidden mb-7">
  <h1 class="text-[40px] min-w-fit sm:text-5xl    font-bold  ">DESSICANTS INDIA</h1>

  <h3 class="text-2xl md:text-4xl md:mt-5 lg:text-3xl md:tracking-wide font-semibold my-3  ">Complete Solutions For Moisture</h3>
  <div class="">
  
 

 -->
  <nav class=" hidden md:flex  absolute w-screen right-0 text-white bg-white bg-opacity-10 backdrop-blur-sm  z-10  px-7 shadow-lg justify-between items-center">



    <div @click="MenuOpen()" class=" md:hidden text-black  relative left-4 cursor-pointer flex align-middle items-center text-6xl  h-28">
    <i :class="[open?'bi bi-x':'bi bi-filter-left']" class="my-auto "></i>
    </div>

    <ul class="md:flex navlist md:items-center md:w-full md:justify-around lg:px-80 md:px-20 px-5 md:pb-0 z-50 md:static absolute text-2xl  bg-white text-black md:text-white  md:bg-transparent overflow-x-hidden   w-full  duration-500 ease-in-out" :class="[open ? 'left-0':'left-[-100%]']">
     <li class="  my-5">
       <router-link to="/" class=" hover:text-[#EE6C4D] font-bold">Home</router-link>
   
     </li>
     <li class="  my-5">
       <router-link to="/RnD" class=" hover:text-[#EE6C4D]">R&amp;D</router-link>
     </li>
     <li class="  my-5">
       <router-link to="/products" class=" hover:text-[#EE6C4D]">Products</router-link>
     </li>
     <li class="  my-5">
       <router-link to="/inquiry" class=" hover:text-[#EE6C4D]">Inquiry</router-link>
     </li>
 
     
    
    </ul>

  </nav>


  <nav class=" flex md:hidden  absolute w-screen right-0 text-white bg-white bg-opacity-10 backdrop-blur-sm  z-10  px-7 shadow-lg justify-between items-center">

<div class="left flex items-center">
      <img src="../assets/logo.png" class="h-[70px] " alt="" />

    </div>

    <div @click="MenuOpen()" class=" md:hidden text-black  relative left-4 cursor-pointer flex align-middle items-center text-6xl  h-24">
    <i :class="[open?'bi bi-x':'bi bi-filter-left']" class="my-auto "></i>
    </div>

    <ul class="md:flex navlist  px-5 md:pb-0 z-50 md:static absolute top-24 text-2xl bg-white text-black md:text-white  md:bg-transparent overflow-x-hidden   w-full  duration-700 ease-in" :class="[open ? 'left-0':'left-[-100%]']">
     <li class=" md:text-3xl my-5 pl-5">
       <router-link to="/" class=" hover:text-[#EE6C4D]">Home</router-link>
   
     </li>
     <li class=" md:text-3xl my-5 pl-5">
       <router-link to="/RnD" class=" hover:text-[#EE6C4D]">R&amp;D</router-link>
     </li>
     <li class=" md:text-3xl my-5 pl-5">
       <router-link to="/products" class=" hover:text-[#EE6C4D]">Products</router-link>
     </li>
     <li class=" md:text-3xl my-5 pl-5">
       <router-link to="/inquiry" class=" hover:text-[#EE6C4D]">Inquiry</router-link>
     </li>
 
     
    
    </ul>

  </nav>





  
























<div class=" w-full h-[90vh]   md:h-screen">
<swiper  :modules="modules" :autoplay="{
      delay: 7000,
      disableOnInteraction: false,
    }" :loop="true"
    :pagination="{
      clickable: true,
    }" class="mySwiper">


    
    <swiper-slide><div class="carousel-cell flex h-[90vh] main-banner2 relative backdrop-blur-sm md:h-screen  main-banner3  flex-col justify-center items-center  ">
<div  v-motion
  :initial="{

    opacity: 0,
  }"
  :enter="{

    opacity: 1,
    transition: {

      duration: 600,
      ease: 'easeIn',
    },}"  class="mx-10 hidden md:block relative -top-4"><h1 class="text-6xl  text-center desiccants  md:text-7xl  xl:text-[100px]  text-white md:leading-tight lg:leading-none sm:text-6xl"><img src="../assets/Dr.svg" class="inline -mr-9 md:-mt-3 lg:-mr-10 xl:-mr-12 xl:h-28  lg:-mt-6 lg:h-[85px] md:h-[75px] " alt="D"> ESICCANTS<span class="whitespace-nowrap lg:whitespace-normal  md:mt-2"><img src="../assets/Ir.svg" class="inline -ml-8 mr-1 xl:mr-2 -mt-16 lg:-mt-16 xl:-mt-[70px] h-14 lg:h-[110px] xl:h-[134px] md:h-[100px]  md:-mt-14" style="word-spacing:30px;" alt="I">NDIA <span class="ml-3"> LLP</span></span></h1></div>

<div v-motion
  :initial="{

    opacity: 0,
  }"
  :enter="{

    opacity: 1,
    transition: {
      duration: 400,
      ease: 'easeIn',
    },}"  class="mx-10 mt-24 md:hidden"><h1 style="word-spacing: 5px;" class="text-6xl  text-center desiccants  md:text-7xl  xl:text-[100px]  text-white md:leading-tight lg:leading-none sm:text-6xl t-smal "> DESICCANTS INDIA LLP</h1></div>


<!-- <div class="flex justify-center mt-3 lg:mt-0 xl:mt-0"><h4 class="text-center  text-2xl  tracking-wider lg:tracking-widest  font-extrabold text-black  ">Since 1995</h4></div> -->

<button v-motion
  :initial="{

    opacity: 0,
  }"
  :enter="{

    opacity: 1,
    transition: {
      delay : 200,
      duration: 400,
      ease: 'easeIn',
    },}"  class=" hidden font-bold  lg:text-2xl  mt-9 rounded-full text-4xl tag w-fit"><i class="bi bi-arrow-bar-down"></i></button>

<div v-motion
  :initial="{

    opacity: 0,
  }"
  :enter="{

    opacity: 1,
    transition: {
      delay : 200,
      duration: 600,
      ease: 'easeIn',
    },}"  class="grid w-full text-2xl lg:text-2xl px-4 text-white justify-center items-center xl:tracking-widest  absolute bottom-12"><h2 class="text-center word">COMPLETE SOLUTIONS FOR YOUR MOISTURE PROBLEMS</h2></div>


</div></swiper-slide>
<swiper-slide><div class=" carousel-cell h-[90vh] md:px-8 md:h-screen main-banner2 backdrop-blur-md  flex flex-col  justify-center bg2 " >
   <h3 class=" mx-10 text-xl  lg:text-[27px] text-[#DCC4A4] sm:text-2xl sm:font-medium ">Frequent temperature variations over long sea transits lead to container rain. Approximately <span class="text-yellow-300 tag text-5xl">10%</span>of container goods lost every year are due to moisture leading to a heavy loss of goods and money.</h3>
<div class="mx-10 mt-6"><h1 class="text-5xl  font-bold  md:text-7xl   text-white  sm:text-6xl">Protect.</h1></div>
<div class="mx-10 md:mr-16  pt-6 ">

<h3 class="   text-xl  lg:text-[27px] text-white sm:text-2xl sm:font-medium mt-3">Keep your goods safe by using three tier packaging specially designed to keep products safe and containers moisture free. </h3>
</div>

</div></swiper-slide
    ><swiper-slide><div class=" carousel-cell h-[90vh] md:px-8 md:h-screen main-banner2 flex flex-col prevent justify-center bg3 ">
  <h3 class=" mx-10 text-xl  lg:text-[27px] text-[#DCC4A4] sm:text-2xl sm:font-medium ">As reported by Sandia National Laboratories in a paper, corrosion due to water accounts for <span class="text-yellow-300 tag text-5xl">20%</span> of electronics failures. Moisture intrusion has been known to cause product fires and even aircraft failures. </h3>
<div class="mx-10 mt-6"><h1 class="text-5xl  font-bold  md:text-7xl   text-white  sm:text-6xl">Prevent.</h1></div>
<div class="mx-10 md:mr-16  pt-6 ">

<h3 class="   text-xl  lg:text-[27px] text-white sm:text-2xl sm:font-medium mt-3">Prevent damage of electronics and other equipments by using carefully crafted product-specific desiccants.</h3>
</div>

</div></swiper-slide>

<swiper-slide><div class=" carousel-cell h-[90vh] md:px-8 md:h-screen main-banner2 flex flex-col bg4  justify-center  ">
  <h3 class=" mx-10 text-xl  lg:text-[27px] text-[#DCC4A4] sm:text-2xl sm:font-medium ">Relative Humidity is an indicator of the amount of moisture present in the air. Ideally, RH above <span class="text-yellow-300 tag text-5xl">45%</span> can lead to bacterial growth. Higher RH levels can also lead to mold growth and general product deterioration.  </h3>
<div class="mx-10 mt-6"><h1 class="text-5xl  font-bold  md:text-7xl   text-white  sm:text-6xl">Preserve.</h1></div>
<div class="mx-10 md:mr-16  pt-6 ">

<h3 class="   text-xl  lg:text-[27px] text-neutral-400 sm:text-2xl sm:font-medium mt-3">Increase the shelf life of your products by using efficent and longer lasting adsorbents with high absorption capacity. </h3>
</div>

</div></swiper-slide> 
  </swiper>

  </div>





<!-- <div class="h-screen main-banner2 flex flex-col justify-center  ">
<div class="mx-10 mt-16"><h1 class="text-6xl  font-bold  md:text-8xl lg:text-8xl    sm:text-7xl">Protect.</h1></div>
<div class="mx-10 md:mr-16  pt-7 "><h3 class="   text-2xl  lg:text-4xl text-white sm:text-3xl sm:font-medium ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio itaque eos porro iste voluptatibus, mollitia asperiores quae deleniti rerum molestiae amet incidunt cum. Dicta natus assumenda perspiciatis. Atque mollitia officia asperiores odio aspernatur exercitationem nobis enim voluptatibus pariatur culpa nulla aut natus, optio cupiditate consequatur at iure? Veniam, asperiores quam?</h3></div>

</div> -->



 <!-- <div class="h-[calc(100vh-112px)]  flex justify-center items-center cont">  
  <div class="w-4/5 md:w-2/3 lg:w-3/5 small rounded-3xl backdrop-blur-sm bg-white  bg-opacity-20 shadow-sm shadow-black	 p-10 bord text-center" > 
  <h1 class="text-[40px]  sm:text-5xl md:text-6xl md:mb-4 sm:mb-3 t-smal ">Dessicants India</h1>

  <h2 class="text-xl sm:text-2xl md:text-3xl md:mb-4 font-medium mb-2">Complete Solutions For Moisture</h2>

  <h6 class="text-lg md:text-xl text-justify">Moisture and humidity adversely affect the quality of products and severely harm their integrity. Give your products the protection they need. Desiccants India has been a leading manufacturer of desiccants for the past 27 years and aims to shield your products from such damage and increase their shelf life.</h6>
  
  
  </div>
  </div>  -->

<!-- 
<div class="flex-col flex banner justify-center items-center">
<div class="w lg:w-full small rounded-3xl  p-10  text-center" > 
  <h1 class="text-[40px]  sm:text-5xl md:text-6xl md:mb-4 sm:mb-3 font-bold  t-smal ">Dessicants India</h1>

  <h2 class="text-xl sm:text-2xl md:text-3xl md:mb-4 font-medium mb-2">Complete Solutions For Moisture</h2>

  <h6 class="text-lg md:text-xl text-justify hidden md:block my-5">Moisture and humidity adversely affect the quality of products and severely harm their integrity. Give your products the protection they need. Desiccants India has been a leading manufacturer of desiccants for the past 27 years and aims to shield your products from such damage and increase their shelf life.</h6>
  
  
  </div>
<div class="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6 mb-5 -mt-4 mx-10">
  <video autoplay="autoplay"  class="rounded-full border-[10px] border-green-300" loop="loop" >
  <source src="../assets/1.mp4" type="video/mp4" />
</video>
  <video autoplay="autoplay"  class="rounded-full border-[10px] border-blue-400" loop="loop" >
  <source src="../assets/2.mp4" type="video/mp4" />
</video>
  <video autoplay="autoplay"  class="rounded-full border-[10px] border-rose-400" loop="loop" >
  <source src="../assets/3.mp4" type="video/mp4" />
</video>
  <video autoplay="autoplay"  class="rounded-full border-[10px] border-orange-400" loop="loop" >
  <source src="../assets/4.mp4" type="video/mp4" />
</video>

  </div>
	</div> -->


</template>



<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
@font-face {font-family: "Athelas-Bold";
    src: url("https://db.onlinewebfonts.com/t/db8cfc8f593f2e47bd9bd157e455c494.eot"); /* IE9*/
    src: url("https://db.onlinewebfonts.com/t/db8cfc8f593f2e47bd9bd157e455c494.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */
    url("https://db.onlinewebfonts.com/t/db8cfc8f593f2e47bd9bd157e455c494.woff2") format("woff2"), /* chrome firefox */
    url("https://db.onlinewebfonts.com/t/db8cfc8f593f2e47bd9bd157e455c494.woff") format("woff"), /* chrome firefox */
    url("https://db.onlinewebfonts.com/t/db8cfc8f593f2e47bd9bd157e455c494.ttf") format("truetype"), /* chrome firefox opera Safari, Android, iOS 4.2+*/
    url("https://db.onlinewebfonts.com/t/db8cfc8f593f2e47bd9bd157e455c494.svg#Athelas-Bold") format("svg"); /* iOS 4.1- */
}
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@900&family=Poppins&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@596&display=swap');

@font-face {font-family: "Copyright Klim Type Foundry";
    src: url("https://db.onlinewebfonts.com/t/2bd08e50de2f6bf200a884f65030af75.eot"); /* IE9*/
    src: url("https://db.onlinewebfonts.com/t/2bd08e50de2f6bf200a884f65030af75.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */
    url("https://db.onlinewebfonts.com/t/2bd08e50de2f6bf200a884f65030af75.woff2") format("woff2"), /* chrome firefox */
    url("https://db.onlinewebfonts.com/t/2bd08e50de2f6bf200a884f65030af75.woff") format("woff"), /* chrome firefox */
    url("https://db.onlinewebfonts.com/t/2bd08e50de2f6bf200a884f65030af75.ttf") format("truetype"), /* chrome firefox opera Safari, Android, iOS 4.2+*/
    url("https://db.onlinewebfonts.com/t/2bd08e50de2f6bf200a884f65030af75.svg#Copyright Klim Type Foundry") format("svg"); /* iOS 4.1- */
}

@font-face {font-family: "Apple SD Gothic Neo";
    src: url("https://db.onlinewebfonts.com/t/67680f2eb947c5cbd58b40961b4a61e9.eot"); /* IE9*/
    src: url("https://db.onlinewebfonts.com/t/67680f2eb947c5cbd58b40961b4a61e9.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */
    url("https://db.onlinewebfonts.com/t/67680f2eb947c5cbd58b40961b4a61e9.woff2") format("woff2"), /* chrome firefox */
    url("https://db.onlinewebfonts.com/t/67680f2eb947c5cbd58b40961b4a61e9.woff") format("woff"), /* chrome firefox */
    url("https://db.onlinewebfonts.com/t/67680f2eb947c5cbd58b40961b4a61e9.ttf") format("truetype"), /* chrome firefox opera Safari, Android, iOS 4.2+*/
    url("https://db.onlinewebfonts.com/t/67680f2eb947c5cbd58b40961b4a61e9.svg#Apple SD Gothic Neo") format("svg"); /* iOS 4.1- */
}



.swiper-pagination {
  
  bottom: 15px;
}
.swiper-pagination-bullet{
 width: 12px;
  height: 12px;
  opacity: 1;
  background: transparent;
  border: 2px solid white;
}
.swiper-pagination-bullet-active {
  background: white;
}

.word{
	word-spacing: 20px;
}
@media (max-width: 900px){
	.word{
	word-spacing: 10px;
}
}

.desiccants{
	font-family: "Copyright Klim Type Foundry";
	
}
.tag{
	font-family: "Apple SD Gothic Neo" !important;
	
}
.next{
	right: 10px !important;
}

button.flickity-prev-next-button{
	background: rgba(252, 252, 252, 0.498) !important;
	
}


.main-banner{
	background: url('../assets/mainbg.webp');
	background-size: cover;
	background-position:  left;
	background-repeat: no-repeat;
	position: relative;
	z-index: 1;
	overflow-x: hidden !important ;
}
.main-banner2{
	background: url('../assets/bannerbg.webp');
	background-size: cover;
	background-position:  center center;
	background-repeat: no-repeat;
	position: relative;
	z-index: 1;
	overflow-x: hidden !important ;
}
.main-banneer::after{
  content:'';
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 100vw;
  background-color: white;
  opacity: 0.1;
  z-index: -1;
}

.main-banner h1{
	font-family: 'Cinzel', serif;
}
.main-banner h3,  .main-banner button,.main-banner2 h3,  .main-banne2r button{
	font-family: 'Athelas-Bold', serif;
}
.banner{
	background-image: linear-gradient( 108deg,  rgba(242,245,139,1) 17.7%, rgba(148,197,20,0.68) 91.2% );
}
	/*.banner h1{font-family: 'Playfair Display', serif;}*/
	.banner {font-family: 'Poppins', sans-serif;}

@media (max-width:470px){
.small{
	padding-right: 20px;
	padding-left: 20px;
}


.t-smal{
font-size:60px;
}
}
.bord{
	
	position: relative;
	 appearance: none;
	  --border-radius: 15px;
 --border-width: 4px;

 z-index: 2;
}



@media (max-width:400px){


.t-smal{
font-size:55px;
}
}

.cont{
	background: url('../assets/bannerbg.webp');
	background-size: cover;
	background-repeat: no-repeat;
}
/*.containe::before{
	content: '';
	height: 100%;
	width: 100vw;
	position: absolute;
	background-size: contain;
	background-position: bottom right;
	background-repeat: no-repeat;
	bottom: 0;
	right: 0;
	overflow-x: hidden !important;

	

	
	z-index: -1;

}*/

@media (max-width:770px) {
	.main-banner{
		background-position: bottom center;
	}
	.containe::before{
	
	background: linear-gradient(90deg, rgba(238,109,77,0.19121151878720233) 0%, rgba(238,117,77,0.8678501742493873) 100%);
height: 200%;
width: 100%;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: top left;
	position: absolute;
	top: 0;
	left: 0;
	
}
}



.main-banner3{
	background: url('../assets/glass.webp');
	background-size: cover;
	background-position:  center center;
	background-repeat: no-repeat;
	position: relative;
	z-index: 1;
	overflow-x: hidden !important ;
  @apply backdrop-blur-md;
}


.main-banner2::after{
	content:'';
	position: absolute;
	left: 0;
	top: 0;
	height: 100%;
	width: 100%;
	background-color: black;
	opacity: 0.3;
	z-index: -1;
}

/* From uiverse.io by @Madflows */
/* From uiverse.io by @Madflows */

.bg2{
background: url('../assets/bg2.jpg');
background-size: cover;
}
.bg3{
background: url('../assets/mainbg.webp');
background-size: cover;
}
.bg4{
background: url('../assets/pic.jpg');
background-size: cover;
}

@media (max-width:600px){
.prevent{
  background-position: center;
}

}


</style>
<script>

import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";


// import required modules
import { Pagination,Autoplay } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination,Autoplay],
    };
  },
  
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