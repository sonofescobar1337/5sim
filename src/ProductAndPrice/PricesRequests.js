import fetch from 'node-fetch';


export default async function PricesRequests() {

    try {
        const url = await fetch('https://5sim.net/v1/guest/prices', {
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