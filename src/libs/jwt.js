const jwt = require('jsonwebtoken');
require('dotenv').config()
const JWT_SECRET = process.env.JWT_SECRET

const createJwtToken = (data) => {
  const token = jwt.sign(data, JWT_SECRET);
  return token
}
const decodeJwtToken = (token) => {
  const decoded = jwt.verify(token, JWT_SECRET);
  return decoded
}

module.exports = {
  createJwtToken, decodeJwtToken
}