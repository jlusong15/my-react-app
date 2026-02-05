interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  readonly VITE_API_VERSION: string;
  readonly VITE_API_PROTOCOL: string;
	readonly VITE_API_BEARER: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
