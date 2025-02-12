<script lang="ts">
	import { base } from '$app/paths';
	import { Flex, Button, Span, Page } from '@ui';
	import { onMount } from 'svelte';
	import MdiGithub from '~icons/mdi/github';

	onMount(() => {
		console.info("Base: ", base)
	})
</script>

<Page._>
	<Flex.Col class="items-center size-full mt-50 gap-10">
		<!-- Title -->
		<Flex.Col class="items-center">
			<Span class="text-5xl">Valentines Project</Span>
			<Span class="text-4xl opacity-60">Made by: Richard Grandt</Span>
		</Flex.Col>

		<!-- Start Navigating Section -->
		<Flex.Col class="items-center gap-2.5">
			<Span class="text-xl">Start Navigating</Span>
			<Flex.Row class="gap-2.5">
				<Button class="rounded-full px-5" href="{base}/about">
					<Span class="text-white text-xl">About</Span>
				</Button>
				<Button class="rounded-full px-5" href="{base}/history">
					<Span class="text-white text-xl">History</Span>
				</Button>
				<Button class="rounded-full px-5" href="{base}/highlights">
					<Span class="text-white text-xl">Highlights</Span>
				</Button>
			</Flex.Row>
			<a href="https://github.com/TreltaSev/ace-project-valentines" target="_blank" class="w-full">
				<Button class="mt-5 rounded-full px-5 w-full items-center justify-center gap-2.5 bg-black flex-row">
					<MdiGithub class="size-7"/>
					<Span class="text-white text-xl">View on Github</Span>
				</Button>
			</a>
		</Flex.Col>
		
	</Flex.Col>
</Page._>
