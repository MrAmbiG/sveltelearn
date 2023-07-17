
<script>
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";

    let user = {};
    onMount(async()=> {
        const res = await fetch("/api/user")
        setTimeout(()=>{
        user = {
            id: "vvvvv",
        };}, 1000);
        if (!user.id) {
            goto("/login");
        }
    });
</script>

<div class = "container">
    <h1>Dashboard</h1>
</div>