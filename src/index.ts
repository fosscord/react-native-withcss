// @ts-nocheck
import {
	ActivityIndicator as RNActivityIndicator,
	View as RNView,
	Button as RNButton,
	FlatList as RNFlatList,
	Image as RNImage,
	ImageBackground as RNImageBackground,
	KeyboardAvoidingView as RNKeyboardAvoidingView,
	Modal as RNModal,
	Pressable as RNPressable,
	RefreshControl as RNRefreshControl,
	ScrollView as RNScrollView,
	SectionList as RNSectionList,
	StatusBar as RNStatusBar,
	Switch as RNSwitch,
	Text as RNText,
	TextInput as RNTextInput,
	TouchableHighlight as RNTouchableHighlight,
	TouchableOpacity as RNTouchableOpacity,
	TouchableWithoutFeedback as RNTouchableWithoutFeedback,
	VirtualizedList as RNVirtualizedList,
	DrawerLayoutAndroid as RNDrawerLayoutAndroid,
	TouchableNativeFeedback as RNTouchableNativeFeedback,
	InputAccessoryView as RNInputAccessoryView,
	SafeAreaView as RNSafeAreaView,
} from "react-native";
import { StyleConsumer } from "./Consumer";
export * from "./Consumer";
export * from "./ThemeContext";

export const View = StyleConsumer<RNView>(RNView, "View");
export const ActivityIndicator = StyleConsumer<RNActivityIndicator>(RNActivityIndicator, "ActivityIndicator");
export const Button = StyleConsumer<RNButton>(RNButton, "Button");
export const FlatList = StyleConsumer<RNFlatList>(RNFlatList, "FlatList");
export const Image = StyleConsumer<RNImage>(RNImage, "Image");
export const ImageBackground = StyleConsumer<RNImageBackground>(RNImageBackground, "ImageBackground");
export const KeyboardAvoidingView = StyleConsumer<RNKeyboardAvoidingView>(
	RNKeyboardAvoidingView,
	"KeyboardAvoidingView"
);
export const Modal = StyleConsumer<RNModal>(RNModal, "Modal");
export const Pressable = StyleConsumer<RNPressable>(RNPressable, "Pressable");
export const RefreshControl = StyleConsumer<RNRefreshControl>(RNRefreshControl, "RefreshControl");
export const ScrollView = StyleConsumer<RNScrollView>(RNScrollView, "ScrollView");
export const SectionList = StyleConsumer<RNSectionList>(RNSectionList, "SectionList");
export const StatusBar = StyleConsumer<RNStatusBar>(RNStatusBar, "StatusBar");
export const Switch = StyleConsumer<RNSwitch>(RNSwitch, "Switch");
export const Text = StyleConsumer<RNText>(RNText, "Text");
export const TextInput = StyleConsumer<RNTextInput>(RNTextInput, "TextInput");
export const TouchableHighlight = StyleConsumer<RNTouchableHighlight>(RNTouchableHighlight, "TouchableHighlight");
export const TouchableOpacity = StyleConsumer<RNTouchableOpacity>(RNTouchableOpacity, "TouchableOpacity");
export const TouchableWithoutFeedback = StyleConsumer<RNTouchableWithoutFeedback>(
	RNTouchableWithoutFeedback,
	"TouchableWithoutFeedback"
);
export const VirtualizedList = StyleConsumer<RNVirtualizedList>(RNVirtualizedList, "VirtualizedList");
export const DrawerLayoutAndroid = StyleConsumer<RNDrawerLayoutAndroid>(RNDrawerLayoutAndroid, "DrawerLayoutAndroid");
export const TouchableNativeFeedback = StyleConsumer<RNTouchableNativeFeedback>(
	RNTouchableNativeFeedback,
	"TouchableNativeFeedback"
);
export const InputAccessoryView = StyleConsumer<RNInputAccessoryView>(RNInputAccessoryView, "InputAccessoryView");
export const SafeAreaView = StyleConsumer<RNSafeAreaView>(RNSafeAreaView, "SafeAreaView");
