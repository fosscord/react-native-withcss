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
export default function ClassEnable<T>(Comp: T, displayName?: string): T;
