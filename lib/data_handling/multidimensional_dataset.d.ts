declare type DimensionKey = string;
declare type DimensionValue = string;
export interface Dimension {
    key: DimensionKey;
}
declare type DimensionWithMetadata = Dimension & {
    metadata?: Record<string, any>;
};
export declare type DimensionWithPrimitiveAndMetadata = DimensionWithMetadata & {
    primitive?: "string" | "number";
};
export declare type DimensionWithValueAndMetadata = DimensionWithMetadata & {
    value: DimensionValue;
};
export interface RowOrColumn<T = any> {
    /**
     * Returns the row or column dimensions and their values which define this row/column
     */
    dimensionValues(): DimensionWithValueAndMetadata[];
    /**
     * Returns an array of all cells in the column
     */
    cells(): Array<Cell<T>>;
    /**
     * Checks if row/column matches the provided predicate
     * @param predicate Predicate for row/column
     */
    matches(predicates: Predicate[]): boolean;
}
export interface Cell<T = any> {
    /**
     * Returns the column dimensions and their values which define this cell
     */
    x(): DimensionWithValueAndMetadata[];
    /**
     * Returns the row dimensions and their values which define this cell
     */
    y(): DimensionWithValueAndMetadata[];
    /**
     * Checks if rows/columns match the provided predicates
     * @param options Predicates for columns (x) and rows (y)
     */
    matches(options: SliceOptions): boolean;
    /**
     * Returns the data this cell contains
     */
    value(): T;
}
export declare type Predicate = Dimension & {
    type: "include" | "exclude";
    values: DimensionValue[];
};
export interface SliceOptions {
    x?: Predicate[];
    y?: Predicate[];
}
export interface AggregateOptions<T, U = any> {
    /**
     * Column dimension to aggregate by.
     * All dimensions nested within the specified dimension will be aggregated
     */
    x?: DimensionKey;
    /**
     * Row dimension to aggregate by.
     * All dimensions nested within the specified dimension will be aggregated
     */
    y?: DimensionKey;
    /**
     * Is invoked for each slice that is created based on the x and y dimensions provided
     * @returns the new (merged) cell value
     */
    merge: (data: MultidimensionalDataset<T>) => U;
}
declare type TransformFunction<T, U> = (cell: Cell<T>) => U;
export interface RawDataset<T = any> {
    rowDimensions: DimensionWithPrimitiveAndMetadata[];
    columnDimensions: DimensionWithPrimitiveAndMetadata[];
    columns: DimensionValue[][];
    rows: DimensionValue[][];
    data: T[][];
}
export interface ReadonlyDataset<T = any> {
    /**
     * Returns true if the dataset contains no data
     */
    isEmpty: () => boolean;
    /**
     * Returns all row dimensions.
     */
    rowDimensions: () => DimensionWithPrimitiveAndMetadata[];
    /**
     * Returns all column dimensions.
     */
    columnDimensions: () => DimensionWithPrimitiveAndMetadata[];
    /**
     * Returns the complete dataset as **rows** of cells.
     */
    rows: () => Array<RowOrColumn<T>>;
    /**
     * Returns the complete dataset as **columns** of cells.
     */
    columns: () => Array<RowOrColumn<T>>;
    /**
     * Returns the underlying raw dataset.
     * The returned raw dataset should not be modified in place.
     */
    serialize: () => RawDataset<T>;
}
export interface Dataset<T = any> extends ReadonlyDataset<T> {
    /**
     * Returns a new dataset which is a subset matching the provided predicates.
     * @param options Predicates for columns (x) and rows (y)
     */
    slice: (options: SliceOptions) => Dataset<T>;
    /**
     * Returns a new dataset which contains groups of cells aggregated / merged into one
     * Attention: This might change sorting if data is not currently sorted top-to-bottom (rows) and left-to-right (columns) according to the order of the dimensions
     * @param options Column (x) and row (y) dimensions to merge by as well as a merge function to perform the cell merge
     */
    aggregate: <U = any>(options: AggregateOptions<T, U>) => Dataset<U>;
    /**
     * Flips the dataset over its diagonal, switches the row and column indices
     */
    transpose: () => Dataset<T>;
    /**
     * Returns a new dataset in which the value of each cell has been transformed according to the provided transform function.
     * @param transform Function that takes the current cell value as input and returns the desired cell value
     */
    transform: <U = any>(transform: TransformFunction<T, U>) => Dataset<U>;
    /**
     * Returns the dataset without slice or aggregate methods.
     */
    readonly: () => ReadonlyDataset<T>;
}
/**
 * MultidimensionalDataset
 */
declare class MultidimensionalDataset<T> implements Dataset<T> {
    private readonly data;
    constructor(data: RawDataset<T>);
    /**
     * Validates the shape of a raw dataset
     */
    private validateShape;
    /**
     * Look up the row index of a dimension
     * @returns Row index
     */
    private rowIndex;
    /**
     * Look up the column index of a dimension
     * @returns Column index
     */
    private columnIndex;
    private validateYDimension;
    private validateXDimension;
    private validateYPredicate;
    private validateXPredicate;
    /**
     * Builds a filter for rows / columns based on values to include or exclude
     * @returns Filter function
     */
    private sliceFilter;
    /**
     * Slices rows by a predicate
     * @returns Sliced dataset
     */
    private sliceRows;
    /**
     * Slices columns by a predicate
     * @returns Sliced dataset
     */
    private sliceColumns;
    columnDimensions(): DimensionWithMetadata[];
    columns(): Array<RowOrColumn<T>>;
    rowDimensions(): DimensionWithMetadata[];
    rows(): Array<RowOrColumn<T>>;
    private cellMatcher;
    slice(options: SliceOptions): MultidimensionalDataset<T>;
    isEmpty(): boolean;
    aggregate<U = any>(options: AggregateOptions<T, U>): MultidimensionalDataset<any>;
    transpose(): MultidimensionalDataset<T>;
    transform<U = any>(transform: TransformFunction<T, U>): MultidimensionalDataset<U>;
    serialize(): RawDataset<T>;
    readonly(): ReadonlyDataset<T>;
}
export default MultidimensionalDataset;
//# sourceMappingURL=multidimensional_dataset.d.ts.map