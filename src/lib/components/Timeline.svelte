<script>
	import { ChevronUp } from 'lucide-svelte';

	import logo from '$lib/assets/duggup-logo.png';
	import Cover1 from '$lib/assets/steve-jobs.jpeg';
	import Cover2 from '$lib/assets/sam-altman.jpeg';
	import Cover3 from '$lib/assets/Card3.jpeg';
	import Cover4 from '$lib/assets/Card4.png';
	import BetterUpLogo from '$lib/assets/better-up.jpeg';
</script>

<div class="col-span-9 max-lg:col-span-12 flex flex-col gap-1 py-6 max-lg:p-4">
	<div class="flex max-lg:flex-col gap-8 max-lg:gap-0">
		<div
			class="relative flex items-center justify-end max-sm:justify-start shrink-0 w-40 max-lg:w-auto border-r-4 border-gray-300 max-lg:border-l-4 max-lg:border-r-0 border-dotted p-4 max-lg:py-6"
		>
			<p class="text-sm">Dec 2023</p>
			<span
				class="absolute -right-3 w-5 h-5 bg-white border-4 border-[#0066FF] rounded-full max-lg:w-3 max-lg:h-3 max-lg:border-2 max-lg:-left-2"
			></span>
		</div>
		<div class="flex max-lg:flex-col gap-12 py-12 max-lg:py-0">
			<div class="flex-1 shrink-0 text-slate-900 border bg-white overflow-hidden rounded-xl">
				<img src={Cover1} alt="steve jobs" class="w-full h-36 object-cover" />
				<p class="p-4 text-sm font-normal">
					No amount of technology can convert a bad story into a good story.
				</p>
			</div>
			<div
				class="flex-1 text-xl font-bold text-slate-900 border bg-white overflow-hidden rounded-xl"
			>
				<img src={Cover2} alt="steve jobs" class="w-full h-36 object-cover" />
				<p class="p-4 text-sm font-normal">
					Most people don't have original ideas. Here is how Sam Altman pushes himself to ha...
				</p>
			</div>
		</div>
	</div>
	<div class="flex max-lg:flex-col gap-8 max-lg:gap-0">
		<div
			class="relative flex flex-col shrink-0 w-40 pr-6 border-r-4 border-gray-300 max-lg:border-l-4 max-lg:border-r-0 border-dotted p-4 max-lg:py-6"
		>
			<span
				class="absolute -right-[18px] top-1/2 -translate-y-1/2 w-8 h-8 bg-white border-8 border-[#0066FF] rounded-full max-lg:w-5 max-lg:h-5 max-lg:border-4 max-lg:-left-3"
			></span>
			<span class="absolute -right-5 -top-8 max-lg:hidden">
				<ChevronUp size={36} color="#778FB1" strokeWidth="1" />
			</span>
			<div class="flex flex-col items-end max-lg:items-start gap-1">
				<img src={logo} width="48" height="48" class=" rounded-full" alt="" />
				<p class="font-semibold">Duggup</p>
				<p class="text-sm whitespace-nowrap">San Francisco Bay Area</p>
				<p class="text-sm">Joined</p>
				<p class="text-sm">Nov 2023</p>
			</div>
		</div>
		<div
			class="self-center max-lg:self-stretch flex-1 flex flex-col gap-2 bg-white shadow-sm p-4 rounded-xl max-lg:border"
		>
			<p class="text-xl font-semibold">Co-Founder and CEO</p>
			<p class="text-sm text-gray-500">Full-time · Remote</p>
		</div>
	</div>
	<div class="flex max-lg:flex-col gap-8 max-lg:gap-0">
		<div
			class="relative flex items-center justify-end max-sm:justify-start shrink-0 w-40 max-lg:w-auto border-r-4 border-gray-300 max-lg:border-l-4 max-lg:border-r-0 border-dotted p-4 max-lg:py-6"
		>
			<p class="text-sm">Dec 2022</p>
			<span
				class="absolute -right-3 w-5 h-5 bg-white border-4 border-[#0066FF] rounded-full max-lg:w-3 max-lg:h-3 max-lg:border-2 max-lg:-left-2"
			></span>
		</div>
		<div class="flex max-lg:flex-col gap-12 py-12 max-lg:py-0">
			<div class="flex-1 shrink-0 text-slate-900 border bg-white overflow-hidden rounded-xl">
				<img src={Cover3} alt="steve jobs" class="w-full h-36 object-cover" />
				<p class="p-4 text-sm font-normal">
					No amount of technology can convert a bad story into a good story.
				</p>
			</div>
			<div
				class="flex-1 text-xl font-bold text-slate-900 border bg-white overflow-hidden rounded-xl"
			>
				<img src={Cover4} alt="steve jobs" class="w-full h-36 object-cover" />
				<p class="p-4 text-sm font-normal">
					Most people don't have original ideas. Here is how Sam Altman pushes himself to ha...
				</p>
			</div>
		</div>
	</div>
	<div class="flex max-lg:flex-col gap-8 max-lg:gap-0">
		<div
			class="relative flex flex-col shrink-0 w-40 pr-6 border-r-4 border-gray-300 max-lg:border-l-4 max-lg:border-r-0 border-dotted p-4 max-lg:py-6"
		>
			<span
				class="absolute -right-[18px] top-1/2 -translate-y-1/2 w-8 h-8 bg-white border-8 border-[#0066FF] rounded-full max-lg:w-5 max-lg:h-5 max-lg:border-4 max-lg:-left-3"
			></span>
			<span class="absolute -right-5 -top-8 max-lg:hidden">
				<ChevronUp size={36} color="#778FB1" strokeWidth="1" />
			</span>
			<div class="flex flex-col items-end max-lg:items-start gap-1">
				<img src={BetterUpLogo} width="48" height="48" class=" rounded-full" alt="" />
				<p class="font-semibold">Better Up</p>
				<p class="text-sm whitespace-nowrap">San Francisco Bay Area</p>
				<p class="text-sm">Joined</p>
				<p class="text-sm">Sep 2022</p>
			</div>
		</div>
		<div
			class="self-center max-lg:self-stretch flex-1 flex flex-col gap-2 bg-white shadow-sm p-4 rounded-xl max-lg:border"
		>
			<p class="text-xl font-semibold">VP Engineering</p>
			<p class="text-sm text-gray-500">Full-time</p>
		</div>
	</div>
</div>
