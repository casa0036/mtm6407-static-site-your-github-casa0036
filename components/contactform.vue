<template>
    <section class="contact-page">
        <div class="container">

            <div class="contact-info">
                <div class="info-card">
                    <h2>Our Location</h2>
                    <p>123 Paw street, Ottawa, ON</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d720520.7614270203!2d-76.61064474608665!3d45.13577355874298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0718cc4a6ad7%3A0xc6cc467725843e2b!2sAlgonquin%20College%20-%20Ottawa%20Campus!5e0!3m2!1sen!2sca!4v1743098278253!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div class="info-card">
                    <h2>Get in Touch</h2>
                    <p><strong>Phone:</strong> (613) 555-1234</p>
                    <p><strong>Email:</strong> info@doggrooming.com</p>
                    <p><strong>Hours:</strong> Mon-Sat: 9AM - 6PM</p>
                </div>
            </div>
            <div class="contact-form">
                <h2>Send Us a Message</h2>
                <form method="post">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" name="name" id="name" required/>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="text" name="email" id="email"  required/>
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" required></textarea>
                    </div>
                    <button type="submit" class="btn">Send Message</button>
                </form>
            </div>
        </div>
    </section>
</template>

<style>
    .contact-page {
        padding: 4rem 1rem;
        text-align: center;
    }

    .container {
        max-width: 800px;
        margin: 0 auto;
    }

    iframe{
        width: 100%;
    }

    .contact-info {
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        gap: 2rem;
    }

    .info-card {
        background: #FFD9CE;
        padding: 1.5rem;
        border-radius: 12px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        width: 100%;
        max-width: 350px;
        text-align: left;
    }

    .contact-form {
        margin-top: 2rem;
        padding: 2rem;
        background: #FFD9CE;
        border-radius: 12px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }

    .form-group {
        margin-bottom: 1rem;
        text-align: left;
    }

    .form-group label {
        display: block;
        font-weight: bold ;
        margin-bottom: 0.5rem;
        color: #DB5461;
    }

    .form-group input,
    .form-group textarea {
        width: 98%;
        padding: 0.8rem;
        border: 1px solid #ddd;
        border-radius: 8px;
    }

    .btn {
        background: #DB5461;
        color: #FFD9CE;
        border: none;
        font-size: 1rem;
        cursor: pointer;
        border-radius: 8px;
        transition: background 0.3s;
    }

    .btn:hover {
        background: #483C46;
    }

    @media (max-width: 768px)  {

        .contact-info {
            flex-wrap: wrap;
        }
    }

</style>

