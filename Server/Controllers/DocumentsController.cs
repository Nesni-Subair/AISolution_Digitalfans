using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.Data;

namespace Server.Controllers;

[ApiController]
[Route("api/documents")]
public class DocumentsController : ControllerBase
{
    private readonly AppDbContext _context;

    public DocumentsController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> GetDocuments()
    {
        var docs = await _context.Documents
            .Select(d => new
            {
                d.Id,
                d.Title
            })
            .ToListAsync();

        return Ok(docs);
    }
}