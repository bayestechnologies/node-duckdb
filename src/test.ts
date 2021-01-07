/* eslint-disable */
import DatabaseConstructor, { Database, RunResult } from "better-sqlite3";
import { Connection, DuckDB } from "index";


async function test() {
  const db1 = new DatabaseConstructor(":memory:");
  db1.loadExtension("/opt/lib/libparquet"); // if this line is removed error disappears
  // const p = db1.prepare("SELECT 1");
  // console.log(p.all());
  const db = new DuckDB();
  const con = new Connection(db);
  // error is thrown on the following line if `loadExtension` has been called before
  const rs = await con.executeIterator(
    "SELECT * from parquet_scan('./src/tests/test-fixtures/alltypes_plain.parquet')",
  );
  console.log(rs.fetchAllRows());
}
test();
