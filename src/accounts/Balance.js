import fetch from 'node-fetch';

async function balance(apikey) {
  try {
    const url = await fetch('https://5sim.net/v1/user/profile', {
      headers: {
        'Authorization': `Bearer ${apikey}`,
        'Accept': 'application/json'
      }
    });
    const response = await url.json();
    return response;
  } catch (error) {
    return error;
  }
}

export default balance;
