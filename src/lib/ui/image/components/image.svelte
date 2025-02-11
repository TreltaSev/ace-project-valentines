<script lang="ts">
	import { cn } from '@lib/utils';
	import type { Props } from '..';
	import { Tooltip } from 'flowbite-svelte';

	// -=-=-=-=- Props -=-=-=-=- //
	type $$Props = Props;

	let className: $$Props['class'] = undefined;
    export let src: $$Props['src'] = "/images/placeholder.jpg";
    export let alt: $$Props['alt'] = "Image Rendered By ff"
	export { className as class };

	export let imageClass = 'shrink-0 rounded-[20px] bg-no-repeat object-cover leading-[normal]';

	$: imageCls = cn(imageClass, className);
</script>

<img class={imageCls} {src} {alt} {...$$restProps} />
{#if alt}
	<Tooltip>{alt}</Tooltip>
{/if}