var builder = WebApplication.CreateBuilder(args);

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
  app.UseDeveloperExceptionPage();
  app.Use(async (context, next) =>
  {
    if (context.Request.Path == "/config.json")
    {
      context.Response.ContentType = "application/json";
      await context.Response.SendFileAsync("wwwroot/config.Development.json");
      return;
    }
    await next();
  });
}
else
{
  app.Use(async (context, next) =>
  {
    if (context.Request.Path == "/config.json")
    {
      context.Response.ContentType = "application/json";
      await context.Response.SendFileAsync("wwwroot/config.Production.json");
      return;
    }
    await next();
  });
}

app.UseDefaultFiles();
app.UseStaticFiles();

app.Run();
