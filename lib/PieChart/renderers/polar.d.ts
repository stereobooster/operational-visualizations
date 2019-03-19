import "d3-transition";
import { D3Selection, EventBus, InputData, LegendDatum, Renderer, RendererAccessor, RendererType, State } from "../typings";
declare class Polar implements Renderer {
    private color;
    private computed;
    private currentTranslation;
    private data;
    private drawn;
    private el;
    private events;
    private inputData;
    private minSegmentWidth;
    private previousComputed;
    key: RendererAccessor<string>;
    state: State;
    type: RendererType;
    value: RendererAccessor<number>;
    constructor(state: State, events: EventBus, el: D3Selection, options: {
        [key: string]: any;
    });
    updateOptions(options: {
        [key: string]: any;
    }): void;
    setData(data: InputData): void;
    draw(): void;
    private initialDraw;
    private updateDraw;
    private arcAttributes;
    private fitToCanvas;
    private arcTween;
    private removeArcTween;
    private centerDisplayString;
    private compute;
    private angleValue;
    private computeArcs;
    private computeOuterRadius;
    private computeInnerRadius;
    private hoverOuterRadius;
    private onMouseOver;
    private updateElementHover;
    private highlightElement;
    private onMouseOut;
    dataForLegend(): LegendDatum[];
    remove(): void;
}
export default Polar;
//# sourceMappingURL=polar.d.ts.map