<script lang="ts">
	import { Flex, Button, Span, Page, Table } from '@ui';
	import { images } from '.';
	import { Carousel } from 'flowbite-svelte';

	let ketchup_url =
		'https://www.amazon.com/Heinz-Inverted-Bottle-Tomato-Ketchup/dp/B0005YKO8E?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&smid=ATVPDKIKX0DER&gPromoCode=sns_us_en_5_2023Q4&gQT=1&th=1';
</script>

<Page._ class="gap-10">
	

	<Flex.Row class="gap-10">
		<Flex.Col>
			<Span class="header">Ketchup</Span>
			<Span class="text-[2rem] text-black/80 dark:text-white/80">
				No matter what you eat, whether that be slop or Filet Mignon, you always seem to add ketchup
				whenever possible. I mean I saw you add ketchup to salad before. and the salad already had
				tomatoes...
			</Span>
			<Button class="w-fit mt-5" href={ketchup_url} newPage>Buy Ketchup</Button>
		</Flex.Col>
	</Flex.Row>

	<Flex.Row class="gap-10">
		<Flex.Col>
			<Span class="header">Disney</Span>
			<Span class="text-[2rem] text-black/80 dark:text-white/80">
				When I was a kid, you had the bright idea of bringing the family to disney world, and it was
				a great idea. I have many fond memories of my child hood because of that. You also can't
				forget about chuck e cheese. All of these places have a special place in my heart
			</Span>
		</Flex.Col>
	</Flex.Row>

	<Flex.Row class="gap-10">
		<Flex.Col>
			<Span class="header">Barbecue</Span>
			<Span class="text-[2rem] text-black/80 dark:text-white/80">
				Barbecue holds a special place in a lot of people's hearts, including mine and yours. Every
				week you come from the store with a strip of ribs, and loads of bbq and ketchup sauce.
			</Span>
		</Flex.Col>
	</Flex.Row>

	<Table.Root
		itemClassName="border-solid border-1 border-gray-400 dark:border-gray-600"
		headCellClassName="pr-8"
		caption="Special Events"
	>
		<Table.Head headers={['Date', 'Event']} />
		<Table.Body>
			<Table.Row data={['04/26/2008', 'The first time saw me']} />
			<Table.Row data={['xx/xx/2013', 'Moved here to Virginia']} />
			<Table.Row data={['xx/xx/2015', 'Trip to Disney Land']} />
			<Table.Row data={['xx/xx/2016', 'Trip around NYC']} />
			<Table.Row data={['xx/xx/2020', 'Trip to Florida']} />
		</Table.Body>
	</Table.Root>

	<div class="w-[70%] h-120 mt-1000 mb-80">
		<Carousel {images} duration={6000} class="2xl:h-150" />
	</div>
</Page._>
