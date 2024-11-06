import { SafeAreaView, StyleSheet } from "react-native";
import { FC } from "react";

import Header from "@/components/Header";
import GetStarted from "@/components/GetStarted";

const App: FC = (): JSX.Element => {
	return (
		<SafeAreaView>
			<Header title="Welcome!" desc="This is a OpenAI application." />
			<GetStarted />
		</SafeAreaView>
	);
};

export default App;

const styles = StyleSheet.create({});
