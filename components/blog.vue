<template>
    <section class="blog-page">
      <div class="container">
        
        <div class="blog-list">
          <a class="blog-card" href="#" target="_blank">
            <img src="/images/full-groom.jpg" alt="">
            <div class="blog-content">
                <h2 class="blog-title">5 Tips for Keeping Your Dog's Coat Healthy</h2>
                <p class="blog-text">Learn how to keep your dog's coat shiny and free of tangles with these expert tips.</p>
                <p class="small-text">#healthy-coat-tips</p>
            </div>
          </a>
          <a class="blog-card" href="#" target="_blank">
            <img src="/images/dog-desheddingjpg.jpg" alt="">
            <div class="blog-content">
                <h2 class="blog-title">The Importance of Regular Grooming</h2>
                <p class="blog-text">Grooming is more than just making your pup look good—it's essential for their health and happiness.</p>
                <p class="small-text">#importance-of-grooming</p>
            </div>
          </a>
          <a class="blog-card" href="#" target="_blank">
            <img src="/images/basic-bath.jpg" alt="">
            <div class="blog-content">
                <h2 class="blog-title">How to Make Bath Time Stress-Free for Your Dog</h2>
                <p class="blog-text">Bathing your dog doesn't have to be a struggle! Try these simple techniques to make it easier.</p>
                <p class="small-text">#stress-free-bath-time</p>
            </div>
          </a>
          <a class="blog-card" href="#" target="_blank">
            <img src="/images/full-groom.jpg" alt="">
            <div class="blog-content">
                <h2 class="blog-title">5 Tips for Keeping Your Dog's Coat Healthy</h2>
                <p class="blog-text">Learn how to keep your dog's coat shiny and free of tangles with these expert tips.</p>
                <p class="small-text">#healthy-coat-tips</p>
            </div>
          </a>
          <a class="blog-card" href="#" target="_blank">
            <img src="/images/dog-desheddingjpg.jpg" alt="">
            <div class="blog-content">
                <h2 class="blog-title">The Importance of Regular Grooming</h2>
                <p class="blog-text">Grooming is more than just making your pup look good—it's essential for their health and happiness.</p>
                <p class="small-text">#importance-of-grooming</p>
            </div>
          </a>
          <a class="blog-card" href="#" target="_blank">
            <img src="/images/basic-bath.jpg" alt="">
            <div class="blog-content">
                <h2 class="blog-title">How to Make Bath Time Stress-Free for Your Dog</h2>
                <p class="blog-text">Bathing your dog doesn't have to be a struggle! Try these simple techniques to make it easier.</p>
                <p class="small-text">#stress-free-bath-time</p>
            </div>
          </a>
        </div>
      </div>
    </section>
</template>

<style>

.container {
    max-width: 900px;
    margin: 0 auto;
}

.blog-list{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap:1.5rem;
}

.blog-card{
    display: block;
    background:white ;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
    text-decoration: none;
    color: inherit;
}

.blog-card:hover {
    transform: scale(1.03);
}

.blog-image {
    width: 100%;
    height: 180px;
    object-fit: cover;
}

.blog-content{
    padding: 1rem;
}

.blog-title {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
}

.blog-text {
    font-size: 1rem;
    color: black;
}



</style>
  
 