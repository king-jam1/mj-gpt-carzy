/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_GLOB_API_URL: string;
	readonly VITE_APP_API_BASE_URL: string;
	readonly VITE_GLOB_OPEN_LONG_REPLY: string;
	readonly VITE_GLOB_APP_PWA: string;
	/** AI服务地址 */
	readonly VITE_AI_URL: string;
}
