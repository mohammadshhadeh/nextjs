import ArticleList from '../components/ArticleList';
import { server } from '../config/index';

export default function Home({ articles }) {
	return (
		<div>
			<ArticleList articles={articles} />
		</div>
	);
}

// get statics props
// server side props
// get statics path

export const getStaticProps = async () => {
	const res = await fetch(
		'https://jsonplaceholder.typicode.com/posts?_limit=6',
	);

	// const res = await fetch(`${server}/api/articles/`);
	const articles = await res.json();

	return {
		props: {
			articles,
		},
	};
};
