<script lang="ts">
	import { SpeedDial } from '@ui';

	import DarkMode from '~icons/ic/round-light-mode';
	import LightMode from '~icons/ic/round-dark-mode';
	import AddIcon from '~icons/mingcute/add-fill';
	import CbiDvd from '~icons/cbi/dvd';
	import MdiHeart from '~icons/mdi/heart';

	import type { ToggleableWritable } from '@lib/internal';
	import { cn } from '@lib/utils';
	import { global_mode$ } from '@lib/stores/mode';
	import { global_dvd$ } from '@lib/stores/dvd';
	import { type Writable } from 'svelte/store';
	import { global_hearts$ } from '@lib/stores/hearts';

	let mode$: Writable<'dark' | 'light' | string> = global_mode$.mode$;
	let dvd$: Writable<boolean> = global_dvd$.mode$;
	let hearts$: Writable<boolean> = global_hearts$.mode$;

	let parentActive$: ToggleableWritable;
</script>

<!-- Speed Dial -->
<SpeedDial.Menu
	bind:isActive$={parentActive$}
	direction="left"
	anchorClass="fixed right-10 bottom-10"
	parent
>
	<!-- Main Anchor -->
	<SpeedDial.Item
		slot="anchor"
		class="group [&>svg]:transition-all [&>svg]:ease-in-out bg-primary-500 hover:bg-primary-400 text-gray-300"
	>
		<AddIcon
			class={cn(
				'shrink-0 text-white group-hover:rotate-20',
				$parentActive$ && 'group-hover:-rotate-30'
			)}
		/>
	</SpeedDial.Item>

	<!-- dark/light mode -->
	<SpeedDial.Item
		class="bg-primary-800 hover:bg-primary-700"
		on:click={() => global_mode$.toggle()}
	>
		{#if $mode$ == 'dark'}
			<LightMode class="shrink-0 text-gray-300" />
		{:else}
			<DarkMode class="shrink-0 text-gray-300" />
		{/if}
	</SpeedDial.Item>

	<!-- dvd mode -->
	<SpeedDial.Item
		class={cn(
			'bg-primary-800 hover:bg-primary-700',
			$dvd$ && 'bg-primary-500 hover:bg-primary-400'
		)}
		on:click={() => global_dvd$.toggle()}
	>
		<CbiDvd class="shrink-0 text-gray-300" />
	</SpeedDial.Item>

	<!-- heart mode -->
	<SpeedDial.Item
		class={cn(
			'bg-primary-800 hover:bg-primary-700',
			$hearts$ && 'bg-primary-500 hover:bg-primary-400'
		)}
		on:click={() => global_hearts$.toggle()}
	>
		<MdiHeart class="shrink-0 text-gray-300" />
	</SpeedDial.Item>
</SpeedDial.Menu>
