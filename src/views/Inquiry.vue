<template>
 <nav class=" flex    w-full right-0 text-black bg-white bg-opacity-10 backdrop-blur-sm  z-10  px-7 shadow-lg justify-between items-center">

<div class="left flex items-center">
      <img src="../assets/logo.png" class="h-[70px] " alt="" />

    </div>

    <div @click="MenuOpen()" class=" md:hidden text-black  relative left-4 cursor-pointer flex align-middle items-center text-6xl  h-24">
    <i :class="[open?'bi bi-x':'bi bi-filter-left']" class="my-auto "></i>
    </div>

    <ul class="md:flex navlist  px-5 md:pb-0 z-50 md:static absolute top-24  text-2xl bg-white text-black md:text-black  md:bg-transparent overflow-x-hidden  w-full md:w-auto   duration-500 ease-in-out" :class="[open ? 'left-0':'left-[-100%]']">
     <li class=" md:text-2xl my-5 pl-5 md:mx-4">
       <router-link to="/" class=" hover:text-[#EE6C4D]">Home</router-link>
   
     </li>
     <li class=" md:text-2xl my-5 pl-5 md:mx-4">
       <router-link to="/RnD" class=" hover:text-[#EE6C4D]">R&amp;D</router-link>
     </li>
     <li class=" md:text-2xl my-5 pl-5 md:mx-4">
       <router-link to="/products" class=" hover:text-[#EE6C4D]">Products</router-link>
     </li>
     <li class=" md:text-2xl my-5 pl-5 md:mx-4 md:mr-0">
       <router-link to="/inquiry" class=" hover:text-[#EE6C4D] font-bold">Inquiry</router-link>
     </li>
 
     
    
    </ul>

  </nav>

<div class="grid justify-center">
<h1 class="  pt-8   md:mt-8  w-fit  text-5xl mb-5 md:mb-0 text-center px-3 md:px-0 " style="font-family: 'Lora', serif;">CONTACT US</h1>
</div>

<div class="grid md:grid-cols-2 items-center justify-center md:mt-8 mt-3 text-black  lg:pt-0 md:pb-10 ">
 <div class="hidden flex-col mx-6 md:flex text-xl  justify-center productCard text-left  py-7  md:mr-3 md:ml-8 xl:ml-20 ">
<h2 class="text-[30px] md:text-4xl text-gray-500   text-center " style="font-family: 'Lora', serif;">We're Here!</h2>
<h3 class="  md:text-center  pt-3 md:pt-7 lg:pt-6 pb-3 px-10">Feel free to reach out to us and obtain free samples.</h3>


<div class="grid lg:grid-cols-2 justify-center text-center text-[18px] items-center mx-16 md:mx-0 xl:mx-0">
<p class=" px-10 "><span class="font-bold block pb-3 text-gray-500">Call Us:  </span> <a href="tel:9212025689" class="  block whitespace-nowrap "><i class="bi bi-telephone-fill"></i> 9212025689</a>
<a href="tel:9810987954" class=" block whitespace-nowrap  "><i class="bi bi-telephone-fill"></i>  9810987954</a></p>


<p class=" px-10 text-[18px] py-3 lg:-ml-20"><span class="font-bold block pb-3 text-gray-500">Email Us:  </span> <a  href="mailto:mktg@desiccantsindia.com" class="  block whitespace-nowrap"><i class="bi bi-envelope-fill"></i> mktg@desiccantsindia.com</a>
<a  href="mailto:desiccantsindia@yahoo.co.in" class=" block whitespace-nowrap cursor-pointer "><i class="bi bi-envelope-fill"></i> desiccantsindia@yahoo.co.in</a></p>
</div>
</div>
<div class="md:mx-3 md:px-3 scale-95 sm:scale-100 -z-10 relative ">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.152147688517!2d76.9491998149246!3d28.68509498239709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0ecdbfffffff%3A0x66353ce6c94119b9!2sDESICCANTS%20INDIA!5e0!3m2!1sen!2sin!4v1654004682967!5m2!1sen!2sin" width="80%" height="350" class="md:rounded-2xl" style="margin: 0 auto; border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>


  <div class="flex flex-col mx-10 scale-95 md:hidden text-xl justify-center productCard text-left mt-8 py-7  md:mr-3 md:ml-6 ">
