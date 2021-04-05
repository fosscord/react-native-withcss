"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyleProvider = void 0;
var react_1 = __importDefault(require("react"));
var css_mediaquery_1 = __importDefault(require("css-mediaquery"));
var react_native_1 = require("react-native");
var hooks_1 = require("@react-native-community/hooks");
var ThemeContext_1 = require("./ThemeContext");
var react_2 = require("react");
// @ts-ignore
if (!globalThis.styles)
    globalThis.styles = [];
function StyleProvider(props) {
    var window = react_native_1.useWindowDimensions();
    var colorScheme = react_native_1.useColorScheme();
    var _a = hooks_1.useDeviceOrientation(), portrait = _a.portrait, landscape = _a.landscape;
    var _b = hooks_1.useAccessibilityInfo(), reduceTransparencyEnabled = _b.reduceTransparencyEnabled, reduceMotionEnabled = _b.reduceMotionEnabled, invertColorsEnabled = _b.invertColorsEnabled;
    // @ts-ignore
    var _c = __read(react_2.useState([globalThis.styles]), 2), styles = _c[0], setStyles = _c[1];
    react_2.useEffect(function () {
        // @ts-ignore
        var pendingStyles = globalThis.styles;
        pendingStyles.filter(function (x) {
            if (!x.media || !x.rules)
                return true;
            if (css_mediaquery_1.default.match(x.media, {
                orientation: portrait ? "portrait" : landscape ? "landscape" : "",
                width: window.width,
                height: window.height,
                "aspect-ratio": window.scale,
                "device-height": window.height,
                "device-width": window.width,
                "device-aspect-ratio": window.scale,
                "prefers-color-scheme": colorScheme,
                "prefers-reduced-transparency": reduceTransparencyEnabled ? "reduce" : "no-preference",
                "prefers-reduced-motion": reduceMotionEnabled ? "reduce" : "no-preference",
                "inverted-colors": invertColorsEnabled ? "inverted" : "none",
            })) {
                // @ts-ignore
                pendingStyles = pendingStyles.concat(x.rules);
            }
            return false;
        });
        setStyles(pendingStyles);
        // @ts-ignore
    }, globalThis.styles);
    return react_1.default.createElement(ThemeContext_1.ThemeContext.Provider, __assign({ value: styles }, props), props === null || props === void 0 ? void 0 : props.children);
}
exports.StyleProvider = StyleProvider;
