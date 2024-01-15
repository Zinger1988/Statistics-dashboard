export async function getIncomeDynamics() {
  const data = await fetch('/incomeDynamicsMock.json').then((res) =>
    res.json(),
  );

  return data;
}
