import React from 'react';
import Link from 'next/link';
import Styles from '../styles/Article.module.css';

export default function ArticleItem({ article = {} }) {
	return (
		<Link
			href="/article/[id]"
			as={`/article/${article.id}`}
			className={Styles.grid}
		>
			<a className={Styles.card}>
				<h3>{article.title} &rarr;</h3>
				<p>{article.excerpt}</p>
			</a>
		</Link>
	);
}
