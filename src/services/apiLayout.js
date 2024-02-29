export async function fetchMenu() {
  const response = await fetch('https://f1.programmers.com.ua/menu');

  if (!response.ok) {
    throw new Error('Unable to fetch menu');
  }

  const data = await response.json();

  return data;
}
