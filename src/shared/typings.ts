// Helper function for string tuples
export const tuple = <T extends string[]>(...args: T) => args;

// d3 types
import { Selection } from "d3-selection";

export type D3Selection<TDatum = any> = Selection<any, TDatum, any, any>;

// Event bus
import EventEmitter from "./event_bus";

export type EventBus = EventEmitter;

// Accessors
export type Accessor<D, T> = (d: D) => T;

export interface Accessors<D> {
  [key: string]: Accessor<D, any>;
}

// State
export { ChartStateReadOnly, StateWriter } from "./state_handler";

export interface ChartStateObject<Data, Config, AccessorsObject, Computed> {
  data: Data;
  config: Config;
  accessors: AccessorsObject;
  computed: Computed;
}

// Base config, required for all visualisations
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

// Viz elements
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

// Component hover payload
export interface ComponentConfigInfo {
  key: string;
  seriesType?: string;
  type: "series" | "axis";
}

export interface ComponentHoverPayload {
  component: D3Selection;
  options: ComponentConfigInfo;
}

// Common interfacesDime
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

export type WithConvert<T> = T & {
  convert: any;
};
