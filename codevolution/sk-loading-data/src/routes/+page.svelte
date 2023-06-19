

<script>
    import {goto, preloadCode} from '$app/navigation'
    export let data;
</script>

<h1 class="tall">Welcome to SvelteKit @{data.currentTime}</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<a href='/products'>Products</a>

<button
    on:focus={async ()=>{
        await preloadCode('/products');
    }}
    on:mouseover={async () => {
        await preloadCode('/products');
    }}
    on:click={()=> {
    goto('/products');
}}>Go to products</button>



<style>
    /* .tall {
        height: 100px
    } */
</style>
