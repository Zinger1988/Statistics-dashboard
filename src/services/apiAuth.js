import { handleError } from '../utils/helpers';

export async function login({ signal, ...body }) {
  const response = await fetch('https://f1.programmers.com.ua/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json`',
    },
    body: JSON.stringify(body),
    signal,
  });

  if (!response.ok) {
    handleError(response.status);
  } else {
    return await response.json();
  }
}

export async function getCurrentUser({ signal }) {
  const token = localStorage.getItem('Access-Token');
  const response = await fetch('https://f1.programmers.com.ua/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json`',
    },
    body: JSON.stringify({ access_token: token }),
    signal,
  });

  if (response.status === 401) {
    return await refreshToken(signal, () => getCurrentUser({ signal }));
  }

  if (!response.ok) {
    handleError(response.status);
  } else {
    return await response.json();
  }
}

export async function refreshToken(signal, callbackFn) {
  const token = localStorage.getItem('Refresh-Token');
  const response = await fetch('https://f1.programmers.com.ua/refresh', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      refresh_token: token,
    }),
    signal: signal,
  });

  if (!response.ok) {
    handleError(response.status);
  }

  const data = await response.json();

  localStorage.setItem('Access-Token', data.access_token);

  return callbackFn();
}

export async function signOut({ signal }) {
  const token = localStorage.getItem('Access-Token');
  const response = await fetch('https://f1.programmers.com.ua/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json`',
    },
    body: JSON.stringify({ access_token: token }),
    signal,
  });

  if (response.status === 401) {
    return await refreshToken(signal, () => signOut({ signal }));
  }

  if (!response.ok) {
    handleError(response.status);
  } else {
    return await response.json();
  }
}
