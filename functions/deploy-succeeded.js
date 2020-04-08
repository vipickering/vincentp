import fetch from 'node-fetch';
const { URL } = process.env;

const twitterSyndication = `${URL}/.netlify/functions/syndicate-to-twitter`; // Link to Twitter function

export async function handler(event, context) {
    const taskOne = await fetch(twitterSyndication); // add more tasks in here for other options

    return {
        statusCode: 200,
        body: JSON.stringify({
            data: 'Completed'
        })
    }
}
