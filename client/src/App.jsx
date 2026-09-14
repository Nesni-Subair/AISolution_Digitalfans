import { useState } from 'react'
import axios from 'axios'
import ChatWindow from './components/ChatWindow'
import DocumentList from './components/DocumentList'
import MessageInput from './components/MessageInput'
import PersonaSelector from './components/PersonaSelector'
import './App.css'

function App() {
  const [persona, setPersona] = useState('analyst')
  const [messages, setMessages] = useState([])
  const [sources, setSources] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  function handlePersonaChange(nextPersona) {
    setPersona(nextPersona)
    setMessages([])
    setSources([])
    setError('')
  }

  async function handleSend(content) {
    const nextMessages = [...messages, { role: 'user', content }]

    setMessages(nextMessages)
    setSources([])
    setError('')
    setIsLoading(true)

    try {
      const response = await axios.post('http://localhost:5022/api/chat', {
        persona,
        messages: nextMessages,
      })

      setMessages([
        ...nextMessages,
        { role: 'assistant', content: response.data.answer },
      ])
      setSources(response.data.sources ?? [])
    } catch {
      setError('The server could not answer. Make sure the API is running on port 5022.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="app-shell">
      <header className="app-header">
        
        <PersonaSelector value={persona} onChange={handlePersonaChange} />
      </header>

      <div className="workspace">
        <section className="conversation-panel" aria-label="Chat">
          <ChatWindow messages={messages} sources={sources} isLoading={isLoading} />
          {error && <p className="error-message" role="alert">{error}</p>}
          <MessageInput onSend={handleSend} disabled={isLoading} />
        </section>
        <aside className="documents-panel">
          <DocumentList />
        </aside>
      </div>
    </main>
  )
}

export default App
