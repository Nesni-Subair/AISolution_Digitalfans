using Server.Models;

namespace Server.Data;

public static class SeedData
{
    public static async Task InitializeAsync(AppDbContext context)
    {
        var folder = Path.Combine(
            Directory.GetCurrentDirectory(),
            "..",
            "knowledge-base-documents");

        if (!context.Documents.Any())
        {
            var files = Directory.GetFiles(folder, "*.md");

            foreach (var file in files)
            {
                var content = await File.ReadAllTextAsync(file);

                var document = new Document
                {
                    Title = Path.GetFileName(file),
                    Content = content
                };

                context.Documents.Add(document);

                await context.SaveChangesAsync();
            }
        }

        if (!context.DocumentChunks.Any())
        {
            var documents = context.Documents.ToList();

            foreach (var document in documents)
            {
                var chunks = ChunkText(document.Content);

                for (int i = 0; i < chunks.Count; i++)
                {
                    context.DocumentChunks.Add(new DocumentChunk
                    {
                        DocumentId = document.Id,
                        Content = chunks[i],
                        ChunkIndex = i
                    });
                }
            }

            await context.SaveChangesAsync();
        }
    }

    private static List<string> ChunkText(string content, int chunkSize = 500)
    {
        var chunks = new List<string>();

        for (int i = 0; i < content.Length; i += chunkSize)
        {
            chunks.Add(
                content.Substring(
                    i,
                    Math.Min(chunkSize, content.Length - i)
                )
            );
        }

        return chunks;
    }
}