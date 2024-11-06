import { Link, Stack } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

import img from "../assets/images/404.png";

export default function NotFoundScreen() {
	return (
		<>
			<Stack.Screen options={{ title: "Oops!" }} />
			<View style={localStyles.container}>
				<Image source={img} style={localStyles.image} />
				<View style={{ marginTop: 5, marginBottom: 30 }}>
					<Text style={localStyles.message}>Oops!!</Text>
					<Text style={localStyles.desc}>
						It seems the page you're looking for doesn't exist.
					</Text>
				</View>
				<Link href="/" style={localStyles.button}>
					<Text style={localStyles.buttonText}>Back to App</Text>
				</Link>
			</View>
		</>
	);
}

const localStyles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: 20,
	},
	image: {
		width: 125,
		height: 125,
		marginBottom: 10,
		transform: "rotate(-5deg)",
	},
	message: {
		fontSize: 24,
		fontWeight: "bold",
		textAlign: "center",
	},
	desc: {
		fontSize: 20,
		textAlign: "center",
	},
	button: {
		backgroundColor: "#446bac",
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 10,
		marginTop: 5,
		alignSelf: "center",
	},
	buttonText: {
		color: "white",
		fontSize: 18,
		fontWeight: "bold",
	},
});
