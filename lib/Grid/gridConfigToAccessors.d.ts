import { Accessors, GridConfig } from "./types";
export declare type RecursivePartial<T> = {
    [P in keyof T]?: T[P] extends Array<infer U> ? Array<RecursivePartial<U>> : T[P] extends object ? RecursivePartial<T[P]> : T[P];
};
/**
 * Merges grid config objects
 */
export declare function mergeConfig(config: GridConfig, customConfig: RecursivePartial<GridConfig>): GridConfig;
declare const _default: (customConfig?: RecursivePartial<GridConfig>) => Accessors;
/** Returns a full set of grid accessors, based on provided custom config values and the default grid config. */
export default _default;
//# sourceMappingURL=gridConfigToAccessors.d.ts.map