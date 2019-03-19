import { D3Selection, EventBus, State } from "../typings";
declare class FlagFocus {
    private events;
    private state;
    private el;
    constructor(state: State, el: D3Selection, events: EventBus);
    private draw;
    private margin;
    private focusDX;
    private focusDY;
    remove(): void;
}
export default FlagFocus;
//# sourceMappingURL=flag_focus.d.ts.map