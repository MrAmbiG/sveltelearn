
import Product from './product.svelte'

export const load = async (loadEvent) => {
    console.log("Load function called in page.js")
    const notification = "End of season sale!";
    const { fetch, data } = loadEvent;
    const response = await fetch("http://localhost:4000/products");
    return {
        ...data,
        Component: Product,
        notification
    }
}

export const prerender = true;