import React, { FC, Dispatch, SetStateAction } from "react";

import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { tabsData } from "@/constants/tabsData";
import { ActiveTab } from "@/typescript/types/ActiveTab";

interface IProps {
	activeTab: ActiveTab;
	setActiveTab: Dispatch<SetStateAction<ActiveTab>>;
}

const SwitchTab: FC<IProps> = ({ activeTab, setActiveTab }): JSX.Element => {
	return (
		<View style={localStyles.tabContainer}>
			{tabsData.map((tab) => {
				const { id, text } = tab;

				return (
					<TouchableWithoutFeedback
						style={{ flex: 1 }}
						key={id}
						onPress={() => setActiveTab(text)}
					>
						<View
							style={[
								localStyles.tab,
								activeTab === text && localStyles.activeTab,
							]}
						>
							<Text
								style={[
									localStyles.tabText,
									activeTab === text &&
										localStyles.activeTabText,
								]}
							>
								{text}
							</Text>
						</View>
					</TouchableWithoutFeedback>
				);
			})}
		</View>
	);
};

export default SwitchTab;

const localStyles = StyleSheet.create({
	tabContainer: {
		flexDirection: "row",
		paddingVertical: 10,
		marginHorizontal: 20,
	},
	tab: {
		flex: 1,
		paddingVertical: 10,
		alignItems: "center",
	},
	activeTab: {
		backgroundColor: "#fff",
	},
	tabText: {
		color: "#999",
		fontSize: 16,
	},
	activeTabText: {
		color: "#000",
	},
});
