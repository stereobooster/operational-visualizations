import React from "react";
import { Cell } from "../../data_handling/multidimensional_dataset";
import { CellAccessors } from "../types";
interface Props {
    cell: Cell;
    width: number;
    height: number;
    cellAccessors: CellAccessors;
}
declare const GridCell: React.SFC<Props>;
export default GridCell;
//# sourceMappingURL=GridCell.d.ts.map