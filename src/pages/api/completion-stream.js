import SSE from "express-sse";
import { OpenAI } from "langchain/llms/openai";

const sse = new SSE();
export default async function handler(req, res) {
  if(!res.flush){
    res.flush = ()=>{}
  }
 
  if (req.method == "POST") {
    const { input, eventName } = JSON.parse(req.body);
    console.log(eventName, 'evt');
    const chat = new OpenAI({
      model: 'gpt-3.5-turbo',
      OPENAI_API_KEY: process.env.OPENAI_API,
      streaming: true,
      maxTokens: 2000,
      callbacks: [
        {
          handleLLMNewToken(token) {
            sse.send(token, eventName);
          },
        },
      ],
    });
    chat.call(input).then(() => {
      console.log('end back');
      sse.send(null, "end");
      return res.status(200).json({ result: "Streaming complete" });
    });
    
  } else if (req.method == "GET") {
    console.log('initialize =========');
    sse.init(req, res);
    return res.status(200)
  }
}
 