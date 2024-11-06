import { Text, TouchableOpacity } from "react-native";
import { FC } from "react";
import { useRouter } from "expo-router";

import styles from "@/styles";

const GetStarted: FC = (): JSX.Element => {
	const router = useRouter();

	const handlePress = () => {
		router.push("/chat");
	};

	return (
		<TouchableOpacity style={styles.button} onPress={handlePress}>
			<Text style={styles.buttonText}>Get Started</Text>
		</TouchableOpacity>
	);
};

export default GetStarted;
