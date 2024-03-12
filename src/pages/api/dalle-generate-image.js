import OpenAI from "openai";
const openai = new OpenAI();
export default async function (req, res) {
  const {prompt} = JSON.parse(req.body)
  const image = await openai.images.generate({
    model: "dall-e-3",
    prompt,
    size: "1792x1024"
  });
  res.json(image.data);
}
