import React from "react";
import { DimensionHeaderAccessors } from "../types";
import { DimensionWithPrimitiveAndMetadata, DimensionWithValueAndMetadata } from "../../data_handling/multidimensional_dataset";
interface Props {
    accessors: DimensionHeaderAccessors;
    dimension: DimensionWithPrimitiveAndMetadata | DimensionWithValueAndMetadata;
    height: number;
    width: number;
    isHorizontal: boolean;
}
declare const RowLabel: React.SFC<Props>;
export default RowLabel;
//# sourceMappingURL=RowLabel.d.ts.map