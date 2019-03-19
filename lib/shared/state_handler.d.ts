import State, { Path, ReadOnlyState } from "./state";
import { Accessors, ChartStateObject } from "./typings";
export interface ChartState<Data, Config, AccessorsObject, Computed> {
    current: State<Data, Config, AccessorsObject, Computed>;
    previous: State<Data, Config, AccessorsObject, Computed>;
}
export interface ChartStateReadOnly<Data, Config, AccessorsObject, Computed> {
    current: ReadOnlyState<Data, Config, AccessorsObject, Computed>;
    previous: ReadOnlyState<Data, Config, AccessorsObject, Computed>;
}
export declare type StateWriter = (propertyPath: string | string[], value: any) => void;
export default class StateHandler<Data, Config, AccessorsObject, Computed> {
    private state;
    constructor(obj: ChartStateObject<Data, Config, AccessorsObject, Computed>);
    captureState(): void;
    readOnly(): {
        current: ReadOnlyState<Data, Config, AccessorsObject, Computed>;
        previous: ReadOnlyState<Data, Config, AccessorsObject, Computed>;
    };
    data(data?: Data): any;
    hasData(): boolean;
    config(config?: Partial<Config>): any;
    accessors(type: string, accessors?: Accessors<any>): any;
    computedWriter(namespace: Path): StateWriter;
}
//# sourceMappingURL=state_handler.d.ts.map