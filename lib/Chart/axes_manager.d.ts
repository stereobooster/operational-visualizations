import { D3Selection, EventBus, State, StateWriter } from "./typings";
declare class AxesManager {
    private axes;
    private els;
    private events;
    private oldAxes;
    private rules;
    private state;
    private stateWriter;
    constructor(state: State, stateWriter: StateWriter, events: EventBus, els: {
        [key: string]: D3Selection;
    });
    draw(): void;
    updateMargins(): void;
    private updateAxes;
    private createOrUpdate;
    private create;
    private setBaselines;
    private priorityTimeAxis;
    private drawAxes;
    private drawAxesByOrientation;
    private getAxesType;
    private areAxesPrecomputed;
    private getAxesRange;
    private getNTicks;
    private computeAxes;
    private updateRules;
    private removeAxis;
}
export default AxesManager;
//# sourceMappingURL=axes_manager.d.ts.map