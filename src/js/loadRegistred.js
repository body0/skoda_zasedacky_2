const baseUrl = "";

var rawData = await fetch("/api/registred", 
{
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({ userId: })
})