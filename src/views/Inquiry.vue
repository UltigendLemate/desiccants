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
       <router-link to="/about" class=" hover:text-[#EE6C4D]">R&amp;D</router-link>
     </li>
     <li class=" md:text-2xl my-5 pl-5 md:mx-4">
       <router-link to="/products" class=" hover:text-[#EE6C4D]">Products</router-link>
     </li>
     <li class=" md:text-2xl my-5 pl-5 md:mx-4 md:mr-0">
       <router-link to="/inquiry" class=" hover:text-[#EE6C4D] font-bold">Inquiry</router-link>
     </li>
 
     
    
    </ul>

  </nav>

<div class="grid justify-center items-center">
<h1 class="  pt-8 mb-5 pb-2 md:mt-8  w-fit  text-5xl text-center px-3 md:px-0 " style="font-family: 'Lora', serif;">FREQUENTLY ASKED QUESTIONS</h1>
</div>
  <div class="w-full px-4 ">
    <div class=" lg:mx-10  md:flex   rounded-2xl bg-white p-2">

    <!-- 1st div  -->
     <div class="md:w-1/2 md:pr-3">
      <Disclosure as="div" class="my-3 md:my-4" v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-lg font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
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
          class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-lg font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
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
          class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-lg font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
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
          class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-lg font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
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
      </Disclosure></div>



      <!-- second div  -->
      <div class="md:w-1/2 md:pl-3">
      <Disclosure as="div" class="my-3 md:my-4" v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-lg font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
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
          class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-lg font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
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
          class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-lg font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
        >
          <span>Do’s</span>
          <ChevronUpIcon
            :class="open ? 'rotate-180 transform' : ''"
            class="h-5 w-5 text-purple-500"
          />
        </DisclosureButton>
        <DisclosurePanel class="disc px-4 pt-4 pb-2 text-lg text-gray-500">
          Maintain Rh levels and other factors of ambiance in the storage facility according to the guidelines (available on demand).<br>
Only use desiccants that indicate their date of manufacturing.<br>
Check performance and compliance test reports for desiccant before approval.

        </DisclosurePanel>
      </Disclosure>
      <Disclosure as="div" class="my-3 md:my-4" v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-lg font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
        >
          <span>Dont’s</span>
          <ChevronUpIcon
            :class="open ? 'rotate-180 transform' : ''"
            class="h-5 w-5 text-purple-500"
          />
        </DisclosureButton>
        <DisclosurePanel class="disc px-4 pt-4 pb-2 text-lg text-gray-500">
          Delay sealing of container/carton or shipment after desiccant placement.<br>
Leave a bulk-packaged batch of desiccant open.<br>
Use a desiccant from a batch that has been exposed to air.
        </DisclosurePanel>
      </Disclosure></div>
    </div>
  </div>


<div class="grid md:grid-cols-2 overflow-hidden md:mt-8 mt-3 text-white bg-blue-500 pt-10 md:pb-10 ">
<div class="flex flex-col justify-center items-center map md:mr-3 md:ml-6 ">
<h2 class="text-[55px] md:text-6xl lg:text-7xl xl:text-8xl text-center " style="font-family: 'Lora', serif;">WE'RE HERE</h2>
<h3 class="text-4xl lg:text-5xl text-justify md:text-center  pt-3 md:pt-7 lg:pt-6 pb-10 px-10">Feel free to reach out to us and obtain free samples.</h3>

</div>
<div class="md:mx-3 md:px-3 ">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.152147688517!2d76.9491998149246!3d28.68509498239709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0ecdbfffffff%3A0x66353ce6c94119b9!2sDESICCANTS%20INDIA!5e0!3m2!1sen!2sin!4v1654004682967!5m2!1sen!2sin" width="100%" height="450" class="md:rounded-2xl" style="margin: 0 auto; border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
  }
}
</script>

<style>
.disc{
@apply bg-green-100 -mt-1;
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
