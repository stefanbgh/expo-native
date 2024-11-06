import React, { FC, useRef, useState } from "react";
import { ScrollView, View } from "react-native";

import { ActiveTab } from "@/typescript/types/ActiveTab";
import { IMessage } from "@/typescript/interfaces/IMessage";
import { TypingStatus } from "@/typescript/types/TypingStatus";

import SwitchTab from "@/components/SwitchTab";
import Header from "@/components/Header";
import Messages from "@/components/Messages";

import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";

import styles from "@/styles";
import Toast from "react-native-toast-message";
import { toastImage } from "@/constants/toastImage";

const Chat: FC = (): JSX.Element => {
	const [messages, setMessages] = useState<IMessage[] | []>([]);
	const [activeTab, setActiveTab] = useState<ActiveTab>("Ask a Question");
	const [typingStatus, setTypingStatus] = useState<TypingStatus>(null);

	const scrollViewRef = useRef<ScrollView | null>(null);

	const downloadImage = async (uri: string) => {
		const timestamp = Date.now();
		const fileUri = FileSystem.documentDirectory + `${timestamp}.jpg`;

		await FileSystem.downloadAsync(uri, fileUri);

		await MediaLibrary.saveToLibraryAsync(fileUri);
		Toast.show(toastImage);
	};

	return (
		<View style={styles.flex1}>
			<Header title="Messages" desc="Communicate with OpenAI." />
			<SwitchTab activeTab={activeTab} setActiveTab={setActiveTab} />
			<Messages
				scrollViewRef={scrollViewRef}
				messages={messages}
				activeTab={activeTab}
				downloadImage={downloadImage}
				typingStatus={typingStatus}
			/>
		</View>
	);
};

export default Chat;
