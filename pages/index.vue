<script setup>
import Navigation  from '~/components/Navigation.vue';
import heroBanner from '~/components/heroBanner.vue';
import foot from '~/components/foot.vue';

</script>
<template>
    <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Radio+Canada:ital,wght@0,300..700;1,300..700&display=swap" rel="stylesheet">
    </Head>
  <div class="layout">
    <NuxtRouteAnnouncer />
    <Navigation/>
    <heroBanner/>
    <div class="section">
      <div class="intro">
       <h2>Welcome to Pawfect Paws Grooming! </h2> 
        <p>We’re a professional dog grooming salon dedicated to keeping your furry friends looking and feeling their best. With expert groomers, a stress-free environment, and top-quality pet care products, we ensure every visit is a tail-wagging experience.</p>
        <NuxtLink class="btn" to="/contact">Book an appointment today!</NuxtLink>
    </div>
    <div><img src="/images/dog-in-bath.jpg" alt=""></div>
    </div>
    <foot/>
  </div>
</template>

<style>

body {
  font-family: "Radio Canada", sans-serif;
  margin: 0;
  padding: 0;
}

.section {
    margin: 0 250px;
    padding-top: 80px;
    padding-bottom: 100px;
    display: flex;
    justify-content: space-evenly;
}

img{
    width: 100%;
}

h2{
    color:#DB5461;
}

.btn{
  background: #DB5461;
  color:  #FFD9CE;
  padding: 0.8rem 1.5rem;
  font-size: 1.2rem;
  border-radius: 5px;
  text-decoration: none;
  transition: 0.3s ease-in-out;
}

.btn:hover{
  background: #483C46;
}

@media (max-width: 768px)  {

  img {
  margin-top: 2.5rem;
  width: 100%;
  
}
.intro {
  display: block;
}

.section {
  display: block;
}

.btn {
  font-size: 16px;
}

}


</style>