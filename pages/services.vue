<script setup>
import Navigation  from '~/components/Navigation.vue';
import foot from '~/components/foot.vue';
import serviceCards from '~/components/serviceCards.vue';
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
    <h1>Our Grooming Services</h1>
    <div class="section">
      <serviceCards/>
    </div>
    <p class="small-text">Prices may vary based on coat condition, dog temperament, and additional services requested. Let me know if you need further adjustments!</p>
    <foot/>
  </div>
</template>

<style>

.section {
 margin-right: 50px;
 margin-left: 50px;
}


.small-text {
padding-left: 1rem;
}



</style>