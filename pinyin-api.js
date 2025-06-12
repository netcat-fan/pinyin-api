const express = require('express');
const serverless = require('serverless-http');
const pinyin = require('pinyin');
const app = express();
app.use(express.json());

app.post('/', (req, res) => {
  const { text } = req.body || {};
  if (!text) {
    res.status(400).json({ error: 'Missing text' });
    return;
  }
  const result = pinyin(text, { style: pinyin.STYLE_TONE2 }).flat().join(' ');
  res.status(200).json({ pinyin: result });
});

module.exports.handler = serverless(app);
