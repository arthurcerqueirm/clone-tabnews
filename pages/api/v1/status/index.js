import database from "infra/database.js"

async function status(request, response){
  const updatedAt = new Date().toISOString();

  const databaseVersionResult = await database.query("SHOW server_version;");
  const databaseVersionResultValue = databaseVersionResult.rows[0].server_version;

  const databaseMaxConectionsResult = await database.query("SHOW max_connections;")
  const databaseMaxConectionsResultValue = databaseMaxConectionsResult.rows[0].max_connections;

  const databaseName = process.env.POSTGRES_DB;
  const databaseOpenedConectionsResult = await database.query({
    text: `SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1`,
    values: [databaseName]
  });// SELECT count(*)::int from pg_stat_activity WHERE datname = 'local_db';
  const databaseOpenedConectionsResultValue = databaseOpenedConectionsResult.rows[0].count;


  response.status(200).json(
    {
      updated_at: updatedAt,
      dependencies: {
        database: {
          version: databaseVersionResultValue,
          max_connections: parseInt(databaseMaxConectionsResultValue),
          opened_connections: databaseOpenedConectionsResultValue
        }
      }
        
    }
  )
}

export default status