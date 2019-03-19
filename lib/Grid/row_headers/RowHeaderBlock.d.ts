import React from "react";
import { DimensionWithPrimitiveAndMetadata, RowOrColumn } from "../../data_handling/multidimensional_dataset";
import { Accessors } from "../types";
interface Props {
    accessors: Accessors;
    dimensions: DimensionWithPrimitiveAndMetadata[];
    rows: RowOrColumn[];
    rowHeaderWidth: (dimension: DimensionWithPrimitiveAndMetadata) => number;
}
declare const RowHeaderBlock: React.SFC<Props>;
export default RowHeaderBlock;
//# sourceMappingURL=RowHeaderBlock.d.ts.map