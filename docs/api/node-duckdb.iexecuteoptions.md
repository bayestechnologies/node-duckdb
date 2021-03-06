<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Node-DuckDB API](./node-duckdb.md) &gt; [IExecuteOptions](./node-duckdb.iexecuteoptions.md)

## IExecuteOptions interface

Options for connection.execute

<b>Signature:</b>

```typescript
export interface IExecuteOptions
```

## Properties

| Property                                                                 | Type                                                | Description                                                                                                                                                                                                                                                                         |
| ------------------------------------------------------------------------ | --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [forceMaterialized?](./node-duckdb.iexecuteoptions.forcematerialized.md) | boolean                                             | <i>(Optional)</i> Materialized means that the whole result is loaded into memory, as opposed to streaming which means there is a pointer to the next row and rows are retrieved one by one. If falsy, DuckDB will \*attempt\* to not load the whole result set into memory at once. |
| [rowResultFormat?](./node-duckdb.iexecuteoptions.rowresultformat.md)     | [RowResultFormat](./node-duckdb.rowresultformat.md) | <i>(Optional)</i> Row format                                                                                                                                                                                                                                                        |
