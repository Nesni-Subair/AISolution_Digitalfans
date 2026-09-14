using Microsoft.AspNetCore.Mvc;
using Server.Models;
using Server.Services;

namespace Server.Controllers;

[ApiController]
[Route("api/chat")]
public class ChatController : ControllerBase
{
    private readonly RetrievalService _retrieval;
    private readonly PersonaService _personas;
    private readonly OpenAiService _openAi;

    public ChatController(
        RetrievalService retrieval,
        PersonaService personas,
        OpenAiService openAi)
    {
        _retrieval = retrieval;
        _personas = personas;
        _openAi = openAi;
    }

    [HttpPost]
    public async Task<IActionResult> Chat(
        ChatRequest request)
    {
        var question =
            request.Messages.Last().Content;

        var references =
            _retrieval.Search(question);

        var personaPrompt =
            _personas.GetPrompt(request.Persona);

        var answer =
            await _openAi.GetResponse(
                personaPrompt,
                references,
                request.Messages);

        return Ok(
            new ChatResponse
            {
                Answer = answer,

                Sources = references
                    .Select(r => r.DocumentTitle)
                    .Distinct()
                    .ToList()
            });
    }
}