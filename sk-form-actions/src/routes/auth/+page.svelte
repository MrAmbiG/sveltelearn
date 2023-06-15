
<script>
	import { enhance } from '$app/forms';
    import { page } from '$app/stores'
    export let form

    const redirectTo = $page.url.searchParams.get('redirectTo') || '/'
</script>

<form method="post" action="?/login&redirectTo={redirectTo}" use:enhance>
    <p>{form?.message || ''}</p>
    <input type="text" name="username" placeholder="Username">
    <input type="password" name="password" placeholder="Password">
    <button type="submit">Login</button>
    <button formaction="?/register$redirectTo={redirectTo}">Register</button>
</form>