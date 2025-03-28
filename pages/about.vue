<script setup>
import Navigation  from '~/components/Navigation.vue';
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
    <h1>About</h1> 
    <div class="section">
        <div>
        <p>At Pawfect Paws Grooming, we believe every dog deserves the best care. With over 10 years of experience, our certified groomers provide gentle, professional services tailored to your pets unique needs. Our mission is to create a fun and safe space where dogs can relax while getting pampered.</p>
    </div>
    <div><img src="/images/dog-in-bath.jpg" alt=""></div>
    </div>
    <foot/>
  </div>
</template>

<style>

@media (max-width: 768px)  {

.section {
    margin: 0 80px;
    padding-bottom: 100px;
    padding-top: 0;
    display: inline-block;
  }
}


</style>