<template>
    <section class="hero">
      <div class="hero-content">
        <svg class="hero-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#DB5461"><path d="M180-475q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm180-160q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm240 0q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm180 160q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM266-75q-45 0-75.5-34.5T160-191q0-52 35.5-91t70.5-77q29-31 50-67.5t50-68.5q22-26 51-43t63-17q34 0 63 16t51 42q28 32 49.5 69t50.5 69q35 38 70.5 77t35.5 91q0 47-30.5 81.5T694-75q-54 0-107-9t-107-9q-54 0-107 9t-107 9Z"/></svg>
        <h1>Pawfect Paws Grooming</h1>
        <p>We make tails wag with our expert grooming services! Book an appointment today.</p>
        <NuxtLink to="/services" class="cta-button">View Services</NuxtLink>
        <NuxtLink to="/contact" class="cta-button">Contact</NuxtLink>
      </div>
    </section>
  </template>

<style>
.hero{
  background: url('/images/hero-banner.jpg') center/cover no-repeat;
    height: 60vh;
    display:flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #DB5461;
    padding: 2rem;
}

.hero-icon {
  width: 80px;
  height: 80px;
}

.hero-content {
  max-width: 600px;
  background-color: rgb(255, 217, 206, 0.9);
  padding: 2.5rem;
  border-radius: 10px;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
}

p {
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
}

.cta-button{
  background: #DB5461;
  color:  #FFD9CE;
  padding: 0.8rem 1.5rem;
  margin-right: 1.5rem;
  font-size: 1.2rem;
  border-radius: 5px;
  text-decoration: none;
  transition: 0.3s ease-in-out;
}

.cta-button:hover{
  background: #483C46;
}

@media (max-width: 768px)  {

  .hero-content {
  max-width: 300px;
  background-color: rgb(255, 217, 206, 0.9);
  margin-top: 1rem;
  padding: 2.5rem;
  border-radius: 10px;
}

.hero{
  background: url('/images/hero-banner.jpg') center/cover no-repeat;
    height: 100vh;
    display:flex;
    padding: 2rem;
}

.cta-button{

  padding: 0.8rem 1rem;
  margin-right: 1rem;
  font-size: 1rem;
}




}

</style>