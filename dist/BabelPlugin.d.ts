export declare function ReactNativeWithCssBabelPlugin(opts: any): {
    manipulateOptions: (rp: any) => void;
    visitor: {
        ImportDeclaration: {
            exit: (curPath: any, state: any) => void;
        };
    };
};
