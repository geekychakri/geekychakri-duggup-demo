<script>
	/** @type {import('./$types').PageData} */
	import { ExternalLink } from 'lucide-svelte';

	import ProfilePic from '$lib/assets/profile-pic.jpeg';
	import logo from '$lib/assets/duggup-logo.png';
	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import Timeline from '$lib/components/Timeline.svelte';

	let isFollowing = false;
</script>

<section class="max-w-[1200px] mx-auto grid grid-cols-12 py-12 max-lg:pb-20">
	<div class="col-span-9 max-lg:col-span-12">
		<div class="grid grid-cols-5 px-20 max-lg:flex max-lg:flex-col max-lg:p-4">
			<div class="row-span-4 grid gap-2 place-items-center text-center grid-rows-subgrid">
				<img
					src={ProfilePic}
					alt="profile pic"
					class="max-w-32 rounded-full border-4 border-gray-200"
				/>
				<h1 class="font-medium text-xl flex flex-col max-lg:mb-2">
					<span>Krishna</span>
					<span>Kiran</span>
				</h1>
			</div>
			<div class="col-span-4 row-span-4 grid grid-rows-subgrid px-3 max-lg:gap-4">
				<p class="self-center leading-normal">
					Co-Founder and CEO at Duggup - Social network for people in tech. Ex-Amazon Head of
					Engineering. I write hot-takes on building a business, shipping delightful products and
					accelerating product and career growth.
				</p>

				<button
					class="w-36 self-center justify-self-start max-lg:w-full text-center rounded relative py-2 m-1 cursor-pointer border border-b-4 shadow-lg border-gray-700 hover:bg-brand-primary hover:text-white duration-150"
					on:click={() => (isFollowing = !isFollowing)}
				>
					{isFollowing ? 'Following' : 'Follow'}
				</button>
			</div>
		</div>
	</div>
	<div class="col-span-3 max-lg:col-span-12 flex flex-col max-lg:flex-row max-lg:border-y">
		<div
			class="flex-1 flex flex-col gap-1 justify-center items-end max-lg:items-start max-lg:p-4 max-lg:border-r"
		>
			<img src={logo} alt="duggup logo" width="40" height="40" class="rounded-full" />
			<p class="font-semibold">Duggup</p>
			<p class="text-sm">Co-Founder and CEO</p>
		</div>

		<div class="flex-1 flex justify-end max-lg:p-4">
			<span class="flex gap-5 items-center max-lg:flex-col max-lg:justify-center">
				<a
					href="https://www.krishnakiran.com/"
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-1"
				>
					<span class="max-lg:text-lg">My website</span>
					<span><ExternalLink size={18} /></span>
				</a>
				<DropdownMenu.Root>
					<DropdownMenu.Trigger asChild let:builder>
						<Button builders={[builder]} variant="outline" class="p-0 border-none">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="2em"
								height="2em"
								viewBox="0 0 56 56"
								{...$$props}
								><path
									fill="currentColor"
									d="M15.32 28c0-2.602-2.086-4.687-4.734-4.687A4.671 4.671 0 0 0 5.899 28a4.671 4.671 0 0 0 4.687 4.688c2.648 0 4.734-2.086 4.734-4.688m17.344 0c0-2.602-2.062-4.687-4.664-4.687S23.336 25.398 23.336 28c0 2.602 2.062 4.688 4.664 4.688s4.664-2.086 4.664-4.688m17.438 0a4.686 4.686 0 0 0-4.688-4.687c-2.648 0-4.734 2.085-4.734 4.687c0 2.602 2.086 4.688 4.734 4.688A4.686 4.686 0 0 0 50.102 28"
								/></svg
							>
						</Button>
					</DropdownMenu.Trigger>
					<DropdownMenu.Content class="w-56">
						<DropdownMenu.Group>
							<DropdownMenu.Item class="p-0">
								<a
									href="https://www.krishnakiran.com/software-estimation-masterclass"
									target="_blank"
									class=" w-full p-2"
									rel="noopener noreferrer">Courses</a
								>
							</DropdownMenu.Item>
							<DropdownMenu.Item class="p-0">
								<a
									href="https://twitter.com/krishkiran?lang=en"
									target="_blank"
									class="w-full p-2"
									rel="noopener noreferrer">Twitter</a
								>
							</DropdownMenu.Item>
						</DropdownMenu.Group>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			</span>
		</div>
	</div>
	<Timeline />
</section>
