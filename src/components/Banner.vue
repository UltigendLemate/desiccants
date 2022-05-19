<template>
<div class="containe overflow-x-hidden max-w-screen md:-mb-5 flex md:flex-row flex-col-reverse md:h-[80vh] py-8 px-7">


<div class="right  flex items-center  content-center justify-center  md:my-auto  mt-10 md:mx-10 py-0 md:py-9  md:h-full ">
  <img src='../assets/pic.jpg'   class="rounded-xl object-cover lg:object-fill  md:h-5/6 mx-auto shadow-[#00000067] shadow-lg " alt="">


  </div>
<div class="md:my-auto flex flex-col overflow-x-hidden mb-0 mt-7 md:w-1/2 items-start justify-center">
  <div class="left  overflow-x-hidden mb-7">
  <h1 class="text-[40px] min-w-fit sm:text-5xl    font-bold  ">DESSICANTS INDIA</h1>

  <h3 class="text-2xl md:text-4xl md:mt-5 lg:text-3xl md:tracking-wide font-semibold my-3  ">Complete Solutions For Moisture</h3>
  <div class="">
  
  <p class="text-base text-justify md:w-5/6">Moisture and humidity adversely affect the quality of products and severely harm their integrity. 
 

Give your products the protection they need.
</p></div>
  

  </div >

  <button class="rounded-2xl bg-[#243980] text-white px-5 sm:px-8 py-5 hover:relative hover:bottom-1 duration-500 ease-in-out text-xl sm:text-2xl shadow-md shadow-black font-semibold">Know More</button>

  </div>

  
  
  </div> 
   <!-- Desiccants India has been a leading manufacturer of desiccants for the past 27 years and aims to shield your products from such damage and increase their shelf life.  -->

  <!-- <div class="h-[calc(100vh-112px)]  flex justify-center items-center cont">
  <div class="w-4/5 md:w-2/3 lg:w-3/5 small rounded-3xl backdrop-blur-lg bg-white bg-opacity-20 p-10  text-center" > 
  <h1 class="text-[40px]  sm:text-5xl md:text-6xl md:mb-4 sm:mb-3 t-smal ">Dessicants India</h1>

  <h2 class="text-xl sm:text-2xl md:text-3xl md:mb-4 font-medium mb-2">Complete Solutions For Moisture</h2>

  <h6 class="text-lg md:text-xl text-justify">Moisture and humidity adversely affect the quality of products and severely harm their integrity. Give your products the protection they need. Desiccants India has been a leading manufacturer of desiccants for the past 27 years and aims to shield your products from such damage and increase their shelf life.</h6>
  
  
  </div>
  </div> -->
</template>

<script>
export default {

}
</script>

<style>

@media (max-width:470px){
.small{
	padding-right: 20px;
	padding-left: 20px;
}

.t-smal{
font-size:36px;
}
}


@media (max-width:400px){


.t-smal{
font-size:32px;
}
}

.cont{
	background: url('../assets/bannerbg.jpg');
	background-size: cover;
	background-repeat: no-repeat;
}
.containe::before{
	content: '';
	height: 100%;
	width: 100vw;
	position: absolute;
	background: url('../assets/wave.svg');
	background-size: contain;
	background-position: bottom right;
	background-repeat: no-repeat;
	bottom: 0;
	right: 0;
	overflow-x: hidden !important;

	

	
	z-index: -1;

}

@media (max-width:770px) {
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




/*

.container::after{
	content:'';
	position: absolute;
	left: 0;
	top: 0;
	height: 100%;
	width: 100%;
	background-color: black;
	opacity: 0.5;
	z-index: -1;
}*/

/* From uiverse.io by @Madflows */
/* From uiverse.io by @Madflows */

</style>