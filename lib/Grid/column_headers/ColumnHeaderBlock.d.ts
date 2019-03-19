import React from "react";
import { DimensionWithPrimitiveAndMetadata, RowOrColumn } from "../../data_handling/multidimensional_dataset";
import { Accessors } from "../types";
interface Props {
    accessors: Accessors;
    columns: RowOrColumn[];
    dimensions: DimensionWithPrimitiveAndMetadata[];
    marginLeft: number;
    width: number;
}
declare const ColumnHeaderBlock: React.SFC<Props>;
export default ColumnHeaderBlock;
//# sourceMappingURL=ColumnHeaderBlock.d.ts.map