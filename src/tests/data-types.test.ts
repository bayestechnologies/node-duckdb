import { DuckDB, Connection } from "@addon";
import { RowResultFormat } from "@addon-types";

/**
 * There are types in the source code that there is no documentation for and I'm not sure if they are used as return types:
 * - VARBINARY
 * - POINTER
 * - HASH
 * - STRUCT
 * - LIST
 * These are not supported (yet) by the bindings, not sure if they need to be
 */

describe("Data type mapping", () => {
  let db: DuckDB;
  let connection: Connection;
  beforeEach(() => {
    db = new DuckDB();
    connection = new Connection(db);
  });

  afterEach(() => {
    connection.close();
    db.close();
  });

  it("supports TINYINT", async () => {
    const result = await connection.executeIterator<number[]>(`SELECT CAST(1 AS TINYINT)`, {
      rowResultFormat: RowResultFormat.Array,
    });
    expect(result.fetchRow()).toMatchObject([1]);
  });

  it("supports SMALLINT", async () => {
    const result = await connection.executeIterator<number[]>(`SELECT CAST(1 AS SMALLINT)`, {
      rowResultFormat: RowResultFormat.Array,
    });
    expect(result.fetchRow()).toMatchObject([1]);
  });

  it("supports INTEGER", async () => {
    const result = await connection.executeIterator<number[]>(`SELECT CAST(1 AS INTEGER)`, {
      rowResultFormat: RowResultFormat.Array,
    });
    expect(result.fetchRow()).toMatchObject([1]);
  });

  it("supports BIGINT", async () => {
    const bigInt = 9223372036854775807n;
    const result = await connection.executeIterator<Array<bigint>>(`SELECT CAST (${bigInt} AS BIGINT)`, {
      rowResultFormat: RowResultFormat.Array,
    });
    const resultValue = result.fetchRow()[0];
    expect(resultValue).toEqual(bigInt);
  });

  it("supports HUGEINT - positive max", async () => {
    const hugeInt = 170141183460469231731687303715884105727n;
    const result = await connection.executeIterator<Array<bigint>>(`SELECT CAST (${hugeInt} AS HUGEINT)`, {
      rowResultFormat: RowResultFormat.Array,
    });
    const resultValue = result.fetchRow()[0];
    expect(resultValue).toEqual(hugeInt);
  });

  it("supports HUGEINT - large negative", async () => {
    const hugeInt = -4565365654654345325455654365n;
    const result = await connection.executeIterator<Array<bigint>>(`SELECT CAST (${hugeInt} AS HUGEINT)`, {
      rowResultFormat: RowResultFormat.Array,
    });
    const resultValue = result.fetchRow()[0];
    expect(resultValue).toEqual(hugeInt);
  });

  it("supports HUGEINT - small positive number", async () => {
    const hugeInt = 132142n;
    const result = await connection.executeIterator<Array<bigint>>(`SELECT CAST (${hugeInt} AS HUGEINT)`, {
      rowResultFormat: RowResultFormat.Array,
    });
    const resultValue = result.fetchRow()[0];
    expect(resultValue).toEqual(hugeInt);
  });

  it("supports HUGEINT - negative 1", async () => {
    const hugeInt = -1n;
    const result = await connection.executeIterator<Array<bigint>>(`SELECT CAST (${hugeInt} AS HUGEINT)`, {
      rowResultFormat: RowResultFormat.Array,
    });
    const resultValue = result.fetchRow()[0];
    expect(resultValue).toEqual(hugeInt);
  });

  it("supports HUGEINT - large negative number", async () => {
    const hugeInt = -354235423543264236543654n;
    const result = await connection.executeIterator<Array<bigint>>(`SELECT CAST (${hugeInt} AS HUGEINT)`, {
      rowResultFormat: RowResultFormat.Array,
    });
    const resultValue = result.fetchRow()[0];
    expect(resultValue).toEqual(hugeInt);
  });

  it("supports HUGEINT - negative max", async () => {
    const hugeInt = -170141183460469231731687303715884105727n;
    const result = await connection.executeIterator<Array<bigint>>(`SELECT CAST (${hugeInt} AS HUGEINT)`, {
      rowResultFormat: RowResultFormat.Array,
    });
    const resultValue = result.fetchRow()[0];
    expect(resultValue).toEqual(hugeInt);
  });

  it("supports common types", async () => {
    const result = await connection.executeIterator<any[]>(
      `SELECT 
              null,
              true,
              0,
              CAST(1 AS TINYINT),
              CAST(8 AS SMALLINT),
              10000,
              1.1,        
              CAST(1.1 AS DOUBLE),
              'stringy',
              TIMESTAMP '1971-02-02 01:01:01.001',
              DATE '1971-02-02'
            `,
      { rowResultFormat: RowResultFormat.Array },
    );

    expect(result.fetchRow()).toMatchObject([
      null,
      true,
      0,
      1,
      8,
      10000,
      1.1,
      1.1,
      "stringy",
      Date.UTC(71, 1, 2, 1, 1, 1, 1),
      Date.UTC(71, 1, 2),
    ]);
  });

  // Note: even though there is a CHAR type in the source code, it is simply an alias to VARCHAR
  it("supports CHAR", async () => {
    const result = await connection.executeIterator<string[]>(`SELECT CAST('a' AS CHAR)`, {
      rowResultFormat: RowResultFormat.Array,
    });
    expect(result.fetchRow()).toMatchObject(["a"]);
  });

  it("supports TIME", async () => {
    const result = await connection.executeIterator<number[]>(`SELECT TIME '01:01:01.001'`, {
      rowResultFormat: RowResultFormat.Array,
    });
    expect(result.fetchRow()).toMatchObject([1 + 1000 + 60000 + 60000 * 60]);
  });

  it("supports BLOB", async () => {
    const result = await connection.executeIterator<Buffer[]>(`SELECT 'AB'::BLOB;`, {
      rowResultFormat: RowResultFormat.Array,
    });
    const resultBuffer = result.fetchRow()[0];
    const view = new Int8Array(resultBuffer);
    // ASCII "a"
    expect(view[0]).toBe(65);
    // ASCII "b"
    expect(view[1]).toBe(66);
  });

  // TODO: either create a JS/TS object representing an interval or possibly convert to number
  it("supports INTERVAL", async () => {
    const result = await connection.executeIterator<string[]>(`SELECT INTERVAL '1' MONTH;`, {
      rowResultFormat: RowResultFormat.Array,
    });
    expect(result.fetchRow()).toMatchObject(["1 month"]);
  });
});
