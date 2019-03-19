import React from "react";
import { Accessors } from "../types";
import { DimensionWithPrimitiveAndMetadata, RowOrColumn } from "../../data_handling/multidimensional_dataset";
interface Props {
    accessors: Accessors;
    columns: RowOrColumn[];
    dimension: DimensionWithPrimitiveAndMetadata;
    dimensionIndex: number;
    width: number;
}
declare const ColumnHeader: React.SFC<Props>;
export default ColumnHeader;
//# sourceMappingURL=ColumnHeader.d.ts.map