import { useEffect, useState } from 'react'
import axios from 'axios'

function DocumentList() {
	const [documents, setDocuments] = useState([])
	const [error, setError] = useState('')

	useEffect(() => {
		axios.get('http://localhost:5022/api/documents')
			.then((response) => setDocuments(response.data))
			.catch(() => setError('Documents are unavailable.'))
	}, [])

	return (
		<div className="document-list">
			<p className="eyebrow">Reference library</p>
			<h2>Knowledge base</h2>
			{error ? (
				<p className="muted">{error}</p>
			) : documents.length === 0 ? (
				<p className="muted">Loading documents...</p>
			) : (
				<ul>
					{documents.map((document) => <li key={document.id}>{document.title}</li>)}
				</ul>
			)}
		</div>
	)
}

export default DocumentList
