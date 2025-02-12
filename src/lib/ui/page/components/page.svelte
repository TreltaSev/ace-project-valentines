<script lang="ts">
	import { cn } from '@lib/utils';
	import type { Props } from '..';

	import { Flex, Page } from '@ui';
	import { SpeedDial } from '@lib/components';

	// -=-=-=-=- Props -=-=-=-=- //
	type $$Props = Props;

	let hideNav: $$Props['hideNav'] = undefined;

	let className: $$Props['class'] = undefined;
	export { className as class };

	export let pageClass =
		'flex flex-col size-full items-center justify-center select-none z-2 px-90 box-border h-fit';

	$: pageCls = cn(pageClass, className);
</script>

{#if !hideNav}
	<Page.Navigation class="z-2"/>
{/if}

<Flex.Col class={pageCls}>
	<slot />

	<!-- Speed Dial -->
	<SpeedDial />
</Flex.Col>
