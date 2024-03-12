<script lang="ts">
	import { PlusSquare } from 'lucide-svelte';

	import * as Dialog from '$lib/components/ui/dialog/index';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Button } from '$lib/components/ui/button';
	import { goto } from '$app/navigation';

	import { postStore } from './../../stores';
	let open = false;

	let post: string;
	let loading = false;

	function addPost() {
		$postStore = [{ post, postedAt: Date.now() }, ...$postStore];
	}
</script>

<Dialog.Root
	{open}
	onOpenChange={() => {
		open = true;
		loading = false;
		post = '';
	}}
>
	<Dialog.Trigger>
		<span class="flex items-center gap-2">
			<span
				class="rounded relative inline-flex gap-3 items-center justify-center px-6 py-2 m-1 cursor-pointer border border-b-4 shadow-lg border-gray-700 hover:bg-brand-primary hover:text-white duration-150"
			>
				<PlusSquare size={16} />
				<span class="relative">Post</span>
			</span>
		</span>
	</Dialog.Trigger>
	<Dialog.Content class="sm:max-w-[425px]">
		<Dialog.Header>
			<Dialog.Title class="tracking-normal font-medium">Create a post</Dialog.Title>
			<Dialog.Description>What's on your mind?</Dialog.Description>
		</Dialog.Header>
		<div class="grid gap-4 py-4">
			<Textarea placeholder="What's happening?!" class="resize-none" bind:value={post} required />
		</div>
		<Dialog.Footer>
			<Button
				type="submit"
				on:click={() => {
					loading = true;
					const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));
					wait().then(() => {
						addPost();
						open = false;
						goto('/posts');
					});
				}}
				class="w-24 text-center bg-brand-primary hover:bg-[#0048ff] rounded-full font-medium px-6 py-3 text-base"
			>
				{#if loading}
					<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
						><g
							><rect width="2" height="5" x="11" y="1" fill="currentColor" opacity=".14" /><rect
								width="2"
								height="5"
								x="11"
								y="1"
								fill="currentColor"
								opacity=".29"
								transform="rotate(30 12 12)"
							/><rect
								width="2"
								height="5"
								x="11"
								y="1"
								fill="currentColor"
								opacity=".43"
								transform="rotate(60 12 12)"
							/><rect
								width="2"
								height="5"
								x="11"
								y="1"
								fill="currentColor"
								opacity=".57"
								transform="rotate(90 12 12)"
							/><rect
								width="2"
								height="5"
								x="11"
								y="1"
								fill="currentColor"
								opacity=".71"
								transform="rotate(120 12 12)"
							/><rect
								width="2"
								height="5"
								x="11"
								y="1"
								fill="currentColor"
								opacity=".86"
								transform="rotate(150 12 12)"
							/><rect
								width="2"
								height="5"
								x="11"
								y="1"
								fill="currentColor"
								transform="rotate(180 12 12)"
							/><animateTransform
								attributeName="transform"
								calcMode="discrete"
								dur="0.75s"
								repeatCount="indefinite"
								type="rotate"
								values="0 12 12;30 12 12;60 12 12;90 12 12;120 12 12;150 12 12;180 12 12;210 12 12;240 12 12;270 12 12;300 12 12;330 12 12;360 12 12"
							/></g
						></svg
					>
				{:else}
					Post
				{/if}
			</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
