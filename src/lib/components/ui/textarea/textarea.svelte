<script lang="ts">
	import type { HTMLTextareaAttributes } from "svelte/elements";
	import { cn } from "$lib/utils.js";

	type $$Props = HTMLTextareaAttributes;

	let className: $$Props["class"] = undefined;
	export let value: $$Props["value"] = undefined;
	export { className as class };
</script>

<textarea
	class={cn(
		"flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm  placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
		className
	)}
	bind:value
	on:blur
	on:change
	on:click
	on:focus
	on:keydown
	on:keypress
	on:keyup
	on:mouseover
	on:mouseenter
	on:mouseleave
	on:paste
	on:input
	{...$$restProps}
/>
