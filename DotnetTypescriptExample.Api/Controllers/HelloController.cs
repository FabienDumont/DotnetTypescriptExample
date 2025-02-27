using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
[ApiController]
public class HelloController : ControllerBase
{
  [HttpGet]
  public IActionResult Get()
  {
    return Ok(new { Message = "Hello from API !" });
  }
}
