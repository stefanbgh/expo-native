import { FC } from "react";

import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

import styles from "@/styles";
import img from "../../assets/images/logo.png";

const ChatGPTPage: FC = (): JSX.Element => {
	const router = useRouter();

	const handlePress = () => {
		router.push("/");
	};
	return (
		<View style={{ flex: 1 }}>
			<View style={styles.header}>
				<View style={styles.headerContent}>
					<Text style={styles.title}>ChatGPT</Text>
					<Text style={styles.desc}>Details about this feature.</Text>
				</View>
				<Image source={img} style={styles.mini_image} />
			</View>

			<View style={{ marginHorizontal: 15 }}>
				<Text style={{ marginBottom: 10 }}>
					• <Text style={{ fontWeight: "bold" }}>ChatGPT</Text> is an
					advanced conversational AI model developed by OpenAI,
					designed to understand and generate human-like text based on
					the input it receives. This powerful tool can hold
					conversations, provide detailed responses to inquiries, and
					assist users in various tasks, from answering questions to
					generating creative content. By leveraging a vast dataset
					and complex algorithms, ChatGPT adapts its responses based
					on the context of the conversation.
				</Text>
				<Text style={{ marginBottom: 10 }}>
					• This flexibility allows it to be used in multiple
					applications, including{" "}
					<Text
						style={{
							fontStyle: "italic",
							fontWeight: "bold",
							color: "#e9a635",
						}}
					>
						chatbots for customer support
					</Text>
					, virtual assistants, and educational tools. Its ability to
					learn from interactions enables it to improve over time,
					offering increasingly relevant and accurate responses.
				</Text>
				<Text style={{ marginBottom: 10 }}>
					• ChatGPT enhances user engagement through its
					conversational capabilities, making it a valuable asset for
					businesses aiming to improve customer satisfaction. By
					providing instant responses and personalized interactions,
					it reduces wait times and increases overall efficiency in
					customer service scenarios.
				</Text>
				<Text style={{ marginBottom: 10 }}>
					• Additionally, the model can assist in{" "}
					<Text
						style={{
							fontStyle: "italic",
							fontWeight: "bold",
							color: "#e9a635",
						}}
					>
						content creation
					</Text>
					, enabling writers, marketers, and developers to brainstorm
					ideas and generate high-quality text quickly. This creative
					assistance not only saves time but also inspires innovation,
					allowing users to explore new avenues in their projects.
				</Text>
				<Text style={{ marginBottom: 10 }}>
					• As AI technology continues to evolve, ChatGPT remains at
					the forefront, consistently receiving updates and
					enhancements. This commitment to improvement ensures that it
					stays relevant and effective in meeting the changing needs
					of its users.
				</Text>
				<Text style={{ marginBottom: 15 }}>
					• By incorporating{" "}
					<Text style={{ fontWeight: "bold" }}>ChatGPT</Text> into
					various platforms and tools, organizations can streamline
					their workflows and provide a more dynamic experience for
					their users.
				</Text>
			</View>

			<TouchableOpacity style={styles.button} onPress={handlePress}>
				<Text style={styles.buttonText}>Back</Text>
			</TouchableOpacity>
		</View>
	);
};

export default ChatGPTPage;
