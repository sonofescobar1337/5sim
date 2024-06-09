import fetch from 'node-fetch';


export default async function PricesByCountry(country) {

    try {
        const url = await fetch(`https://5sim.net/v1/guest/prices?country=${country}`, {
            headers: {
                'Accept': 'application/json'
            }
        });

        const response = await url.json();
        return { response }
    } catch (error) {
        return { error }
    }
}