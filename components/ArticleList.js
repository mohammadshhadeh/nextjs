import React from 'react';
import Styles from '../styles/Article.module.css';
import ArticleItem from './ArticleItem';

export default function ArticleList({ articles = [] }) {
	return (
		<div className={Styles.grid}>
			{articles.map((article) => (
				<ArticleItem article={article} key={article.id} />
			))}
		</div>
	);
}
