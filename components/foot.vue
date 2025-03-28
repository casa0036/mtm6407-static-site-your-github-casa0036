<template>
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-brand">
          <svg class="footer-logo" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#DB5461"><path d="M194-80v-395h80v315h280v-193l105-105q29-29 45-65t16-77q0-40-16.5-76T659-741l-25-26-127 127H347l-43 43-57-56 67-67h160l160-160 82 82q40 40 62 90.5T800-600q0 57-22 107.5T716-402l-82 82v240H194Zm197-187L183-475q-11-11-17-26t-6-31q0-16 6-30.5t17-25.5l84-85 124 123q28 28 43.5 64.5T450-409q0 40-15 76.5T391-267Z"/></svg>
          <span class="brand-name">Pawfect Grooming</span>
        </div>
  
        <ul class="footer-links">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/services">Services</NuxtLink></li>
          <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        </ul>
  

        <div class="social">
          <a href="#" target="_blank" aria-label="Facebook">
            <p>Facebook</p>
          </a>
          <a href="#" target="_blank" aria-label="Instagram">
            <p>Instagram</p>
          </a>
          <a href="#" target="_blank" aria-label="Twitter">
            <p>Twitter</p>
          </a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© Pawfect Grooming. All Rights Reserved.</p>
      </div>
    </footer>
</template>

<style>

.footer {
    background:  #FFD9CE;
    color: #DB5461;
    padding: 1rem 1rem;
    text-align: centre;
}

.footer-container {
    display: flex;
    flex-direction: row;
    padding-left: 5rem;
    padding-right: 5rem;
    justify-content: space-between;
    align-items: center; 
    gap: 1.5rem;
}

.footer-brand {
    display: flex;

}
.footer-logo {
  width: 40px;
  height: 40px;
}

.brand-name {
  font-size: 1.5rem;
  font-weight: bold;
}

.footer-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  padding: 0;
}

.social a{
  color: #DB5461;
  text-decoration: none;
}

.footer-links li {
  display: inline;
}

.footer-links a {
  color: #483C46;
  text-decoration: none;
  font-size: 1.1rem;
  transition: 0.3s;
}

.footer-links a:hover {
  text-decoration: underline;
}

.footer-bottom {
  margin-top: 1rem;
  font-size: 0.9rem;
}

@media (max-width: 768px)  {

  .footer-links li {
  display: block;
  margin-bottom: 0.5rem;

}

.social p{
  padding-bottom: 0.5rem;
  padding-left: 0.5rem;
  padding-left: 0.1rem;
  padding-right: 0.1rem;
  margin: 0;
  color: #DB5461;
}

.footer-links li a {
  margin: 0;
}

.footer-links {
  display: inline-block;

}

.footer-container {
    display: block;
    padding-left: 0.1rem;
    padding-right: 0.1rem;
    align-items: center; 
    gap: 1.5rem;
}
.footer-brand {
  align-items: center;
}



}


</style>

