
import type { setBlockTracking } from 'vue';

import type { Style } from '#components';

import type { NuxtLink } from '#components';
<template>

<nav class="navbar">
    <div class="logo">
        <svg class="logo-img" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#DB5461"><path d="M194-80v-395h80v315h280v-193l105-105q29-29 45-65t16-77q0-40-16.5-76T659-741l-25-26-127 127H347l-43 43-57-56 67-67h160l160-160 82 82q40 40 62 90.5T800-600q0 57-22 107.5T716-402l-82 82v240H194Zm197-187L183-475q-11-11-17-26t-6-31q0-16 6-30.5t17-25.5l84-85 124 123q28 28 43.5 64.5T450-409q0 40-15 76.5T391-267Z"/></svg>
        <span class="brand-name">Pawfect Paws Grooming</span>
      </div>
    <ul>
        <li>
            <NuxtLink to="/index">Home</NuxtLink>
        </li>
        <li>
            <NuxtLink to="/about">About</NuxtLink>
        </li>
        <li>
            <NuxtLink to="/services">Services</NuxtLink>
        </li>
        <li>
            <NuxtLink to="/contact">Contact</NuxtLink>
        </li>
        <li>
            <NuxtLink to="/blog">Blog</NuxtLink>
        </li>
    </ul>

</nav>

</template>

<style>

.navbar {
display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #FFD9CE;
  color:#DB5461;
}

.logo {
    display: flex;
    align-items: center;
}

.logo-img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
}

.navbar ul {
    display: flex;
    align-items: center;
    gap: 20px;
    list-style: none;
    margin: 0;
    padding:0;
}

li a {
    color: #DB5461;
    text-decoration: none;
}

li a:hover{
    color: #483C46;
    text-decoration: underline;
}

@media (max-width: 768px) { 

    .logo{
        padding-left: 5rem;
    }

    .navbar {
        display: block;
        text-align: center;
    }

    .navbar ul {

        display: block;

    } 

    .navbar li {
        padding: 5px;
    }

    .navbar li a {
        padding: 10px;
        margin-left: 40px;
        font-size: 1.5rem;
    }

   

}

</style>