export async function fetchMenu() {
  const response = await fetch('/menu');

  if (!response.ok) {
    throw new Error('Unable to fetch menu');
  }

  const data = await response.json();

  return data;
}
