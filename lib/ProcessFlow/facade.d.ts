import { Accessors, Facade, ProcessFlowConfig } from "./typings";
declare class ProcessFlowFacade implements Facade {
    private DISPOSED;
    private canvas;
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
    data(data?: any): any;
    config(config?: Partial<ProcessFlowConfig>): ProcessFlowConfig;
    accessors(type: string, accessors: Accessors<any>): Accessors<any>;
    on(event: string, handler: any): void;
    off(event: string, handler: any): void;
    draw(): void;
    close(): void;
}
export default ProcessFlowFacade;
//# sourceMappingURL=facade.d.ts.map