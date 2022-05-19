<template >

   <!-- <nav>class="flex flex-row justify-between px-10 bg-gray-200"> -->
   <nav class="bg-white  text-gray-900  px-7 shadow-lg flex md:flex justify-between items-center">
    <div class="left flex items-center">
      <img src="./assets/logo.png" class="h-[70px] " alt="" />
      <!-- <span class="text-4xl pt-8">Desiccants</span> -->
    </div>

    <div >

    <div @click="MenuOpen()" class=" md:hidden  cursor-pointer flex align-middle items-center text-6xl  h-28">
    <i :class="[open?'bi bi-x':'bi bi-filter-left']" class="my-auto "></i>
    </div>

    <ul class="md:flex navlist md:items-center md:px-0 px-5 md:pb-0 z-30 md:static absolute text-2xl bg-white md:w-auto w-full  duration-700 ease-in" :class="[open ? 'left-0':'left-[-100%]']">
     <li class="md:mx-4 my-6">
       <router-link to="/" class=" hover:text-[#EE6C4D]">Home</router-link>
       <!-- 243980 -->
     </li>
     <li class="md:mx-4 my-6">
       <router-link to="/about" class=" hover:text-[#EE6C4D]">About Us</router-link>
     </li>
     <li class="md:mx-4 my-6">
       <router-link to="/" class=" hover:text-[#EE6C4D]">Products</router-link>
     </li>
     <li class="md:mx-4 my-6">
       <router-link to="/" class=" hover:text-[#EE6C4D]">Contact Us</router-link>
     </li>
     <!-- <button class="md:mx-4 contact mt-0 rounded-3xl mb-6 md:mt-6">
       <router-link to="/" class=" ">Contact Us</router-link>
     </button> -->
     
     
    
    </ul>
    
    </div>
  </nav>

  <router-view class="overflow-x-hidden" />

<!-- <footer>


  <div class="md:grid footer  md:grid-cols-3">
  
  <div class="flex justify-center"><img src="./assets/logo.png" alt=""></div>
  
  <div class="flex flex-col mt-7 items-center justify-center">

  <h2 class="text-3xl font-bold border-b-2 px-6 pb-3 border-black w-fit text-center">Quick Links</h2>
  
<ul class="">
     <li class="text-center text-xl my-2">
       <router-link to="/" class=" hover:text-[#EE6C4D]">Home</router-link>
  
     </li>
     <li class="text-center text-xl my-2">
       <router-link to="/about" class=" hover:text-[#EE6C4D]">About Us</router-link>
     </li>
     <li class="text-center text-xl my-2">
       <router-link to="/" class=" hover:text-[#EE6C4D]">Products</router-link>
     </li>
     
     
     
    
    </ul>
  
  </div>
<div>
<p class="text-3xl font-bold text-center border-b-2 border-black mx-36 mb-2 ">Contact</p>
  <div class="grid grid-cols-2 justify-center text-center mt-7 item-center ">
  
  <div>
  <p class="text-xl font-bold">Address:</p><p class=" text-xl mb-4"> Desiccants India<br>
1833 MIE Part B<br>
Bahadurgarh,<br>
Haryana-124507</p></div>
<div>
<div class="">
<p class="text-xl font-bold ">Call Us</p><a href="tel:9810987954" class="text-xl  inline-block"><i class="bi bi-telephone-fill"></i> 9810987954</a>
<a href="tel:9212025689" class="text-xl  block "><i class="bi bi-telephone-fill"></i> 9212025689</a>
  </div>

  

  </div>
  <div class="col-span-2">
<p class="text-xl font-bold mt-4">Email Us</p><a href="mailto:desiccantsindia@yahoo.co.in" class="text-xl  inline-block"><i class="bi bi-envelope-fill"></i> desiccantsindia@yahoo.co.in</a>
  </div>
  </div>
  </div>
  
  </div>
  </footer> -->

 
</template>

<style scoped>

@import url(//db.onlinewebfonts.com/c/2206d6cc490084998d531e8c1b2cbb4a?family=Druk+Wide+Bold);
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

#app {
  font-family: "Montserrat", sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
nav .navlist {
  font-family: "Montserrat", sans-serif; 
  font-weight: bold;

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


.footer{
  background: url('./assets/footer-bg.png') ;
    background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  
  

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