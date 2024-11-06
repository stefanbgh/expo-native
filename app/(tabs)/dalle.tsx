import React, { FC } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

import styles from "@/styles";
import img from "../../assets/images/logo.png";

const DallePage: FC = (): JSX.Element => {
	const router = useRouter();

	const handlePress = () => {
		router.push("/");
	};

	return (
		<View style={{ flex: 1 }}>
			<View style={styles.header}>
				<View style={styles.headerContent}>
					<Text style={styles.title}>DALL-E</Text>
					<Text style={styles.desc}>Details about this feature.</Text>
				</View>
				<Image source={img} style={styles.mini_image} />
			</View>

			<View style={{ marginHorizontal: 15 }}>
				<Text style={{ marginBottom: 10 }}>
					• <Text style={{ fontWeight: "bold" }}>DALL-E</Text> is an
					innovative image generation model created by OpenAI, capable
					of producing high-quality images from textual descriptions.
					This remarkable tool utilizes deep learning techniques to
					understand the context of the input and generate original
					artwork, photos, and illustrations that align with user
					prompts. By combining creativity with advanced technology,
					DALL-E can visualize concepts that may not exist in reality.
				</Text>
				<Text style={{ marginBottom: 10 }}>
					• Its flexibility allows it to be applied in various fields,
					including{" "}
					<Text
						style={{
							fontStyle: "italic",
							fontWeight: "bold",
							color: "#e9a635",
						}}
					>
						graphic design, advertising, and entertainment
					</Text>
					. By generating unique images tailored to specific needs,
					DALL-E empowers artists, marketers, and content creators to
					enhance their projects with customized visuals.
				</Text>
				<Text style={{ marginBottom: 10 }}>
					• DALL-E fosters creativity and innovation by enabling users
					to bring their ideas to life visually. Its ability to
					interpret complex prompts means that it can create a wide
					range of imagery, from realistic portrayals to fantastical
					scenes, helping users express their vision in ways that
					traditional methods may not allow.
				</Text>
				<Text style={{ marginBottom: 10 }}>
					• Furthermore, this model streamlines the creative process,
					providing quick and diverse image options that inspire new
					directions in projects. By eliminating the barriers of
					time-consuming manual creation, DALL-E allows users to focus
					on refining their concepts and exploring new artistic
					possibilities.
				</Text>
				<Text style={{ marginBottom: 10 }}>
					• As AI technology continues to advance, DALL-E remains a
					leading player in the field of image generation,
					consistently receiving improvements and updates. This
					ensures its relevance and effectiveness in meeting the
					evolving demands of creative professionals.
				</Text>
				<Text style={{ marginBottom: 15 }}>
					• By integrating{" "}
					<Text style={{ fontWeight: "bold" }}>DALL-E</Text> into
					various applications and tools, organizations can
					revolutionize their visual content creation and provide more
					engaging experiences for their audiences.
				</Text>
			</View>

			<TouchableOpacity style={styles.button} onPress={handlePress}>
				<Text style={styles.buttonText}>Back</Text>
			</TouchableOpacity>
		</View>
	);
};

export default DallePage;
