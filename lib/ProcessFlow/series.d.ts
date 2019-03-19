import { D3Selection, EventBus, State, StateWriter } from "./typings";
declare class Series {
    private data;
    private dataHandler;
    private el;
    private renderer;
    private state;
    private stateWriter;
    constructor(state: State, stateWriter: StateWriter, events: EventBus, el: D3Selection);
    prepareData(): void;
    draw(): void;
}
export default Series;
//# sourceMappingURL=series.d.ts.map