import Series from "../series";
import { AxisOrientation, BarsRendererAccessors, D3Selection, Datum, EventBus, RendererClass, RendererType, SingleRendererOptions, State } from "../../typings";
export declare type Options = SingleRendererOptions<BarsRendererAccessors>;
declare class Bars implements RendererClass<BarsRendererAccessors> {
    private data;
    private el;
    private events;
    private isRange;
    options: Options;
    private series;
    private state;
    type: RendererType;
    private xIsBaseline;
    private xScale;
    private yScale;
    barWidth: (d: Datum) => number | undefined;
    private color;
    private focusContent;
    private opacity;
    private x;
    private x0;
    private x1;
    private y;
    private y0;
    private y1;
    constructor(state: State, el: D3Selection, data: Datum[], options: Options, series: Series, events: EventBus);
    update(data: Datum[], options: Options): void;
    draw(): void;
    close(): void;
    dataForAxis(axis: AxisOrientation): any[];
    private appendSeriesGroup;
    private setAxisScales;
    private validate;
    private assignAccessors;
    private defaultFocusContent;
    private seriesTranslation;
    private startAttributes;
    private attributes;
    private onMouseOver;
    private onMouseOut;
    private onClick;
    private updateClipPath;
    private clipPath;
    private xClipPath;
    private yClipPath;
}
export default Bars;
//# sourceMappingURL=bars.d.ts.map