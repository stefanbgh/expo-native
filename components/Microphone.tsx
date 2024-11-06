import { FC } from "react";
import { View, TouchableOpacity, Text } from "react-native";

import FontAwesome from "@expo/vector-icons/FontAwesome";

const Microphone: FC = (): JSX.Element => {
	return (
		<View style={{ width: "7.5%" }}>
			<TouchableOpacity>
				<FontAwesome name="microphone" size={24} color="#e9a635" />
			</TouchableOpacity>
		</View>
	);
};

export default Microphone;
