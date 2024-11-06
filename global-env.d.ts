declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";

declare namespace NodeJS {
	interface ProcessEnv {
		EXPO_PUBLIC_CHATGPT_URL: string;
		EXPO_PUBLIC_DALLE_URL: string;
		EXPO_PUBLIC_API_KEY: string;
	}
}
