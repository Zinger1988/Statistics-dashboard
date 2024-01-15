export async function getCommonReport() {
  const data = await fetch('/CommonReportMock.json').then((res) =>
    res.json(),
  );

  return data;
}
