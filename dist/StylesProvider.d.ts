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
export default function StylesProvider(styleMap: any): any;
