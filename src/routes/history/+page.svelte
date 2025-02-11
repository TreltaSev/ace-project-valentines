<script lang="ts">
	import { Flex, Button, Span, Page, Image } from '@ui';
	import { Tooltip } from 'flowbite-svelte';

	function daysUntil(date: Date = new Date('2025-2-14')): string {
		const today = new Date();
		today.setHours(0, 0, 0, 0);
		date.setHours(0, 0, 0, 0);
		const diff = Math.ceil((date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
		if (diff === 0) return "Oh, it's today";
		if (diff < 0) return 'And its already passed...';
		return `only ${diff} day${diff === 1 ? '' : 's'} from now`;
	}
</script>

<Page._ class="items-start justify-start py-10 gap-10 mb-20 [&_li]:text-xl ">
	<Flex.Row class="gap-10">
		<Image
			class="w-80 h-full"
			src="https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/C64A/production/_116926705_gettyimages-1231071183.jpg.webp"
			alt="A a statue of St Valentine, inside Whitefriar Church in Dublin

"
		/>
		<Flex.Col>
			<Span class="header">Valentines Day</Span>
			<Span class="text-[2rem] text-black/80 dark:text-white/80">
				Valentines day, a day marked by love and war, celebrated world wide. If you've been living
				under a rock the past 700 or so years, valentines day is celebrated on Feb. 14th, {daysUntil()}.
			</Span>
			<Button class="w-fit mt-5" href="https://www.bbc.co.uk/newsround/16945378" newPage
				>View Source</Button
			>
		</Flex.Col>
	</Flex.Row>

	<Image
		class="w-full h-40"
		src="https://static.vecteezy.com/system/resources/previews/017/203/560/non_2x/happy-valentines-day-banner-background-free-vector.jpg"
		alt={null}
	/>

	<Flex.Row class="gap-10">
		<Flex.Col>
			<Span class="header">Music</Span>
			<Span class="text-[2rem] text-black/80 dark:text-white/80">
				With the creation of valentines day came the birth of multiple musical forms, such as lied,
				nocturne, intermezzo, capriccio, prelude, and mazurka. All of which seem hard to
				pronounce... That's because they are. In fact, while im presenting this, I will not be
				reading this.
			</Span>
			<Button class="w-fit mt-5" href="https://www.britannica.com/art/Romanticism/Music" newPage>
				View Source
			</Button>
		</Flex.Col>
		<Image src="/images/charlotte-bronte.png" class="w-80" alt="Charlotte Bronte" />
	</Flex.Row>

	<Flex.Row class="gap-10 h-fit">
		<Image src="/images/frederick-douglass.jpg" class="w-40 h-full" alt="Frederick Douglass" />

		<Flex.Col class="h-fit">
			<Span class="header">Lies and deceit</Span>
			<Span class="text-[2rem] text-black/80 dark:text-white/80">
				Feb 14th shouldn't be labeled as valentines day... because it isn't. Its <a
					href="https://douglassday.org/">Douglass Day</a
				>. Who cares about loves and kisses when you have a staple of america just waiting for your
				appreciation.
			</Span>
			<Button class="w-fit mt-5" href="https://douglassday.org/" newPage>View Source</Button>
		</Flex.Col>
	</Flex.Row>

	<Flex.Col class="gap-10 h-fit w-full">
		<Flex.Col class="h-full">
			<Span class="header">More on the history</Span>
			<Span class="text-[2rem] text-black/80 dark:text-white/80">
				Heres a 12 minute, probably ai generated video that covers more on valentines day
			</Span>
		</Flex.Col>
		<iframe
			class="w-full aspect-video"
			src="https://www.youtube.com/embed/3vwFqLNC8xg?si=Z4r_4Dpde-QPgYZ6"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerpolicy="strict-origin-when-cross-origin"
			allowfullscreen
		></iframe>
	</Flex.Col>
</Page._>
