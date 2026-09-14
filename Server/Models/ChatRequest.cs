namespace Server.Models;

public class ChatRequest
{
    public string Persona { get; set; } = string.Empty;

    public List<ChatMessage> Messages { get; set; } = new();
}