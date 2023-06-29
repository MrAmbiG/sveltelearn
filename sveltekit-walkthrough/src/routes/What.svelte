
<div class="container grid">
    <div class="what">
        <h3>What We Do?</h3>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sed vitae in, maxime aliquid itaque fuga, quisquam expedita ducimus optio distinctio ipsum minus! Atque soluta animi dolor nobis, dolores voluptas.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ullam perferendis nesciunt explicabo, recusandae, quod inventore veritatis placeat saepe ut quo blanditiis sapiente qui consequatur sint excepturi eum impedit doloremque.
        </p>
    </div>

    <div class="contact">
        <h3>Contact Us</h3>
        <p><strong>Start Bootstrap</strong></p>
        <p>3481 Melrose Place</p>
        <p>Beverly Hills, CA 90210</p>
        <p>P: (123) 456-7890</p>
        <p>E:<a href="mailto:name@example.com">name@example.com</a></p>
    </div>
</div>



<style>
    .grid {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        gap: 2em;
    }

    .what {
        grid-column: span 8;
    }

    .contact {
        grid-column: span 4;
    }
    h3 {
        padding-bottom: 0.5em;
        margin-bottom: 0.5em;
        font-size: 2em;
        font-weight: 500;
        border-bottom: 1px solid #ddd;
    }
    a {
        text-decoration: none;
        color: var(--primary-color);
    }
    a:hover {
        text-decoration: underline;
    }
</style>