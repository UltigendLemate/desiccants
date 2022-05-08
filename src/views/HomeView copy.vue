<template>
    <h2>Hello World</h2>
<div class="flex justify-center">
   <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdJZBOqp8HVyKcWN1T2PG3xzWRdrcwbDvoPXrmhjerN2ttAog/viewform?embedded=true"  width="1040" height="3933" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
</div>
    <p v-scrollanimation >Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui possimus voluptate eos laudantium dignissimos totam iste repellendus? Maxime odit quia, labore et delectus facilis beatae, natus incidunt molestias veritatis harum rem obcaecati unde suscipit quisquam debitis sequi! Adipisci tempora beatae id repellendus omnis? Laboriosam qui velit dolore, hic exercitationem optio eos culpa soluta ea a vel esse vero rerum animi delectus accusantium quo assumenda sequi ipsa aperiam consectetur nam alias consequatur eum? Et a similique aperiam? Autem optio odit nihil molestiae officiis vero nostrum ratione voluptate, voluptatem molestias accusantium sunt obcaecati, a quod esse corporis dicta consequatur tempora. Maiores, magni?</p>

    <img v-scrollanimation  src="../assets/logo.png">
    
</template>

<style>
.mega{max-width: 900px;
margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    justify-content: center;
    column-gap: 0;
}

.before-enter{
    opacity:0;
    transform: translateX(-30px);
    transition: all 1s ease-in;
}
.enter{
    opacity:1;
transform: translateX(0px);
}
</style>


