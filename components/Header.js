import React from 'react';
import Styles from '../styles/Header.module.css';

export default function Header() {
	return (
		<div>
			<h1 className={Styles.title}>
				<span>Next.js</span> Course
			</h1>
			<p className={Styles.description}>
				Keep up to date with the latest Next.js
			</p>
			{/* <style jsx>{`
				.title {
					color: ${true ? 'blue' : 'red'};
				}
			`}</style> */}
		</div>
	);
}
