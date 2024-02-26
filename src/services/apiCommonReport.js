export async function fetchCommonReport({ producers, classifiers, signal }) {
  const response = await fetch('/data', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ producers, classifiers }),
    signal: signal,
  });

  if (!response.ok) {
    throw new Error('An error occurred while fetching Common report data');
  }

  const data = await response.json();

  return data;
}
