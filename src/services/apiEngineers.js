export async function getAllEngineers() {
  const data = await fetch('/engineersListMock.json').then((res) => res.json());

  return data;
}

export async function getEngineer(id) {
  console.log(id);
  const data = await fetch('/singleEngineerMock.json').then((res) =>
    res.json(),
  );

  return data;
}
