<template>
  <Banner/>
  <!-- <about-section/> -->
 
  <product-section/>
  <!-- <our-journey/> -->
  <journey/>
   <Whyus/>
  <Industries/>






</template>


<script>

import Banner from '../components/Banner.vue'
import AboutSection from '../components/AboutSection.vue'
import ProductSection from '../components/ProductSection.vue'
import OurJourney from '../components/trash.vue'
import Journey from '../components/Journey.vue'
import Whyus from '../components/Whyus.vue'
import Industries from '../components/Industries.vue'
export default {
  components:{
    Banner,
    AboutSection,
    ProductSection,
    OurJourney,
    Journey,
    Whyus,
    Industries

  }
}
</script>



<style>



</style>