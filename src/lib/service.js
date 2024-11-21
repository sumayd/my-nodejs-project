import axios from "axios";

async function getData(userId) {
    try {
        
        const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const user = userResponse.data;

        
        const postsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const posts = postsResponse.data;

        
        return {
            ...user,
            posts: posts,
        };
    } catch (error) {
        console.error("Veri çekerken bir hata oluştu:", error);
        throw error;
    }
}

export default getData;