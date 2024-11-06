import { IMessage } from "@/typescript/interfaces/IMessage";

interface ParsedContent {
	content: string;
	isUser: boolean;
	isImage: boolean;
	preCodeContent: string;
	codeContent: string | null;
	postCodeContent: string;
}

export const parseContent = (message: IMessage): ParsedContent => {
	const { content, role } = message;

	const isUser = role === "user";
	const isImage = content.includes("https");

	const codeMatches = content.match(/```([\s\S]*?)```/);
	const codeContent = codeMatches ? codeMatches[1].trim() : null;

	const preCodeContent = content.split(/```/)[0].trim();
	const postCodeContent = codeContent
		? content.split(codeContent)[1].trim().replace(/```/, "").trim()
		: "";

	return {
		content,
		isUser,
		isImage,
		preCodeContent,
		codeContent,
		postCodeContent,
	};
};
