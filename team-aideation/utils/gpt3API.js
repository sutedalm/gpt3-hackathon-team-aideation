const DAVINCI_API_URL = "https://api.openai.com/v1/engines/davinci/completions";
const DAVINCI_INSTRUCT_API_URL =
  "https://api.openai.com/v1/engines/davinci-instruct-beta/completions";

async function submitRequest(params, apiUrl, apiKey) {
  const headers = {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  };

  const res = await fetch(apiUrl, {
    method: "POST",
    headers,
    body: JSON.stringify(params),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.choices[0].text;
}

function createTLDRPromt(text) {
  return `Der Bayerische Verwaltungsgerichtshof hat das Verbot von touristischen Tagesausflügen für Bewohner von Corona-Hotspots über einen Umkreis von 15 Kilometern hinaus in Bayern vorläufig gekippt. Die textliche Festlegung eines solchen Umkreises sei nicht deutlich genug und verstoße aller Voraussicht nach gegen den Grundsatz der Normenklarheit, entschied das Gericht am Dienstag.
Gegen den Beschluss gibt es keine Rechtsmittel. Der Kläger, der SPD-Landtagsabgeordnete Christian Flisek, erklärte, die Entscheidung zeige, dass auch in Krisenzeiten auf den Rechtsstaat Verlass sei. Künftige Bußgeldbescheide hätten nun keine Rechtsgrundlage mehr - bei Verstößen wurden bisher 500 Euro fällig.
###
Schreibe eine kurze Zusammenfassung:

Menschen in Bayern dürfen ab sofort wieder Ausflüge machen. Ein Gericht hat es erlaubt. Besonders sichere Masken, die FFP2-Masken heißen, sind aber weiter Pflicht.
###
Eigentlich wollten sie diese Woche Salat, Blumenkohl und Kraut einpflanzen, doch stattdessen müssen die Gärtner in Gundelfingen umdisponieren. Denn das Aprilwetter mit Minusgraden und Schneeschauern macht den schwäbischen Gartenbauern einen Strich durch die Rechnung.
In der schwäbischen Gartenstadt wurde die Gemüsesaison schon vor Ostern eingeläutet: Die ersten Setzlinge sind bereits in die Felder gepflanzt - jetzt müssen sie mit einem Flies vor Kälte geschützt werden
"Sind die kleinen Pflänzchen mal angewachsen, halten sie aber schon was aus", erklärt Verena Seifried von der Gemüsegärtnerei Seifried. Frostige Temperaturen könne es schließlich noch bis Mitte Mai geben. Bereits erntereif ist das Gemüse im Gewächshaus: Roter Rettich, Salat und Radieschen können seit Ostern geerntet werden, denn hier haben die Gundelfinger etwas nachgeholfen – und geheizt.
Auch für die Obstbauern der Region bedeuten die Minusgrade aktuell mehr Arbeit. Obstbauer Ulrich Zott aus dem Landkreis Augsburg kontrolliert gerade täglich die Blüten an den Obstbäumen. An den Aprikosenbäumen lassen sich erste Schäden abschätzen: 30 Prozent sind bereits kaputtgegangen.
###
Schreibe eine kurze Zusammenfassung:

Das Wetter war sehr kalt. Deshalb haben die Bauern in Schwaben Probleme. Ihre jungen Pflanzen von Obst und Gemüse gehen kaputt.
###
${text}
###
Schreibe eine kurze Zusammenfassung:
`;
}

function createHashTagPrompt(text) {
  return `Schreibe verschiedene Hashtags für Twitter über folgenden Artikel:
""""""
${text}
""""""
Dies sind fünf kurze Hashtags für Twitter zu diesem Artikel:
""""""
  `;
}

function createKeywordPrompt(text) {
  return `Schreibe das wichtigste zusammenfassende Wort in folgendem Artikel für einen Titel:
""""""
${text}
""""""
Die passendsden Wörter sind:
""""""
`;
}

export async function submitRequestTLDR(text, apiKey) {
  var params = {
    prompt: createTLDRPromt(text),
    max_tokens: 500,
    temperature: 0.3,
    frequency_penalty: 0.2,
    best_of: 1,
    stop: "###",
  };
  return submitRequest(params, DAVINCI_INSTRUCT_API_URL, apiKey);
}

export async function submitRequestHashTag(text, apiKey) {
  text = text.replace(/\n/g, "");
  var params = {
    prompt: createHashTagPrompt(text),
    max_tokens: 132,
    temperature: 0.18,
    top_p: 1,
    frequency_penalty: 0.13,
    presence_penalty: 0,
    best_of: 1,
    stop: ['""""""'],
  };
  return submitRequest(params, DAVINCI_INSTRUCT_API_URL, apiKey).trim();
}

export async function submitRequestKeyWord(text, apiKey) {
  text = text.replace(/\n/g, "");
  var params = {
    prompt: createKeywordPrompt(text),
    max_tokens: 25,
    temperature: 0,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    best_of: 1,
    stop: ['""""""'],
  };
  return submitRequest(params, DAVINCI_INSTRUCT_API_URL, apiKey);
}
