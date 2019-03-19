import React from "react";
import { ReadonlyDataset } from "../data_handling/multidimensional_dataset";
import { Accessors, Axes } from "./types";
export interface Props {
    data: ReadonlyDataset;
    axes: Axes;
    accessors: Accessors;
}
declare const Grid: React.SFC<Props>;
export default Grid;
//# sourceMappingURL=Grid.d.ts.map