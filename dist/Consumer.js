"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyleConsumer = exports.getParents = exports.getStyle = exports.childStyleCalc = exports.match = void 0;
var react_1 = __importStar(require("react"));
var ThemeContext_1 = require("./ThemeContext");
require("missing-native-js-functions");
// TODO: for react native, check @media rules
// check if the fiber node matches the tag, id or classes
function match(fiber, selector) {
    var _a;
    if (!fiber)
        return false;
    var props = fiber.memoizedProps || {};
    var tagName = typeof fiber.type === "string" ? fiber.type : fiber.type.name;
    var classNames = props.className || props.class || "";
    var classes = classNames.split(" ");
    if (props.id === selector.id)
        return true;
    if (props.tag === tagName)
        return true;
    if ((_a = selector.classes) === null || _a === void 0 ? void 0 : _a.some(function (x) { return classes.includes(x); }))
        return true;
    return false;
}
exports.match = match;
// check recursivly if the selection path matches any parent path combinaten
function childStyleCalc(parents, selection) {
    var e_1, _a, e_2, _b;
    if (selection.length > parents.length)
        return false; // rule can't match as the selector is longer as the real component path
    if (selection.length === 0) {
        return true;
    } // real component matches selection and parent path -> return true
    try {
        for (var _c = __values(selection.entries()), _d = _c.next(); !_d.done; _d = _c.next()) {
            var _e = __read(_d.value, 2), selectionI = _e[0], selector = _e[1];
            try {
                for (var _f = (e_2 = void 0, __values(parents.entries())), _g = _f.next(); !_g.done; _g = _f.next()) {
                    var _h = __read(_g.value, 2), parentI = _h[0], parent_1 = _h[1];
                    if (selectionI > parents.length)
                        break;
                    // check if any parent matches the selection
                    if (!match(parent_1, selector))
                        continue; // didn't match -> skip
                    return childStyleCalc(parents.slice(parentI + 1), selection.slice(selectionI + 1)); // parent matched path -> check further
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return false;
}
exports.childStyleCalc = childStyleCalc;
// check if any styles match for this fiber node and return them
function getStyle(fiber, rules) {
    var e_3, _a;
    if (rules === void 0) { rules = []; }
    if (!fiber)
        return {};
    var parents = getParents(fiber); // parents and element itself
    var style = {};
    try {
        for (var rules_1 = __values(rules), rules_1_1 = rules_1.next(); !rules_1_1.done; rules_1_1 = rules_1.next()) {
            var rule = rules_1_1.value;
            if (!rule || !rule.selectors)
                continue;
            // check if any rule matches the selectors
            var matches = rule.selectors.some(function (selection) {
                var last = selection.last();
                if (last && !match(fiber, last))
                    return false;
                return childStyleCalc(parents, selection.reverse());
            });
            if (matches) {
                // apply/merge the style
                style = __assign(__assign({}, style), rule.declarations);
            }
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (rules_1_1 && !rules_1_1.done && (_a = rules_1.return)) _a.call(rules_1);
        }
        finally { if (e_3) throw e_3.error; }
    }
    return style;
}
exports.getStyle = getStyle;
// get an returns all parents of the fiber node in order: root -> child
function getParents(fiber, parents) {
    if (parents === void 0) { parents = []; }
    parents.push(fiber);
    if (fiber === null || fiber === void 0 ? void 0 : fiber._debugOwner)
        return getParents(fiber._debugOwner, parents);
    return parents;
}
exports.getParents = getParents;
function StyleConsumer(Comp, tagName) {
    if (!Comp)
        throw new Error("Please specify a component");
    // @ts-ignore
    var name = tagName || Comp.name;
    var StyleConsumer = /** @class */ (function (_super) {
        __extends(StyleConsumer, _super);
        function StyleConsumer() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.render = function () {
                var start = performance.now();
                // @ts-ignore
                var cssStyles = getStyle(_this._reactInternals || _this._reactInternalFiber, _this.context);
                // @ts-ignore
                var style = __assign(__assign({}, cssStyles), _this.props.style);
                console.log("[Style] calc: " + (performance.now() - start) + "ms", {
                    style: style,
                    context: _this.context,
                    name: name,
                    this: _this,
                });
                // @ts-ignore
                return react_1.default.createElement(Comp, __assign(__assign({}, _this.props), { style: style }), _this.props.children);
            };
            return _this;
        }
        StyleConsumer.contextType = ThemeContext_1.ThemeContext;
        return StyleConsumer;
    }(react_1.Component));
    Object.defineProperties(StyleConsumer, {
        name: {
            value: name,
        },
    });
    // @ts-ignore
    return StyleConsumer;
}
exports.StyleConsumer = StyleConsumer;
