export async function fetchMenu({ signal }) {
  const token = localStorage.getItem('Access-Token');
  const response = await fetch('https://f1.programmers.com.ua/menu', {
    method: 'POST',
    body: JSON.stringify({
      access_token: token,
    }),
    signal,
  });

  if (!response.ok) {
    throw new Error('Unable to fetch menu');
  }

  const data = await response.json();

  if (data.status_code === 401) {
    await fetchMenu(signal, () => fetchMenu());
  } else {
    return data;
  }
}
