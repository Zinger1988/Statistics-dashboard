export async function postMessage(errors = []) {
  const response = await fetch('https://f1.programmers.com.ua/msg', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json`',
    },
    body: JSON.stringify(errors),
  });

  if (!response.ok) {
    throw new Error('Unable to send error message');
  } else {
    return await response.json();
  }
}
