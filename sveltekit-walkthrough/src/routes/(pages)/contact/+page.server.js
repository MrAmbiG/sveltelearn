
import { fail } from '@sveltejs/kit';
import { object, string, number, date, InferType } from 'yup';

export const actions = {
    default: async({request}) => {
        const formData=await request.formData();
        const email = formData.get("email")
        const name = formData.get('name')
        const message = formData.get("message")

        const contactFormSchema = object({
            name: string().required(),
            email: string().required().email(),
            message: string().required(),
        });

        try {
            const result = await contactFormSchema.validate(
                { name, email, message },
                { abortEarly: false}
                );

            const prefilledLink = `https://docs.google.com/forms/d/e/1FAIpQLSdOwRJ-mVnVFdsqhKQrN9WSqOEKNmecKybX70jN58zFAPHTpg/viewform?usp=pp_url&entry.1106324744=${name}&entry.1784069864=${email}&entry.1974650733=${message}`;

            const res = await fetch(prefilledLink);
            if (res.status != 200) {
                
            }

            return {
                success: true,
                status: "Form is submitted",
            };
        } catch (error) {
            console.log({ error });
            const errors =  error.inner.reduce((acc, err) => {
                return { ... acc, [err.path]: err.message };
            }, {});
            return {
                errors,
                name,
                email,
                message,
            };
        }
    },
};