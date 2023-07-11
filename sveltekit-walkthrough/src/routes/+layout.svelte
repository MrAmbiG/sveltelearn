
<script>
    import "../../static/style.css";
    import Hero from "../lib/Hero.svelte";
	import Footer from "../lib/Footer.svelte";
    import Navbar from "../lib/Navbar.svelte";
</script>

<div class="app">
    <Navbar />
    <slot />
    <Footer />
</div>

<style>
    .app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
</style>
