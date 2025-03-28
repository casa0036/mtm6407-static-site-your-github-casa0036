<script setup>
import Navigation  from '~/components/Navigation.vue';
import foot from '~/components/foot.vue';
import contactform from '~/components/contactform.vue'
</script>
<template>
  <div>
    <NuxtRouteAnnouncer />
    <Navigation/>
    <h1>Contact Us</h1>
    <contactform/>
  </div>
  <foot/>
</template>

<style>

h1 {
    color:#DB5461;
    text-align: center;
}


</style>