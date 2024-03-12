import Parser from 'rss-parser';

const parser: Parser = new Parser({});

type FeedType = {
	items: [{ link: string; title: string; content: string }];
};

export const load = async () => {
	try {
		const feed = (await parser.parseURL(
			'https://github-rss.alexi.sh/feeds/daily/all.xml'
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
