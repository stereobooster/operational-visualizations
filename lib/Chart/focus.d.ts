import { D3Selection, EventBus, Focus, State, StateWriter } from "./typings";
declare class ChartFocus implements Focus {
    private componentFocus;
    private dateFocus;
    private elementFocus;
    private flagFocus;
    private state;
    private events;
    constructor(state: State, _: StateWriter, events: EventBus, els: {
        [key: string]: D3Selection;
    });
    remove(): void;
}
export default ChartFocus;
//# sourceMappingURL=focus.d.ts.map