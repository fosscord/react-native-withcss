"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = void 0;
var css_1 = __importDefault(require("css"));
var css_to_react_native_1 = __importDefault(require("css-to-react-native"));
var SPLIT_CSS = /(?=[.#])/g;
function handleRule(rule) {
    var _a, _b;
    // @ts-ignore
    if (!rule)
        return;
    var type = rule.type;
    if (type !== "rule") {
        if (type !== "media")
            return;
        return {
            type: "media",
            // @ts-ignore
            media: rule.media,
            // @ts-ignore
            rules: rule.rules.map(handleRule),
        };
    }
    var selectors = [];
    var preDeclarations = {}; // used for :root css variables
    var declarationsArray = [];
    (_a = rule.declarations) === null || _a === void 0 ? void 0 : _a.forEach(function (decl) {
        if (!decl.property || !decl.value)
            return;
        if (decl.property.startsWith("--")) {
            preDeclarations[decl.property] = decl.value;
            return;
        }
        declarationsArray.push([decl.property, decl.value]);
    });
    var declarations = css_to_react_native_1.default(declarationsArray);
    (_b = rule.selectors) === null || _b === void 0 ? void 0 : _b.forEach(function (selector) {
        var sel = [];
        selector.split(" ").forEach(function (element) {
            var tag = undefined;
            var id = undefined;
            var classes = [];
            element.split(SPLIT_CSS).forEach(function (part) {
                if (part.startsWith(".")) {
                    classes.push(part.slice(1));
                }
                else if (part.startsWith("#")) {
                    id = part.slice(1);
                }
                else {
                    tag = part;
                }
            });
            sel.push({ tag: tag, id: id, classes: classes });
        });
        selectors.push(sel);
    });
    return { selectors: selectors, declarations: declarations, type: type };
}
function parse(str) {
    var stylesheet = css_1.default.parse(str, { silent: true }).stylesheet;
    if (!stylesheet)
        return [];
    var rules = [];
    console.log(stylesheet);
    stylesheet.rules.forEach(function (r) {
        var result = handleRule(r);
        if (!result)
            return;
        rules.push(result);
    });
    return rules;
}
exports.parse = parse;
