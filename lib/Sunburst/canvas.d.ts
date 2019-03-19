import * as d3 from "d3-selection";
import { Canvas, EventBus, State, StateWriter } from "./typings";
declare class SunburstCanvas implements Canvas {
    private breadcrumb;
    private chartContainer;
    private el;
    private elMap;
    private events;
    private state;
    private stateWriter;
    constructor(state: State, stateWriter: StateWriter, events: EventBus, context: Element);
    private renderChartContainer;
    private renderBreadcrumb;
    private renderEl;
    private onMouseEnter;
    private onMouseLeave;
    private onClick;
    private renderRootLabel;
    private renderFocus;
    private drawingDims;
    draw(): void;
    remove(): void;
    elementFor(component: string): d3.Selection<any, any, any, any>;
}
export default SunburstCanvas;
//# sourceMappingURL=canvas.d.ts.map