export function showBitIoConn() {
  const { Client } = require('pg');

  // Create a client using the connection information provided on bit.io.
  const client = new Client({
    user: 'GettingStarted',
    host: 'db.bit.io',
    database: 'Rodrigo/rep1', // public database
    password: 'v2_3sLz4_6F64yhBdM7MF8EbEE7ZnU3F', // key from bit.io database page connect menu
    port: 5432,
    ssl: true,
  });
  client.connect();

  client.query(
    'SELECT * FROM "Rodrigo/rep1"."IMOVEL_3" limit 10;',
    (err, res) => {
      console.table(res.rows); // you could also just console.log, but console.table is neat :)
    }
  );
}
