<template >

   <!-- <nav>class="flex flex-row justify-between px-10 bg-gray-200"> -->
   <!-- <nav class="   absolute w-screen right-0 text-white  z-10  px-7 shadow-lg flex md:flex justify-between items-center">
    <div class="left flex items-center">
      <img src="./assets/logo.png" class="h-[70px] md:h-[80px] md:my-3 " alt="" />

    </div>

    <div class="lg:w-[70%] md:w-4/5" >

    <div @click="MenuOpen()" class=" md:hidden text-black  relative left-4 cursor-pointer flex align-middle items-center text-6xl  h-28">
    <i :class="[open?'bi bi-x':'bi bi-filter-left']" class="my-auto "></i>
    </div>

    <ul class="md:flex navlist md:items-center md:w-full md:justify-between md:px-0 px-5 md:pb-0 z-50 md:static absolute text-2xl bg-white text-black md:text-white  md:bg-transparent overflow-x-hidden   w-full  duration-700 ease-in" :class="[open ? 'left-0':'left-[-100%]']">
     <li class=" md:text-3xl my-6">
       <router-link to="/" class=" hover:text-[#EE6C4D]">Home</router-link>
   
     </li>
     <li class=" md:text-3xl my-6">
       <router-link to="/about" class=" hover:text-[#EE6C4D]">R&amp;D</router-link>
     </li>
     <li class=" md:text-3xl my-6">
       <router-link to="/" class=" hover:text-[#EE6C4D]">Products</router-link>
     </li>
     <li class=" md:text-3xl my-6">
       <router-link to="/" class=" hover:text-[#EE6C4D]">Contact Us</router-link>
     </li>
 
     
    
    </ul>
    
    </div>
  </nav> -->

  <router-view  class="overflow-x-hidden" />

<div class="fixed bottom-5 md:bottom-7 right-5 bg-[#2DB742] rounded-full p-3 h-16 w-16 " id="wp"><a href=""><img src="./assets/wp.svg" alt=""></a></div>

<!-- <footer class=""> 


  <div class="lg:grid footer pb-7 bg-black text-white  lg:grid-cols-4">
  
  <div class="flex col-span-1 justify-center pt-7 lg:pb-5"><img src="./assets/logo_white.png" alt=""></div>

    
  
  <div class="grid col-span-1 justify-center">

  <h2 class="text-3xl font-bold mt-0 opacity-0 text-center">Quick Links</h2>
  
<ul class="font-thin">
     <li class="text-center  text-lg my-2">
       <router-link to="/" class=" hover:text-[#EE6C4D]">Home</router-link>
  
     </li>
     <li class="text-center  text-lg my-2">
       <router-link to="/products" class=" hover:text-[#EE6C4D]">R&amp;D</router-link>
     </li>
     <li class="text-center  text-lg my-2">
       <router-link to="/" class=" hover:text-[#EE6C4D]">Products</router-link>
     </li>
     
     
     
    
    </ul>

    <div class="grid grid-cols-3 gap-x-6   my-2">
    <img  src="https://img.icons8.com/fluency/60/000000/instagram-new.png" />
    <img src="https://img.icons8.com/fluency/60/000000/facebook-new.png"/>
    <img src="https://img.icons8.com/color/60/000000/linkedin-circled--v1.png"/>
    </div>
  
  </div>

<div class="lg:text-justify text-center col-span-2 text-lg grid  justify-center ">
<p class="text-3xl font-bold mt-3 mb-5 lg:mb-0 opacity-0 lg:ml-[25%]  ">Contact</p>
<div class="lg:grid md:text-xl lg:text-lg  lg:-mt-10 justify-center gap-x-3 grid-cols-2">
<div class="">
   <span class="  font-bold">Address: </span>
   <p class="mb-4">Desiccants India<br>
1833 MIE Part B,<br>
Bahadurgarh,<br>
Haryana-124507</p>

</div>

<div class="">

<p class="  "><span class="font-bold ">Call Us: </span> <a href="tel:9810987954" class="  block"><i class="bi bi-telephone-fill"></i> 9810987954</a>
<a href="tel:9212025689" class=" block  "><i class="bi bi-telephone-fill"></i> 9212025689</a></p>
 
   <div class="hidden md:block">
<p class="  font-bold mt-4 ">Email Us:</p><a href="mailto:desiccantsindia@yahoo.co.in" class="  inline-block "> <i class="bi bi-envelope-fill"></i>  mktg@desiccantsindia.com</a>
  </div>


 </div>
 </div>

 <div class="md:hidden">
