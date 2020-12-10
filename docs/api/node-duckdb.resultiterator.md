<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Node-DuckDB API](./node-duckdb.md) &gt; [ResultIterator](./node-duckdb.resultiterator.md)

## ResultIterator class

ResultIterator represents the result set of a DuckDB query. Instances of this class are returned by the [Connection.executeIterator](./node-duckdb.connection.executeiterator.md)<!-- -->.

<b>Signature:</b>

```typescript
export declare class ResultIterator<T>
```

## Remarks

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `ResultIterator` class.

## Properties

| Property                                             | Modifiers | Type                                      | Description                                                                                                                                                                                                                                         |
| ---------------------------------------------------- | --------- | ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [isClosed](./node-duckdb.resultiterator.isclosed.md) |           | boolean                                   | Returns true if ResultIterator is closed, false otherwise.                                                                                                                                                                                          |
| [type](./node-duckdb.resultiterator.type.md)         |           | [ResultType](./node-duckdb.resulttype.md) | Get the [ResultType](./node-duckdb.resulttype.md) of the ResultIterator. This is specified by the [options](./node-duckdb.iexecuteoptions.forcematerialized.md) argument on [executeIterator](./node-duckdb.connection.executeiterator.md)<!-- -->. |

## Methods

| Method                                                         | Modifiers | Description                     |
| -------------------------------------------------------------- | --------- | ------------------------------- |
| [close()](./node-duckdb.resultiterator.close.md)               |           | Close the ResultIterator        |
| [describe()](./node-duckdb.resultiterator.describe.md)         |           | Describe the result set schema. |
| [fetchAllRows()](./node-duckdb.resultiterator.fetchallrows.md) |           | Fetch all rows                  |
| [fetchRow()](./node-duckdb.resultiterator.fetchrow.md)         |           | Fetch the next row              |