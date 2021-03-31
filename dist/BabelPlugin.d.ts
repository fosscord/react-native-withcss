export declare function ReactNativeWithCssBabelPlugin(opt: any): {
    manipulateOptions: (rp: any) => void;
    visitor: {
        ImportDeclaration: {
            exit: (curPath: any, state: any) => void;
        };
    };
};
