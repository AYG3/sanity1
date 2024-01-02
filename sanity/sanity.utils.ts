import { createClient, groq } from "next-sanity";

export async function getProjects(){
    const client =  createClient({

    projectId: 'bd3z4ra8',
    dataset: 'production',
    apiVersion: '2024-01-02',
    
});

return client.fetch(
    groq`*[_type = 'project']{
        _id,
        createdAt,
        name,
        'slug': slug.current,
        'image': image.asset->url,
        url,
        content,
    }`
)
}