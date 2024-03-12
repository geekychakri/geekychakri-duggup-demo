import Parser from 'rss-parser';

const parser: Parser = new Parser({});

type FeedType = {
	items: [{ link: string; title: string; content: string; pubDate: string }];
};

export const load = async () => {
	try {
		const feed = (await parser.parseURL(
			'https://www.youtube.com/feeds/videos.xml?channel_id=UC_b1GUJv_2QiMP4BxC9-Dxg'
		)) as FeedType;

		return {
			feed: feed.items
		};
	} catch (err) {
		return {
			feed: []
		};
	}
};