<h2 class="text-[40px] md:text-6xl text-gray-500   text-center " style="font-family: 'Lora', serif;">We're Here</h2>
<h3 class="  md:text-center  pt-3 md:pt-7 lg:pt-6 pb-3 px-10">Feel free to reach out to us and obtain free samples.</h3>

<p class=" px-10 "><span class="font-bold block pb-3 text-gray-500">Call Us:  </span> <a href="tel:9810987954" class="  block"><i class="bi bi-telephone-fill"></i> 9810987954</a>
<a href="tel:9212025689" class=" block  "><i class="bi bi-telephone-fill"></i> 9212025689</a></p>




<p class=" px-10 text-[18px] py-3 "><span class="font-bold block pb-3 text-gray-500">Email Us:  </span> <a  href="mailto:mktg@desiccantsindia.com" class="  block whitespace-nowrap"><i class="bi bi-envelope-fill"></i> mktg@desiccantsindia.com</a>
<a  href="mailto:desiccantsindia@yahoo.co.in" class=" block whitespace-nowrap  "><i class="bi bi-envelope-fill"></i> desiccantsindia@yahoo.co.in</a></p>

</div>
  </div>



  <div class="grid justify-center items-center">
<h1 class="  pt-8 mb-5  md:mt-8  w-fit  text-4xl text-center px-3 md:px-0 " style="font-family: 'Lora', serif;">FREQUENTLY ASKED QUESTIONS</h1>
</div>
  <div class="w-full px-4 ">
    <div class=" lg:mx-10  md:flex   rounded-2xl bg-white p-2">

    <!-- 1st div  -->
     <div class="md:w-1/2 md:pr-3">
      <Disclosure as="div" class="my-3 md:my-4" v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-[#d8cae1] px-4 py-2 text-left text-lg font-medium text-[#4c424e] hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
        >
          <span>When to use desiccants?</span>
          <ChevronUpIcon
            :class="open ? 'rotate-180 transform' : ''"
            class="h-5 w-5 text-purple-500"
          />
        </DisclosureButton>
        <DisclosurePanel class="disc px-4 pt-4 pb-2 text-lg  text-gray-500">
          If your products are being kept packed for a long time and it is impossible to keep them air-tight, they need desiccants to keep them safe. Moisture droplets that are always present in the air can condense on products due to temperature change, thus, affecting them negatively.
        </DisclosurePanel>
      </Disclosure>
      <Disclosure as="div" class="my-3 md:my-4" v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-[#d8cae1] px-4 py-2 text-left text-lg font-medium text-[#4c424e] hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
        >
          <span>How to think about protection?</span>
          <ChevronUpIcon
            :class="open ? 'rotate-180 transform' : ''"
            class="h-5 w-5 text-purple-500"
          />
        </DisclosureButton>
        <DisclosurePanel class="disc px-4 pt-4 pb-2 text-lg text-gray-500">
          Efficient protection is a result of layering. A thumb rule is to use separate desiccants for each layer of packing depending on the size and quantity of the product.
        </DisclosurePanel>
      </Disclosure>
      <Disclosure as="div" class="my-3 md:my-4" v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-[#d8cae1] px-4 py-2 text-left text-lg font-medium text-[#4c424e] hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
        >
          <span>How much desiccant to use?</span>
          <ChevronUpIcon
            :class="open ? 'rotate-180 transform' : ''"
            class="h-5 w-5 text-purple-500"
          />
        </DisclosureButton>
        <DisclosurePanel class="disc px-4 pt-4 pb-2 text-lg text-gray-500">
          The number of desiccants for products being shipped can be decided on three important factors; RH level, transit time, and sea route. 
        </DisclosurePanel>
      </Disclosure>
     


       <Disclosure as="div" class="my-3 md:my-4" v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-[#d8cae1] px-4 py-2 text-left text-lg font-medium text-[#4c424e] hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
        >
          <span>How to use desiccants?</span>
          <ChevronUpIcon
            :class="open ? 'rotate-180 transform' : ''"
            class="h-5 w-5 text-purple-500"
          />
        </DisclosureButton>
        <DisclosurePanel class="disc px-4 pt-4 pb-2 text-lg text-gray-500">
         The choice of desiccant depends on the product and the size of the packing. A variety of powdered or beaded forms of desiccants are available as sachets, in a micro canister, or as hanging pouches that can be placed in packets, hung through provided ties and/or hooks.
        </DisclosurePanel>
      </Disclosure>
      </div>



      <!-- second div  -->
      <div class="md:w-1/2 md:pl-3">
      <Disclosure as="div" class="my-3 md:my-4" v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-[#d8cae1] px-4 py-2 text-left text-lg font-medium text-[#4c424e] hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
        >
          <span>How to determine which desiccant to use?</span>
          <ChevronUpIcon
            :class="open ? 'rotate-180 transform' : ''"
            class="h-5 w-5 text-purple-500"
          />
        </DisclosureButton>
        <DisclosurePanel class="disc px-4 pt-4 pb-2 text-lg text-gray-500">
          The type of desiccant depends on the material of the product and the quantity. Our team of experts has carefully matched the right desiccant with its use and application. You are welcome to contact us and we will provide a complete consultancy for your requirements. 
        </DisclosurePanel>
      </Disclosure>
      <Disclosure as="div" class="my-3 md:my-4" v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-[#d8cae1] px-4 py-2 text-left text-lg font-medium text-[#4c424e] hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
        >
          <span>Can the desiccant harm my product?</span>
          <ChevronUpIcon
            :class="open ? 'rotate-180 transform' : ''"
            class="h-5 w-5 text-purple-500"
          />
        </DisclosureButton>
        <DisclosurePanel class="disc px-4 pt-4 pb-2 text-lg text-gray-500">
          Desiccants are passive agents which act as placeholders for water molecules and have no effect on the product they are in contact with.
        </DisclosurePanel>
      </Disclosure>
     
       <Disclosure as="div" class="my-3 md:my-4" v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-[#d8cae1] px-4 py-2 text-left text-lg font-medium text-[#4c424e] hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
        >
          <span>Do’s</span>
          <ChevronUpIcon
            :class="open ? 'rotate-180 transform' : ''"
            class="h-5 w-5 text-purple-500"
          />
        </DisclosureButton>
        <DisclosurePanel class="disc px-4 pt-4 pb-2 text-lg text-gray-500">
        <ul class="list-disc px-4">
        <li>Maintain Rh levels and other factors of ambiance in the storage facility according to the guidelines (available on demand).</li>
        <li>Only use desiccants that indicate their date of manufacturing.</li>
        <li>Check performance and compliance test reports for desiccant before approval.</li>
        
        </ul>
         


        </DisclosurePanel>
      </Disclosure>
      <Disclosure as="div" class="my-3 md:my-4" v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-[#d8cae1] px-4 py-2 text-left text-lg font-medium text-[#4c424e] hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
        >
          <span>Dont’s</span>
          <ChevronUpIcon
            :class="open ? 'rotate-180 transform' : ''"
            class="h-5 w-5 text-purple-500"
          />
        </DisclosureButton>
        <DisclosurePanel class="disc px-4 pt-4 pb-2 text-lg text-gray-500">

        <ul class="list-disc px-4">
          <li>Delay sealing of container/carton or shipment after desiccant placement.</li>
          <li>Leave a bulk-packaged batch of desiccant open.</li>
          <li>Use a desiccant from a batch that has been exposed to air.</li>
        </ul>
          

        </DisclosurePanel>
      </Disclosure></div>
    </div>
  </div>

</template>

<script setup >



import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { ChevronUpIcon } from '@heroicons/vue/solid';
</script>
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
  },
   mounted () {
  window.scrollTo(0, 0)
}
}
</script>

<style>
.productCard{
  border-radius: 24px;
background: #dedede;
box-shadow:  9px 9px 18px #c3c3c3,
             -9px -9px 18px #f9f9f9;
  position: relative ;
  z-index: 0 !important;
  

}
.disc{
@apply bg-gray-100 -mt-1;
}
@media (min-width: 700px){
.map{
    border-radius: 50px;
background: #3b82f6;
box-shadow:  35px 35px 89px #3574db,
             -35px -35px 89px #4190ff;
}

}
</style>
