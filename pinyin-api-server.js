const express = require('express');
const cors = require('cors');
const pinyin = require('pinyin');
const app = express();

app.use(cors());
app.use(express.json()); // 一定要写在路由前

app.post('/pinyin', (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: 'Missing text' });
  const result = pinyin(text, { style: pinyin.STYLE_TONE2 }).flat().join(' ');
  res.json({ pinyin: result });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Pinyin API listening on port ${port}`));
