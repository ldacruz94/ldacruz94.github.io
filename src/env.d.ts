/// <reference path="../.astro/types.d.ts" />

interface Window {
	openCommandPalette?: () => void;
	_cpController?: AbortController;
}
