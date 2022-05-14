<template>
  <div class="containe max-w-screen  flex md:flex-row flex-col-reverse md:h-[80vh] py-8 px-7">


<div class="right  flex items-center  content-center justify-center  md:my-auto  mt-10 md:mx-10 py-0 md:py-9  md:h-full ">
  <img src='../assets/pic.jpg'   class="rounded-xl sm:h-3/5  md:h-5/6 mx-auto shadow-[#00000067] shadow-lg " alt="">

  </div>
<div class="md:my-auto flex flex-col mb-0 mt-7  items-start justify-center">
  <div class="left   mb-7">
  <h1 class="text-[40px] min-w-fit sm:text-5xl    font-bold  ">DESSICANTS INDIA</h1>

  <h3 class="text-2xl md:text-4xl md:mt-5 lg:text-3xl md:tracking-wide font-medium mt-6 ">Complete Solutions For Moisture</h3>
  

  </div >

  <button class="rounded-2xl bg-[#243980] text-white px-8 py-5 hover:relative hover:bottom-1 duration-500 ease-in-out text-2xl font-semibold">Know More</button>

  </div>

  
  
  </div>
</template>

<script>
export default {

}
</script>

<style>
.containe::before{
	content: '';
	height: 100%;
	width: 100%;
	position: absolute;
	background: url('../assets/wave.svg');
	background-size: contain;
	background-repeat: no-repeat;
	background-position: bottom right;
	bottom: 0;

	

	
	z-index: -1;

}

@media (max-width:770px) {
	.containe::before{
	
	background: linear-gradient(90deg, rgba(238,109,77,0.19121151878720233) 0%, rgba(238,117,77,0.8678501742493873) 100%);
height: 200%;
width: 200%;
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