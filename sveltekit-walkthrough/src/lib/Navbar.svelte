
<script>
	import {page} from "$app/stores"
    const navs = [
        {
            title: "Home",
            href: "/",
        },
        {
            title: "About",
            href: "/about",
        },
        {
            title: "Services",
            href: "/services",
        },
        {
            title: "Contact",
            href: "/contact",
        },
        {
            title: "Blog",
            href: "/blog",
        },

    ];

    const setTheme = (theme) => {
        document.documentElement.dataset.theme = theme;
        document.cookie = `siteTheme=${theme};max-age=31536000;path="/"`;
    };

    // let routeId;
    $: routeId = $page.route.id
    $: url = $page.url.href;

</script>

<nav>
    <div class="container">
        <h1>Start Bootstrap</h1>
        <ul>
            {#each navs as {title, href}}
                <li>
                    <a
                        {href}
                        class:active={href === "/" ? routeId === "/" : url.includes(href)}
                        {title}>{title}
                    </a>
                </li>
            {/each}
            <li>
                <a href={"#"} on:click={() => setTheme("dark")}>Dark</a>
            </li>
            <li>
                <a href={"#"} on:click={() => setTheme("light")}>Light</a>
            </li>
        </ul>
    </div>
</nav>

<style>
    nav {
        padding: 0.5em;
        background-color: #343a40;
        color: white;
    }

    .container {
        display: flex;
        align-items: center;
    }
    ul {
        font-size: 1em;
        display: flex;
        margin: 0;
        margin-left: auto;
        list-style: none;
    }

    li {
        margin-right: 20px;
    }

    h1 {
        margin: 0;
        font-size: 1.3em;
    }

    a {
        text-decoration: none;
        color: #aaa;
    }

    .active {
        color: white;
    }
</style>

<div class="container">
    <slot/>
</div>