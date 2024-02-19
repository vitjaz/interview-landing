const postForm = async (formData) => {

  const response = await fetch('http://217.107.34.223:81/docs/orders', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data = await response.json();
  return data
  
}