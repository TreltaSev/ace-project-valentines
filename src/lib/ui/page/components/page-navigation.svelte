<script lang="ts">
	import { base } from '$app/paths';

	import { cn } from '@lib/utils';
	import type { NavigationProps } from '..';

	import { Flex, Page, Separator, Span } from '@ui';

	// -=-=-=-=- Props -=-=-=-=- //
	type $$Props = NavigationProps;

	let className: $$Props['class'] = undefined;
	export { className as class };

	export let pageClass =
		'flex flex-row w-full h-20 shrink-0 bg-transparent dark:bg-black/20 gap-5 px-90 box-border items-center [&_.fw]:text-primary-500 [&_.fw]:dark:text-white';

	$: pageCls = cn(pageClass, className);
</script>

<nav class={pageCls}>
	<Page.Brand />
	<Separator />
	<a href="{base}/about" class="fw opacity-80 hover:opacity-60"><Span>About</Span></a>
	<a href="{base}/history" class="fw opacity-80 hover:opacity-60"><Span>History</Span></a>
	<a href="{base}/highlights" class="fw opacity-80 hover:opacity-60"><Span>Highlights</Span></a>
</nav>
