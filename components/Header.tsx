import React from "react";

import { Text, View, Image } from "react-native";

import styles from "@/styles";
import img from "@/assets/images/logo.png";

interface IProps {
	title: string;
	desc: string;
}

const Header = ({ title, desc }: IProps) => {
	return (
		<View style={styles.header}>
			<View style={styles.headerContent}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.desc}>{desc}</Text>
			</View>
			<Image source={img} style={styles.mini_image} />
		</View>
	);
};

export default Header;
