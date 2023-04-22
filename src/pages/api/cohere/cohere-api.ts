import cohere from 'cohere-ai';

export async function getCohereResponse(prompt: string): Promise<string> {
    cohere.init(process.env.NEXT_PUBLIC_COHERE_API_KEY!); // Replace with your API key
    const response = await cohere.generate({
        model: 'command-xlarge-nightly',
        prompt,
        max_tokens: 300,
        temperature: 0.9,
        k: 0,
        stop_sequences: [],
        return_likelihoods: 'NONE',
    });
    return response.body.generations[0].text;
}
