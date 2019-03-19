import { D3Selection, EventBus, Focus, State, StateWriter } from "./typings";
declare class ProcessFlowFocus implements Focus {
    private el;
    private state;
    private events;
    constructor(state: State, _: StateWriter, events: EventBus, el: D3Selection);
    private onElementHover;
    private appendContent;
    private addNodeBreakdowns;
    private addSingleNodeVisitsComment;
    private getDrawingDimensions;
    private onElementOut;
    private onMouseLeave;
    remove(): void;
}
export default ProcessFlowFocus;
//# sourceMappingURL=focus.d.ts.map