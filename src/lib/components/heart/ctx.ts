import { writable, type Writable } from 'svelte/store';
import type { tHeartMeta, tHeartProps } from './types';
import { removeUndefined } from '@lib/internal';
import { getContext, setContext } from 'svelte';


export function createHeart(): tHeartMeta {
    const size = 100;
    return {
        x: min_max(0, window.screen.width - size),
        y: -10,
        size
    }
}

export function createHearts(props: tHeartProps) {
	const hearts$: Writable<tHeartMeta[]> = writable([]);

	return {
		...props,
		hearts$,
        createHeart
	};
}

export function getHeartData() {
	const NAME = 'hearts' as const;

	return {
		NAME
	};
}

export function setHeartCtx(props: tHeartProps = {}) {
	const { NAME } = getHeartData();

	const hearts = {
		...createHearts({ ...removeUndefined(props) })
	};

	setContext(NAME, hearts);

	return {
		...hearts
	};
}

type GetReturn = ReturnType<typeof setHeartCtx>;
export function getHeartCtx() {
	const { NAME } = getHeartData();
	return getContext<GetReturn>(NAME);
}

export function min_max(min: number, max: number) {
    return Math.random() * (max - min) + min; // Literally stolen from js mdn reference :
}
