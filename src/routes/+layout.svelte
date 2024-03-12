<script lang="ts">
	import '@fontsource/inter';
	import '@fontsource/inter/500.css';
	import '@fontsource/inter/600.css';

	import 'nprogress/nprogress.css';
	import NProgress from 'nprogress';
	import { navigating } from '$app/stores';

	import '../app.css';
	let openDrawer = false;

	NProgress.configure({
		showSpinner: false
	});

	$: {
		if ($navigating) {
			openDrawer = false;
			NProgress.start();
		} else NProgress.done();
	}

	import Navigation from '$lib/components/Navigation.svelte';
	import MobileNav from '$lib/components/MobileNav.svelte';
</script>

<Navigation />
<MobileNav bind:openDrawer />

<slot />

<style>
	:global(body) {
		font-family: 'Inter', sans-serif;
	}
</style>
