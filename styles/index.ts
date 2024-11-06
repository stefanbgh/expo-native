import { StyleSheet } from "react-native";

export default StyleSheet.create({
	flex1: {
		flex: 1,
	},
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
	},
	desc: {
		fontSize: 16,
		fontStyle: "italic",
		fontWeight: "normal",
		marginBottom: 20,
	},
	image: {
		width: 100,
		height: 100,
		marginBottom: 10,
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 50,
		marginBottom: 5,
		marginHorizontal: 20,
	},
	headerContent: {
		flex: 1,
		marginRight: 10,
	},
	mini_image: {
		width: 50,
		height: 50,
	},
	button: {
		backgroundColor: "#e9a635",
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 10,
		marginTop: 5,
		alignSelf: "center",
	},
	buttonText: {
		color: "white",
		fontSize: 18,
		fontWeight: "bold",
	},
	chat: {
		margin: 5,
		paddingHorizontal: 5,
	},
	user: {
		maxWidth: "75%",
		backgroundColor: "#fff",
		borderRadius: 5,
		padding: 10,
		alignSelf: "flex-end",
		margin: 5,
		position: "relative",
	},
	userText: {
		color: "#000",
		textAlign: "left",
	},
	assistant: {
		maxWidth: "75%",
		backgroundColor: "#e9a635",
		borderRadius: 5,
		padding: 10,
		alignSelf: "flex-start",
		margin: 5,
		position: "relative",
	},
	assistantText: {
		color: "#000",
	},
	assistantTyping: {
		color: "#000",
		fontStyle: "italic",
	},
	emptyChat: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	emptyMessage: {
		fontSize: 18,
	},
	emptyMessageContainer: {
		alignItems: "center",
		justifyContent: "center",
		padding: 20,
		fontSize: 20,
	},
	hi: {
		fontWeight: "bold",
		fontSize: 20,
		color: "#e9a635",
	},
});
