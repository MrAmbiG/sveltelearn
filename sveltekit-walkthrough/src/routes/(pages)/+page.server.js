
export const load = async({fetch}) => {
    const getPosts = async () => {
        const rest=await fetch("/api/posts.json");
        const data=await rest.json();
        return data;
    };

    return {
        posts: getPosts(),
    };
};