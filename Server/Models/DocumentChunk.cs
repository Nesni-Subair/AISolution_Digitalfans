namespace Server.Models;
public class DocumentChunk
{
    public int Id { get; set; }

    public int DocumentId { get; set; }

    public string Content { get; set; } = string.Empty;

    public int ChunkIndex { get; set; }
}