<template>
  <div id='products'  class="text-white md:mb-10 px-10 py-20 text-center">
  <h2 class="text-3xl md:text-4xl mt-3 font-bold border-b-2 pb-6  inline-block border-gray-400 border-solid">Our Top Products</h2>
  <p class=" bg-clip-text text-transparent bg-gradient-to-br from-white to-[#ec9883] text-justify mt-5"><span class=" block text-xl text-center pb-2 italic"> Matter dictates Moisture</span>
Each of your products produced with care has specific needs. We, at Desiccants India, offer a wide range of sorbents that aim to meet not only your packaging needs at every step but also provide protection designed variably for different products.</p>
  

<div id="imgsProducts" class="grid md:grid-cols-3 grid-cols-2 gap-x-4 sm:gap-x-10 md:gap-x-6 gap-y-6 md:gap-y-5 lg:gap-x-8 lg:gap-y-8  mt-10  justify-center items-center ">
<div class="product"><img src="../assets/products/silica-gel.jpg" class="w-full bg-[#98C1D9] rounded-3xl  " alt=""><span class="text-sm font-semibold md:text-xl   mt-3">Silica Gel Sachets</span></div>

<div class="product "><img src="../assets/products/act.jpg" class="w-full bg-[#98C1D9] rounded-3xl" alt=""><span class="text-sm font-semibold md:text-xl   mt-3">Activated Carbon Pouches</span></div>

<div class="product"><img src="../assets/products/clay.jpg" class="w-full bg-[#98C1D9] rounded-3xl  " alt=""><span class="text-sm font-semibold md:text-xl    mt-3">Clay Based Desiccant</span></div>

<div class="product"><img src="../assets/products/food.jpg" class="w-full bg-[#98C1D9] rounded-3xl  " alt=""><span class="text-sm font-semibold md:text-xl    mt-3">Food Grade Desiccant</span></div>

<div class="product"><img src="../assets/products/calcium.jpg" class="w-full bg-[#98C1D9] rounded-3xl  " alt=""><span class="text-sm font-semibold md:text-xl    mt-3">Calcium Based Desiccant</span></div>

<div class="product"><img src="../assets/products/bentonite.jpg" class="w-full bg-[#98C1D9] rounded-3xl  " alt=""><span class="text-sm font-semibold md:text-xl    mt-3">Bentonite Clay</span></div>

<div class="hidden md:block"></div>

<div class="product"><img src="../assets/products/indicative.jpg" class="w-full bg-[#98C1D9]  rounded-3xl  " alt=""><span class="text-sm font-semibold md:text-xl    mt-3">Indicative Adsorbers</span></div>







</div>

  </div>
</template>

<script>
export default {

}
</script>

<style>
#products{

    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1001%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(36%2c 57%2c 128%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c322.787C61.948%2c330.295%2c129.343%2c315.816%2c177.321%2c275.917C223.706%2c237.343%2c222.622%2c167.898%2c250.553%2c114.424C280.618%2c56.865%2c357.566%2c14.19%2c347.539%2c-49.969C337.486%2c-114.295%2c247.492%2c-128.304%2c204.922%2c-177.566C162.265%2c-226.928%2c160.397%2c-315.16%2c99.091%2c-337.472C38.295%2c-359.598%2c-24.376%2c-309.905%2c-82.895%2c-282.315C-133.373%2c-258.516%2c-176.697%2c-226.576%2c-217.308%2c-188.299C-262.2%2c-145.987%2c-323.188%2c-108.791%2c-331.808%2c-47.707C-340.427%2c13.368%2c-293.738%2c66.975%2c-260.682%2c119.049C-231.528%2c164.976%2c-194.554%2c202.539%2c-151.693%2c236.038C-104.85%2c272.649%2c-59.021%2c315.633%2c0%2c322.787' fill='%231d2e66'%3e%3c/path%3e%3cpath d='M1440 890.428C1512.826 891.071 1594.431 934.896 1654.045 893.06 1713.901 851.054 1695.273 756.967 1725.228 690.259 1754.91 624.159 1823.633 576.395 1828.699 504.114 1834.132 426.584 1803.623 347.75 1753.387 288.448 1702.896 228.84500000000003 1629.752 187.409 1552.237 177.75599999999997 1479.521 168.70100000000002 1413.822 211.54899999999998 1345.345 237.63600000000002 1282.563 261.553 1220.824 282.857 1167.857 324.18600000000004 1105.026 373.212 1024.3980000000001 419.753 1011.216 498.35 998.031 576.965 1063.745 644.468 1102.452 714.153 1138.089 778.311 1163.318 855.327 1228.372 889.3 1292.195 922.63 1368.001 889.7919999999999 1440 890.428' fill='%232b449a'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1001'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");

    background-repeat: no-repeat;

    background-size: cover;
}

.product{
  @apply flex flex-col h-full  ;
 /* w-1/2 px-4 sm:my-5 my-2 md:w-1/4 ;
*/}
</style>