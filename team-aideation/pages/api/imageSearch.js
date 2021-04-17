import { createApi } from "unsplash-js";

/*
{
	"data": {
		"keyword": "Maskenpflicht"
	}
}
*/

const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
});

export default (req, res) => {
  const query = req.body.data.keyword;
  if (req.method === "POST" && query) {
    unsplash.search
      .getPhotos({
        query: query,
        page: 1,
        perPage: 10,
        orientation: "portrait",
      })
      .then((json) => {
        console.log(json);
        res.status(200).json({ images: json.response.results });
      })
      .catch(() => {
        res.status(500).send("error");
      });
  } else {
    res.status(400).send("bad request");
  }
};
