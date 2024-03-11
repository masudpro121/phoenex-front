import OpenAI from "openai"
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})
export default async function handler(req, res){
  if(req.method=='POST'){
    const {input} = JSON.parse(req.body)
    console.log(input, 'input');
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": input},
      ],
    });
    return res.json(response)
  }
}