<script lang="ts">
	import { onMount } from 'svelte';
	import type { Props } from '..';
	import { fade, fly } from 'svelte/transition';

	// === Props
	type $$Props = Props;

	export let heart: $$Props['heart'] = undefined;

	import MdiHeart from '~icons/mdi/heart';
	import { min_max } from '../ctx';

	// === Reference
	let ref_element: HTMLDivElement;

	let ready: boolean = false;
	let random_rotation = 0;
	let random_duration = 0;
	let random_y_offset = 0;
	let random_size = 0;

	function loop_animation() {
		if (!ref_element || !heart) return;
		heart.x = min_max(0, window.innerWidth - random_size*8)
		random_size = Math.floor(min_max(6, 20))
		random_rotation = min_max(0, 360);
		random_duration = min_max(5000, 5000 * 6);
		random_y_offset = min_max(100, window.innerHeight/2)
		
		ref_element.animate({top: `${random_y_offset}px`, opacity: "0"}, {duration: random_duration, easing: "ease-in-out"})
		
		setTimeout(() => {
			loop_animation();
		}, random_duration)
	}

	onMount(() => {
		loop_animation();
	});
</script>

{#if heart}
	<div bind:this={ref_element} class="absolute z-1" style="left: {heart.x}px; top: -10%; opacity: 1;">
		<MdiHeart class="absolute size-{random_size} text-primary-300" />
	</div>
{/if}
