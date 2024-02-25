const postForm = async (formData) => {

  const response = await fetch('https://iv.fizzbuzzcorp.ru/orders', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data = await response.json();
  return data
  
}