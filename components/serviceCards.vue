
<template>
    <section class = "services">
        <div class = "card-contanier">
         <div class = "card">
                    <div class = "card-icon">
                        <img src = "/images/full-groom.jpg" alt = "" />
                    </div>
                    <h3 class = "card-title">Full Grooming Package</h3>
                 <p class = "card-text">Bath, haircut, nail trimming, ear cleaning, and brush-out.</p>
                 <ul class="price">
                    <li>Small Dogs (Under 20 lbs) – $60-$80</li>
                     <li> Medium Dogs (20-50 lbs) – $80-$100</li>
                    <li> Large Dogs (50-80 lbs) – $100-$130</li>
                    <li>Extra Large Dogs (80+ lbs) – $130-$160</li>
                 </ul>
                 <p class="small-text">(Includes bath, haircut, nail trim, ear cleaning, and brush-out.)</p>
            </div>   
       
       
             <div class = "card">
                    <div class = "card-icon">
                        <img src = "/images/basic-bath.jpg" alt = "" />
                    </div>
                    <h3 class = "card-title">Basic Bath & Brush</h3>
                 <p class = "card-text">Includes shampoo, drying, brushing, and a spritz of cologne.</p>
                 <ul class="price">
                    <li>Small Dogs (Under 20 lbs) – $40-$50</li>
                     <li> Medium Dogs (20-50 lbs) – $50-$70</li>
                    <li> Large Dogs (50-80 lbs) – $70-$90</li>
                    <li>Extra Large Dogs (80+ lbs) – $90-$110</li>
                 </ul>
                 <p class="small-text">(Includes shampoo, drying, brushing, and a spritz of cologne.)</p>
            </div>   
        
        
         <div class = "card">
                    <div class = "card-icon">
                        <img src = "/images/nail-clipping.jpg" alt = "" />
                    </div>
                    <h3 class = "card-title">Pawdicure</h3>
                 <p class = "card-text">Nail trimming and filing for a smooth finish.</p>
                 <ul class="price">
                    <li>All sizes – $15-$25</li>
                 </ul>
            </div>   
        
        
         <div class = "card">
                    <div class = "card-icon">
                        <img src = "/images/dog-desheddingjpg.jpg" alt = "" />
                    </div>
                    <h3 class = "card-title">De-shedding Treatment</h3>
                 <p class = "card-text">Helps reduce shedding and keeps your pup’s coat healthy.</p>
                 <ul class="price">
                    <li>Small Dogs (Under 20 lbs) – $50</li>
                     <li> Medium Dogs (20-50 lbs) – $65</li>
                    <li> Large Dogs (50-80 lbs) – $80</li>
                    <li>Extra Large Dogs (80+ lbs) – $100</li>
                 </ul>
                 <p class="small-text">(Includes deep coat brushing, de-shedding shampoo, and conditioner.)</p>
            </div>   
        
         <div class = "card">
                    <div class = "card-icon">
                        <img src = "/images/dog-teeth.jpg" alt = "" />
                    </div>
                    <h3 class = "card-title">Teeth Cleaning</h3>
                 <p class = "card-text">Freshens breath and promotes dental health.</p>
                 <ul class="price">
                    <li>All sizes – $15-$30</li>
                 </ul>
            </div>   
             <div class = "card">
                    <div class = "card-icon">
                        <img src = "/images/dog_paw.svg" alt = "" />
                    </div>
                    <h3 class = "card-title">Add-Ons & Extras:</h3>
                 <ul class="price">
                    <li>Flea & Tick Shampoo – $10</li>
                    <li>Paw Balm Treatment – $5</li>
                    <li>Anal Gland Expression – $15</li>
                    <li>Ear Plucking – $10</li>
                    <li>Specialty Breed Cuts – +$20</li>
                 </ul>
            </div>   
        </div>
        
    </section>
</template>

<style>

.card-contanier{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    max-width: 1000px;
    margin: 0 auto;
    text-align: center;
}

.card {
  background: #FFD9CE;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.card:hover {
  transform: scale(1.05);
}

.card-icon img {
  width: auto;
  height: 80px;
  margin-bottom: 1rem;
  border-radius: 5px;
}

.card-title {
  font-size: 1.4rem;
  font-weight: bold;
  color: #DB5461;
}

.card-text {
  font-size: 1rem;
  color: #483C46;
}

.price {


}

.price li{
list-style: circle;
margin-left: 0;
margin-bottom: 10px;
color: #483C46;


}

.small-text{ 
 font-size: 14px;
 color: #DB5461;
}

</style>
