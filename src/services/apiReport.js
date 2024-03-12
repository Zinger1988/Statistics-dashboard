import { refreshToken } from './apiAuth';
import { handleError } from '../utils/helpers';

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

  if (response.status === 401) {
    return await refreshToken(signal, () => fetchReport({ signal, ...body }));
  }

  if (!response.ok) {
    handleError(response.status);
  } else {
    return await response.json();
  }
}
