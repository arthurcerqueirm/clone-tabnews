
test("Teste de migrations", async ()=> {
  const response = await fetch("http:/localhost:3000/api/v1/migrations");
  expect(response.status).toEqual(200);

  const responseBody = await response.json()
})

test("Teste de migrations Array", async ()=> {
  const response = await fetch("http:/localhost:3000/api/v1/migrations");

  const responseBody = await response.json()

  expect(Array.isArray(responseBody)).toBe(true);
})