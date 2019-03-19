import { Data, State, StateWriter } from "./typings";
declare class DataHandler {
    private journeys;
    private nodes;
    private links;
    private state;
    private stateWriter;
    private layout;
    constructor(state: State, stateWriter: StateWriter);
    prepareData(): Data;
    private initializeNodes;
    private findNode;
    private addNode;
    private calculateNodeSizes;
    private calculateStartsAndEnds;
    private initializeLinks;
    private findLink;
    private addLink;
    private computeLinks;
    private xGridSpacing;
    private yGridSpacing;
    private positionNodes;
}
export default DataHandler;
//# sourceMappingURL=data_handler.d.ts.map