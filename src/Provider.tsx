import MediaQuery from "css-mediaquery";
import { useColorScheme, useWindowDimensions } from "react-native";
import { useDeviceOrientation, useAccessibilityInfo } from "@react-native-community/hooks";
import { ThemeContext } from "./ThemeContext";
import { useEffect, useState } from "react";
import { Rules } from "./Types";

// @ts-ignore
if (!globalThis.styles) globalThis.styles = [];

// @ts-ignore
export function StyleProvider({ props }) {
	const window = useWindowDimensions();
	const colorScheme = useColorScheme();
	const { portrait, landscape } = useDeviceOrientation();
	const { reduceTransparencyEnabled, reduceMotionEnabled, invertColorsEnabled } = useAccessibilityInfo();
	// @ts-ignore
	const [styles, setStyles] = useState([globalThis.styles]);

	useEffect(() => {
		// @ts-ignore
		var pendingStyles: Rules[] = globalThis.styles;

		pendingStyles.filter((x) => {
			if (!x.media || !x.rules) return true;

			if (
				MediaQuery.match(x.media, {
					orientation: portrait ? "portrait" : landscape ? "landscape" : "",
					width: window.width,
					height: window.height,
					"aspect-ratio": window.scale,
					"device-height": window.height,
					"device-width": window.width,
					"device-aspect-ratio": window.scale,
					"prefers-color-scheme": colorScheme,
					"prefers-reduced-transparency": reduceTransparencyEnabled ? "reduce" : "no-preference",
					"prefers-reduced-motion": reduceMotionEnabled ? "reduce" : "no-preference",
					"inverted-colors": invertColorsEnabled ? "inverted" : "none",
				})
			) {
				// @ts-ignore
				pendingStyles = pendingStyles.concat(x.rules);
			}

			return false;
		});

		setStyles(pendingStyles);
		// @ts-ignore
	}, globalThis.styles);

	return <ThemeContext.Provider value={styles}>{props.children}</ThemeContext.Provider>;
}
