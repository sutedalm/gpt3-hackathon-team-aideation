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
  
  
      res.status(200).json({
        title
      });
    } else {
      res.status(400).send("bad request");
    }
  };
  