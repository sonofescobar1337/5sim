import fetch from 'node-fetch';


export default async function UserPayments(api, limit = 15) {

    try {
        const url = await fetch(`https://5sim.net/v1/user/payments?limit=${limit}&offset=0&order=id&reverse=true`, {
            headers: {
              'Authorization': `Bearer ${api}`,
              'Accept': 'application/json'
            }
          });

        const response = await url.json();

        return response
    } catch (error) {
        return { error }
    }
}