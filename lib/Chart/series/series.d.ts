import { AxisOrientation, D3Selection, DateToFocus, Datum, EventBus, LegendDatum, LegendFloat, LegendPosition, RendererClass, SingleRendererOptions, State } from "../typings";
declare class ChartSeries {
    private el;
    private events;
    private oldRenderers;
    options: {
        [key: string]: any;
    };
    renderers: RendererClass[];
    private state;
    private data;
    hide: () => boolean;
    hideInLegend: () => boolean;
    key: () => string;
    legendColor: () => string;
    legendName: () => string;
    renderAs: () => Array<SingleRendererOptions<any>>;
    symbolOffset: (d: Datum) => number;
    xAxis: () => "x1" | "x2";
    yAxis: () => "y1" | "y2";
    x: (d: Datum) => number | string | Date;
    y: (d: Datum) => number | string | Date;
    constructor(state: State, events: EventBus, el: D3Selection, options: any);
    update(options: any): void;
    assignAccessors(datumAccessors: any): void;
    private updateRenderers;
    private removeAllExcept;
    get(type: string): RendererClass<any> | undefined;
    private addRenderer;
    private remove;
    dataForLegend(): LegendDatum;
    dataForAxis(axis: AxisOrientation): any[];
    legendPosition(): LegendPosition;
    legendFloat(): LegendFloat;
    displayFocusPoint(): boolean;
    hasFlags(): boolean;
    hasData(): boolean;
    valueAtFocus(focus: DateToFocus): any;
    draw(): void;
}
export default ChartSeries;
//# sourceMappingURL=series.d.ts.map