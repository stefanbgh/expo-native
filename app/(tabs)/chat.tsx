import React, { FC, useState } from "react";

import { View } from "react-native";
import { ActiveTab } from "@/typescript/types/ActiveTab";

import SwitchTab from "@/components/SwitchTab";
import Header from "@/components/Header";

import styles from "@/styles";

const Chat: FC = (): JSX.Element => {
	const [activeTab, setActiveTab] = useState<ActiveTab>("Ask a Question");

	return (
		<View style={styles.flex1}>
			<Header title="Messages" desc="Communicate with OpenAI." />

			{/* Switch Tab */}
			<SwitchTab activeTab={activeTab} setActiveTab={setActiveTab} />
		</View>
	);
};

export default Chat;
