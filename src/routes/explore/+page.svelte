<script>
	export let data;
</script>

<div class="max-w-[700px] mx-auto py-8 flex flex-col gap-7 max-lg:px-4 max-lg:pb-20">
	<h1 class="font-medium text-xl">Explore</h1>

	{#if data.feed.length >= 1}
		{#each data.feed as feed, index}
			<a
				href={feed.link}
				target="_blank"
				rel="noopener noreferrer"
				class="flex flex-col gap-4 p-4 rounded-md border hover:border-brand-primary duration-150"
			>
				<span class="font-medium">{feed?.title}</span>
				<span class="text-gray-600">{feed?.content}</span>
			</a>
		{/each}
	{:else}
		<p>Something went wrong! Please try again later.</p>
	{/if}
</div>
