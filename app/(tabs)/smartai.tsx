import React, { FC } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

import styles from "@/styles";
import img from "../../assets/images/logo.png";

const SmartAIPage: FC = (): JSX.Element => {
	const router = useRouter();

	const handlePress = () => {
		router.push("/");
	};

	return (
		<View style={{ flex: 1 }}>
			<View style={styles.header}>
				<View style={styles.headerContent}>
					<Text style={styles.title}>Smart AI</Text>
					<Text style={styles.desc}>Details about this feature.</Text>
				</View>
				<Image source={img} style={styles.mini_image} />
			</View>

			<View style={{ marginHorizontal: 15 }}>
				<Text style={{ marginBottom: 10 }}>
					• <Text style={{ fontWeight: "bold" }}>Smart AI</Text>{" "}
					refers to a range of advanced artificial intelligence
					systems designed to enhance decision-making processes and
					automate complex tasks. By utilizing machine learning
					algorithms and data analysis, Smart AI can identify
					patterns, predict outcomes, and provide insights that help
					businesses and individuals make informed choices. Its
					adaptability allows it to be utilized across various
					sectors, including healthcare, finance, and logistics.
				</Text>
				<Text style={{ marginBottom: 10 }}>
					• This technology's capability to analyze large datasets
					enables organizations to uncover hidden opportunities and
					optimize their operations. From{" "}
					<Text
						style={{
							fontStyle: "italic",
							fontWeight: "bold",
							color: "#e9a635",
						}}
					>
						predictive analytics
					</Text>{" "}
					in marketing strategies to{" "}
					<Text
						style={{
							fontStyle: "italic",
							fontWeight: "bold",
							color: "#e9a635",
						}}
					>
						automating routine tasks
					</Text>
					, Smart AI enhances efficiency and drives innovation.
				</Text>
				<Text style={{ marginBottom: 10 }}>
					• Smart AI also plays a crucial role in improving customer
					experiences by offering personalized recommendations and
					tailored solutions. By analyzing user behavior and
					preferences, it enables businesses to engage customers more
					effectively, leading to increased satisfaction and loyalty.
				</Text>
				<Text style={{ marginBottom: 10 }}>
					• Additionally, Smart AI systems can continuously learn and
					evolve from interactions, allowing them to adapt to changing
					conditions and requirements. This ongoing learning process
					ensures that the insights and recommendations they provide
					remain relevant and useful.
				</Text>
				<Text style={{ marginBottom: 10 }}>
					• As the field of artificial intelligence progresses, Smart
					AI remains at the forefront, regularly receiving
					enhancements that expand its capabilities. This commitment
					to growth guarantees that it meets the dynamic needs of
					users and industries.
				</Text>
				<Text style={{ marginBottom: 15 }}>
					• By leveraging{" "}
					<Text style={{ fontWeight: "bold" }}>Smart AI</Text>,
					organizations can transform their operations, enhance
					productivity, and deliver exceptional value to their
					customers.
				</Text>
			</View>

			<TouchableOpacity style={styles.button} onPress={handlePress}>
				<Text style={styles.buttonText}>Back</Text>
			</TouchableOpacity>
		</View>
	);
};

export default SmartAIPage;
