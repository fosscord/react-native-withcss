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
/**
 * all inheritable properties.for filtering procedure below.
 * @type {Set<string>}
 */
var inheritStyle = new Set([
    "font",
    "fontFamily",
    "fontWeight",
    "fontSize",
    "fontStyle",
    "fontVariant",
    "whiteSpace",
    "letterSpacing",
    "fontStretch",
    "fontSizeAdjust",
    "textIndent",
    "textDecoration",
    "textTransform",
    "textAlign",
    "textShadow",
    "lineHeight",
    "wordSpacing",
    "direction",
    "color",
    "visibility",
    "listStyleType",
    "listStyleImage",
    "listStylePosition",
    "listStyle",
    "quotes",
    "cursor",
]);
/**
 * constrain style,to remove illegal style warning,for example,
 * setting fontSize for View may cause warning in debugger mode.
 * @param localStyle style waiting for constraining.
 * @param legalSet  specify legal style set for specify React Native element,eg. View or Text
 */
function legalStyle(localStyle, legalSet) {
    //flatten array, easy for manipulating data
    var tmp = flattenArray(localStyle);
    var obj = {};
    for (var k in tmp) {
        //save legal declaration to output
        if (legalSet.has(k))
            obj[k] = tmp[k];
    }
    return obj;
}
/**
 * flatten deep array to plain object
 * @param input may deep array,e.g. [{color:'red'},[{fontSize:11}]]
 * @param ans output plain object,e,g. {color:'red',fontSize:11}
 * @returns plain object mentioned above
 */
function flattenArray(input, ans) {
    if (ans === void 0) { ans = {}; }
    if (!input || !Array.isArray(input))
        return input || {};
    for (var k in input) {
        //recursive logic
        if (Array.isArray(input[k])) {
            ans = flattenArray(input[k], ans);
        }
        else {
            ans = Object.assign({}, ans, input[k]);
        }
    }
    return ans;
}
/**
 * generating style result according to path info which contains clz and tag info from root element to self.
 * @param path recording clz and tag info from root element to self
 * @param ref style object ref,we use sharing structure,so may separate in some place.
 * @param ans common array reference,for saving needed data
 */
var generateCommon = function (path, ref, ans) {
    var localPath = __spreadArray([], __read(path));
    while (localPath.length > 0) {
        var key = localPath.pop();
        var clz = (key.clz || "").trim();
        clz = splitClzIfNeed(clz);
        var tag = key.tag;
        //priority handle descendant needed case
        if (Array.isArray(clz)) {
            for (var ind in clz) {
                var e = clz[ind];
                if (ref.hasOwnProperty(e)) {
                    generateStyle(ref[e], ans);
                    ref = ref[e];
                    return;
                }
            }
        } //simple clz case
        else if (ref.hasOwnProperty(clz)) {
            generateStyle(ref[clz], ans);
            ref = ref[clz];
        } //handle tag case last
        else if (ref.hasOwnProperty(tag)) {
            generateStyle(ref[tag], ans);
            ref = ref[tag];
        }
    }
};
/**
 * count specific character in string
 * @param str target string
 * @param ch specific character
 * @returns {number} characters count
 */
function countCharFromStr(str, ch) {
    var strArr = __spreadArray([], __read(str));
    var count = 0;
    for (var k in strArr) {
        if (strArr[k] === ch) {
            count++;
        }
    }
    return count;
}
/**
 * split className in element props,to support
 * descendant selector
 * @param clz input className,for example "a b c"
 * @returns {*}
 */
var splitClzIfNeed = function (clz) {
    //remove extra space
    clz = clz.trim();
    if (countCharFromStr(clz, " ") === 0) {
        return "." + clz;
    }
    //judge whether descendant needed clz according to space's count
    var arr = clz
        .split(" ")
        .sort()
        .map(function (e) { return "." + e; });
    var arrbk = __spreadArray([], __read(arr));
    for (var i = 2; i <= arrbk.length; i++) {
        arr.push(arrbk.slice(0, i).join(""));
    }
    //return clz array,which map to [.a,.b,.c] for above case
    return arr;
};
/**
 * extract info from style object
 * @param styleItem style object,we say deepest reference which can be extracted as style data
 * in style object as styleItem
 * @param ans array saving result, we use reference to store data easily
 */
var generateStyle = function (styleItem, ans) {
    if (!styleItem)
        return;
    var a = styleItem["_#_"];
    if (a)
        ans.push(a);
};
/**
 * search target style content in style object according to path info
 * @param path we record clz,tag info from root element to self,organized as array.
 * each element organized as {clz:'clz_a',tag:'tag_a'}
 * @param styleMap we use style object to save css file info,this object,save same suffix rule in one chain
 * for example, .a .b and .a .c may share .a ascendant in 2 chain,organized as below
 * .b - .a
 * .c /
 *
 * @returns {Array}
 */
function queryMap(path, styleMap) {
    if (styleMap === void 0) { styleMap = {}; }
    var localPath = __spreadArray([], __read(path));
    var totalRef = styleMap;
    var ans = [];
    var key = localPath.pop();
    var clz = (key.clz || "").trim();
    //whether descendant-clz
    clz = splitClzIfNeed(clz);
    //tag info
    var tag = key.tag;
    //prior setting tag info,so we calculate for clz latter will override this result
    if (totalRef[tag]) {
        generateStyle(totalRef[tag], ans);
        var tagRef = styleMap[tag];
        //tag chain in style object
        generateCommon(localPath, tagRef, ans);
    }
    /*
        descendant clz,we search path from root element to self
        e.g. clz array may[.a,.b],which means element with .b is descendant for element with .a
        so search from .a
     */
    if (Array.isArray(clz)) {
        for (var ind in clz) {
            var innerClz = clz[ind];
            if (totalRef.hasOwnProperty(innerClz)) {
                generateStyle(totalRef[innerClz], ans);
                var clzRef = totalRef[innerClz];
                generateCommon(localPath, clzRef, ans);
            }
        }
        /*
            just pure className such as .a
         */
    }
    else if (totalRef.hasOwnProperty(clz)) {
        generateStyle(totalRef[clz], ans);
        var clzRef = totalRef[clz];
        generateCommon(localPath, clzRef, ans);
    }
    return ans;
}
/**
 * query style from style object structure
 * @param path clz and tag info from root element to self
 * @param styles map structure
 * @returns self's style
 */
export function getStyle(path, rawStyles, styles) {
    path = path.filter(function (e) { return !!e; });
    var result = queryMap(path, styles);
    return flattenArray(result);
}
/**
 * filter those inheritable properties
 * @param rawStyle all style waiting for filtering
 */
export var filterInheritStyle = function (rawStyle) {
    //inheritStyle : all inheritable properties set
    return legalStyle(rawStyle, inheritStyle);
};
