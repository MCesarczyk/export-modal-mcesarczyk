type formData = {
  report: {
    name: string,
    email: string,
    format: string
  },
  schedule: {
    type: string,
    date: string,
    hour: string
  }
}

export const postData = async (url: string, data: formData) => {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response.json();
};