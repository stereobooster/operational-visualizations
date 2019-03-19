import React from "react";
import { Accessors } from "../types";
import { DimensionWithPrimitiveAndMetadata, RowOrColumn } from "../../data_handling/multidimensional_dataset";
interface Props {
    accessors: Accessors;
    dimension: DimensionWithPrimitiveAndMetadata;
    dimensionIndex: number;
    rows: RowOrColumn[];
    width: number;
}
declare const RowHeader: React.SFC<Props>;
export default RowHeader;
//# sourceMappingURL=RowHeader.d.ts.map