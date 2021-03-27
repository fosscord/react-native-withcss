var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
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
import React from "react";
import PropTypes from "prop-types";
import hoistStatics from "hoist-non-react-statics";
/**
 * provide styles, all descendants component can use these styles.
 *
 * We suggest annotation way to use `StylesProvider`, like this:
 * ```javascript
 * import indexCss from './index.css'
 * @StylesProvider(indexCss)
 * class A extends React.Component{}
 * ```
 * @param styleMap
 * @returns {function(*=)}
 * @constructor
 */
export default function StylesProvider(styleMap) {
    return function CompHoc(Comp) {
        var CompHocClz = /** @class */ (function (_super) {
            __extends(CompHocClz, _super);
            function CompHocClz() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CompHocClz.prototype.getChildContext = function () {
                return {
                    styleMap: styleMap,
                };
            };
            CompHocClz.prototype.render = function () {
                // @ts-ignore
                return React.createElement(Comp, __assign({}, this.props));
            };
            CompHocClz.childContextTypes = {
                styleMap: PropTypes.object,
            };
            return CompHocClz;
        }(React.Component));
        // @ts-ignore
        CompHocClz.displayName = Comp.displayName;
        return hoistStatics(CompHocClz, Comp);
    };
}
