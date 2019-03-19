export declare const tuple: <T extends string[]>(...args: T) => T;
import { Selection } from "d3-selection";
export declare type D3Selection<TDatum = any> = Selection<any, TDatum, any, any>;
import EventEmitter from "./event_bus";
export declare type EventBus = EventEmitter;
export declare type Accessor<D, T> = (d: D) => T;
export interface Accessors<D> {
    [key: string]: Accessor<D, any>;
}
export { ChartStateReadOnly, StateWriter } from "./state_handler";
export interface ChartStateObject<Data, Config, AccessorsObject, Computed> {
    data: Data;
    config: Config;
    accessors: AccessorsObject;
    computed: Computed;
}
export interface BaseConfig {
    backgroundColor: string;
    duration: number;
    height: number;
    hidden: boolean;
    uid: string;
    visualizationName: string;
    width: number;
    [key: string]: any;
}
export interface Focus {
    remove: () => void;
}
export interface Legend {
    draw: () => void;
    remove: () => void;
}
export interface Canvas {
    draw: () => void;
    elementFor: (component: string) => D3Selection;
    remove: () => void;
}
export interface Facade<Config, Data> {
    data: (data?: Data) => Data;
    config: (config?: Partial<Config>) => Config;
    accessors: (type: string, accessors: Accessors<any>) => Accessors<any>;
    on: (event: string, handler: any) => void;
    off: (event: string, handler: any) => void;
    draw: () => void;
    close: () => void;
}
export interface ComponentConfigInfo {
    key: string;
    seriesType?: string;
    type: "series" | "axis";
}
export interface ComponentHoverPayload {
    component: D3Selection;
    options: ComponentConfigInfo;
}
export interface Point {
    x: number;
    y: number;
}
export interface Dimensions {
    height: number;
    width: number;
}
export interface Position {
    left: number;
    top: number;
}
export declare type WithConvert<T> = T & {
    convert: any;
};
//# sourceMappingURL=typings.d.ts.map