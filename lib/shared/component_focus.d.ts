import { ChartStateReadOnly, D3Selection, EventBus } from "./typings";
declare class ComponentFocus {
    private el;
    private events;
    private state;
    constructor(state: ChartStateReadOnly<any, any, any, any>, el: D3Selection, events: EventBus);
    private onComponentHover;
    private draw;
    private onMouseOut;
    private onClick;
    remove(): void;
}
export default ComponentFocus;
//# sourceMappingURL=component_focus.d.ts.map