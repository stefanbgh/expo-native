import { Image, Linking, TouchableOpacity } from "react-native";
import { FC } from "react";

import FontAwesome from "@expo/vector-icons/FontAwesome";

interface IProps {
	content: string;
	downloadImage: (uri: string) => void;
}

const ImageContent: FC<IProps> = ({ content, downloadImage }): JSX.Element => {
	return (
		<>
			<TouchableOpacity onPress={() => Linking.openURL(content)}>
				<Image
					source={{ uri: content }}
					style={{
						width: 250,
						height: 225,
						borderRadius: 10,
					}}
				/>
			</TouchableOpacity>
			<TouchableOpacity
				style={{
					alignSelf: "flex-end",
					marginTop: 10,
				}}
				onPress={() => downloadImage(content)}
			>
				<FontAwesome name="download" size={20} color="white" />
			</TouchableOpacity>
		</>
	);
};

export default ImageContent;
