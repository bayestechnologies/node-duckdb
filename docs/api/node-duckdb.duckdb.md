<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Node-DuckDB API](./node-duckdb.md) &gt; [DuckDB](./node-duckdb.duckdb.md)

## DuckDB class

The DuckDB class represents a DuckDB database instance.

<b>Signature:</b>

```typescript
export declare class DuckDB
```

## Constructors

| Constructor                                                    | Modifiers | Description                             |
| -------------------------------------------------------------- | --------- | --------------------------------------- |
| [(constructor)(config)](./node-duckdb.duckdb._constructor_.md) |           | Represents a native instance of DuckDB. |

## Properties

| Property                                                               | Modifiers | Type                                                | Description                                                                                                              |
| ---------------------------------------------------------------------- | --------- | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| [accessMode](./node-duckdb.duckdb.accessmode.md)                       |           | [AccessMode](./node-duckdb.accessmode.md)           | Returns the [access mode](./node-duckdb.accessmode.md) used by the database.                                             |
| [checkPointWALSize](./node-duckdb.duckdb.checkpointwalsize.md)         |           | number                                              | Returns the checkpoint write ahead log size used by the database.                                                        |
| [collation](./node-duckdb.duckdb.collation.md)                         |           | string                                              | Returns the collation used by the database.                                                                              |
| [defaultNullOrder](./node-duckdb.duckdb.defaultnullorder.md)           |           | [OrderByNullType](./node-duckdb.orderbynulltype.md) | Returns the default [sort order for null values](./node-duckdb.orderbynulltype.md)<!-- -->.                              |
| [defaultOrderType](./node-duckdb.duckdb.defaultordertype.md)           |           | [OrderType](./node-duckdb.ordertype.md)             | Returns the default [sort order](./node-duckdb.ordertype.md)<!-- -->.                                                    |
| [enableCopy](./node-duckdb.duckdb.enablecopy.md)                       |           | boolean                                             | Returns true of copying is enabled, false otherwise.                                                                     |
| [isClosed](./node-duckdb.duckdb.isclosed.md)                           |           | boolean                                             | Returns true if the underlying database has been closed, false otherwise.                                                |
| [maximumMemory](./node-duckdb.duckdb.maximummemory.md)                 |           | number                                              | Returns the maximum memory limit for the database.                                                                       |
| [temporaryDirectory](./node-duckdb.duckdb.temporarydirectory.md)       |           | string                                              | Returns the temporary directory location for the database.                                                               |
| [useTemporaryDirectory](./node-duckdb.duckdb.usetemporarydirectory.md) |           | boolean                                             | Returns true if the database uses a temporary directory for storing data that does not fit into memory, false otherwise. |

## Methods

| Method                                   | Modifiers | Description                                                                              |
| ---------------------------------------- | --------- | ---------------------------------------------------------------------------------------- |
| [close()](./node-duckdb.duckdb.close.md) |           | Closes the underlying duckdb database, frees associated memory and renders it unusuable. |