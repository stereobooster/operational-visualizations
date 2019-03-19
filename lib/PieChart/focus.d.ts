import { D3Selection, EventBus, Focus, State, StateWriter } from "./typings";
declare class PieChartFocus implements Focus {
    private el;
    private componentFocus;
    private state;
    private events;
    constructor(state: State, _: StateWriter, events: EventBus, els: {
        [key: string]: D3Selection;
    });
    private onElementHover;
    private onElementOut;
    private onMouseLeave;
    remove(): void;
}
export default PieChartFocus;
//# sourceMappingURL=focus.d.ts.map