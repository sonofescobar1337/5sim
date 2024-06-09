import fetch from 'node-fetch';


export default async function BuyActivationNumber(api, product, operator, country) {

    try {
        const url = await fetch(`https://5sim.net/v1/user/buy/activation/${country}/${operator}/${product}`, {
            headers: {
              'Authorization': `Bearer ${api}`,
              'Accept': 'application/json'
            }
          });

          const response = await url.json();

          return { response }
    } catch (error) {
        return { error }
    }
}