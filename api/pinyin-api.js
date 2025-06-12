const pinyin = require('pinyin');

module.exports.handler = (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }
  let body = '';
  req.on('data', chunk => { body += chunk; });
  req.on('end', () => {
    try {
      const data = JSON.parse(body);
      const { text } = data;
      if (!text) {
        res.status(400).json({ error: 'Missing text' });
        return;
      }
      const result = pinyin(text, { style: pinyin.STYLE_TONE2 }).flat().join(' ');
      res.status(200).json({ pinyin: result });
    } catch (e) {
      res.status(400).json({ error: 'Invalid JSON' });
    }
  });
};