<p class="  font-bold mt-4 md:mt-0">Email Us:</p><a href="mailto:desiccantsindia@yahoo.co.in" class="  inline-block"><i class="bi bi-envelope-fill"></i>  mktg@desiccantsindia.com</a>
  </div>
  
  </div>
  


 
  
  </div>

  <div class="bg-white py-2 text-sm md:text-base text-center">&#169; 2021 Desiccants India LLP. All rights reserved.</div>
  </footer>  -->

 

 <!-- <footer class="lg:grid md:grid-cols-5 lg:px-16 xl:px-40 justify-center items-center bg-black">
  <div class="hidden lg:grid px-4 py-4 max-w-[80px] col-span-1"><img src="./assets/logo_white.png" alt=""></div>

  <div class="  py-2 text-white text-sm md:text-base text-center col-span-3">&#169; 2021 Desiccants India LLP. All rights reserved.</div>

  <div class=" grid-cols-3 hidden lg:grid  gap-x-0 col-span-1">
    <img  src="https://img.icons8.com/fluency/60/000000/instagram-new.png" />
    <img src="https://img.icons8.com/fluency/60/000000/facebook-new.png"/>
    <img src="https://img.icons8.com/color/60/000000/linkedin-circled--v1.png"/>
    </div>
 
 
 
 </footer> -->


 <footer class="flex flex-col justify-center items-center">
<div class="h-52 md:h-64 w-full relative wecare bg-gray-500"><p class="absolute bottom-5 lg:left-7 lg:bottom-8 md:text-2xl
 text-lg left-4 text-white " style="word-spacing:5px;">WE CARE FOR YOUR PRODUCT</p></div>
<div class="hidden md:block w-full px-32 xl:px-52 py-4">
<ul class="font-thin flex text-2xl justify-evenly">
     <li class="text-center   my-2">
       <router-link to="/" class=" hover:text-[#EE6C4D]">Home</router-link>
  
     </li>
     <li class="text-center   my-2">
       <router-link to="/products" class=" hover:text-[#EE6C4D]">Products</router-link>
     </li>
     <li class="text-center   my-2">
       <router-link to="/RnD" class=" hover:text-[#EE6C4D]">R&amp;D</router-link>
     </li>
     
     <li class="text-center   my-2">
       <router-link to="/inquirty" class=" hover:text-[#EE6C4D]">Inquiry</router-link>
     </li>
     
     
     
    
    </ul>
</div>
  <div class=" grid-cols-3 grid text-4xl md:text-5xl gap-x-4 mt-6 md:mt-12">
    <i class="fa-brands fa-facebook"></i>
    <i class="fa-brands fa-instagram"></i>
    <i class="fa-brands fa-twitter"></i>
    </div>
<div class="grid p-4  max-w-[180px] "><img src="./assets/logo.png" alt=""></div>
  <div class=" pb-5 md:text-xl  text-center "> Desiccants India LLP &#169; 2022.<br class="md:hidden"> All rights reserved.</div>

 </footer>
</template>

<style >
@import url(//db.onlinewebfonts.com/c/db8cfc8f593f2e47bd9bd157e455c494?family=Athelas-Bold);


@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

html {
  scroll-behavior: smooth !important;
}
.wecare{
  background: url('./assets/footer.png') ;
  background-size: cover;
  background-position-y: 60%;
}

#app {
    font-family: "Montserrat", sans-serif; 

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
nav .navlist {
  font-family: sans-serif; 


}

/* From uiverse.io by @ShadowShahriar */
button.contact {
 --border-radius: 15px;
 --border-width: 4px;
 appearance: none;
 position: relative;
 padding: 0.75em 1.5em;
 border: 0;
 background-color: #212121;
 font-family: "Montserrat",  sans-serif;
 font-size: 20px;
 font-weight: bold;
 color: #fff;
 z-index: 2;
}

button.contact::after {
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

button.contact:hover::after {
 animation-play-state: running;
}

@keyframes rotate-hue {
 to {
  filter: hue-rotate(1turn);
 }
}

button.contact,
button.contact::after {
 box-sizing: border-box;
}

button.contact:active {
 --border-width: 5px;
}
button.contact:hover{
  color:#EE6C4D;
}


.foote{
  background: url('./assets/footer-bg.png') ;
    background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  
  

}
#wp{
    animation: yourAnimation 2s ease-in-out 0s infinite normal none;
}


@keyframes yourAnimation {
    0.0%{
        transform: scale(1);
    }

    50.2%{
        transform: scale(1.1);
    }
    99.6%{
        transform: scale(1);
    }
}

</style>

<script>
export default {
  data(){
    return{
    open:false,
    isLoading:true

    }
  },
  methods:{
    MenuOpen(){
      this.open = !this.open
    }
  }
}
</script>