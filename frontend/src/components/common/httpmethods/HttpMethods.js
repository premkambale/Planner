// Login post API 
export const LOGIN_POST = async (url, body) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(body)
    });
  
    return response.json();
}
