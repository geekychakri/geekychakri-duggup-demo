type PostType = {
	post: string;
	postedAt: number;
};

import { localStorageStore } from '@skeletonlabs/skeleton';
import type { Writable } from 'svelte/store';
export const postStore: Writable<PostType[]> = localStorageStore('postStore', [
	{ post: 'just setting up my page!', postedAt: Date.now() }
]);
