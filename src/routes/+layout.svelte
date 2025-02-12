<script lang="ts">
	import { Flex } from '@ui';
	import Dvdloading from '@lib/components/dvdloading/dvdloading.svelte';

	import { Heart } from '@lib/components';
	import { setHeartCtx } from '@lib/components/heart/ctx';
	setHeartCtx();

	let { children } = $props();
	import '../app.css';

	import { global_mode$ } from '@lib/stores/mode';
	let mode$ = global_mode$.mode$;

	// Apply the class on subscription update
	mode$.subscribe((v) => {
		if (typeof document !== 'undefined') {
			document.documentElement.classList.toggle('dark', v === 'dark');
		}
	});

	import { cn } from '@lib/utils';
</script>

<div class="bg-white dark:bg-background size-full">
	<Flex.Col
		class={cn(
			' gap-5 overflow-y-scroll hide-scrollbar box-border relative z-1 '
		)}
		style="height: 100%"
	>
		{@render children()}
	</Flex.Col>

	<Heart.Generator count={100} />
	<Dvdloading />
</div>



<svelte:head>
	<title>Valentines Project</title>
	<link rel="icon" type="image/svg" href="/favicon.png" />
</svelte:head>

<style>
	:global(html, body) {
		width: 100%;
		height: 100%;
	}
</style>
