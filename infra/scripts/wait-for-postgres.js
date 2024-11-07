const { exec } = require("node:child_process");
const { stdout } = require("node:process");
function checkPostgres() {
  exec('docker exec postgres-dev /usr/local/bin/pg_isready --host localhost',handleReturn)
    function handleReturn(error,stdout){
      if(stdout.search("accepting connections") === -1){
        process.stdout.write(".")
        checkPostgres();
        return;
      }
      console.log("\n\n🟢Postgres está pronto e aceitando conexões")
    }
}
console.log("\n\n❌Aguardando postgres aceitar conexões");
checkPostgres();