import './assets/tailwind.css'
import { createApp, VueElement } from 'vue'
import App from './App.vue'
import router from './router'

// import './assets/OurJourney.scss'




const animatedScrollObserver = new IntersectionObserver(
    (entries, animatedScrollObserver) => {
      /*
        Looping through all entries, which are observed.
      */
      entries.forEach((entry) => {
        /*
          With this condition, we check whether the element is in the current viewport, 
          respectively if the entry intersects with the viewport.
          If true, then we add the enter class and call the unobserve function.
          Because we don’t have to observe it anymore.
        */
        if(entry.isIntersecting) {
          entry.target.classList.add('enter');
        //   console.log(entered);
          animatedScrollObserver.unobserve(entry.target);
        }
      });
    }
  );


const app = createApp(App)

app.directive('scrollanimation', (el)=>{
    el.classList.add('before-enter');
    //   console.log('before enter')
      animatedScrollObserver.observe(el);
});


app.use(router).mount('#app')


