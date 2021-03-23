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
export default function StylesProvider(styleMap: any): any {
	return function CompHoc(Comp: any) {
		class CompHocClz extends React.Component {
			static childContextTypes = {
				styleMap: PropTypes.object,
			};

			getChildContext() {
				return {
					styleMap,
				};
			}

			render() {
				// @ts-ignore
				return React.createElement(Comp, { ...this.props });
			}
		}

		// @ts-ignore
		CompHocClz.displayName = Comp.displayName;
		return hoistStatics(CompHocClz, Comp);
	};
}
