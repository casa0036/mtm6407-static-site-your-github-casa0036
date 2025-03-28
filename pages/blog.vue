<script setup>
import Navigation  from '~/components/Navigation.vue';
import foot from '~/components/foot.vue';
import blog from '~/components/blog.vue';

</script>
<template>
  <div>
    <NuxtRouteAnnouncer />
    <Navigation/>
    <div class="section">
    <h1>Our Blog</h1>
    <p>Tips & Tricks for Keeping Your Pup Happy & Healthy</p>

    <div class="section-blog">
  <blog/>
  </div>
  

  </div>
  </div>
  <foot/>
</template>

<style>

h1 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #DB5461;

}

p {
  font-size: 1.2rem;
  color: #483C46;
  margin-bottom: 2rem;
}

.section-blog {
 padding-top: 80px;
 padding-bottom: 80px;
}

@media (max-width: 768px)  {

  p{
    
  }

}




</style>