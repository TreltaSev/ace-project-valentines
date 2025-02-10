<script lang="ts">
	import { cn } from '@lib/utils';
	import type { Props } from '..';

	// -=-=-=-=- Props -=-=-=-=- //
	type $$Props = Props;

	let className: $$Props['class'] = undefined;
	export { className as class };

	export let buttonClass =
		'flex flex-col p-[10px] justify-center items-center bg-primary-500 rounded-[10px] cursor-pointer overlay h-fit text-white dark:text-white';
	export let href: undefined | string = undefined;

	$: buttonCls = cn(buttonClass, className);
</script>

{#if href}
	<a {href}>
		<button class={cn(buttonCls)} {...$$restProps} on:click>
			<slot />
		</button>
	</a>
{:else}
	<button class={cn(buttonCls)} {...$$restProps} on:click>
		<slot />
	</button>
{/if}
