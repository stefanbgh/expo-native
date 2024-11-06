import React, { FC, useRef, useState } from "react";
import { Keyboard, ScrollView, View } from "react-native";

import { ActiveTab } from "@/typescript/types/ActiveTab";
import { IMessage } from "@/typescript/interfaces/IMessage";
import { TypingStatus } from "@/typescript/types/TypingStatus";
import { toastImage } from "@/constants/toastImage";
import { chatGptApi, dalleApi } from "@/api/openai";

import Toast from "react-native-toast-message";

import SwitchTab from "@/components/SwitchTab";
import Header from "@/components/Header";
import Messages from "@/components/Messages";
import MessageBox from "@/components/MessageBox";

import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";

import styles from "@/styles";

const Chat: FC = (): JSX.Element => {
	const [messages, setMessages] = useState<IMessage[] | []>([]);
	const [inputValue, setInputValue] = useState<string>("");
	const [inputHeight, setInputHeight] = useState<number>(0);
	const [activeTab, setActiveTab] = useState<ActiveTab>("Ask a Question");
	const [typingStatus, setTypingStatus] = useState<TypingStatus>(null);

	const scrollViewRef = useRef<ScrollView | null>(null);

	const handleSend = async () => {
		if (!inputValue.trim()) return;
		const newMessages = [
			...messages,
			{ role: "user", content: inputValue },
		];
		setMessages(newMessages);
		setInputValue("");
		setInputHeight(0);
		setTypingStatus(activeTab === "Create image" ? "Creating" : "Typing");

		scrollToBottom();

		Keyboard.dismiss();

		try {
			let response;
			if (activeTab === "Create image") {
				response = await dalleApi(inputValue, newMessages);
			} else response = await chatGptApi(inputValue, newMessages);

			if (response && response.success) {
				setMessages(response.data);
				scrollToBottom();
			}
		} catch (error) {
			console.log("Error fetching response:", error);
		}

		setTypingStatus(null);
	};

	const downloadImage = async (uri: string) => {
		const timestamp = Date.now();
		const fileUri = FileSystem.documentDirectory + `${timestamp}.jpg`;

		await FileSystem.downloadAsync(uri, fileUri);

		await MediaLibrary.saveToLibraryAsync(fileUri);
		Toast.show(toastImage);
	};

	const scrollToBottom = () => {
		if (scrollViewRef.current) {
			scrollViewRef.current.scrollToEnd({ animated: true });
		}
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
			<MessageBox
				inputHeight={inputHeight}
				setInputHeight={setInputHeight}
				inputValue={inputValue}
				setInputValue={setInputValue}
				scrollToBottom={scrollToBottom}
				handleSend={handleSend}
			/>
		</View>
	);
};

export default Chat;
