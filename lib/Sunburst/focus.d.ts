import { D3Selection, EventBus, Focus, State, StateWriter } from "./typings";
declare class SunburstFocus implements Focus {
    private el;
    private state;
    private events;
    constructor(state: State, _: StateWriter, events: EventBus, el: D3Selection);
    private onElementHover;
    private percentageString;
    private singlePercentageString;
    private onElementOut;
    private onMouseLeave;
    remove(): void;
}
export default SunburstFocus;
//# sourceMappingURL=focus.d.ts.map