<script>
	import { BadgeCheck } from 'lucide-svelte';

	import ProfilePic from '$lib/assets/profile-pic.jpeg';
	import { getRelativeTimeString } from '$lib/utils';

	import { postStore } from './../../stores';
</script>

<div class="max-w-[700px] mx-auto py-8 flex flex-col gap-7 max-lg:px-4 max-lg:pb-20">
	<h1 class="font-medium text-xl">Posts</h1>
	{#each $postStore as post, index}
		<div class="flex flex-col gap-4 border rounded-md p-4">
			<div class="flex max-lg:flex-col gap-2 font-medium">
				<img
					src={ProfilePic}
					alt="profile pic"
					width="50"
					height="50"
					class="self-start rounded-full border-2 border-gray-300"
				/>
				<p class="flex flex-col gap-1">
					<span class="flex items-center gap-1">
						<span class="font-medium">Krishna Kiran</span>
						<BadgeCheck size={18} />
						<span>&#xb7;</span>
						<span class="text-sm text-gray-500">{getRelativeTimeString(post.postedAt)}</span>
					</span>
					<span class="font-normal text-gray-600">{post.post}</span>
				</p>
			</div>
		</div>
	{/each}
</div>
