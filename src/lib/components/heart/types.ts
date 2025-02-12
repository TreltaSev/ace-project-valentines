import type { HTMLAttributes } from "svelte/elements";

export type tHeartProps = HTMLAttributes<HTMLDivElement> & {
    heart?: tHeartMeta;
}

export type tHeartGeneratorProps = HTMLAttributes<HTMLDivElement> & {
    count?: number;
}

export type tHeartMeta = {
	x: number;
	y: number;
	size: number;
	self?: SVGElement;
};