import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FC } from "react";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

import styles from "@/styles";

interface IProps {
	handleCopyToClipboard: (content: string, index: number) => Promise<void>;
	copiedStatus: { [key: number]: boolean };
	index: number;
	codeContent: string;
	postCodeText: string;
	isUser: boolean;
}

const CodeContent: FC<IProps> = ({
	handleCopyToClipboard,
	copiedStatus,
	index,
	codeContent,
	postCodeText,
	isUser,
}): JSX.Element => {
	return (
		<>
			<View style={localStyles.container}>
				<TouchableOpacity
					style={localStyles.copy}
					onPress={() => handleCopyToClipboard(codeContent, index)}
				>
					{copiedStatus[index] ? (
						<FontAwesome6
							name="circle-check"
							size={16}
							color="white"
						/>
					) : (
						<FontAwesome6 name="copy" size={16} color="white" />
					)}
					<Text
						style={{
							fontWeight: "bold",
							color: "white",
						}}
					>
						{copiedStatus[index] ? "Copied!" : "Copy"}
					</Text>
				</TouchableOpacity>
				<Text style={localStyles.code}># {codeContent}</Text>
			</View>
			<View>
				<Text style={isUser ? styles.userText : styles.assistantText}>
					{postCodeText}
				</Text>
			</View>
		</>
	);
};

export default CodeContent;

const localStyles = StyleSheet.create({
	container: {
		width: "100%",
		position: "relative",
		marginTop: 5,
		marginBottom: 15,
	},
	copy: {
		position: "absolute",
		top: 5,
		right: 0,
		backgroundColor: "#999999",
		zIndex: 1,
		paddingVertical: 5,
		paddingHorizontal: 10,
		borderRadius: 5,
		flexDirection: "row",
		alignItems: "center",
		gap: 5,
	},
	code: {
		backgroundColor: "#f0f0f0",
		paddingVertical: 20,
		paddingHorizontal: 10,
		borderRadius: 5,
		fontFamily: "monospace",
		color: "#333",
		marginTop: 5,
		flexWrap: "wrap",
	},
});
