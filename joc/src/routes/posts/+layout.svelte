
<div class="posts">
    <aside>
        <h4> posts </h4>
        <nav>
            <ul>
                <li>
                    <a href="posts/one">One</a>
                </li>
                <li>
                    <a href="posts/two">Two</a>
                </li>
            </ul>
        </nav>
    </aside>
</div>

<main>
    <slot/>
</main>

<style>
    .posts {
        display: grid;
        gap: 2rem;
        grid-template-columns: 200px 60ch;
        margin-top: 2rem;
    }
</style>