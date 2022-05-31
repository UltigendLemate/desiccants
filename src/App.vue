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

  <router-view class="overflow-x-hidden" />

<div class="fixed bottom-5 md:bottom-7 right-5 bg-[#2DB742] rounded-full p-3 h-16 w-16 " id="wp"><a href=""><img src="./assets/wp.svg" alt=""></a></div>

<footer class=""> 


  <div class="lg:grid footer pb-7 bg-black text-white  lg:grid-cols-4">
  
  <div class="flex col-span-1 justify-center pt-7 lg:pb-5"><img src="./assets/logo_white.png" alt=""></div>

    
  
  <div class="grid col-span-1 justify-center">

  <h2 class="text-3xl font-bold mt-10 text-center">Quick Links</h2>
  
<ul class="font-thin">
     <li class="text-center  text-lg my-2">
       <router-link to="/" class=" hover:text-[#EE6C4D]">Home</router-link>
  
     </li>
     <li class="text-center  text-lg my-2">
       <router-link to="/about" class=" hover:text-[#EE6C4D]">R&amp;D</router-link>
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
<p class="text-3xl font-bold mt-10 mb-5 lg:mb-0 lg:ml-[25%]  ">Contact</p>
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
  </footer> 

 
</template>

<style >
@import url(//db.onlinewebfonts.com/c/db8cfc8f593f2e47bd9bd157e455c494?family=Athelas-Bold);


@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

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

    }
  },
  methods:{
    MenuOpen(){
      this.open = !this.open
    }
  }
}
</script>