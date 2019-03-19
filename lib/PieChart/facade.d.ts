import { Accessors, Data, Facade, PieChartConfig } from "./typings";
declare class PieChartFacade implements Facade {
    private DISPOSED;
    private canvas;
    private components;
    private context;
    private events;
    private series;
    private state;
    constructor(context: Element);
    private initializeEvents;
    private initializeState;
    private initializeCanvas;
    private initializeComponents;
    private initializeSeries;
    data(data?: Data): any;
    config(config?: Partial<PieChartConfig>): PieChartConfig;
    accessors(type: string, accessors: Accessors<any>): Accessors<any>;
    on(event: string, handler: any): void;
    off(event: string, handler: any): void;
    draw(): void;
    close(): void;
}
export default PieChartFacade;
//# sourceMappingURL=facade.d.ts.map