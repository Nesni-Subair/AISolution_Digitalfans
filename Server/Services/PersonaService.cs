namespace Server.Services;

public class PersonaService
{
    public string GetPrompt(string persona)
    {
        var file = Path.Combine(
            Directory.GetCurrentDirectory(),
            "Personas",
            $"{persona}.md");

        return File.ReadAllText(file);
    }
}