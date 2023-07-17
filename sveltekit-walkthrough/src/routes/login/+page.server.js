import { redirect } from '@sveltejs/kit';


/**@type {import('./$types').Actions} */
export const actions = {
    default: async ({cookies}) => {
        const formData = await request.formData()
        const email = formData.get("email");
        const password = formData.get("password");
        cookies.set("access", "true");
        if (email==="hello@webjada.com" && password==="password"){
            cookies.set("access", "true", {path: "/", sameSite: "strict"})
            throw redirect(302, "/dashboard")
        }

        return {
            email,
            message: "Email or password is not valid",
        }
    },
};