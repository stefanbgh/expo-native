import { ToastShowParams } from "react-native-toast-message";

export const toastClipboard: ToastShowParams = {
	type: "info",
	text1: "Code copied!",
	text2: "The code is now in your clipboard.",
	position: "top",
	text1Style: {
		fontSize: 16,
		color: "#000",
		fontWeight: "bold",
	},
	text2Style: {
		fontSize: 14,
		color: "#000",
		fontStyle: "italic",
	},
};
