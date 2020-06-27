import React from 'react'
import { client } from '../../../utils/contentful'
import { BlogEntries } from '../../types/iyansr'
import Layout from '../../Components/Layout'
import Head from 'next/head'
import Meta from '../../Components/Meta'
import ReactMarkdown from 'react-markdown'

interface BlogPostProps {
	entry: BlogEntries;
}

const BlogPost = ({ entry }: BlogPostProps) => {
	console.log(entry)
	return (
		<Layout>
			<Head>
				<title>{entry.fields.title} | iyansr.id</title>
				<Meta
					title={`${entry.fields.title} | iyansr.id`}
					description={entry.fields.preview}
					url={`https://iyansr.id/blog/${entry.fields.slug}`}
					image={entry.fields.image.fields.file.url}
				/>
			</Head>
			<div className='page-header'>
				<img className='banner' src={entry.fields.image.fields.file.url} alt='thumbnail' />
				<div style={{ position: 'absolute' }}>
					<h1>{entry.fields.title}</h1>
					<p>
						<i>{entry.fields.preview}</i>
					</p>
				</div>
			</div>
			<br />
			<hr className='main-line' />
			<br />

			<div className='post-wrapper'>
				<ReactMarkdown source={entry.fields.content} />
			</div>
		</Layout>
	)
}

interface BlogPostContext {
	params: BlogQuery;
}

interface BlogQuery {
	slug: string;
}

export const getStaticProps = async ({ params }: BlogPostContext) => {
	const rawEntry = await client.getEntries({
		content_type: 'article',
		'fields.slug[in]': params.slug,
	})

	return {
		props: {
			entry: rawEntry.items[0],
		},
	}
}

export const getStaticPaths = async () => {
	const rawEntry = await client.getEntries({
		content_type: 'article',
	})

	return {
		paths: rawEntry.items.map((item: BlogEntries) => ({
			params: { slug: item.fields.slug },
		})),
		fallback: false,
	}
}

export default BlogPost
