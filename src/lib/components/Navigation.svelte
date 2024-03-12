<script lang="ts">
	import { Home, Telescope, BookOpen, ChevronDown } from 'lucide-svelte';

	import logo from '$lib/assets/duggup.svg';
	import duggupLogo from '$lib/assets/duggup-logo.png';
	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import ProfilePic from '$lib/assets/profile-pic.jpeg';
	import PostButton from '$lib/components/PostButton.svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
</script>

<nav class="flex items-center justify-between px-4 h-20 border-b">
	<a href="/" class="hidden max-lg:block">
		<img src={duggupLogo} alt="logo" width="40" height="40" />
	</a>
	{#if $page.url.pathname !== '/'}
		<div class="hidden max-lg:block">
			<PostButton />
		</div>
	{/if}
	<a href="/" class="max-lg:hidden">
		<img src={logo} alt="duggup logo" />
	</a>
	{#if $page.url.pathname !== '/'}
		<span class="flex items-center gap-12 max-lg:hidden">
			<a href="/posts" class="flex items-center gap-2">
				<Home size={16} />
				<span>Home</span>
			</a>
			<a href="/explore" class="flex items-center gap-2">
				<Telescope size={16} />
				<span>Explore</span>
			</a>

			<a href="/learn" class="flex items-center gap-2">
				<BookOpen size={16} />
				<span>Learn</span>
			</a>

			<span>
				<PostButton />
			</span>
			<span>
				<DropdownMenu.Root>
					<DropdownMenu.Trigger asChild let:builder>
						<Button
							builders={[builder]}
							variant="outline"
							class="flex gap-2 border-0 text-base font-normal"
						>
							<img
								src={ProfilePic}
								alt="profile pic"
								width="36"
								height="36"
								class="rounded-full border border-gray-400"
							/>
							<span>Krishna Kiran</span>
							<span><ChevronDown size={16} /></span>
						</Button>
					</DropdownMenu.Trigger>
					<DropdownMenu.Content class="w-56">
						<DropdownMenu.Group>
							<DropdownMenu.Item on:click={() => goto('/user/krishna-kiran')}
								>Profile</DropdownMenu.Item
							>
							<DropdownMenu.Item on:click={() => goto('/')}>Logout</DropdownMenu.Item>
						</DropdownMenu.Group>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			</span>
		</span>
	{:else}
		<span class="flex items-center gap-8">
			<a href="/posts" class="flex items-center gap-2">
				<span>Login</span>
			</a>
			<a href="/posts" class="flex items-center gap-2">
				<span>Signup</span>
			</a>
		</span>
	{/if}
</nav>
