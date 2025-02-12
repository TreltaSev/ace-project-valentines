<script lang="ts">
	import { global_dvd$ } from '@lib/stores/dvd';
	import { onMount } from 'svelte';
	import { cubicOut } from 'svelte/easing';
	import type { Writable } from 'svelte/store';
	import FlatColorIconsDvdLogo from '~icons/flat-color-icons/dvd-logo';

	let dvd$: Writable<boolean> = global_dvd$.mode$;

	let position = { x: 0, y: 0 };
	let direction = { x: 1, y: 1 };
	let speed = 3;

	let box = { width: 120, height: 120 };
	let container = { width: 0, height: 0 };

	const updateContainerSize = () => {
		container.width = window.innerWidth;
		container.height = window.innerHeight;
	};

	onMount(() => {
		updateContainerSize();

		window.addEventListener('resize', updateContainerSize);

		const interval = setInterval(() => {
			position.x += direction.x * speed;
			position.y += direction.y * speed;

			if (position.x + box.width > container.width || position.x < 0) {
				direction.x *= -1;
			}
			if (position.y + box.height > container.height || position.y < 0) {
				direction.y *= -1;
			}
		}, 16);

		return () => {
			clearInterval(interval);
			window.removeEventListener('resize', updateContainerSize);
		};
	});
</script>

{#if $dvd$}
	<div class="logo z-50" style="top: {position.y}px; left: {position.x}px;">
		<FlatColorIconsDvdLogo class="size-30" />
	</div>
{/if}

<style>
	.logo {
		position: fixed;
		text-align: center;
		color: white;
		line-height: 50px;
		font-weight: bold;
		border-radius: 8px;
		user-select: none;
		will-change: transform;
	}
</style>
