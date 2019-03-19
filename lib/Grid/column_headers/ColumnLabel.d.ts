import React from "react";
import { DimensionHeaderAccessors } from "../types";
import { DimensionWithPrimitiveAndMetadata, DimensionWithValueAndMetadata } from "../../data_handling/multidimensional_dataset";
interface Props {
    accessors: DimensionHeaderAccessors;
    dimension: DimensionWithPrimitiveAndMetadata | DimensionWithValueAndMetadata;
    width: number;
}
declare const ColumnLabel: React.SFC<Props>;
export default ColumnLabel;
//# sourceMappingURL=ColumnLabel.d.ts.map