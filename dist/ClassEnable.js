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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
// @ts-nocheck
import React from "react";
import PropTypes from "prop-types";
import hoistStatics from "hoist-non-react-statics";
import { legalOutStyle } from "./constants";
import { getStyle, filterInheritStyle } from "./styleutil";
var EMPTY_ARRAY = [];
function legalStyle(localStyle, legalSet) {
    var obj = {};
    for (var k in localStyle) {
        var prop = localStyle[k];
        if (legalSet.has(k))
            obj[k] = prop;
    }
    return obj;
}
/**
 * Give your component the ability of using className，
 * NOTE： you must provide 'displayName', otherwise you cannot use 'Tag Selector'. displayName could be
 * the second function parameters， static 'displayName' property, static 'name' property
 *
 * We suggest annotation way to use `ClassEnable`, like this:
 * ```javascript
 * @ClassEnable
 * class A extends React.Component{}
 * ```
 *
 * @param Comp
 * @param displayName
 * @returns {*}
 * @constructor
 */
export default function ClassEnable(Comp, displayName) {
    if (!Comp)
        return Comp;
    // @ts-ignore
    var compDn = displayName || (Comp === null || Comp === void 0 ? void 0 : Comp.displayName) || Comp.name;
    var ClassEnableInner = /** @class */ (function (_super) {
        __extends(ClassEnableInner, _super);
        function ClassEnableInner() {
            var _this = _super.apply(this, __spreadArray([], __read(arguments))) || this;
            _this.cacheInfo = {
                pathCache: {},
                styleCache: {},
            };
            /**
             * get component path.
             * when cached, return directly. otherwise compute new path
             * @param fatherPath
             * @param clz
             * @param tag
             * @returns {*}
             */
            _this.getInnerPath = function (fatherPath, clz, tag) {
                var _a = _this.cacheInfo.pathCache, oldFp = _a.fatherPath, oldClz = _a.clz, oldTag = _a.tag, result = _a.result;
                if (fatherPath === oldFp && clz === oldClz && tag === oldTag) {
                    return result;
                }
                else {
                    var newResult = __spreadArray(__spreadArray([], __read(fatherPath)), [
                        {
                            clz: clz,
                            tag: tag,
                        },
                    ]);
                    _this.cacheInfo.pathCache = {
                        fatherPath: fatherPath,
                        clz: clz,
                        tag: tag,
                        result: newResult,
                    };
                    return newResult;
                }
            };
            /**
             * get the component path
             * @returns {*}
             */
            _this.getRelPath = function () {
                var getFatherRelPath = _this.context.getRelPath;
                var fatherPath;
                if (getFatherRelPath) {
                    fatherPath = getFatherRelPath();
                }
                else {
                    fatherPath = EMPTY_ARRAY;
                }
                var clz = _this.props.className;
                return _this.getInnerPath(fatherPath, clz, _this.tag);
            };
            /**
             * flatten array
             * @param arr
             * @param ans
             */
            _this.flatten = function (arr, ans) {
                if (ans === void 0) { ans = {}; }
                if (!arr || !arr.length)
                    return ans;
                for (var k in arr) {
                    if (Array.isArray(arr[k])) {
                        ans = _this.flatten(arr[k], ans);
                    }
                    else {
                        ans = Object.assign({}, ans, arr[k]);
                    }
                }
                return ans;
            };
            /**
             * get component style
             * when cached, return directly. otherwise compute new path
             * @param path
             * @param styles
             * @param id
             * @returns {*}
             */
            _this.getInnerMyStyle = function (path, styles, id) {
                var _a = _this.cacheInfo.styleCache, oldStyles = _a.styles, oldId = _a.id, oldPath = _a.path, result = _a.result;
                if (path === oldPath && styles === oldStyles && id === oldId) {
                    return result;
                }
                else {
                    var newStyleN = getStyle(path, "", styles);
                    _this.cacheInfo.styleCache = {
                        styles: styles,
                        id: id,
                        path: path,
                        result: newStyleN,
                    };
                    return newStyleN;
                }
            };
            /**
             * get component style
             * @returns {*}
             */
            _this.getInnerRelStyle = function () {
                var getFatherRelStyle = _this.context.getRelStyle;
                // @ts-ignore
                var id = _this.props.id;
                var styles = _this.context.styleMap;
                var path = _this.getRelPath();
                var myStyle = _this.getInnerMyStyle(path, styles, id);
                var relStyle;
                if (getFatherRelStyle) {
                    var fatherRelStyle = getFatherRelStyle();
                    fatherRelStyle = _this.flatten([fatherRelStyle]);
                    relStyle = Object.assign(fatherRelStyle, myStyle, {});
                }
                else {
                    relStyle = myStyle;
                }
                return relStyle;
            };
            _this.getRelStyle = function () {
                var relStyle = _this.getInnerRelStyle();
                return filterInheritStyle(relStyle);
            };
            // cache path/style info, avoid repeated computation
            _this.tag = compDn;
            if (!compDn) {
                console.warn("ClassEnable component should have a displayName!");
            }
            return _this;
        }
        ClassEnableInner.prototype.getChildContext = function () {
            return {
                getRelStyle: this.getRelStyle,
                getRelPath: this.getRelPath,
            };
        };
        ClassEnableInner.prototype.render = function () {
            var styleN = this.getInnerRelStyle();
            var compLegalSet = legalOutStyle.get(compDn);
            if (compLegalSet) {
                styleN = legalStyle(styleN, legalOutStyle.get(compDn) || legalOutStyle.get("Text"));
            }
            // @ts-ignore
            return React.createElement(Comp, __assign(__assign({}, this.props), { style: [styleN, this.props.style] }));
        };
        ClassEnableInner.displayName = compDn;
        ClassEnableInner.contextTypes = {
            getRelStyle: PropTypes.func,
            getRelPath: PropTypes.func,
            styleMap: PropTypes.object,
        };
        ClassEnableInner.childContextTypes = {
            getRelStyle: PropTypes.func,
            getRelPath: PropTypes.func,
        };
        return ClassEnableInner;
    }(React.Component));
    return hoistStatics(ClassEnableInner, Comp);
}
