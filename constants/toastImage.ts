import { ToastShowParams } from "react-native-toast-message";

export const toastImage: ToastShowParams = {
	type: "info",
	text1: "Image Downloaded!",
	text2: "The image was saved to your gallery.",
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
