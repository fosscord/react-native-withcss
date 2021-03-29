import { Rule } from "css";
export interface Selector {
    tag?: string;
    id?: string;
    classes: string[];
}
export interface Rules {
    selectors?: Selector[][];
    declarations?: Record<string, string>;
    rules?: Rule[];
    media?: string;
    type: string;
}
export declare function parse(str: string): Rules[];
