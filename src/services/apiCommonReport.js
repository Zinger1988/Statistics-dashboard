export async function getCommonReport() {
  const data = await fetch('/data').then((res) => res.json());

  return data;
}

export async function editCommonReport(filterData) {
  const data = await fetch('/data', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(filterData),
  }).then((res) => res.json());

  return data;
}
