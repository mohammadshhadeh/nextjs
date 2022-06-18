import React from 'react';
// import { useRouter } from 'next/router';
import Link from 'next/link';
import { server } from '../../../config/index';
import Meta from '../../../components/Meta';

export default function Article({ article = {} }) {
	// const router = useRouter();
	// const { id } = router.query;

	return (
		<>
			<Meta title={article.title} />
			<h1>{article.title}</h1>
			<p>{article.body}</p>
			<Link href="/">&larr; Go Back</Link>
		</>
	);
}

// export const getServerSideProps = async (context) => {
// 	const res = await fetch(
// 		`https://jsonplaceholder.typicode.com/posts/${context.params.id}`,
// 	);

// 	const article = await res.json();

// 	return {
// 		props: {
// 			article,
// 		},
// 	};
// };

// -------------------------------------------
export const getStaticProps = async (context) => {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${context.params.id}`,
	);

	// const res = await fetch(`${server}/api/articles/${context.params.id}`);
	const article = await res.json();

	return {
		props: {
			article,
		},
	};
};

export const getStaticPaths = async () => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
	// const res = await fetch(`${server}/api/articles/`);

	const articles = await res.json();
	const ids = articles.map((article) => article.id);
	const paths = ids.map((id) => ({
		params: {
			id: id.toString(),
		},
	}));

	return {
		paths,
		fallback: false,
	};
};
