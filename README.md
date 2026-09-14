# PERSONA KNOWLEDGE CHAT 


# 1. Executive Summary

The solution is a full-stack application in which users select one of three personas and ask questions against one shared knowledge base.

The client uses React and Vite. The server is an ASP.NET Core Web API on .NET 8. SQLite provides local persistence, backend keyword search selects relevant material, and OpenAI gpt-4o-mini generates persona-specific answers. 

---

# 2. Solution Architecture

The application separates presentation, API orchestration, knowledge retrieval, persistence, and external model access. This keeps responsibilities clear without introducing unnecessary abstractions. 

## Architecture Layers

| Layer | Technology | Responsibility |
|---------|------------|--------------|
| Client | React + Vite | Persona selection, chat interface, knowledge-base list, loading/error states and source display |
| API | .NET 8 Web API | Input validation, orchestration, retrieval invocation and response construction |
| Retrieval | Keyword search | Selects relevant excerpts and preserves document titles or filenames |
| Persistence | SQLite | Stores the seeded fixed corpus locally |
| AI | OpenAI Chat Completions | Produces the answer from persona instructions, conversation history and reference context |



## 2.1 End-to-End Request Flow

1. The user selects a persona and submits a message.
2. The client sends the selected persona, message, and current conversation context to the backend.
3. The backend validates the request and performs keyword retrieval against the persisted corpus.
4. Relevant excerpts are supplied as reference context with document names.
5. The model receives persona instructions, history, and grounded reference context as separate concerns.
6. The API returns the answer and source references for display.


---

# 3. Implementation Details

## 3.1 Technology and Package Choices

| Area | Choice | Rationale |
|--------|---------|-----------|
| Frontend | React + Vite | Lightweight component model and efficient development workflow |
| Backend | ASP.NET Core Web API on .NET 8 | Clear API boundaries, server-side configuration and dependency injection |
| Database | SQLite | Minimal setup with real backend persistence |
| Model | gpt-4o-mini | Cost-conscious model for grounded conversational responses |
| Retrieval | Keyword search with OpenAI-backed retrieval (`https://api.openai.com/v1/chat/completions`) | Simple, deterministic and suitable for three small documents |


## 3.2 Personas and Shared Knowledge

The supplied `teacher.md`, `analyst.md`, and `skeptic.md` files are persona configuration, not knowledge-base material.

The three personas share one retrieval implementation and one corpus, while their separate instructions alter communication style and emphasis.

### Personas

- **Teacher:** patient, clear and example-driven
- **Analyst:** concise, structured and focused on evidence
- **Skeptic:** questions assumptions and highlights uncertainty

### Knowledge Base

The fixed corpus contains:

- `product-guide.md`
- `pricing-and-billing.md`
- `support-and-data-policy.md`

Retrieved content should retain the source filename or title. If the corpus does not answer the question, the response should acknowledge the gap rather than use external knowledge. 

---

# 4. Prerequisites and Configuration

## 4.1 Required Software

| Requirement | Purpose | Check |
|-------------|---------|--------|
| .NET 8 SDK | Build and run the backend | `dotnet --version` |
| OpenAI account and API key | Enable live model responses | Use a reviewer-owned valid key |
| Code editor | Inspect and run the solution | Visual Studio Code was used |

## 4.2 Configure the OpenAI Key

The supplied implementation uses the `OpenAI:ApiKey` setting in `appsettings.Development.json`:

```json
{
  "OpenAI": {
    "ApiKey": "YOUR_OPENAI_API_KEY"
  }
}
```




---

# 5. Installation and Execution

From the solution root, use separate terminals for the server and client folders shown in the supplied notes. 

## 5.1 Restore Dependencies

### Backend

```bash
cd server
dotnet restore
```

### Frontend

```bash
cd client
npm install
```

## 5.2 Start the Backend

```bash
cd server
dotnet run
```

The supplied notes show:

```text
http://localhost:5022
```

for the backend. If the console reports another port, update the frontend API configuration accordingly.


## 5.3 Start the Frontend

```bash
cd client
npm run dev
```



---

# Application URLs

**Web Application**

```text
http://localhost:5173
```

**Backend API**

```text
http://localhost:5022
```

The UI contains:

- Persona selector
- Chat workspace
- Reference-library panel




