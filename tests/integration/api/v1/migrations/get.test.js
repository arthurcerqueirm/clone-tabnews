import database from "infra/database";
import orchestrator from "tests/orchestrator";


beforeAll(async () => {
  await orchestrator.waitForAllServices();
  await database.query("drop schema public cascade; create schema public;")
})

test("Teste de migrations", async ()=> {
  const response = await fetch("http:/localhost:3000/api/v1/migrations");
  const responseBody = await response.json()

  expect(response.status).toEqual(200);
  expect(Array.isArray(responseBody)).toBe(true);
  expect(responseBody.length).toBeGreaterThan(0);
})

