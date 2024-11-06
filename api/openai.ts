import axios from "axios";

const client = axios.create({
	headers: {
		Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`,
		"Content-Type": "application/json",
	},
});

const chatGptEndpoint = process.env.EXPO_PUBLIC_CHATGPT_URL;
const dalleEndpoint = process.env.EXPO_PUBLIC_DALLE_URL;

export const chatGptApi = async (prompt, messages) => {
	try {
		const res = await client.post(chatGptEndpoint, {
			model: "gpt-3.5-turbo",
			messages: [{ role: "user", content: prompt }, ...messages],
		});

		const answer = res.data?.choices[0]?.message?.content;
		messages.push({ role: "assistant", content: answer.trim() });

		return Promise.resolve({ success: true, data: messages });
	} catch (err) {
		console.error("Error:", err);
		return Promise.resolve({ success: false, err });
	}
};

export const dalleApi = async (prompt, messages) => {
	try {
		const res = await client.post(dalleEndpoint, {
			prompt,
			n: 1,
			size: "512x512",
		});

		const url = res?.data?.data[0]?.url;
		messages.push({ role: "assistant", content: url });

		return Promise.resolve({ success: true, data: messages });
	} catch (err) {
		return Promise.resolve({ success: false, err });
	}
};
