import { refreshToken } from './apiAuth';

export async function fetchReport({ signal, ...body }) {
  const accessToken = localStorage.getItem('Access-Token');
  const response = await fetch('https://f1.programmers.com.ua/data', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...body,
      access_token: accessToken,
    }),
    signal: signal,
  });

  if (!response.ok) {
    throw new Error('An error occurred while fetching data');
  }

  const data = await response.json();

  if (data.status_code === 401) {
    console.log('refresh report');
    return await refreshToken(signal, () => fetchReport({ signal, ...body }));
  } else {
    return data;
  }
}
