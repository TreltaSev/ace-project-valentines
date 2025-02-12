<script lang="ts">
	import { Flex } from '@ui';
	import Dvdloading from '@lib/components/dvdloading/dvdloading.svelte';
	
	let { children } = $props();
	import '../app.css';

	import { global_mode$ } from '@lib/stores/mode';
	let mode$ = global_mode$.mode$;

	// Apply the class on subscription update
	mode$.subscribe((v) => {
		if (typeof document !== "undefined") {
			document.documentElement.classList.toggle("dark", v === "dark");
		}
	});

	import { cn } from '@lib/utils';
</script>

<Flex.Col class={cn("bg-white gap-5 overflow-y-scroll hide-scrollbar box-border dark:bg-background")} style="height: 100%">
    {@render children()}
</Flex.Col>

<Dvdloading/>

<style>
    :global(html, body) {
        width: 100%;
        height: 100%;
    }
</style>


<svelte:head>
	<title>Valentines Project</title>
	<link rel="icon" type="image/svg" href="/favicon.png" />
</svelte:head>
