import fetch from 'node-fetch';


export default async function CreateMaxPrices(api, product, price) {

    try {
        const url = await fetch('https://5sim.net/v1/user/max-prices', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${api}`,
              'Accept': 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `{"product_name": "${product}", "price": ${price}}`
          });


          const response = await url.text();

          return response 
    } catch (error) {
        return { error }
    }
}