import { Snippet } from '@customType/Snippets'
import Link from 'next/link'
import React from 'react'

const SnippetsCard = ({ snippet }: { snippet: Snippet }) => {
	console.log(snippet)
	return (
		<Link passHref href={`/snippets/${snippet.attributes.slug}`}>
			<a>
				<div className='border-4 border-gray-800 bg-white snippet-card p-4'>
					<img src={snippet.attributes.icon.data.attributes.url} alt='Firebase' className='w-10 h-10 rounded-full border-2 border-gray-800' />
					<p className='font-bold text-gray-800 mt-2'>{snippet.attributes.title}</p>
					<p className='text-sm text-gray-700 mt-2'>{snippet.attributes.description}</p>
				</div>
			</a>
		</Link>
	)
}

export default SnippetsCard
