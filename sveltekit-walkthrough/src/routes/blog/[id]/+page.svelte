
<script>
	import Seo from '$lib/Seo.svelte';

    export let data;
    const {post} = data;
</script>

<div class="container">
    <h2>{post.title}</h2>
    <p>{post.body}</p>
</div>

<Seo title="{post.title} | Business frontpage" description="{post.body}" type="Blogposting" />