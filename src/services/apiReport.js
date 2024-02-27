export async function fetchReport({ signal, ...body }) {
  const response = await fetch('https://f1.programmers.com.ua/data', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    signal: signal,
  });

  if (!response.ok) {
    throw new Error('An error occurred while fetching Common report data');
  }

  const data = await response.json();

  return data;
}
