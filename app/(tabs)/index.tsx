import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { FC } from "react";

import Header from "@/components/Header";

const App: FC = (): JSX.Element => {
	return (
		<SafeAreaView>
			<Header title="Welcome!" desc="This is a OpenAI application." />
		</SafeAreaView>
	);
};

export default App;

const styles = StyleSheet.create({});
