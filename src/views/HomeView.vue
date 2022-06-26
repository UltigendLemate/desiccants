<template>
  <Banner/>

    <Industries/>
    <product-section/>
  <!-- <about-section/> -->
    <journey v-motion
  :initial="{
    opacity: 0,
  }"
  :visible="{
    opacity: 1,
    transition: {
      delay:300,
      ease: 'easeIn',

      duration: 600,
    },
  }" />
    

</template>


<script>

import Banner from '../components/Banner.vue'
import AboutSection from '../components/AboutSection.vue'
import ProductSection from '../components/ProductSection.vue'
import OurJourney from '../components/trash.vue'
import Journey from '../components/Journey.vue'
import Whyus from '../components/Whyus.vue'
import Industries from '../components/AboutUs.vue'

export default {
  components:{
    Banner,
    AboutSection,
    ProductSection,
    OurJourney,
    Journey,
    Whyus,
    Industries

  },
  mounted () {
  window.scrollTo(0, 0)
}
  
}
</script>






<style>



</style>