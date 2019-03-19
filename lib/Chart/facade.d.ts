import { Accessors, ChartConfig, Data, Facade } from "./typings";
declare class ChartFacade implements Facade {
    private DISPOSED;
    private canvas;
    private components;
    private context;
    private customColorAccessor;
    private events;
    private series;
    private state;
    constructor(context: Element);
    private initializeEvents;
    private initializeState;
    private initializeCanvas;
    private initializeComponents;
    private initializeSeries;
    data(data?: Data): Data;
    config(config?: Partial<ChartConfig>): ChartConfig;
    accessors(type: string, accessors: Accessors<any>): Accessors<any>;
    on(event: string, handler: any): void;
    off(event: string, handler: any): void;
    draw(): void;
    close(): void;
}
export default ChartFacade;
//# sourceMappingURL=facade.d.ts.map