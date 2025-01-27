import React, { Component, FunctionComponent } from "react";
import { ThemeContext } from "./ThemeContext";
import { Rules, Selector } from "./Types";
import { Constructor, StyleSheet } from "react-native";
import "missing-native-js-functions";
// Style Consumer calculates if the component matches any css selector and applies it style

// The FiberNode is an internal react representation of a react component node
export type FiberNode = any;
// TODO: for react native, check @media rules

// check if the fiber node matches the tag, id or classes
export function match(fiber: FiberNode, selector: Selector) {
	if (!fiber) return false;

	const props = fiber.memoizedProps || {};
	const tagName = typeof fiber.type === "string" ? fiber.type : fiber.type.name;
	const classNames = props.className || props.class || "";
	const classes = classNames.split(" ");

	if (props.id === selector.id) return true;
	if (props.tag === tagName) return true;
	if (selector.classes?.some((x) => classes.includes(x))) return true;

	return false;
}

// check recursivly if the selection path matches any parent path combinaten
export function childStyleCalc(parents: FiberNode[], selection: Selector[]): boolean {
	if (selection.length > parents.length) return false; // rule can't match as the selector is longer as the real component path
	if (selection.length === 0) {
		return true;
	} // real component matches selection and parent path -> return true

	for (const [selectionI, selector] of selection.entries()) {
		for (const [parentI, parent] of parents.entries()) {
			if (selectionI > parents.length) break;
			// check if any parent matches the selection
			if (!match(parent, selector)) continue; // didn't match -> skip
			return childStyleCalc(parents.slice(parentI + 1), selection.slice(selectionI + 1)); // parent matched path -> check further
		}
	}

	return false;
}

// check if any styles match for this fiber node and return them
export function getStyle(fiber: FiberNode, rules: Rules[] = []) {
	if (!fiber) return {};
	const parents = getParents(fiber); // parents and element itself
	var style = {};

	for (const rule of rules) {
		if (!rule || !rule.selectors) continue;

		// check if any rule matches the selectors
		const matches = rule.selectors.some((selection) => {
			const last = selection.last();
			if (last && !match(fiber, last)) return false;

			return childStyleCalc(parents, selection.reverse());
		});

		if (matches) {
			// apply/merge the style
			style = { ...style, ...rule.declarations };
		}
	}

	return style;
}

// get an returns all parents of the fiber node in order: root -> child
export function getParents(fiber: FiberNode, parents: FiberNode[] = []): FiberNode[] {
	parents.push(fiber);
	if (fiber?._debugOwner) return getParents(fiber._debugOwner, parents);
	return parents;
}

export function StyleConsumer<T extends Component | FunctionComponent | {}>(
	Comp: T,
	tagName?: string
): Constructor<T & Component<{ className?: string }>> {
	if (!Comp) throw new Error("Please specify a component");
	// @ts-ignore
	const name = tagName || Comp.name;

	class StyleConsumer extends Component {
		static contextType = ThemeContext;

		render = () => {
			const start = performance.now();
			// @ts-ignore
			const cssStyles = getStyle(this._reactInternals || this._reactInternalFiber, this.context);

			// @ts-ignore
			const style = { ...this.props.style, ...cssStyles };

			console.log(`[Style] calc: ${performance.now() - start}ms`, {
				style,
				context: this.context,
				name,
				this: this,
			});

			// @ts-ignore
			return React.createElement(Comp, { ...this.props, style }, this.props.children);
		};
	}

	Object.defineProperties(StyleConsumer, {
		name: {
			value: name,
		},
	});

	// @ts-ignore
	return StyleConsumer;
}

export type Style = Record<string, string | number>;
