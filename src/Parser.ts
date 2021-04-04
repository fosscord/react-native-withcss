import css, { Declaration, Rule } from "css";
import { Rules, Selector } from "./Types";
import transform from "css-to-react-native";

const SPLIT_CSS = /(?=[.#])/g;

function handleRule(rule: Rule): Rules | undefined {
	// @ts-ignore
	if (!rule) return;
	const type = rule.type as string;
	if (type !== "rule") {
		if (type !== "media") return;

		return {
			type: "media",
			// @ts-ignore
			media: rule.media,
			// @ts-ignore
			rules: rule.rules.map(handleRule),
		};
	}
	const selectors: Selector[][] = [];
	const preDeclarations: any = {}; // used for :root css variables
	const declarationsArray: [string, string][] = [];

	rule.declarations?.forEach((decl: Declaration) => {
		if (!decl.property || !decl.value) return;
		if (decl.property.startsWith("--") || decl.value.startsWith("var(")) {
			preDeclarations[decl.property] = decl.value;
			return;
		}
		declarationsArray.push([decl.property, decl.value]);
	});

	const declarations = transform(declarationsArray) as Record<string, string>;

	rule.selectors?.forEach((selector: string) => {
		const sel: Selector[] = [];
		selector.split(" ").forEach((element) => {
			var tag = undefined;
			var id = undefined;
			var classes: string[] = [];

			element.split(SPLIT_CSS).forEach((part) => {
				if (part.startsWith(".")) {
					classes.push(part.slice(1));
				} else if (part.startsWith("#")) {
					id = part.slice(1);
				} else {
					tag = part;
				}
			});
			sel.push({ tag, id, classes });
		});
		selectors.push(sel);
	});

	return { selectors, declarations, type: type };
}

export function parse(str: string): Rules[] {
	const { stylesheet } = css.parse(str, { silent: true });
	if (!stylesheet) return [];

	const rules: Rules[] = [];
	console.log(stylesheet);

	stylesheet.rules.forEach((r: Rule) => {
		const result = handleRule(r);
		if (!result) return;
		rules.push(result);
	});

	return rules;
}
