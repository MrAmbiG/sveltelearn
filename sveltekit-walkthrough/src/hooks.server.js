
/**@type {import('@sveltejs/kit').Handle} */

export const handle = async({event, resolve}) => {
    const theme = event.cookies.get("siteTheme");
    console.log(event.cookies)
    const response = await resolve(event, {
        transformPageChunk: ({html}) => html.replace('data-theme=""', `data-theme="${theme}"`),
    });
    return response;
}