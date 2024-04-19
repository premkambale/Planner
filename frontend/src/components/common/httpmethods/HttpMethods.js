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

// GET Method 
export const GET = async (url, token) => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": "Bearer " + token
    },
  });

  return response.json();
}

// POST method
export const POST = async (url, token, body) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      "Authorization": "Bearer " + token
    },
    body: JSON.stringify(body)
  });

  return res.json();
}


// PUT method
export const PUT = async (url, token, body) => {
  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      "Authorization": "Bearer " + token
    },
    body: JSON.stringify(body)
  });

  return res.json();
}


// Delete method
export const DELETE = async (url, token) => {
  const res = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": "Bearer " + token
    },
  });
  return res.json();
}


