<script lang="ts">
	import { Home, Telescope, BookOpen, ChevronDown, Menu, User, LogOut } from 'lucide-svelte';

	import { page } from '$app/stores';
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import logo from '$lib/assets/duggup.svg';
	import { Button } from '$lib/components/ui/button';

	export let openDrawer: boolean;
</script>

{#if $page.url.pathname !== '/'}
	<nav
		class="items-center justify-between fixed w-full bottom-0 z-40 p-4 bg-gray-100 border-t-2 border-gray-200 hidden max-lg:flex"
	>
		<a href="/">
			<img src={logo} alt="duggup logo" />
		</a>
		<div>
			<Sheet.Root open={openDrawer} onOpenChange={() => (openDrawer = true)}>
				<Sheet.Trigger asChild let:builder>
					<Button builders={[builder]} variant="outline" class="bg-transparent border-0 flex">
						<Menu />
					</Button>
				</Sheet.Trigger>

				<Sheet.Content side="bottom">
					<Sheet.Header>
						<span class="flex flex-col gap-7">
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

							<a href="/user/krishna-kiran" class="flex items-center gap-2">
								<User size={16} />
								<span>Profile</span>
							</a>
							<a href="/" class="flex items-center gap-2">
								<LogOut size={16} />
								<span>Logout</span>
							</a>
						</span>
					</Sheet.Header>
				</Sheet.Content>
			</Sheet.Root>
		</div>
	</nav>
{/if}
