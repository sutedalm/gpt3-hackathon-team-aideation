/*
{
	"data": {
		"searchQuery": "Maskenpflicht wird abgesetzt..."
	}
}
*/

import {
  submitRequestHashTag,
  submitRequestKeyWord,
  submitRequestTLDR,
} from "../../utils/gpt3API";

export default async (req, res) => {
  const query = req.body.data.searchQuery;
  const gpt3SecretKey = process.env.GPT3_SECRET_KEY;

  if (req.method === "POST" && query) {
    const title = await submitRequestTLDR(query, gpt3SecretKey);
    const hashtags = await submitRequestHashTag(query, gpt3SecretKey);
    const keywordsRaw = await submitRequestKeyWord(query, gpt3SecretKey);

    const keyword = keywordsRaw.replace(/\n/g, "").replace(/-/g, " ");

    res.status(200).json({
      title,
      hashtags,
      keyword,
    });
  } else {
    res.status(400).send("bad request");
  }
};
