"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactNativeWithCssBabelPlugin = void 0;
// @ts-nocheck
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var Parser_1 = require("./Parser");
function defaultResolve(src, file) {
    return path_1.default.resolve(path_1.default.dirname(file), src);
}
var resolve;
function ReactNativeWithCssBabelPlugin(opt) {
    var t = opt.types;
    var template = opt.template;
    return {
        manipulateOptions: function (rp) {
            var resolveModuleSource = rp.resolveModuleSource;
            resolve = resolveModuleSource || defaultResolve;
        },
        visitor: {
            ImportDeclaration: {
                exit: function (curPath, state) {
                    var opts = state.opts;
                    var file = state.file;
                    var importPath = curPath.node.source.value;
                    var jsFilename = file.opts.filename;
                    if (importPath.endsWith(".css")) {
                        prodHandler(curPath, opts, importPath, jsFilename, template, t);
                    }
                },
            },
        },
    };
}
exports.ReactNativeWithCssBabelPlugin = ReactNativeWithCssBabelPlugin;
/**
 *  In prod, the js's object which is generated by the related css file will write directly in the js file.
 * @param curPath
 * @param opts
 * @param importPath
 * @param jsFilename
 * @param template
 * @param t
 */
function prodHandler(curPath, opts, importPath, jsFilename, template, t) {
    var absPath = resolve(importPath, jsFilename);
    var cssStr = fs_1.default.readFileSync(absPath, { encoding: "utf8" });
    var styles = Parser_1.parse(cssStr);
    curPath.replaceWithSourceString("(" + JSON.stringify(styles) + ").forEach(s=>globalThis.styles.push(s))");
}
