import fetch from 'node-fetch';


export default async function DeleteMaxPrices(api, product) {

    try {
        const url = await fetch('https://5sim.net/v1/user/max-prices', {
            method: 'DELETE',
            headers: {
              'Authorization': `Bearer ${api}`,
              'Accept': 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `{"product_name": "${product}"}`
          });

        const response = await url.text();

        return response
    } catch (error) {
        return { error }
    }
}