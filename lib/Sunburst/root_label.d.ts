import { D3Selection, EventBus, State, StateWriter } from "./typings";
declare class RootLabel {
    private el;
    private events;
    private state;
    constructor(state: State, _: StateWriter, events: EventBus, el: D3Selection);
    private update;
}
export default RootLabel;
//# sourceMappingURL=root_label.d.ts.map