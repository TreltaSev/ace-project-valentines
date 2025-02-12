<script lang="ts">
	import { Flex } from '@ui';

	import { getHeartCtx } from '../ctx';
	import type { GeneratorProps } from '..';
	import { onMount } from 'svelte';
	import { Heart } from '@lib/components';
	import { global_hearts$ } from '@lib/stores/hearts';
	import type { Writable } from 'svelte/store';

	// === Props
	type $$Props = GeneratorProps;

	let is_hearts$: Writable<boolean> = global_hearts$.mode$;

	export let count: $$Props['count'] = 0;

	const { createHeart, hearts$ } = getHeartCtx();

	onMount(() => {
		for (let i = 0; i < (count as number); i++) {
			hearts$.update((current_hearts) => {
				current_hearts.push(createHeart());
				return current_hearts;
			});
		}
	});
</script>

{#if $is_hearts$}
	<Flex.Col class="absolute top-0 left-0 size-full z-0 pointer-events-none overflow-hidden">
		{#each $hearts$ as heart}
			<Heart._ {heart} />
		{/each}
	</Flex.Col>
{/if}
