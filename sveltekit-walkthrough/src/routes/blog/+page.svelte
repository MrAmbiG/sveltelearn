
<script>
	import Seo from "$lib/Seo.svelte";

    export let data;
    const {posts} = data
    $:  console.log(data)
</script>
<div class='container'>
    <h2>Blog Posts</h2>
    <ul>
        {#each posts as post}
            <li>
                <a href="/blog/{post.id}">{post.title}</a>
            </li>
        {/each}
    </ul>
</div>

<Seo title="Blog | Business Frontpage" description="This is blog" type="Webpage" />

<style>
    li {
        margin-bottom: 0.5em;
    }

    a {
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }
</style>