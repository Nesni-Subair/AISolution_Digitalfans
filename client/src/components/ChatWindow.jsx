function ChatWindow({ messages, sources, isLoading }) {
	return (
		<div className="chat-window" aria-live="polite">
			{messages.length === 0 && !isLoading ? (
				<div className="empty-state">
						<p></p>
				</div>
			) : (
				<div className="message-list">
					{messages.map((message, index) => (
						<article className={`message ${message.role}`} key={`${message.role}-${index}`}>
							<span className="message-label">{message.role === 'user' ? 'You' : 'Harbor'}</span>
							<p>{message.content}</p>
						</article>
					))}
					{isLoading && <p className="loading-message">Harbor is reviewing the documents...</p>}
				</div>
			)}
			{sources.length > 0 && (
				<div className="sources">
					<span>Sources</span>
					{sources.map((source) => <span className="source-tag" key={source}>{source}</span>)}
				</div>
			)}
		</div>
	)
}

export default ChatWindow
