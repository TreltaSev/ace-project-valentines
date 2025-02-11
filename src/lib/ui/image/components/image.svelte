<script lang="ts">
	import { cn } from '@lib/utils';
	import type { Props } from '..';

	// -=-=-=-=- Props -=-=-=-=- //
	type $$Props = Props;

	let className: $$Props['class'] = undefined;
    let src: $$Props['src'] = undefined;
    let alt: $$Props['alt'] = "Image Rendered By ff"
	export { className as class };

	export let imageClass = 'shrink-0 rounded-[20px]';


	$: imageCls = cn(imageClass, className);
</script>

<img class={imageCls} {src} {alt} {...$$restProps} />
