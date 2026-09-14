using Server.Data;
using Server.Models;
public class RetrievalService
{
    private readonly AppDbContext _context;

    public RetrievalService(AppDbContext context)
    {
        _context = context;
    }
public List<SearchResult> Search(string query)
{
    var words = query.ToLower().Split(" ");

    return _context.DocumentChunks
        .Join(
            _context.Documents,
            chunk => chunk.DocumentId,
            doc => doc.Id,
            (chunk, doc) => new
            {
                Chunk = chunk,
                Document = doc
            })
        .AsEnumerable()
        .Select(x => new
        {
            x.Chunk.Content,
            x.Document.Title,
            Score = words.Count(w =>
                x.Chunk.Content.ToLower().Contains(w))
        })
        .OrderByDescending(x => x.Score)
        .Take(5)
        .Select(x =>
            new SearchResult
            {
                Content = x.Content,
                DocumentTitle = x.Title
            })
        .ToList();
}
    
}