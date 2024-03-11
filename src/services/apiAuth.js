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
    throw new Error('An error occured during login process');
  }

  const data = await response.json();

  return data;
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

  if (!response.ok) {
    throw new Error('An error occured fetching user');
  }

  const data = await response.json();

  if (data.status_code === 401) {
    return await refreshToken(signal, () => getCurrentUser({ signal }));
  } else {
    return data;
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
    throw new Error('An error occurred while refreshing token');
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

  if (!response.ok) {
    throw new Error('An error occured during signout process');
  }

  const data = await response.json();

  if (data.status_code === 401) {
    return await refreshToken(signal, () => signOut({ signal }));
  } else {
    return data;
  }
}
