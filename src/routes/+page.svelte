<script>
	import { ArrowRight } from 'lucide-svelte';
</script>

<div class="h-[calc(100vh-80px)] flex flex-col gap-11 items-center justify-center px-4 text-center">
	<h1 class="text-6xl max-sm:text-5xl font-medium tracking-tight">
		A no <span class="text-primary max-sm:block">non-sense social network.</span>
	</h1>
	<a
		href="/posts"
		class="flex items-center gap-2 border bg-brand-primary hover:bg-[#0044ff] duration-150 text-white px-12 py-3 text-lg rounded-md"
	>
		<span>Get started</span>
		<span><ArrowRight size={18} /></span>
	</a>
</div>
