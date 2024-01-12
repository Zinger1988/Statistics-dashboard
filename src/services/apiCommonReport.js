export async function getCommonReport() {
  const data = await fetch('/incomeDynamicsMock.json').then((res) =>
    res.json(),
  );

  return data;
}
