import React, { FC, RefObject } from "react";
import { ScrollView, Text, View } from "react-native";

import SayHi from "./SayHi";
import MessageContent from "./MessageContent";

import styles from "@/styles";

interface IProps {
	scrollViewRef: RefObject<ScrollView>;
	messages: { role: string; content: string }[] | [];
	activeTab: "Ask a Question" | "Create image";
	downloadImage: (uri: string) => Promise<void>;
	typingStatus: "Typing" | "Creating" | null;
}

const Messages: FC<IProps> = ({
	scrollViewRef,
	messages,
	activeTab,
	downloadImage,
	typingStatus,
}): JSX.Element => {
	return (
		<ScrollView
			ref={scrollViewRef}
			style={styles.chat}
			contentContainerStyle={
				messages.length === 0 ? styles.emptyChat : {}
			}
		>
			{messages.length === 0 ? (
				<SayHi activeTab={activeTab} />
			) : (
				<MessageContent
					messages={messages}
					downloadImage={downloadImage}
				/>
			)}
			{typingStatus && (
				<View style={styles.assistant}>
					<Text style={styles.assistantTyping}>
						{typingStatus}
						<Text style={{ fontWeight: "bold" }}>...</Text>
					</Text>
				</View>
			)}
		</ScrollView>
	);
};

export default Messages;
