<template>
  <div class="h-[70vh] container   md:h-[80vh] bg-[#293241] p-6">
  <div class="left text-white border-l-8 border-[#EE6C4D] p-7 mt-5 ">
  <h1 class="text-4xl md:text-7xl  font-bold tracking-widest ">DESSICANTS INDIA</h1>

  <h3 class="text-2xl md:text-5xl md:mt-10  tracking-wide font-medium mt-6 ">Complete Solutions For Moisture</h3>
  
  </div>

  <div class="right mt-16">
  <!-- <img src='../assets/pic.jpg'   class="rounded-full " alt=""> -->
  </div>
  
  </div>
</template>

<script>
export default {

}
</script>

<style>
.container{
	background-image: url('../assets/bannerbg.jpg');
	background-size: cover;
	background-position: top right;
	position: relative;
	z-index: 1;

}

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
}
</style>