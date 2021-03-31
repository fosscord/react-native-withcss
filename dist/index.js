"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SafeAreaView = exports.InputAccessoryView = exports.TouchableNativeFeedback = exports.DrawerLayoutAndroid = exports.VirtualizedList = exports.TouchableWithoutFeedback = exports.TouchableOpacity = exports.TouchableHighlight = exports.TextInput = exports.Text = exports.Switch = exports.StatusBar = exports.SectionList = exports.ScrollView = exports.RefreshControl = exports.Pressable = exports.Modal = exports.KeyboardAvoidingView = exports.ImageBackground = exports.Image = exports.FlatList = exports.Button = exports.ActivityIndicator = exports.View = void 0;
// @ts-nocheck
var react_native_1 = require("react-native");
var Consumer_1 = require("./Consumer");
__exportStar(require("./Consumer"), exports);
__exportStar(require("./ThemeContext"), exports);
exports.View = Consumer_1.StyleConsumer(react_native_1.View, "View");
exports.ActivityIndicator = Consumer_1.StyleConsumer(react_native_1.ActivityIndicator, "ActivityIndicator");
exports.Button = Consumer_1.StyleConsumer(react_native_1.Button, "Button");
exports.FlatList = Consumer_1.StyleConsumer(react_native_1.FlatList, "FlatList");
exports.Image = Consumer_1.StyleConsumer(react_native_1.Image, "Image");
exports.ImageBackground = Consumer_1.StyleConsumer(react_native_1.ImageBackground, "ImageBackground");
exports.KeyboardAvoidingView = Consumer_1.StyleConsumer(react_native_1.KeyboardAvoidingView, "KeyboardAvoidingView");
exports.Modal = Consumer_1.StyleConsumer(react_native_1.Modal, "Modal");
exports.Pressable = Consumer_1.StyleConsumer(react_native_1.Pressable, "Pressable");
exports.RefreshControl = Consumer_1.StyleConsumer(react_native_1.RefreshControl, "RefreshControl");
exports.ScrollView = Consumer_1.StyleConsumer(react_native_1.ScrollView, "ScrollView");
exports.SectionList = Consumer_1.StyleConsumer(react_native_1.SectionList, "SectionList");
exports.StatusBar = Consumer_1.StyleConsumer(react_native_1.StatusBar, "StatusBar");
exports.Switch = Consumer_1.StyleConsumer(react_native_1.Switch, "Switch");
exports.Text = Consumer_1.StyleConsumer(react_native_1.Text, "Text");
exports.TextInput = Consumer_1.StyleConsumer(react_native_1.TextInput, "TextInput");
exports.TouchableHighlight = Consumer_1.StyleConsumer(react_native_1.TouchableHighlight, "TouchableHighlight");
exports.TouchableOpacity = Consumer_1.StyleConsumer(react_native_1.TouchableOpacity, "TouchableOpacity");
exports.TouchableWithoutFeedback = Consumer_1.StyleConsumer(react_native_1.TouchableWithoutFeedback, "TouchableWithoutFeedback");
exports.VirtualizedList = Consumer_1.StyleConsumer(react_native_1.VirtualizedList, "VirtualizedList");
exports.DrawerLayoutAndroid = Consumer_1.StyleConsumer(react_native_1.DrawerLayoutAndroid, "DrawerLayoutAndroid");
exports.TouchableNativeFeedback = Consumer_1.StyleConsumer(react_native_1.TouchableNativeFeedback, "TouchableNativeFeedback");
exports.InputAccessoryView = Consumer_1.StyleConsumer(react_native_1.InputAccessoryView, "InputAccessoryView");
exports.SafeAreaView = Consumer_1.StyleConsumer(react_native_1.SafeAreaView, "SafeAreaView");
