import { D3Selection, EventBus, State, StateWriter } from "./typings";
declare class Breadcrumb {
    private el;
    private events;
    private state;
    constructor(state: State, _: StateWriter, events: EventBus, el: D3Selection);
    private updateHoverPath;
    private label;
    private truncateNodeArray;
    private backgroundColor;
    private labelColor;
    private update;
    private onClick;
}
export default Breadcrumb;
//# sourceMappingURL=breadcrumb.d.ts.map