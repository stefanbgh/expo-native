import { Href } from "expo-router";
import { ImageSourcePropType } from "react-native";

import chatgpt from "../assets/images/chatgpt.png";
import dalle from "../assets/images/dalle.png";
import smartai from "../assets/images/smartai.png";

interface FeatureData {
	id: number;
	style: "chatgpt" | "dalle" | "smartai";
	img: ImageSourcePropType;
	title: string;
	desc: string;
	path: Href<string>;
}

export const featuresData: FeatureData[] = [
	{
		id: 1,
		style: "chatgpt",
		img: chatgpt,
		title: "ChatGPT",
		desc: "Engage in dynamic conversations with ChatGPT, an advanced AI language model that understands and responds to your inquiries. Whether you need help with information, advice, or creative writing, ChatGPT is here to assist you.",
		path: "/chatgpt" as Href<string>,
	},
	{
		id: 2,
		style: "dalle",
		img: dalle,
		title: "DALL-E",
		desc: "Transform your ideas into stunning visuals with DALL-E, a revolutionary AI that creates images from text descriptions. Simply describe what you envision, and watch as DALL-E brings your concepts to life in unique and imaginative ways.",
		path: "/dalle" as Href<string>,
	},
	{
		id: 3,
		style: "smartai",
		img: smartai,
		title: "Smart AI",
		desc: "Experience Smart AI, designed to provide intelligent solutions and personalized responses tailored to your specific needs. This feature enhances your interactions and helps you find the information you’re looking for efficiently.",
		path: "/smartai" as Href<string>,
	},
];
