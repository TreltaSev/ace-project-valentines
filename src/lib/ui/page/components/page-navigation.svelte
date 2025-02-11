<script lang="ts">
	import { cn } from '@lib/utils';
	import type { NavigationProps } from '..';

	import { Flex, Page, Separator, Span } from '@ui';

	// -=-=-=-=- Props -=-=-=-=- //
	type $$Props = NavigationProps;

	let className: $$Props['class'] = undefined;
	export { className as class };

	export let pageClass =
		'flex flex-row w-full h-20 shrink-0 bg-gray-300 dark:bg-black/20 gap-5 px-90 box-border items-center';

	$: pageCls = cn(pageClass, className);
</script>

<nav class={pageCls}>
	<Page.Brand />
	<Separator />
	<a href="/about" class="opacity-80 hover:opacity-60"><Span>About</Span></a>
	<a href="/history" class="opacity-80 hover:opacity-60"><Span>History</Span></a>
	<a href="/highlights" class="opacity-80 hover:opacity-60"><Span>Highlights</Span></a>
</nav>
