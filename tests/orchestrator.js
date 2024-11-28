import retry from "async-retry"

async function waitForAllServices(params) {
  await waitForWebServer();

  async function waitForWebServer() {
    console.log("waitForWebServer")
    return retry(fetchStatusPage)

    async function fetchStatusPage() {
      console.log("fetchstatusPage")
      const response = await fetch("http//localhost:3000/api/v1/status")
      console.log("fetch")
      const responseBody = response.json();
      console.log("fetchJson")
    }
  }
}

export default{
  waitForAllServices
}