import { ActiveTab } from "@/typescript/types/ActiveTab";

interface ITab {
	id: number;
	text: ActiveTab;
}

export const tabsData: ITab[] = [
	{
		id: 1,
		text: "Ask a Question",
	},
	{
		id: 2,
		text: "Create image",
	},
];
