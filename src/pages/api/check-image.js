// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const axios = require("axios")
export default async function handler(req, res) {
  const response = await axios.get("https://cl.imagineapi.dev/items/images/"+req.query.id,{
      headers:  {
        Authorization : `Bearer ${process.env.IMAGINE_API}`,
        'Content-Type': 'application/json'
      }
    })

  res.send(response.data)
  // res.status(200).json({ name: 'John Doe' })
}
