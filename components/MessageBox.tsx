import React, { FC, Dispatch, SetStateAction } from "react";

import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import Microphone from "./Microphone";

interface IProps {
	inputHeight: number;
	setInputHeight: Dispatch<SetStateAction<number>>;
	inputValue: string;
	setInputValue: Dispatch<SetStateAction<string>>;
	scrollToBottom: () => void;
	handleSend: () => Promise<void>;
}

const MessageBox: FC<IProps> = ({
	inputHeight,
	setInputHeight,
	inputValue,
	setInputValue,
	scrollToBottom,
	handleSend,
}): JSX.Element => {
	return (
		<View
			style={{
				flexDirection: "row",
				marginBottom: 15,
				marginHorizontal: 15,
				justifyContent: "space-between",
				alignItems: "center",
			}}
		>
			<Microphone />
			<View style={localStyles.field}>
				<TextInput
					style={[
						localStyles.input,
						{ height: Math.min(75, inputHeight) },
					]}
					placeholder="Enter your message..."
					value={inputValue}
					onChangeText={setInputValue}
					multiline={true}
					onContentSizeChange={(e) =>
						setInputHeight(e.nativeEvent.contentSize.height)
					}
					scrollEnabled={inputHeight >= 75}
					textAlignVertical="top"
					onFocus={scrollToBottom}
				/>
				<TouchableOpacity
					onPress={handleSend}
					style={localStyles.button}
				>
					<FontAwesome name="send" size={22} color="#e9a635" />
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default MessageBox;

const localStyles = StyleSheet.create({
	field: {
		width: "92.5%",
		flexDirection: "row",
		alignItems: "flex-end",
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 5,
		backgroundColor: "#fff",
		paddingRight: 10,
	},
	button: {
		paddingBottom: 7.5,
	},
	input: {
		flex: 1,
		padding: 10,
		minHeight: 35,
		outlineWidth: 0,
	},
});
