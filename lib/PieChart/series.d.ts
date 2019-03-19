import { D3Selection, EventBus, State, StateWriter } from "./typings";
declare class Series {
    private attributes;
    private data;
    private el;
    private events;
    private renderAs;
    private renderer;
    private state;
    private stateWriter;
    constructor(state: State, stateWriter: StateWriter, events: EventBus, el: D3Selection);
    assignData(): void;
    private prepareData;
    private assignAccessors;
    private updateRenderer;
    private createRenderer;
    draw(): void;
}
export default Series;
//# sourceMappingURL=series.d.ts.map