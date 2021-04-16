const API_URL = 'https://api.openai.com/v1/engines/davinci/completions'; 

async function submitRequest(params) {
  var apiKey = process.env.OPENAI_SECRET_KEY 

  if(!apiKey){
    throw new Error("OPENAI_SECRET_KEY environment variable not found.")
  }

  const headers = { 
    'Authorization': `Bearer ${apiKey}`, 
    'Content-Type': 'application/json',
  } 

  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify(params),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }

  return(json.choices[0].text)
}

export async function submitRequestTLDR(text) {
    var params = {
      "prompt": `${text}\n\ntl;dr:`,
      "max_tokens": 60,
      "temperature": 0.3,
      "frequency_penalty": 0.8
    };
    return submitRequest(params)
} 

export async function submitRequestHashTag(text) {
    text = text.replace(/\n/g, '')
    var params = {
      "prompt": `Text: ${text}\n\nSchlüsselwörter:`,
      "max_tokens": 60,
      "temperature": 0.3,
      "frequency_penalty": 0.8,
      "top_p": 1.0,
      "presence_penalty": 0.0,
      "stop": ["\n"]
    };
    return submitRequest(params)
}
