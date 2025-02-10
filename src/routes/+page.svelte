<script lang="ts">
	import { Flex, Button, Span } from '@ui';
	import { SpeedDial } from '@lib/components';
</script>

<Flex.Col class="size-full items-center justify-center overflow-hidden select-none">
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
				<Button class="rounded-full px-5" href="/about">
					<Span class="text-white text-xl">About</Span>
				</Button>
				<Button class="rounded-full px-5" href="/history">
					<Span class="text-white text-xl">History</Span>
				</Button>
				<Button class="rounded-full px-5" href="/highlights">
					<Span class="text-white text-xl">Highlights</Span>
				</Button>
			</Flex.Row>
		</Flex.Col>
	</Flex.Col>

	<!-- Speed Dial -->
	<SpeedDial />
</Flex.Col>
