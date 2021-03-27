import React from "react";
import RN from "react-native";
import ClassEnable from "./ClassEnable";
import StylesProvider from "./StylesProvider";

export { ClassEnable, StylesProvider };

// export all base component

export const ActivityIndicator = ClassEnable<typeof RN.ActivityIndicator>(RN.ActivityIndicator, "ActivityIndicator");
// export const ActivityIndicatorIOS = ClassEnable(RN.ActivityIndicatorIOS, 'ActivityIndicatorIOS')
// export const ART = ClassEnable(RN.ART, 'ART')
export const Button = ClassEnable<typeof RN.Button>(RN.Button, "Button");
export const DatePickerIOS = ClassEnable<typeof RN.DatePickerIOS>(RN.DatePickerIOS, "DatePickerIOS");
export const DrawerLayoutAndroid = ClassEnable<typeof RN.DrawerLayoutAndroid>(
	RN.DrawerLayoutAndroid,
	"DrawerLayoutAndroid"
);
export const Image = ClassEnable<typeof RN.Image>(RN.Image, "Image");
export const ImageBackground = ClassEnable<typeof RN.ImageBackground>(RN.ImageBackground, "ImageBackground");
export const ImageEditor = ClassEnable<typeof RN.ImageEditor>(RN.ImageEditor, "ImageEditor");
export const ImageStore = ClassEnable<typeof RN.ImageStore>(RN.ImageStore, "ImageStore");
export const KeyboardAvoidingView = ClassEnable<typeof RN.KeyboardAvoidingView>(
	RN.KeyboardAvoidingView,
	"KeyboardAvoidingView"
);
export const ListView = ClassEnable<typeof RN.ListView>(RN.ListView, "ListView");
// export const MapView = ClassEnable<typeof RN.MapView>(RN.MapView, 'MapView')
export const Modal = ClassEnable<typeof RN.Modal>(RN.Modal, "Modal");
export const NavigatorIOS = ClassEnable<typeof RN.NavigatorIOS>(RN.NavigatorIOS, "NavigatorIOS");
export const Picker = ClassEnable<typeof RN.Picker>(RN.Picker, "Picker");
export const PickerIOS = ClassEnable<typeof RN.PickerIOS>(RN.PickerIOS, "PickerIOS");
export const ProgressBarAndroid = ClassEnable<typeof RN.ProgressBarAndroid>(
	RN.ProgressBarAndroid,
	"ProgressBarAndroid"
);
export const ProgressViewIOS = ClassEnable<typeof RN.ProgressViewIOS>(RN.ProgressViewIOS, "ProgressViewIOS");
export const ScrollView = ClassEnable<typeof RN.ScrollView>(RN.ScrollView, "ScrollView");
export const SegmentedControlIOS = ClassEnable<typeof RN.SegmentedControlIOS>(
	RN.SegmentedControlIOS,
	"SegmentedControlIOS"
);
export const Slider = ClassEnable<typeof RN.Slider>(RN.Slider, "Slider");
// export const SliderIOS = ClassEnable<typeof RN.SliderIOS>(RN.SliderIOS, 'SliderIOS')
export const SnapshotViewIOS = ClassEnable<typeof RN.SnapshotViewIOS>(RN.SnapshotViewIOS, "SnapshotViewIOS");
export const Switch = ClassEnable<typeof RN.Switch>(RN.Switch, "Switch");
export const RecyclerViewBackedScrollView = ClassEnable<typeof RN.RecyclerViewBackedScrollView>(
	RN.RecyclerViewBackedScrollView,
	"RecyclerViewBackedScrollView"
);
export const RefreshControl = ClassEnable<typeof RN.RefreshControl>(RN.RefreshControl, "RefreshControl");
export const SafeAreaView = ClassEnable<typeof RN.SafeAreaView>(RN.SafeAreaView, "SafeAreaView");
export const StatusBar = ClassEnable<typeof RN.StatusBar>(RN.StatusBar, "StatusBar");
export const SwipeableListView = ClassEnable<typeof RN.SwipeableListView>(RN.SwipeableListView, "SwipeableListView");
// export const SwitchAndroid = ClassEnable<typeof RN.SwitchAndroid>(RN.SwitchAndroid, 'SwitchAndroid')
export const SwitchIOS = ClassEnable<typeof RN.SwitchIOS>(RN.SwitchIOS, "SwitchIOS");
export const TabBarIOS = ClassEnable<typeof RN.TabBarIOS>(RN.TabBarIOS, "TabBarIOS");
export const Text = ClassEnable<typeof RN.Text>(RN.Text, "Text");
export const TextInput = ClassEnable<typeof RN.TextInput>(RN.TextInput, "TextInput");
export const ToastAndroid = ClassEnable<typeof RN.ToastAndroid>(RN.ToastAndroid, "ToastAndroid");
export const ToolbarAndroid = ClassEnable<typeof RN.ToolbarAndroid>(RN.ToolbarAndroid, "ToolbarAndroid");
export const Touchable = ClassEnable<typeof RN.Touchable>(RN.Touchable, "Touchable");
export const TouchableHighlight = ClassEnable<typeof RN.TouchableHighlight>(
	RN.TouchableHighlight,
	"TouchableHighlight"
);
export const TouchableNativeFeedback = ClassEnable<typeof RN.TouchableNativeFeedback>(
	RN.TouchableNativeFeedback,
	"TouchableNativeFeedback"
);
export const TouchableOpacity = ClassEnable<typeof RN.TouchableOpacity>(RN.TouchableOpacity, "TouchableOpacity");
export const TouchableWithoutFeedback = ClassEnable<typeof RN.TouchableWithoutFeedback>(
	RN.TouchableWithoutFeedback,
	"TouchableWithoutFeedback"
);
export const View = ClassEnable<typeof RN.View>(RN.View, "View");
export const ViewPagerAndroid = ClassEnable<typeof RN.ViewPagerAndroid>(RN.ViewPagerAndroid, "ViewPagerAndroid");
// export const WebView = ClassEnable<typeof RN.WebView>(RN.WebView, 'WebView')
export const FlatList = ClassEnable<typeof RN.FlatList>(RN.FlatList, "FlatList");
export const SectionList = ClassEnable<typeof RN.SectionList>(RN.SectionList, "SectionList");
export const VirtualizedList = ClassEnable<typeof RN.VirtualizedList>(RN.VirtualizedList, "VirtualizedList");
