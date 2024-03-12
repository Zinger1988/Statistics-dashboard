import { handleError } from '../utils/helpers';

export async function fetchMenu({ signal }) {
  const token = localStorage.getItem('Access-Token');
  const response = await fetch('https://f1.programmers.com.ua/menu', {
    method: 'POST',
    body: JSON.stringify({
      access_token: token,
    }),
    signal,
  });

  if (response.status === 401) {
    await fetchMenu(signal, () => fetchMenu());
  }

  if (!response.ok) {
    handleError(response.status);
  } else {
    return await response.json();
  }
}
