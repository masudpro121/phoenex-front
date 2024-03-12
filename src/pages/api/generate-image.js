// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const axios = require("axios");
export default async function handler(req, res) {
  const { prompt } = JSON.parse(req.body);
  try {
    const response = await axios.post(
      "https://cl.imagineapi.dev/items/images/",
      {
        prompt : prompt || "Generate a random image",
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.IMAGINE_API}`,
          "Content-Type": "application/json",
        },
      }
    );
    res.send(response.data);
  } catch (err) {
    console.log(err, "err");
    res.send(err);
  }

  // res.status(200).json({ name: 'John Doe' })
}
