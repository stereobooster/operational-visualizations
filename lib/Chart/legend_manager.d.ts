import { D3Selection, EventBus, State, StateWriter } from "./typings";
declare class LegendManager {
    private legends;
    private state;
    constructor(state: State, stateWriter: StateWriter, events: EventBus, els: {
        [key: string]: {
            [key: string]: D3Selection;
        };
    });
    draw(): void;
    private arrangeTopLegends;
    private calculateMaxWidth;
}
export default LegendManager;
//# sourceMappingURL=legend_manager.d.ts.map