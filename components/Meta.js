import React from 'react';
import Head from 'next/head';

export default function Meta({ title, keywords, description }) {
	return (
		<Head>
			<meta charset="UTF-8" />
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords} />
			<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
			<title>{title}</title>
		</Head>
	);
}

Meta.defaultProps = {
	title: 'Next.js Crash course',
	keywords: 'Next.js',
	description: 'Next.js',
};
