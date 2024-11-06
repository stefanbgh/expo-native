import React, { FC, useState } from "react";
import { View } from "react-native";

import * as Clipboard from "expo-clipboard";
import { IMessage } from "@/typescript/interfaces/IMessage";
import Toast from "react-native-toast-message";
import { toastClipboard } from "@/constants/toastClipboard";

import ImageContent from "./ImageContent";
import TextContent from "./TextContent";
import CodeContent from "./CodeContent";

import { parseContent } from "@/helpers/parseContent";

import styles from "@/styles";

interface IProps {
	messages: IMessage[];
	downloadImage: (uri: string) => Promise<void>;
}

const MessageContent: FC<IProps> = ({
	messages,
	downloadImage,
}): JSX.Element => {
	const [copiedStatus, setCopiedStatus] = useState<{
		[key: number]: boolean;
	}>({});

	const handleCopyToClipboard = async (content: string, index: number) => {
		await Clipboard.setStringAsync(`# ${content}`);

		if (!copiedStatus[index]) {
			Toast.show(toastClipboard);
		}

		setCopiedStatus((prevStatus) => ({
			...prevStatus,
			[index]: true,
		}));
	};

	return (
		<>
			{messages.map((message, index) => {
				const {
					content,
					isUser,
					isImage,
					preCodeContent,
					codeContent,
					postCodeContent,
				} = parseContent(message);

				return (
					<View
						key={index}
						style={isUser ? styles.user : styles.assistant}
					>
						{isImage ? (
							<ImageContent
								content={content}
								downloadImage={downloadImage}
							/>
						) : (
							<View style={{ flexDirection: "column" }}>
								<TextContent
									isUser={isUser}
									preCodeContent={preCodeContent}
								/>

								{codeContent && (
									<CodeContent
										handleCopyToClipboard={
											handleCopyToClipboard
										}
										copiedStatus={copiedStatus}
										index={index}
										codeContent={codeContent}
										postCodeText={postCodeContent}
										isUser={isUser}
									/>
								)}
							</View>
						)}
					</View>
				);
			})}
		</>
	);
};

export default MessageContent;
