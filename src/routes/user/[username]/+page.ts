import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ params }) => {
	return {
		data: params.username
	};
};
