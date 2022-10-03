const BASE_URL = 'https://mate.academy/students-api';

function wait(delay) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}


async function request(
  url,
  method,
  data = null, 
) {
  const options = { method };

  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      'Content-Type': 'application/json; charset=UTF-8',
    };
  }

  await wait(300);
  const response = await fetch(BASE_URL + url, options);
  if (!response.ok) {
    throw new Error();
  }
  return await response.json();
}

export const client = {
  post: (url, data) => request(url, 'POST', data),
};
