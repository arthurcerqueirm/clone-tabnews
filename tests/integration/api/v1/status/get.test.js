import orchestrator from "tests/orchestrator";

beforeAll(async ()=> {
  await orchestrator.waitForAllServices();

})

test("GET to /api/v1/status should return 200", async ()=> {
  const response = await fetch("http:/localhost:3000/api/v1/status")
  

  const responseBody = await response.json();


  new Date(responseBody.updated_at).toISOString();

  expect(responseBody.dependencies.database.version).toEqual("20.0");
  expect(responseBody.dependencies.database.max_connections).toEqual(100);
  expect(responseBody.dependencies.database.opened_connections).toEqual(1);
})

test("Teste de SQL Injection", async ()=> {
  await fetch("http:/localhost:3000/api/v1/status?databaseName=local_db")

})