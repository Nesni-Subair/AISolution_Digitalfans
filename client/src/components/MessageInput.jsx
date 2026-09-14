import { useState } from 'react'

function MessageInput({ onSend, disabled }) {
	const [value, setValue] = useState('')

	function handleSubmit(event) {
		event.preventDefault()
		const content = value.trim()
		if (!content || disabled) return

		onSend(content)
		setValue('')
	}

	return (
		<form className="message-form" onSubmit={handleSubmit}>
			<label className="sr-only" htmlFor="question">Your question</label>
			<textarea
				id="question"
				value={value}
				onChange={(event) => setValue(event.target.value)}
				placeholder="Ask a question about Harbor..."
				rows="2"
				disabled={disabled}
				onKeyDown={(event) => {
					if (event.key === 'Enter' && !event.shiftKey) {
						event.preventDefault()
						event.currentTarget.form.requestSubmit()
					}
				}}
			/>
			<button type="submit" disabled={disabled || !value.trim()}>
				{disabled ? 'Thinking...' : 'Send'}
			</button>
		</form>
	)
}

export default MessageInput
