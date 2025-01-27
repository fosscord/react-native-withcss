import { Component, FunctionComponent } from "react";
import { Rules, Selector } from "./Types";
import { Constructor } from "react-native";
import "missing-native-js-functions";
export declare type FiberNode = any;
export declare function match(fiber: FiberNode, selector: Selector): boolean;
export declare function childStyleCalc(parents: FiberNode[], selection: Selector[]): boolean;
export declare function getStyle(fiber: FiberNode, rules?: Rules[]): {};
export declare function getParents(fiber: FiberNode, parents?: FiberNode[]): FiberNode[];
export declare function StyleConsumer<T extends Component | FunctionComponent | {}>(Comp: T, tagName?: string): Constructor<T & Component<{
    className?: string;
}>>;
export declare type Style = Record<string, string | number>;
