<script>
	import { convertISOtoMonthYear } from '$lib/utils';
	export let data;
</script>

<div class="max-w-[700px] mx-auto py-8 flex flex-col gap-7 max-lg:px-4 max-lg:pb-20">
	<h1 class="font-medium text-xl">Learn</h1>
	{#if data.feed.length >= 1}
		{#each data.feed as feed, index}
			<a
				href={feed?.link}
				target="_blank"
				rel="noopener noreferrer"
				class="flex flex-col gap-4 p-4 border rounded-md hover:border-brand-primary duration-150"
			>
				<h2 class="text-md font-medium">{feed?.title}</h2>
				{#if feed.pubDate}
					<p class="text-sm text-gray-600">{convertISOtoMonthYear(feed.pubDate)}</p>
				{/if}
			</a>
		{/each}
	{:else}
		<p>Something went wrong! Please try again later.</p>
	{/if}
</div>
