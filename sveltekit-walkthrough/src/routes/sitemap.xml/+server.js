
import * as markup from "markup";

export const GET = async () => {
    const text = "<xml><h1>Webjeda</h1></xml>";

    return new Response(markup, {
        headers: {
            "Content-Type": "application/xml",
        },
    });
};