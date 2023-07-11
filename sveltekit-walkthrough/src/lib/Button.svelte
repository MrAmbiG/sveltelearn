
<script>
    export let size;
    console.log(size)
</script>

<button class:small={size === "small"} class:medium={size==="medium"} {...$$restProps}>
    <slot/>
</button>

<style>
    button {
        background-color: var(--primary-color);
        border: none;

        border-radius: 0.25em;
        color: white;
        font-size: 1em;
        cursor: pointer;
    }

    .medium {
         padding: 0.5em 1.5em;
    }

    .small {
         padding: 0.25em 0.5em;
    }
</style>