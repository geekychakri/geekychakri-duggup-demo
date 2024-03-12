<script>
	import Detective from '$lib/assets/detective.svg';
</script>

<div class="h-[calc(100vh-80px)] flex flex-col gap-5 items-center justify-center px-4 max-lg:pb-20 text-center">
	<img src={Detective} alt="404" width="300" height="300" />
	<h1 class="text-lg font-medium tracking-tight">
		This page was stolen. Our best detective is solving it.
	</h1>
	<a
		href="/posts"
		class="flex items-center gap-2 border bg-[#0066ff] text-white px-6 py-2  rounded-md"
	>
		<span>Go Home</span>
	</a>
</div>
