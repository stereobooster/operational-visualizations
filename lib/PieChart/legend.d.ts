import { D3Selection, EventBus, Legend, State, StateWriter } from "./typings";
declare class PieChartLegend implements Legend {
    private events;
    private legend;
    private state;
    constructor(state: State, _: StateWriter, events: EventBus, el: D3Selection);
    draw(): void;
    private updateComparisonLegend;
    private data;
    private onComponentHover;
    private currentOptions;
    remove(): void;
}
export default PieChartLegend;
//# sourceMappingURL=legend.d.ts.map