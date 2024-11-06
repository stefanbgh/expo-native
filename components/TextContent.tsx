import { Text, View } from "react-native";
import { FC } from "react";

import styles from "@/styles";

interface IProps {
	isUser: boolean;
	preCodeContent: string;
}

const TextContent: FC<IProps> = ({ isUser, preCodeContent }): JSX.Element => {
	return (
		<View>
			<Text style={isUser ? styles.userText : styles.assistantText}>
				{preCodeContent}
			</Text>
		</View>
	);
};

export default TextContent;
