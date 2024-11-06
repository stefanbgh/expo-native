import { Text, View } from "react-native";
import React from "react";

import { ActiveTab } from "@/typescript/types/ActiveTab";
import styles from "@/styles";

interface IProps {
	activeTab: ActiveTab;
}

const SayHi = ({ activeTab }: IProps) => {
	return (
		<>
			{activeTab === "Create image" ? (
				<View style={styles.emptyMessageContainer}>
					<Text style={styles.hi}>Let's create an image!</Text>
					<Text style={styles.emptyMessage}>What should I draw?</Text>
				</View>
			) : (
				<View style={styles.emptyMessageContainer}>
					<Text style={styles.hi}>Hello there!</Text>
					<Text style={styles.emptyMessage}>
						What can I help with?
					</Text>
				</View>
			)}
		</>
	);
};

export default SayHi;
