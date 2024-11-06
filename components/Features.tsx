import React from "react";

import { View, Text, StyleSheet, Image } from "react-native";

import { Href, useRouter } from "expo-router";
import { featuresData } from "@/constants/featuresData";

const Features = () => {
	const router = useRouter();

	const handlePress = (path: Href<string>) => {
		router.push(path);
	};

	return (
		<View style={localStyles.features}>
			{featuresData.map((features) => {
				const { id, style, img, title, desc, path } = features;

				return (
					<View style={localStyles[style]} key={id}>
						<View style={localStyles.container}>
							<View>
								<Image source={img} style={localStyles.img} />
							</View>
							<View>
								<Text style={localStyles.text}>{title}</Text>
							</View>
						</View>
						<View>
							<Text>{desc}</Text>
							<Text
								style={localStyles.view_more}
								onPress={() =>
									handlePress(path as Href<string>)
								}
							>
								View more
							</Text>
						</View>
					</View>
				);
			})}
		</View>
	);
};

const localStyles = StyleSheet.create({
	features: {
		width: "100%",
	},
	title: {
		paddingVertical: 10,
		paddingHorizontal: 20,
		fontSize: 20,
	},
	chatgpt: {
		backgroundColor: "#f1c748",
		borderRadius: 15,
		padding: 20,
		marginHorizontal: 15,
		marginBottom: 10,
	},
	dalle: {
		backgroundColor: "#e9a635",
		borderRadius: 15,
		padding: 20,
		marginHorizontal: 15,
		marginBottom: 10,
	},
	smartai: {
		backgroundColor: "#f1c748",
		borderRadius: 15,
		padding: 20,
		marginHorizontal: 15,
		marginBottom: 10,
	},
	container: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		gap: 20,
		marginBottom: 10,
	},
	img: {
		width: 30,
		height: 30,
	},
	text: {
		fontWeight: "bold",
		fontSize: 20,
	},
	view_more: {
		marginTop: 10,
		fontStyle: "italic",
		fontWeight: "bold",
		textAlign: "right",
		alignSelf: "flex-end",
		backgroundColor: "white",
		padding: 5,
		borderRadius: 5,
	},
});

export default Features;
