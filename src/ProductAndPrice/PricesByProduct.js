import fetch from 'node-fetch';



export default async function PricesByProduct(product) {

    try {
        const url = await fetch(`https://5sim.net/v1/guest/prices?product=${product}`, {
            headers: {
              'Accept': 'application/json'
            }
          });

        const response = await url.json();

        return response
    } catch (error) {
        return { error }
    }
}