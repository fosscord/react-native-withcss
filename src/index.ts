// @ts-nocheck
import RN from "react-native";
import { StyleConsumer } from "./Consumer";
export * from "./Consumer";
export * from "./Parser";
export * from "./ThemeContext";
console.log(RN.View.name);

export const View = StyleConsumer<RN.View>(RN.View);
export const ActivityIndicator = StyleConsumer<RN.ActivityIndicator>(RN.ActivityIndicator);
export const Button = StyleConsumer<RN.Button>(RN.Button);
export const FlatList = StyleConsumer<RN.FlatList>(RN.FlatList);
export const Image = StyleConsumer<RN.Image>(RN.Image);
export const ImageBackground = StyleConsumer<RN.ImageBackground>(RN.ImageBackground);
export const KeyboardAvoidingView = StyleConsumer<RN.KeyboardAvoidingView>(RN.KeyboardAvoidingView);
export const Modal = StyleConsumer<RN.Modal>(RN.Modal);
export const Pressable = StyleConsumer<RN.Pressable>(RN.Pressable);
export const RefreshControl = StyleConsumer<RN.RefreshControl>(RN.RefreshControl);
export const ScrollView = StyleConsumer<RN.ScrollView>(RN.ScrollView);
export const SectionList = StyleConsumer<RN.SectionList>(RN.SectionList);
export const StatusBar = StyleConsumer<RN.StatusBar>(RN.StatusBar);
export const Switch = StyleConsumer<RN.Switch>(RN.Switch);
export const Text = StyleConsumer<RN.Text>(RN.Text);
export const TextInput = StyleConsumer<RN.TextInput>(RN.TextInput);
export const TouchableHighlight = StyleConsumer<RN.TouchableHighlight>(RN.TouchableHighlight);
export const TouchableOpacity = StyleConsumer<RN.TouchableOpacity>(RN.TouchableOpacity);
export const TouchableWithoutFeedback = StyleConsumer<RN.TouchableWithoutFeedback>(RN.TouchableWithoutFeedback);
export const VirtualizedList = StyleConsumer<RN.VirtualizedList>(RN.VirtualizedList);
export const DrawerLayoutAndroid = StyleConsumer<RN.DrawerLayoutAndroid>(RN.DrawerLayoutAndroid);
export const TouchableNativeFeedback = StyleConsumer<RN.TouchableNativeFeedback>(RN.TouchableNativeFeedback);
export const InputAccessoryView = StyleConsumer<RN.InputAccessoryView>(RN.InputAccessoryView);
export const SafeAreaView = StyleConsumer<RN.SafeAreaView>(RN.SafeAreaView);
