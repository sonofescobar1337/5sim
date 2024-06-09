import fetch from 'node-fetch';


export default async function MaxPrice(api) {

    try {
        const url = await fetch('https://5sim.net/v1/user/max-prices', {
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